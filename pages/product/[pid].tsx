import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    ActionIcon,
    Grid,
    Button,
    Modal,
    CheckboxGroup,
    Checkbox,
    ColorSwatch,
    Group,
    useMantineTheme,
} from "@mantine/core";
import NumberComponent from "../../components/numberComponent";
import { ArrowsMaximize } from "tabler-icons-react";
import PreviewSwiper from "../../components/swiper/preview";
import { previewInterface } from "../../utils/interfaces/carousel/previewImage";
import { useRouter } from "next/router";
import { productInterface } from "../../utils/interfaces/product/productInterface";
import { ProductAPI } from "../../axios/product";
import { Check } from "tabler-icons-react";
import { cartItemsInterface } from "../../utils/interfaces/cart/cartItems";
import { CartStorage } from "../../utils/cartStorage/cartStorage";
import formatEvents from "../../utils/formatPrice/formatPrice";
import Head from "next/head";
import SeoComponent from "../../components/seo/seoComponent";
const Wrapper = styled.div`
    /* border: 2px solid red; */
    padding-top: 80px;
    height: 100%;
    position: relative;
`;
const ProductItem = styled.div`
    position: relative;
    white-space: pre-line;
    .title {
        font-size: 38px;
        font-weight: 600;
    }
    .price {
        font-size: 20px;
        font-weight: 600;
        display: flex;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px solid #cccccc;
        .tag {
            margin-left: 20px;
            border: 2px solid red;
            color: red;
            padding: 2px 10px;
        }
    }

    .description {
        padding: 20px 0;
        font-size: 14px;
        color: #868686;
    }
    .color {
        padding: 20px 0;
        font-size: 14px;
        color: #000;
        font-weight: 600;
        .content {
            padding: 10px 0;
            display: flex;

            button {
                margin-right: 20px;
            }
        }
    }
    .actions {
        padding: 10px 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        min-width: 250px;
    }
`;
const ProductImagePreviewTop = styled.div`
    position: relative;
    border: 2px solid #686868;
    margin: 10px 0;
    border-radius: 5px;
    min-height: 500px;
    background-image: url("/cat.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    .action-fullscreen {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;
const ProductImagePreviewBottom = styled.div``;
const ProductImagePreviewBottomItem = styled.div`
    border: 2px solid #686868;
    min-height: 140px;
    border-radius: 5px;
`;

const CustomModal = styled(Modal)`
    /* min-height: 100vh;
  width: 100vw !important; */
`;
const ContainerModal = styled.div`
    min-height: 600px;
`;

const ProductPage = () => {
    const [product, setProduct] = useState<productInterface>();
    const [colorsChecked, setColorsChecked] = useState<any[]>();
    const [amountAddingCart, setAmountAddingCart] = useState<number>(0);
    const router = useRouter();
    const { pid } = router.query;
    useEffect(() => {
        if (pid) {
            getProductFromID(pid.toString());
        }
    }, [pid]);
    useEffect(() => {
        if (product?.colors) {
            let arr: any = [];
            product.colors.forEach((value) => {
                arr.push({
                    value: value,
                    checked: false,
                });
            });
            setColorsChecked(arr);

            // console.log("TEMP", tempArr);
        }
        if (product) {
            console.log("TEST ", product?.description);
        }
    }, [product]);
    useEffect(() => {
        if (colorsChecked) {
            console.log("CHANGE", colorsChecked);
        }
    }, [colorsChecked]);
    const getProductFromID = async (id: string) => {
        let response = await ProductAPI.getProductFromID(id);
        console.log("response ID", response);
        setProduct(response.data.product);
    };
    const previewImages: previewInterface = {
        images: ["https://swiperjs.com/demos/images/nature-3.jpg"],
    };

    return (
        <>
            {/* <Head>
                <title>{product && product.title}</title>
                <link rel="icon" href={product && product?.image[0].path.toString()} />
                <meta property="og:title" content={product && product.title} />
                <meta name="robots" content="noindex" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <meta property="og:image"></meta>
                <meta property="og:description"></meta>
                <meta property="og:url"></meta>
            </Head> */}
            <SeoComponent />
            <Wrapper>
                <Grid>
                    <Grid.Col md={6}>
                        <ProductItem>
                            <PreviewSwiper images={product?.image!}></PreviewSwiper>
                        </ProductItem>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <ProductItem>
                            <div className="title">{product?.title}</div>
                            <div className="price">
                                <span>{formatEvents.priceVND(parseFloat(product?.price!))}</span>
                                {/* <span className="tag">-11%</span> */}
                            </div>
                            <div className="description">{product?.description}</div>
                            {product?.color && (
                                <div className="color">
                                    <span className="title-color">Color</span>
                                    <div className="content">
                                        <Group position="center" spacing="xs">
                                            {product &&
                                                product.colors?.map((element, index) => {
                                                    return (
                                                        <ColorSwatch
                                                            key={element}
                                                            component="button"
                                                            color={element}
                                                            onClick={() => {
                                                                colorsChecked?.forEach(
                                                                    (instance) => {
                                                                        if (
                                                                            instance.value ===
                                                                            element
                                                                        ) {
                                                                            instance.checked =
                                                                                !instance.checked;
                                                                        } else {
                                                                            instance.checked =
                                                                                false;
                                                                        }
                                                                    }
                                                                );

                                                                setColorsChecked([
                                                                    ...colorsChecked!,
                                                                ]);
                                                            }}
                                                            style={{
                                                                color: "#fff",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            {colorsChecked &&
                                                                colorsChecked![index].checked && (
                                                                    <Check />
                                                                )}
                                                        </ColorSwatch>
                                                    );
                                                })}

                                            {/* <ColorSwatch component="a" href="https://mantine.dev" color={theme.colors.blue[6]} /> */}
                                        </Group>
                                    </div>
                                </div>
                            )}

                            <div className="status" style={{ fontWeight: 700 }}>
                                Trạng Thái : Còn Hàng
                            </div>
                            <div className="actions">
                                {/* <NumberComponent
                valueNumber={amountAddingCart}
                callback={(val: number) => {
                  setAmountAddingCart(val);
                }}
              ></NumberComponent> */}
                                <Button
                                    color="teal"
                                    radius="xl"
                                    size="md"
                                    onClick={() => {
                                        router.push("/contact");
                                        // if (product) {
                                        //   let color: string;
                                        //   colorsChecked?.forEach((instance) => {
                                        //     if (instance.checked == true) {
                                        //       color = instance.value;
                                        //     }
                                        //   });
                                        //   let objectAddItemsToCart: cartItemsInterface = {
                                        //     ...product,
                                        //     color: color!,
                                        //     amount: amountAddingCart,
                                        //   };
                                        //   CartStorage.addItemToCart(objectAddItemsToCart);
                                        // }
                                    }}
                                >
                                    Liên Hệ
                                </Button>

                                {/* <Button
                color="teal"
                radius="xl"
                size="sm"
                onClick={() => {
                  let cart = CartStorage.getCart();
                  console.log('ACB', cart);
                }}
              >
                Buy Now
              </Button> */}

                                {/* <Button
                color="teal"
                radius="xl"
                size="sm"
                onClick={() => {
                  CartStorage.removeCart();
                }}
              >
                Remove
              </Button> */}
                            </div>
                        </ProductItem>
                    </Grid.Col>
                </Grid>
            </Wrapper>
        </>
    );
};

export default ProductPage;
