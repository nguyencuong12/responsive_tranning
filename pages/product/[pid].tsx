import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ActionIcon, Grid, Button, Modal, CheckboxGroup, Checkbox, ColorSwatch, Group, useMantineTheme } from "@mantine/core";
import NumberComponent from "../../components/numberComponent";
import { ArrowsMaximize } from "tabler-icons-react";
import PreviewSwiper from "../../components/swiper/preview";
import { previewInterface } from "../../utils/interfaces/carousel/previewImage";
import { useRouter } from "next/router";
import { productInterface } from "../../utils/interfaces/product/productInterface";
import { ProductAPI } from "../../axios/product";
import { Check } from "tabler-icons-react";
const Wrapper = styled.div`
  /* border: 2px solid red; */
  height: 100%;
  position: relative;
  width: 80%;
  margin: 0 auto;
`;
const ProductItem = styled.div`
  position: relative;
  padding: 10px;
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
    padding: 10px 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 380px;
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
  }, [product]);
  const getProductFromID = async (id: string) => {
    let response = await ProductAPI.getProductFromID(id);
    setProduct(response.data.product);
  };
  const previewImages: previewInterface = {
    images: ["https://swiperjs.com/demos/images/nature-3.jpg"],
  };

  return (
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
              <span>{product?.price}</span>
              <span className="tag">-11%</span>
            </div>
            <div className="description">{product?.description}</div>
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
                            console.log("COLOR", element);
                            colorsChecked?.forEach((instance) => {
                              if (instance.value === element) {
                                instance.checked = !instance.checked;
                              }
                            });
                          }}
                          style={{ color: "#fff", cursor: "pointer" }}
                        >
                          {colorsChecked![index]?.checked && "sqd"}
                          {/* {colorsChecked![index].checked && <Check />} */}
                          <Check />
                        </ColorSwatch>
                      );
                    })}

                  {/* <ColorSwatch component="a" href="https://mantine.dev" color={theme.colors.blue[6]} /> */}
                </Group>
              </div>
            </div>
            <div className="actions">
              <NumberComponent></NumberComponent>
              <Button color="teal" radius="xl" size="sm">
                Add To Cart
              </Button>
              <Button color="teal" radius="xl" size="sm">
                Buy Now
              </Button>
            </div>
          </ProductItem>
        </Grid.Col>
      </Grid>
    </Wrapper>
  );
};

export default ProductPage;
