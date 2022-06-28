import React from "react";
import styled from "styled-components";
import { ActionIcon } from "@mantine/core";
import { ShoppingCart, ArrowNarrowRight, Heart } from "tabler-icons-react";
const Wrapper = styled.div`
  position: relative;
  height: 500px;
  min-height: 400px;
  min-width: 90%;
  border: 2px solid #e9e7e7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  cursor: pointer;
  .image {
    flex-basis: 80%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: contain;
      max-height: 50%;
      width: 90%;
    }
  }
  .title {
    flex-basis: 10%;
    border-top: 2px solid #e9e7e7;
  }
  .price {
    flex-basis: 10%;
  }
  .actions {
    /* visibility: hidden;
    transition: opacity 400ms ease-in;
    opacity: 0; */
    transition: right 300ms ease;
    position: absolute;
    right: -100%;
    top: 20%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .hot-action {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 4px 12px;
    background: black;
    color: #fff;
    border-radius: 50px;
  }
  .sale-action {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 4px 12px;
    background: red;
    color: #fff;
    border-radius: 50px;
  }
  :hover .actions {
    right: 10px;
    /* opacity: 1; */

    /* visibility: visible; */
  }
`;

const CardProduct = () => {
  return (
    <Wrapper>
      <div className="image">
        <img src="/cat.png"></img>
      </div>
      <div className="title">Title</div>
      <div className="price">Price</div>
      <div className="actions">
        <ActionIcon color="dark" radius="xl" variant="filled" size={"xl"}>
          <ArrowNarrowRight />
        </ActionIcon>
        <ActionIcon color="dark" radius="xl" variant="filled" size={"xl"}>
          <Heart />
        </ActionIcon>
        <ActionIcon color="dark" radius="xl" variant="filled" size={"xl"}>
          <ShoppingCart />
        </ActionIcon>
      </div>
      <div className="hot-action">Hot</div>
      <div className="sale-action">-10%</div>
    </Wrapper>
  );
};

export default CardProduct;
CardProduct;
