import Head from "next/head";
import React, { useEffect, useState } from "react";
import { GasAnhKietAPI } from "../../axios/gasanhkiet";
import ProductByCategory from "../../components/productbycategory";
import { productInterface } from "../../utils/interfaces/product/productInterface";

const BepGasPage = () => {
    const [products, setProducts] = useState<productInterface[]>();
    useEffect(() => {
        fetchProductsFromResponse();
    }, []);

    const fetchProductsFromResponse = async () => {
        let response = await GasAnhKietAPI.fetchBepGas();
        setProducts(response.data.products);
    };
    return (
        <>
            <Head>
                <title>Bếp Gas</title>
            </Head>
            <ProductByCategory
                category="Các Sản Phẩm Về Bếp Gas"
                products={products!}
            ></ProductByCategory>
        </>
    );
};

export default BepGasPage;
