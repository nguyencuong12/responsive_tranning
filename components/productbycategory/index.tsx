import React, { ReactNode } from "react";
import { productInterface } from "../../utils/interfaces/product/productInterface";
import styled from "styled-components";
import { Grid } from "@mantine/core";
import CardProduct from "../card/product";

interface propsType {
    products: productInterface[];
    category: string;
}
const Wrapper = styled.div`
    position: relative;
`;

const ProductByCategory = (props: propsType) => {
    const { products, category } = props;
    return (
        <Wrapper>
            <h3>{category} :</h3>
            <Grid>
                {products &&
                    products.map((product) => {
                        return (
                            <Grid.Col sm={6} lg={3} md={6}>
                                <CardProduct product={product}></CardProduct>
                            </Grid.Col>
                        );
                    })}
            </Grid>
        </Wrapper>
    );
};

export default ProductByCategory;
