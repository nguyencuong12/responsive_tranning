import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { ActionIcon, Burger } from "@mantine/core";
import { ShoppingCart } from "tabler-icons-react";
import { useState } from "react";
import { useViewportSize } from "@mantine/hooks";
import { NavMenu } from "../data/navbar/menu";
import Image from "next/image";
import { useRouter } from "next/router";
interface menuProps {
  open: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  /* border: 2px solid black; */
  height: 70px;
  z-index: 500;
  color: #000;
  background: #f8f1f1;

  /* overflow: hidden; */
  /* overflow: hidden; */
`;
const BurgerBtn = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const NavbarContent = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;
const NavbarMenu = styled.ul<menuProps>`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  transition: left 300ms ease-in;
  @media only screen and (max-width: 800px) {
    position: absolute;
    top: 54px;
    width: 100%;
    padding: 20px;
    left: ${(props) => (props.open ? "0" : "-120%")};
    /* left: -120%; */
    right: 0;
    height: auto;
    /* z-index: 300; */
    overflow: hidden;
    background: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;
const NavbarMenuItem = styled.li`
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 700;
  a {
    text-decoration: none;
    display: block;
    /* color: ${(props) => props.theme.secondary}; */
    transition: color 200ms;
  }
  @media only screen and (max-width: 700px) {
    padding: 10px;
    margin: 0;
    width: 100%;
    * {
      color: white !important;
      border-bottom: 1px solid #ccc;
    }
  }
`;

const NavbarBrand = styled.div`
  /* border: 2px solid black; */

  margin-left: 10px;
`;
const NavbarActions = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavbarActionsItem = styled.li``;
const MobileMenu = styled.ul<menuProps>`
  transition: opacity 300ms;
  opacity: ${(props) => (props.open ? 1 : 0)};
  position: relative;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  max-height: ${(props) => (props.open ? "100vh" : "0px")};
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  background: #2a292e;
  padding: 40px;
  /* border-radius: 5px; */
  overflow: hidden;
`;

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  const _onHandleBurger = () => {
    setOpened(!opened);
  };

  const { width } = useViewportSize();
  useEffect(() => {
    if (width >= 700) {
      setOpened(false);
    }
  }, [width]);

  function RenderNavbarMenu(): JSX.Element {
    return (
      <>
        {NavMenu.map((element) => (
          <NavbarMenuItem key={element.title}>
            <Link href={element.href}>
              <a>{element.title}</a>
            </Link>
          </NavbarMenuItem>
        ))}
      </>
    );
  }
  function RenderNavbarMenuMobile(): JSX.Element {
    return (
      <>
        {NavMenu.map((element) => (
          <NavbarMenuItem key={element.title}>
            <Link href={element.href}>
              <a>{element.title}</a>
            </Link>
          </NavbarMenuItem>
        ))}
      </>
    );
  }
  return (
    <Wrapper>
      <NavbarWrapper>
        <NavbarContent>
          <BurgerBtn>
            <Burger opened={opened} onClick={_onHandleBurger} size={"sm"} />
          </BurgerBtn>
          <NavbarBrand>
            <Link href="/">
              <a>
                <Image src="/logo.png" height={50} width={50} alt="brand image"></Image>
              </a>
            </Link>
          </NavbarBrand>
          <NavbarMenu open={opened}>
            <RenderNavbarMenu />
          </NavbarMenu>

          <NavbarActions>
            <NavbarActionsItem></NavbarActionsItem>
            <NavbarActionsItem>
              <ActionIcon
                variant="transparent"
                color={"cyan"}
                onClick={() => {
                  router.push("/cart");
                }}
              >
                <ShoppingCart />
              </ActionIcon>
            </NavbarActionsItem>
          </NavbarActions>
        </NavbarContent>
        <MobileMenu open={opened}>
          <RenderNavbarMenuMobile></RenderNavbarMenuMobile>
        </MobileMenu>
      </NavbarWrapper>
    </Wrapper>
  );
};

export default Navbar;
