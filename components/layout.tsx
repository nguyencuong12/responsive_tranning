import React, { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "./navbar";
const LayoutWrapper = styled.div`
  position: relative;
`;

interface propsType {
  children: ReactNode;
}
const Body = styled.div`
  position: relative;
`;
const Footer = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  bottom: 0;
  background-color: black;
  color: #fff;
`;

const Layout = (props: propsType) => {
  const { children } = props;

  return (
    <LayoutWrapper>
      <Navbar></Navbar>
      <Body>{children}</Body>
      {/* <Footer>Footer</Footer> */}
    </LayoutWrapper>
  );
};

export default Layout;
