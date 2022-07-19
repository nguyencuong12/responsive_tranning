import React from "react";
import styled from "styled-components";
import { Grid } from "@mantine/core";
const Wrapper = styled.div`
    .contact-item {
        min-height: 400px;
    }
`;

const ContactPage = () => {
    return (
        <Wrapper>
            <Grid>
                <Grid.Col md={6} className="contact-item">
                    <h1>Liên hệ với Chúng Tôi</h1>
                    Bạn đang gặp khó khăn cần được hỗ trợ hay cần đóng góp ý kiến cho bộ phận chăm
                    sóc khách hàng? Hãy liên hệ với Gas Anh Kiệt qua bộ phận chăm sóc khách hàng.
                    Chúng tôi sẽ giải quyết vấn đề của bạn nhanh nhất có thể!
                </Grid.Col>
                <Grid.Col md={6} className="contact-item">
                    <h1>Địa chỉ</h1>
                    <h2>Tại TP.HCM </h2>
                    Trung tâm CSKH: Tầng M, Tòa nhà Petroland, Số 12 Tân Trào, Phường Tân Phú, Quận
                    7, Thành phố Hồ Chí Minh Văn phòng: Lầu 6, Toà nhà Phú Mỹ Hưng, số 8 Hoàng Văn
                    Thái, khu phố 1, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh Tel: +84 28
                    54147667 Fax: +84 28 54147557 Tại Hà Nội Tầng 6, tòa nhà Mercury, số 444 Hoàng
                    Hoa Thám, Phường Thụy Khuê, Quận Tây Hồ, Thành phố Hà Nội Tel: +84 24 37739898
                    Tại Đà Nẵng Tầng 5, 320 Đường 2/9, P. Hòa Cường Bắc, Q. Hải Châu Tel:
                    02363582582
                </Grid.Col>
            </Grid>
        </Wrapper>
    );
};

export default ContactPage;
