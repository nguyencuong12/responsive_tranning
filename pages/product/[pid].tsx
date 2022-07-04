import React, { useState } from "react";
import styled from "styled-components";
import { ActionIcon, Grid, Button, Modal } from "@mantine/core";
import NumberComponent from "../../components/numberComponent";
import { ArrowsMaximize } from "tabler-icons-react";
import PreviewSwiper from "../../components/swiper/preview";
import { previewInterface } from "../../utils/interfaces/carousel/previewImage";
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
  const [open, setOpen] = useState(false);
  // let cuong: previewInterface = [images:"123"];

  const previewImages: previewInterface = {
    images: ["https://swiperjs.com/demos/images/nature-3.jpg", "https://swiperjs.com/demos/images/nature-4.jpg"],
  };

  return (
    <Wrapper>
      <CustomModal
        opened={open}
        size="calc(100vw - 87px)"
        centered
        onClose={() => {
          setOpen(false);
        }}
      >
        <ContainerModal>
          <PreviewSwiper images={previewImages.images}></PreviewSwiper>
        </ContainerModal>
      </CustomModal>

      <Grid>
        <Grid.Col md={6}>
          <ProductItem>
            <PreviewSwiper images={previewImages.images}></PreviewSwiper>
          </ProductItem>
        </Grid.Col>
        <Grid.Col md={6}>
          <ProductItem>
            <div className="title">CUONG</div>
            <div className="price">
              <span>$40.00 – $45.00</span>
              <span className="tag">-11%</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </div>

            <div className="color">
              <span className="title-color">Color</span>
              <div className="content">
                <ActionIcon radius="xl" variant="filled" color={"red"}></ActionIcon>
                <ActionIcon radius="xl" variant="filled" color={"red"}></ActionIcon>
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
