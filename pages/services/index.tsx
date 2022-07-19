import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
const Wrapper = styled.div``;
const Content = styled.div`
  max-width: 800px;
`;
const ServicesPage = () => {
  return (
    <Wrapper>
      <Content>
        <Image
          src="/slider-1.jpg"
          width={120}
          height={70}
          layout="responsive"
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
