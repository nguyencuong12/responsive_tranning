import React from "react";
import styled from "styled-components";
import { ActionIcon } from "@mantine/core";
import { ShoppingCart, ArrowNarrowRight, Heart } from "tabler-icons-react";
import { useRouter } from "next/router";
import { productInterface } from "../../utils/interfaces/product/productInterface";
import Image from "next/image";

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

const CardProductImage = styled.div`
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
`;
const CardProductTitle = styled.div`
  flex-basis: 10%;
  border-top: 2px solid #e9e7e7;
  padding: 20px;
`;
const CardProductPrice = styled.div`
  flex-basis: 10%;
`;
const CardProductActions = styled.div``;

const CardProduct = (props: { product: productInterface }) => {
  const { product } = props;
  const router = useRouter();

  return (
    <Wrapper
      onClick={() => {
        router.push(`/product/${product._id}`);
      }}
    >
      <CardProductImage>
        <Image src={product.image![0]!.toString()} height={300} width={500} alt="image"></Image>

        {/* <img src={product.image}></img> */}
      </CardProductImage>
      <CardProductTitle>{product.name}</CardProductTitle>
      <CardProductPrice>{product.price}</CardProductPrice>
      <div className="actions">
        <ActionIcon
          color="dark"
          radius="xl"
          variant="filled"
          size={"xl"}
          onClick={() => {
            router.push(`/product/${product._id}`);
          }}
        >
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
