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
  position: relative;
  min-height: 100px;
  bottom: 0;
  width: 100%;
  background-color: #f6f6f6;
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
