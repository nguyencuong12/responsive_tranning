import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useViewportSize } from "@mantine/hooks";
const Wrapper = styled.div``;
const Content = styled.div`
    max-width: 800px;
`;
const ServicesPage = () => {
    const { width } = useViewportSize();
    return (
        <Wrapper>
            <Content>
                <Image
                    src="/gas-anhkiet/banner/banner-1.svg"
                    width={100}
                    height={70}
                    layout="responsive"
                    loader={() => {
                        let result = "/gas-anhkiet/banner/banner-1.svg";
                        if (width <= 600) {
                            result = "/gas-anhkiet/banner/banner-1-mobile.svg";
                        }

                        return result;
                    }}
                ></Image>
            </Content>

            <h3>- Dịch vụ giao gas nhanh </h3>
            <h3>- Dịch vụ sửa chữa bếp gas tại nhà</h3>
            <h3>- Dịch vụ tư vấn</h3>
            <h3>- Dịch vụ đổi trả</h3>
        </Wrapper>
    );
};

export default ServicesPage;
