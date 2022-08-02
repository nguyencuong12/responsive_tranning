import React, { useEffect, forwardRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import {
    ActionIcon,
    Avatar,
    Burger,
    Button,
    Group,
    Text,
    Modal,
    SelectItemProps,
    TextInput,
    useMantineTheme,
    Autocomplete,
    Menu,
    MenuItem,
} from "@mantine/core";
import {
    ArrowDownCircle,
    At,
    BuildingStore,
    Search,
    SearchOff,
    ShoppingCart,
    ChevronDown,
    CaretDown,
} from "tabler-icons-react";
import { useState } from "react";
import { useViewportSize } from "@mantine/hooks";
import { NavMenu } from "../data/navbar/menu";
import Image from "next/image";
import { useRouter } from "next/router";
import { SearchAPI } from "../axios/search/search";
interface menuProps {
    open: boolean;
}

const Wrapper = styled.div`
    position: fixed;
    height: 70px;
    width: 100%;
    z-index: 500;
    background: #2a292e;
    color: #fff;
`;

const NavbarWrapper = styled.div`
    // position: sticky;
    // top: 0;
    // left: 0;
    // right: 0;
    /* border: 2px solid black; */
    height: 70px;

    color: #fff;
    background: #2a292e;

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
    font-size: 14px;
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
        border-bottom: 1px solid #ccc;
    }
`;

const NavbarBrand = styled.div`
    /* border: 2px solid black; */

    margin-left: 10px;
`;
const NavbarActions = styled.div`
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
    const theme = useMantineTheme();
    const [searchOpened, setSearchOpened] = useState(false);
    const [textSearch, setTextSearch] = useState<AutoCompleteProps[]>([]);
    const _onHandleBurger = () => {
        setOpened(!opened);
    };

    const { width } = useViewportSize();
    const handleRouteChange = () => {
        setOpened(false);
    };
    useEffect(() => {
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    useEffect(() => {
        if (width >= 700) {
            setOpened(false);
        }
    }, [width]);

    function RenderNavbarMenu(): JSX.Element {
        return (
            <>
                {NavMenu.map((element) =>
                    element.type == "Dropdown" ? (
                        <NavbarMenuItem key={element.title}>
                            <Menu
                                style={{
                                    display: "block",
                                }}
                                zIndex={2000}
                                control={
                                    <Group>
                                        <Link href={element.href}>
                                            <a>{element.title}</a>
                                        </Link>
                                        <CaretDown></CaretDown>
                                    </Group>
                                }
                                trigger="hover"
                                delay={500}
                            >
                                {element.products.map((product) => {
                                    return (
                                        <Menu.Item
                                            key={product.title}
                                            rightSection={<BuildingStore />}
                                            onClick={() => {
                                                router.push(`/${product.href}`);
                                            }}
                                        >
                                            {product.title}
                                        </Menu.Item>
                                    );
                                })}
                            </Menu>
                        </NavbarMenuItem>
                    ) : (
                        <NavbarMenuItem key={element.title}>
                            <Link href={element.href}>
                                <a>{element.title}</a>
                            </Link>
                        </NavbarMenuItem>
                    )
                )}
            </>
        );
    }
    function RenderNavbarMenuMobile(): JSX.Element {
        return (
            <>
                {NavMenu.map((element) =>
                    element.type == "Dropdown" ? (
                        <NavbarMenuItem key={element.title}>
                            <Menu trigger="hover" delay={500}>
                                <Menu.Item
                                    onClick={() => console.log("Hello")}
                                    rightSection={
                                        <Text size="sm" color="gray">
                                            ⌘K
                                        </Text>
                                    }
                                >
                                    Gas Anh Kiệt
                                </Menu.Item>
                            </Menu>
                        </NavbarMenuItem>
                    ) : (
                        <NavbarMenuItem key={element.title}>
                            <Link href={element.href}>
                                <a>{element.title}</a>
                            </Link>
                        </NavbarMenuItem>
                    )
                )}
            </>
        );
    }

    // const onHandleSearch =  async ()=>{
    //   // router.push("/search");
    //   var response = await SearchAPI.excuteSearch(textSearch);
    //   console.log("response search",response.data.searchResults)
    //   // router.push("/search")
    //   setSearchOpened(false)
    //   // console.log("CALL TEXT",textSearch)
    // }

    interface AutoCompleteProps extends SelectItemProps {
        value: string;
        image?: string;
    }
    const AutoCompleteItem = forwardRef<HTMLDivElement, AutoCompleteProps>(
        ({ value, image, ...others }: AutoCompleteProps, ref) => (
            <div ref={ref} {...others}>
                <Group noWrap>
                    <Avatar src={image} />
                    <div>
                        <Text>{value}</Text>
                    </div>
                </Group>
            </div>
        )
    );
    AutoCompleteItem.displayName = "AutoCompleteItem";

    return (
        <Wrapper>
            <Modal
                overlayColor={
                    theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
                size="80%"
                // centered={true}
                style={{ marginTop: "60px" }}
                opened={searchOpened}
                onClose={() => {
                    setSearchOpened(false);
                }}
            >
                <Autocomplete
                    label="Tìm Kiếm"
                    itemComponent={AutoCompleteItem}
                    placeholder="Nhập từ tên sản phẩm tìm kiếm"
                    data={textSearch}
                    onItemSubmit={(item) => {
                        if (router.pathname === "/product/[pid]") {
                            // window.location.href = item._id;
                            router.push("/product/" + item._id);
                        } else {
                            router.push("product/" + item._id);
                        }

                        setSearchOpened(false);
                    }}
                    onChange={async (value) => {
                        let result = await SearchAPI.excuteSearch(value);
                        var arr: any[] = [];
                        result.data.searchResults.map((instance: any) => {
                            arr.push({
                                ...instance,
                                value: instance.title,
                            });
                            // setSearchResult([{ ...instance, value: instance.title }]);
                        });
                        setTextSearch(arr);
                    }}
                />
            </Modal>

            <NavbarContent>
                <BurgerBtn>
                    <Burger
                        opened={opened}
                        onClick={_onHandleBurger}
                        size={"sm"}
                        style={{
                            background: "white",
                        }}
                    />
                </BurgerBtn>
                <NavbarBrand>
                    <Link href="/">
                        <a>
                            <Image
                                src="/logo-gas.png"
                                height={70}
                                width={100}
                                alt="brand image"
                                layout="fixed"
                                objectFit="contain"
                            ></Image>
                        </a>
                    </Link>
                </NavbarBrand>
                <NavbarMenu open={opened}>
                    <RenderNavbarMenu />
                </NavbarMenu>
                <NavbarActions>
                    {/* <NavbarActionsItem></NavbarActionsItem> */}

                    <ActionIcon
                        variant="transparent"
                        // color={'cyan'}
                        style={{
                            color: "white",
                        }}
                        onClick={() => {
                            setSearchOpened(!searchOpened);
                            // router.push(
                            //     "/cart"
                            // );
                        }}
                    >
                        <Search />
                        {/* <ShoppingCart /> */}
                    </ActionIcon>
                </NavbarActions>
            </NavbarContent>
            <MobileMenu open={opened}>
                <RenderNavbarMenu></RenderNavbarMenu>
                {/* <RenderNavbarMenuMobile></RenderNavbarMenuMobile> */}
            </MobileMenu>
        </Wrapper>
    );
};

export default Navbar;
