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
  padding-top: 50px;
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
  padding: 20px 0;
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

      <BestSale>
        <div className="title">Today's Best Sale</div>
        <div className="content">
          <CarouselProducts products={productsObject}></CarouselProducts>
        </div>
      </BestSale>

      <HotProducts>
        <div className="title">Hot Products</div>
        <div className="content">
          <CarouselProducts products={productsObject}></CarouselProducts>
        </div>
      </HotProducts>

      <SaleOffBanner>
        <Grid>
          <Grid.Col md={6}>1</Grid.Col>
          <Grid.Col md={6}>2</Grid.Col>
        </Grid>
      </SaleOffBanner>
    </Wrapper>
  );
};

export default Home;
