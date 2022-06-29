import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import { productInterface } from "../utils/interfaces/product/productInterface";
import CardProduct from "./card/product";

const Wrapper = styled.div``;
const CarouselProducts = (props: { products: productInterface[] }) => {
  const { products } = props;

  return (
    <Wrapper>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        spaceBetween={50}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product) => {
          //   return <h1>{product.name}</h1>;
          return (
            <SwiperSlide>
              <CardProduct product={product}></CardProduct>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default CarouselProducts;
