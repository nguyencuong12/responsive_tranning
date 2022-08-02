import React from "react";
import styled from "styled-components";
import { Grid } from "@mantine/core";
import Head from "next/head";
const Wrapper = styled.div`
    .contact-item {
        min-height: 400px;
    }
`;

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Liên Hệ - Liên hệ đặt hàng tại trang web gasanhkiet.com</title>
            </Head>
            <Wrapper>
                <Grid>
                    <Grid.Col md={6} className="contact-item">
                        <h1>Liên hệ với Chúng Tôi</h1>
                        Bạn đang gặp khó khăn cần được hỗ trợ hay cần đóng góp ý kiến cho bộ phận
                        chăm sóc khách hàng? Hãy liên hệ với Gas Anh Kiệt qua bộ phận chăm sóc khách
                        hàng. Chúng tôi sẽ giải quyết vấn đề của bạn nhanh nhất có thể!
                    </Grid.Col>
                    <Grid.Col md={6} className="contact-item">
                        <h1>Địa chỉ</h1>
                        <h2>Tại TP.HCM </h2>
                        126/1D, Phan Văn Hớn, Xã Xuân Thới Thượng, H. Hóc Môn, Tp. Hồ Chí Minh
                        02363582582
                    </Grid.Col>
                </Grid>
            </Wrapper>
        </>
    );
};

export default ContactPage;
