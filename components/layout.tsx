import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import { FooterData } from '../data/footer/footerData';
import { Grid } from '@mantine/core';
import Image from 'next/image';
import { Location, Map, Phone } from 'tabler-icons-react';
import Link from 'next/link';
const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;
interface propsType {
  children: ReactNode;
}
const Body = styled.div`
  position: relative;
  min-height: 50vh;
  padding-top: 100px;
  width: 90%;
  margin: 0 auto;
`;
const Footer = styled.div`
  margin-top: 50px;
  position: relative;
  min-height: 440px;
  bottom: 0;
  width: 100%;
  background-color: red;
  background-image: url('/footer.webp');
  background-repeat: no-repeat;
  background-size: cover;
  color: #868686;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding-top: 210px;
  /* justify-content: center;
  align-items: center; */
`;

const FooterTop = styled.div`
  /* height: 400px; */
  min-height: 300px;
  /* margin: 10px 0px; */
  position: relative;
  padding: 10px 0;
  border-bottom: 1px solid #686868;
`;
const FooterBottom = styled.div`
  /* border: 1px solid red; */
  position: relative;
  bottom: 0;
  right: 0;
  left: 0;

  /* border: 2px solid black;
  position: absolute;
  bottom: 0;
  width: 100%; */
`;
const FooterBottomContent = styled.div`
  padding: 10px 20px;
  width: 80%;
  margin: 0 auto;
  /* display: flex;
  justify-content: space-between; */
  font-size: 12px;
`;

const FooterTopContent = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
`;
const FooterTopItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .footer-items {
    padding: 8px 0px;
    font-size: 14px;
    font-weight: 600;
  }
  .footer-items.link {
    cursor: pointer;
    transition: color 200ms ease;
    :hover {
      color: red;
    }
  }

  .location,
  .phone {
    font-size: 14px;
    padding: 10px 0px;
    color: #fff !important;
    display: flex;
    width: 100%;
    div {
      margin-left: 10px;
    }
  }

  .social-media {
    padding: 10px 0px;
    display: flex;
    align-items: center;
    /* justify-content: space-evenly; */
    width: 100%;
    img {
      /* :first-child {
        padding: 0 !important;
      } */
      padding: 0 5px !important;
    }
  }
`;

const Layout = (props: propsType) => {
  const { children } = props;

  return (
    <LayoutWrapper>
      <Navbar></Navbar>
      <Body>{children}</Body>
      <Footer>
        <FooterTop>
          <FooterTopContent>
            <Grid justify="space-between">
              <Grid.Col md={4}>
                <FooterTopItems>
                  <Image
                    alt="image"
                    src={FooterData.introduce.logo}
                    height={100}
                    width={120}
                    objectFit={'contain'}
                  ></Image>
                  <div className="footer-items">
                    {FooterData.introduce.question}
                  </div>
                  <div className="location">
                    <Map></Map>
                    <div>{FooterData.introduce.location}</div>
                  </div>
                  <div className="phone">
                    <Phone></Phone>
                    <div>{FooterData.introduce.phone}</div>
                  </div>
                  <div className="social-media">
                    {FooterData.introduce.socialMedia.map(element => {
                      return (
                        <div key={element.id}>
                          <Image
                            alt="image"
                            src={element.image}
                            height={35}
                            width={35}
                          ></Image>
                        </div>
                      );
                    })}
                  </div>
                </FooterTopItems>
              </Grid.Col>
              <Grid.Col md={2}>
                <FooterTopItems>
                  <h3 style={{ color: '#fff' }}>Chính Sách</h3>
                  {FooterData.policy.map(instance => {
                    return (
                      <Link href="/" key={instance.id}>
                        <span className="footer-items link">
                          {instance.title}
                        </span>
                      </Link>
                    );
                  })}
                </FooterTopItems>
              </Grid.Col>
              <Grid.Col md={2}>
                <FooterTopItems>
                  <h3 style={{ color: '#fff' }}>Sản Phẩm</h3>
                  {FooterData.products.map(instance => {
                    return (
                      <Link href="/" key={instance.id}>
                        <span className="footer-items link">
                          {instance.title}
                        </span>
                      </Link>
                    );
                  })}
                </FooterTopItems>
              </Grid.Col>
              <Grid.Col md={2}>
                <FooterTopItems>
                  <h3 style={{ color: '#fff' }}>Về Chúng Tôi</h3>
                  {FooterData.aboutUs.map(instance => {
                    return (
                      <Link href="/" key={instance.id}>
                        <span className="footer-items link">
                          {instance.title}
                        </span>
                      </Link>
                    );
                  })}
                </FooterTopItems>
              </Grid.Col>
            </Grid>
          </FooterTopContent>
        </FooterTop>
        <FooterBottom>
          <FooterBottomContent>
            <div>© 2022 Cửa Hàng Gas Anh Kiệt</div>
            <div>
              <Image
                alt="image"
                src="/payment.png"
                width={350}
                height={40}
                objectFit={'contain'}
              ></Image>
            </div>
          </FooterBottomContent>
        </FooterBottom>
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout;
