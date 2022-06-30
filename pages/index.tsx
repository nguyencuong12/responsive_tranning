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
import { productInterface } from "../utils/interfaces/product/productInterface";

interface ticketItemProps {
  accentColor?: string;
}
interface topBrandsProps {
  background?: string;
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-top: 70px;
  /* margin-top: 400px; */
  /* background: #f2f2f2; */
  /* min-height: 100vh; */
  /* margin: 80% auto; */
  width: 80%;
  margin: 0 auto;
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
`;
const TicketItem = styled.div<ticketItemProps>`
  position: relative;
  margin: 5px 0;
  background: #000;
  min-height: 220px;
  width: 100%;
  border-radius: 10px;
  background-image: url("./banner-1.png");
  background-size: cover;
  background-position: center;

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
const SaleOffBannerItem = styled.div`
  border-radius: 5px;
  background-image: url("/saleBanner.webp");
  height: 280px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 100px;
  overflow: hidden;
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
  border: 2px solid #686868;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: ${(props) => (props.image ? `url(${props.image})` : null)};
  /* border: 2px solid #686868; */
  color: ${(props) => (props.color ? props.color : "#000")};
  font-size: 18px;
  font-weight: 600;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
`;
const Policy = styled.div`
  padding: 20px 0;
  position: relative;
  .title {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    padding: 20px 0;
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
  img {
    object-fit: cover;
    height: 60px;
    width: 60px;
  }
`;

const Home = () => {
  const [opened, setOpened] = useState(true);
  const { width } = useViewportSize();
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
        <Image src={image} height={35} width={35}></Image>
        <div>{title}</div>
      </div>
    );
  };

  function PolicyRender() {
    return (
      <Policy>
        <div className="title">POLICY</div>
        <div className="content">
          <Grid>
            <Grid.Col md={3}>
              <PolicyItem>
                <img src="/delivery.png"></img>
                <div className="title-policy">Free Same-Day Delivery</div>
                <div className="subtitle-policy">Order by 2pm local time to get free delivery on orders $35+ today.</div>
              </PolicyItem>
            </Grid.Col>
            <Grid.Col md={3}>
              <PolicyItem>
                <img src="/exchange.png"></img>
                <div className="title-policy">30 Day Return</div>
                <div className="subtitle-policy">35% off your first order plus 5% off all future orders.</div>
              </PolicyItem>
            </Grid.Col>
            <Grid.Col md={3}>
              <PolicyItem>
                <img src="/shield.png"></img>
                <div className="title-policy">Security payment</div>
                <div className="subtitle-policy">25% off your online order of $50+. Available at most locations.</div>
              </PolicyItem>
            </Grid.Col>
            <Grid.Col md={3}>
              <PolicyItem>
                <img src="/support.png"></img>
                <div className="title-policy">24/7 Support</div>
                <div className="subtitle-policy">Shop online to get orders over $35 shipped fast and free.</div>
              </PolicyItem>
            </Grid.Col>
          </Grid>
        </div>
      </Policy>
    );
  }
  function TopBrandRender() {
    return (
      <TopBrands>
        <div className="topBrand-title">TOP BRANDS</div>
        <Grid>
          <Grid.Col md={3} sm={6}>
            <TopBrandItem background={"#f7ee25"}>
              <Image src="/me0.png" height={100} width={100}></Image>
            </TopBrandItem>
          </Grid.Col>
          <Grid.Col md={3} sm={6}>
            <TopBrandItem>
              <Image src="/corgi.png" height={100} width={100}></Image>
            </TopBrandItem>
          </Grid.Col>
          <Grid.Col md={3} sm={6}>
            <TopBrandItem>
              <Image src="/corgi.png" height={100} width={100}></Image>
            </TopBrandItem>
          </Grid.Col>
          <Grid.Col md={3} sm={6}>
            <TopBrandItem>
              <Image src="/corgi.png" height={100} width={100}></Image>
            </TopBrandItem>
          </Grid.Col>
        </Grid>
      </TopBrands>
    );
  }
  function BestSaleRender() {
    return (
      <BestSale>
        <div className="title">Today's Best Sale</div>
        <div className="content">
          <CarouselProducts products={productsObject}></CarouselProducts>
        </div>
      </BestSale>
    );
  }
  function SaleOffBannerRender() {
    return (
      <SaleOffBanner>
        <Grid>
          <Grid.Col md={6}>
            <SaleOffBannerItem>SALE OFF ITEM</SaleOffBannerItem>
          </Grid.Col>
          <Grid.Col md={6}>
            <SaleOffBannerItem>SALE OFF ITEM</SaleOffBannerItem>
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
          <Grid>
            <Grid.Col md={3} sm={6}>
              <BlogItem image={"/food-cat.png"} color={"blue"}>
                Test
              </BlogItem>
            </Grid.Col>
            <Grid.Col md={3} sm={6}>
              <BlogItem image={"/care.png"}>Knowledge Take Care</BlogItem>
            </Grid.Col>
            <Grid.Col md={3} sm={6}>
              <BlogItem image={"/health.png"}>About Heal</BlogItem>
            </Grid.Col>
            <Grid.Col md={3} sm={6}>
              <BlogItem image={"/disease.png"}>Common disease</BlogItem>
            </Grid.Col>
          </Grid>
        </div>
      </Blog>
    );
  }

  function HotProductsRender() {
    return (
      <HotProducts>
        <div className="title">Hot Products</div>
        <div className="content">
          <CarouselProducts products={productsObject}></CarouselProducts>
        </div>
      </HotProducts>
    );
  }
  function BannerRender() {
    return (
      <Banner justify={"center"}>
        <Grid.Col className="banner-ctx-left" md={3} sm={6} xs={12}>
          <Category>
            <div className="category-title">
              <div className="title-content">Category</div>
              <div className="collapse-title">
                <Burger
                  opened={opened}
                  size={"sm"}
                  onClick={(e) => {
                    setOpened(!opened);
                  }}
                />
              </div>
            </div>
            <Collapse in={opened}>
              <div className="category-item">
                <Link href="/">{renderCategoryItems("/cat.png", "Cat")}</Link>
              </div>
              <div className="category-item">
                <Link href="/">
                  <div className="category-item-content">
                    <Image src="/cat-food.png" height={35} width={35}></Image>
                    <div>TEXT</div>
                  </div>
                </Link>
              </div>
            </Collapse>
          </Category>
        </Grid.Col>
        <Grid.Col className="banner-ctx-center" md={6} sm={12} xs={12}>
          <Gallery>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
            </Swiper>
          </Gallery>
        </Grid.Col>
        <Grid.Col className="banner-ctx-right" md={3} sm={6} xs={12}>
          <Ticket>
            <TicketItem>
              <div className="ticket-accent">from $20.0</div>
              <div className="ticket-description">Description</div>
            </TicketItem>
            <TicketItem>
              <div className="ticket-accent">from $20.0</div>
              <div className="ticket-description">Description</div>
            </TicketItem>
          </Ticket>
        </Grid.Col>
      </Banner>
    );
  }

  const productsObject: productInterface[] = [
    {
      name: "CUONG",
      image: "/cat.png",
      price: "100đ",
    },
    {
      name: "PHY",
      image: "/cat.png",
    },
    {
      name: "CUONG",
      image: "/cat.png",
    },
    {
      name: "PHY",
      image: "/cat.png",
    },
    {
      name: "CUONG",
      image: "/cat.png",
    },
    {
      name: "PHY",
      image: "/cat.png",
    },
    {
      name: "CUONG",
      image: "/cat.png",
    },
    {
      name: "PHY",
      image: "/cat.png",
    },
  ];

  return (
    <Wrapper>
      <BannerRender></BannerRender>
      <TopBrandRender></TopBrandRender>
      <HotProductsRender></HotProductsRender>
      <BestSaleRender></BestSaleRender>
      <SaleOffBannerRender></SaleOffBannerRender>
      <PolicyRender></PolicyRender>
      <BlogRender></BlogRender>
    </Wrapper>
  );
};

export default Home;
