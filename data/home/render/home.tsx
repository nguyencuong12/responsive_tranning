import { Grid } from "@mantine/core";
import { HomeData } from "../homeData";
import styled from "styled-components";
import Image from "next/image";
const PolicyItem = styled.div`
    min-height: 250px;
    max-height: 250px;
    border: 1px solid #ccc;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    .title-policy {
        padding: 20px 0;
        font-size: 24px;
        font-weight: 600;
    }
    .subtitle-policy {
        color: #868686;
        text-align: center;
    }
`;

const BlogItem = styled.div`
    padding: 10px;
    border-radius: 10px;
    min-height: 200px;
    background: #898989;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(props) => (props.color ? props.color : "#fff")};
    font-size: 18px;
    font-weight: 600;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
    img {
        overflow: hidden;
    }
`;

interface TopBrandItemProps {
    background?: string;
}
const TopBrandItem = styled.div<TopBrandItemProps>`
    height: 220px;
    width: 100%;
    border: 2px solid #e9e7e7;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.background ? props.background : "transparent")};
`;

export const HomeRender = {
    policyItemRender: () => {
        interface policyProps {
            title: string;
            subTitle: string;
            image: string;
        }
        const _policyItems: policyProps[] = HomeData.policy;
        return (
            <Grid>
                {_policyItems.map((element) => {
                    return (
                        <Grid.Col md={3} key={element.title}>
                            <PolicyItem>
                                <Image
                                    src={element.image}
                                    width={80}
                                    height={70}
                                    objectFit="contain"
                                    alt="image"
                                ></Image>
                                <div className="title-policy">{element.title}</div>
                                <div className="subtitle-policy">{element.subTitle}</div>
                            </PolicyItem>
                        </Grid.Col>
                    );
                })}
            </Grid>
        );
    },
    blogItemRender: () => {
        interface blogProps {
            title: string;
            image: string;
        }
        const _blogItems: blogProps[] = HomeData.blogs;

        return (
            <Grid>
                {_blogItems.map((element) => {
                    return (
                        <Grid.Col md={3} sm={6} key={element.title}>
                            <BlogItem>
                                <Image src={element.image} height={120} width={120}></Image>
                                <p>{element.title}</p>
                            </BlogItem>
                        </Grid.Col>
                    );
                })}
            </Grid>
        );
    },
    popularBrand: () => {
        interface popularBrandProps {
            background?: string;
            image: string;
            id: string;
        }
        const _popularBrandItems: popularBrandProps[] = HomeData.popularBrands;
        return (
            <Grid>
                {_popularBrandItems.map((element) => {
                    return (
                        <Grid.Col md={3} sm={6} key={element.id}>
                            <TopBrandItem background={element.background}>
                                <Image
                                    alt="image"
                                    src={element.image}
                                    height={100}
                                    width={100}
                                ></Image>
                            </TopBrandItem>
                        </Grid.Col>
                    );
                })}
            </Grid>
        );
    },
};
