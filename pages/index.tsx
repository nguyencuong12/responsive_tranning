import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid, Collapse, Burger } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { useViewportSize } from "@mantine/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

import CarouselProducts from "../components/carouselProducts";

import CardProduct from "../components/card/product";

import { HomeRender } from "../data/home/render/home";
import { productInterface } from "../utils/interfaces/product/productInterface";
import { CategoryData } from "../data/category/category";
import { ProductAPI } from "../axios/product";

interface ticketItemProps {
    accentColor?: string;
    imageUrl?: string;
}
interface topBrandsProps {
    background?: string;
}

const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;

    /* margin-top: 400px; */
    /* background: #f2f2f2; */
    /* min-height: 100vh; */
    /* margin: 80% auto; */
    /* width: 90%;
  margin: 0 auto; */
    /* height: 200vh; */
`;

const Banner = styled(Grid)`
    padding: 10px;
    height: auto;
`;

const Category = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    border: 2px solid #e9e7e7;
    border-radius: 5px;
    .category-title {
        padding: 10px;
        margin: 4px 0;

        display: flex;
        justify-content: space-between;
        align-items: center;
        .title-content {
        }
        .collapse-title {
        }
    }
    .category-item {
        padding: 12px;
        border-bottom: 2px solid #e9e7e7;
        display: flex;
        align-items: center;

        :first-child {
            border-top: 2px solid #e9e7e7;
        }
        :last-child {
            border-bottom: transparent;
        }
        a:hover {
            color: red;
        }

        .category-item-content {
            display: flex;
            align-items: center;
            width: 100%;
            cursor: pointer;
            padding: 0 20px;
            transition: 200ms ease color;
            font-size: 16px;
            font-weight: 600;
            div {
                margin-left: 20px;
            }
            :hover {
                color: red;
            }
        }
        /* a {
      width: 100%;
      display: block;
    } */
    }
`;
const Ticket = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-between;
`;
const TicketItem = styled.div<ticketItemProps>`
    position: relative;
    background: #000;
    min-height: 220px;
    width: 100%;
    border-radius: 10px;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    border: 1px solid black;
    :last-child {
        margin-top: 10px;
    }

    .ticket-accent {
        position: absolute;
        top: 50%;
        left: 5%;
        /* transform: translate(-50%, -50%); */
        background-color: ${(props) => (props.accentColor ? props.accentColor : "orange")};
        padding: 4px 10px;
        border-radius: 20px;
        overflow: hidden;
    }
    .ticket-description {
        position: absolute;
        top: 65%;
        left: 5%;
        /* transform: translate(-50%, -50%); */
        padding: 2px 10px;
        border-radius: 20px;
        /* font-size: 25px;
    color: white; */
        color: #fff;
        overflow: hidden;
    }
`;

const Gallery = styled.div`
    height: 100%;
    min-height: 600px;
    border-radius: 10px;
    @media only screen and (max-width: 600px) {
        min-height: 320px;
    }
`;
const TopBrands = styled.div`
    .topBrand-title {
        font-weight: 600;
        padding: 20px;
        text-align: center;
        font-size: 28px;
    }
`;
const TopBrandItem = styled.div<topBrandsProps>`
    height: 220px;
    width: 100%;
    border: 2px solid #e9e7e7;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.background ? props.background : "transparent")};
`;

const BestSale = styled.div`
    padding: 20px 0;
    .title {
        font-size: 28px;
        font-weight: 600;
        text-align: center;
        padding: 20px 0;
    }
`;
const HotProducts = styled.div`
    padding: 20px 0;
    .title {
        font-weight: 600;
        font-size: 28px;
        text-align: center;
        padding: 20px 0;
    }
`;

const SaleOffBanner = styled.div`
    padding: 50px 0;

    position: relative;
`;
interface saleofProps {
    image?: string;
    colorText?: string;
}
const SaleOffBannerItem = styled.div<saleofProps>`
    border-radius: 5px;
    background-image: url(${(props) => props.image});
    height: 280px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* justify-content: flex-start; */
    /* align-items: center; */
    padding-left: 100px;
    overflow: hidden;
    color: ${(props) => props.colorText};
    .title {
        font-size: 16px;
        font-weight: 600;
    }
    .content {
        font-size: 24px;
        font-weight: 600;
    }
`;

const Blog = styled.div`
    padding: 20px 0;
    position: relative;
    .title {
        font-size: 28px;
        font-weight: 600;
        text-align: center;
        padding: 20px 0;
    }
`;
interface blogProps {
    image?: string;
    color?: string;
}
const BlogItem = styled.div<blogProps>`
    padding: 10px;
    border-radius: 10px;
    min-height: 200px;
    background: #898989;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: ${(props) => (props.image ? `url(${props.image})` : null)};
    /* border: 2px solid #686868; */
    color: ${(props) => (props.color ? props.color : "#fff")};
    font-size: 18px;
    font-weight: 600;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
    img {
        overflow: hidden;
    }
`;
const Policy = styled.div`
    padding: 20px 0;
    position: relative;
    .title {
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        padding: 20px 0;
        margin-bottom: 20px;
        text-align: center;
    }
    .content {
        text-align: center;
    }
`;
interface PolicyItemProps {
    image?: string;
    background?: string;
}
const PolicyItem = styled.div<PolicyItemProps>`
    min-height: 250px;
    max-height: 250px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    .title-policy {
        padding: 20px 0;
        font-size: 24px;
        font-weight: 600;
    }
    .subtitle-policy {
        color: #868686;
        text-align: center;
    }
    /* img {
    object-fit: cover;
    height: 60px;
    width: 60px;
  } */
`;

const Home = () => {
    const [opened, setOpened] = useState(true);
    const { width } = useViewportSize();
    const [products, setProducts] = useState<productInterface[]>();
    const [hotProducts, setHotProducts] = useState<productInterface[]>();
    const [featureProducts, setFeatureProducts] = useState<productInterface[]>();
    const [bestSaleProducts, setBestSaleProducts] = useState<productInterface[]>();

    useEffect(() => {
        Promise.all([fetchFeatureProducts(), fetchBestSaleProducts()]);
    }, []);
    const fetchProductFromPage = async () => {
        let response = await ProductAPI.getProduct();
        console.log("repsonse ", response);
    };
    const fetchFeatureProducts = async () => {
        let response = await ProductAPI.getFeatureProducts();
        setFeatureProducts(response.data.products);
    };
    const fetchHotProducts = async () => {
        let response = await ProductAPI.getHotProducts();
        console.log("HOT", response);
        setHotProducts(response.data.products);
    };
    const fetchBestSaleProducts = async () => {
        let response = await ProductAPI.getBestSaleProducts();
        console.log("response", response);
        setBestSaleProducts(response.data.products);
    };
    useEffect(() => {
        if (width <= 768) {
            setOpened(false);
        } else {
            setOpened(true);
        }
    }, [width]);

    const renderCategoryItems = (image: string, title: string) => {
        return (
            <div className="category-item-content">
                <Image src={image} height={35} width={35} alt="category"></Image>
                <div>{title}</div>
            </div>
        );
    };

    function PolicyRender() {
        return (
            <Policy>
                <div className="title">Các Chính Sách Của Chúng Tôi</div>
                <div className="content">
                    <HomeRender.policyItemRender />
                </div>
            </Policy>
        );
    }
    function TopBrandRender() {
        return (
            <TopBrands>
                <div className="topBrand-title">TOP BRANDS</div>
                <HomeRender.popularBrand></HomeRender.popularBrand>
            </TopBrands>
        );
    }
    function BestSaleRender() {
        return (
            <BestSale>
                <div className="title">Các Sản Phẩm Bán Chạy</div>
                <div className="content">
                    {/* <HomeRender.popularBrand></HomeRender.popularBrand> */}
                    <CarouselProducts products={bestSaleProducts!}></CarouselProducts>
                </div>
            </BestSale>
        );
    }
    function SaleOffBannerRender() {
        return (
            <SaleOffBanner>
                <Grid>
                    <Grid.Col md={6}>
                        <SaleOffBannerItem image="/gas-anhkiet/sale-off.jpg" colorText={"#000"}>
                            {/* <div className="title">Chương Trình Giảm Giá Trong Tuần </div>
              <div className="content">-20%</div> */}
                        </SaleOffBannerItem>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <SaleOffBannerItem image="/gas-anhkiet/sale-off1.jpg">
                            {/* TOYS, TREATS & LEASHES
              <div className="content">Now At Wilone</div> */}
                        </SaleOffBannerItem>
                    </Grid.Col>
                </Grid>
            </SaleOffBanner>
        );
    }
    function BlogRender() {
        return (
            <Blog>
                <div className="title">Blogs</div>
                <div className="content">
                    <HomeRender.blogItemRender></HomeRender.blogItemRender>
                </div>
            </Blog>
        );
    }

    function HotProductsRender() {
        return (
            <HotProducts>
                <div className="title">Các Sản Phẩm Nổi Bật</div>
                <div className="content">
                    <CarouselProducts products={featureProducts!}></CarouselProducts>
                </div>
            </HotProducts>
        );
    }

    const myLoader = ({ src, widthLoader, quality }: any) => {
        let result = "/gas-anhkiet/banner/banner-1.svg";
        if (width <= 600) {
            result = "/gas-anhkiet/banner/banner-1-mobile.svg";
        }

        return result;
    };
    function BannerRender() {
        return (
            <Banner>
                {/* <Grid.Col className="banner-ctx-left" md={3} sm={12} xs={12}>
          <Category>
            <div className="category-title">
              <div className="title-content">Category</div>
              <div className="collapse-title">
                <Burger
                  opened={opened}
                  size={'sm'}
                  onClick={e => {
                    setOpened(!opened);
                  }}
                />
              </div>
            </div>
            <Collapse in={opened}>
              {CategoryData.map(instance => {
                return (
                  <div className="category-item" key={instance.id}>
                    <Link href={instance.href}>
                      <div className="category-item-content">
                        <Image
                          src={instance.image}
                          alt="image"
                          height={32}
                          width={32}
                        ></Image>
                        <div>{instance.title}</div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            
            </Collapse>
          </Category>
        </Grid.Col> */}
                <Grid.Col md={12}>
                    <Gallery>
                        <Swiper
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectFade, Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                        >
                            <SwiperSlide>
                                <Image
                                    loader={myLoader}
                                    src="/gas-anhkiet/banner/banner-1.svg"
                                    layout="fill"
                                    alt="image"
                                    objectFit="fill"
                                ></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src="/slider-3.png"
                                    layout="fill"
                                    alt="image"
                                    objectFit="cover"
                                ></Image>
                            </SwiperSlide>
                        </Swiper>
                    </Gallery>
                </Grid.Col>
            </Banner>
        );
    }

    return (
        <Wrapper>
            <BannerRender></BannerRender>
            <PolicyRender></PolicyRender>
            <HotProductsRender></HotProductsRender>
            <BestSaleRender></BestSaleRender>

            {/* <SaleOffBannerRender></SaleOffBannerRender> */}
            {/* <TopBrandRender></TopBrandRender> */}
            {/* <BlogRender></BlogRender> */}
        </Wrapper>
    );
};

export default Home;
