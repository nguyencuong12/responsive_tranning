import React from "react";
import styled from "styled-components";
import { Grid } from "@mantine/core";
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Top = styled.div``;
const Bottom = styled.div`
    margin-top: 15px;
    min-height: 450px;
    .bottom-item {
        min-height: 450px;
       
    }
`;

const ShopPage = () => {
    return (
        <Wrapper>
            <Top>
                Hệ thống cửa hàng Gas Anh Kiệt (3
                cửa hàng)
            </Top>
            <Bottom>
                <Grid>
                    <Grid.Col
                        md={8}
                        className="bottom-item"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2404039829544!2d106.55830391533446!3d10.869311060443177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a9902ba7621%3A0xce0bc3230c591394!2zTmd1eeG7hW4gVsSDbiBC4bupYSwgWHXDom4gVGjhu5tpIFPGoW4sIEjDs2MgTcO0biwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1658201560852!5m2!1svi!2s"
                            width="100%"
                            height="100%"
                            loading="lazy"
                       
                        ></iframe>
                    </Grid.Col>
                    <Grid.Col
                        md={4}
                        className="bottom-item"
                    >
                       Bibo Mart Bạch Mai
Số 290 Bạch Mai, P. Bạch Mai, Q. Hai Bà Trưng, Hà Nội
                    </Grid.Col>
                </Grid>
            </Bottom>
        </Wrapper>
    );
};

export default ShopPage;
