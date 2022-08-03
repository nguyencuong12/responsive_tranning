import Head from "next/head";
import React from "react";

interface metaProps {
    title: string;
    description: string;
    iconRel: string;
    ogTitle?: string;
    ogImage?: string;
    ogDescription?: string;
    ogUrl?: string;
}
const SeoComponent = (props: metaProps) => {
    const { title, description, iconRel, ogTitle, ogImage, ogDescription, ogUrl } = props;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
                {/* <meta name="robots" content="noindex" /> */}
                <meta content="index,follow" name="robots"></meta>
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                {ogTitle && <meta property="og:title" content={ogTitle} />}
                {ogImage && <meta property="og:image" content={ogImage}></meta>}
                {ogDescription && <meta property="og:description" content={ogDescription}></meta>}
                {ogUrl && <meta property="og:url" content={ogUrl}></meta>}
                <link rel="icon" href={iconRel}></link>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
        </>
    );
};

export default SeoComponent;
