import React, { useEffect, useState } from "react";
import { GasAnhKietAPI } from "../../axios/gasanhkiet";
import ProductByCategory from "../../components/productbycategory";
import { productInterface } from "../../utils/interfaces/product/productInterface";

const GasAnhKietPage = () => {
    const [products, setProducts] = useState<productInterface[]>();
    useEffect(() => {
        console.log("GAS ANH KIET API");
        fetchProductsFromResponse();
    }, []);

    const fetchProductsFromResponse = async () => {
        let response = await GasAnhKietAPI.fetchGasAnhKiet();
        setProducts(response.data.products);
    };
    return (
        <ProductByCategory
            category="Các Sản Phẩm Gas Anh Kiệt"
            products={products!}
        ></ProductByCategory>
    );
};

export default GasAnhKietPage;
