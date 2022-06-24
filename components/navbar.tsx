import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { ActionIcon, Burger } from "@mantine/core";
import { ShoppingCart } from "tabler-icons-react";
import { useState } from "react";
import { useViewportSize } from "@mantine/hooks";

interface menuProps {
  open: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  outline: 1px black solid;
  width: 100%;
`;

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  /* border: 2px solid black; */
  height: 70px;
  z-index: 300;
  color: black;
  background: transparent;
  border: 2px solid white;
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
  width: 95%;
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

  @media only screen and (max-width: 700px) {
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
  padding: 5px 25px;
  a {
    text-decoration: none;
    display: block;
    /* color: ${(props) => props.theme.secondary}; */
    color: #000;
    transition: color 200ms;
  }
  @media only screen and (max-width: 700px) {
    padding: 10px;
    margin: 0;
    width: 100%;
    * {
      color: black !important;
      border-bottom: 1px solid #ccc;
    }
  }
`;

const NavbarBrand = styled.div``;
const NavbarActions = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavbarActionsItem = styled.li``;

const MobileMenu = styled.ul<menuProps>`
  position: relative;
  transition: max-height 300ms ease-in;
  max-height: ${(props) => (props.open ? "100vh" : "0px")};
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  /* padding: 20px 0; */
  display: flex;
  flex-direction: column;
  list-style: none;
  background: #fff;
  overflow: hidden;
`;
const MobileMenuItem = styled.li`
  margin: 0;
  padding: 0;
  padding: 10px;
`;

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const _onHandleBurger = () => {
    setOpened(!opened);
  };

  const { width } = useViewportSize();
  useEffect(() => {
    if (width >= 700) {
      setOpened(false);
    }
  }, [width]);

  return (
    <Wrapper>
      <NavbarWrapper>
        <NavbarContent>
          <BurgerBtn>
            <Burger opened={opened} onClick={_onHandleBurger} size={"sm"} />
          </BurgerBtn>
          <NavbarBrand>
            <Link href="/">
              <a>Brand</a>
            </Link>
          </NavbarBrand>
          <NavbarMenu open={opened}>
            <NavbarMenuItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/">
                <a>Shop</a>
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>

          <NavbarActions>
            <NavbarActionsItem></NavbarActionsItem>
            <NavbarActionsItem>
              <ActionIcon variant="transparent" color={"cyan"}>
                <ShoppingCart />
              </ActionIcon>
            </NavbarActionsItem>
          </NavbarActions>
        </NavbarContent>
        <MobileMenu open={opened}>
          <MobileMenuItem>Home</MobileMenuItem>
          <MobileMenuItem>About Us</MobileMenuItem>
          <MobileMenuItem>Home</MobileMenuItem>
          <MobileMenuItem>About Us</MobileMenuItem>
        </MobileMenu>
      </NavbarWrapper>
    </Wrapper>
  );
};

export default Navbar;
