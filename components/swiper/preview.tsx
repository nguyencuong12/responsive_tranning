import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Magnifier } from "react-image-magnifiers";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { previewInterface } from "../../utils/interfaces/carousel/previewImage";
import classes from "classnames";

export default function PreviewImage(props: previewInterface) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  useEffect(() => {}, [thumbsSwiper]);
  const { images } = props;
  return (
    <>
      <Swiper spaceBetween={10} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">
        {images.map((instance) => {
          return (
            <SwiperSlide key={instance}>
              <img src={instance} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper">
        {images.map((instance) => {
          return (
            <SwiperSlide className="thumb-items" key={instance}>
              <img src={instance} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
