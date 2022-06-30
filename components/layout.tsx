import React, { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "./navbar";
const LayoutWrapper = styled.div`
  position: relative;

  min-height: 100vh;
`;

interface propsType {
  children: ReactNode;
}
const Body = styled.div`
  position: relative;
  padding: 20px 0%;
`;
const Footer = styled.div`
  margin-top: 50px;
  position: relative;
  min-height: 440px;
  bottom: 0;
  width: 100%;
  background-color: red;
  background-image: url("/footer.webp");
  background-repeat: no-repeat;
  background-size: cover;
  color: #868686;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = (props: propsType) => {
  const { children } = props;

  return (
    <LayoutWrapper>
      <Navbar></Navbar>
      <Body>{children}</Body>
      <Footer>Footer</Footer>
    </LayoutWrapper>
  );
};

export default Layout;
