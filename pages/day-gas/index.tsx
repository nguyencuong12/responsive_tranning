import React, { useEffect, useState } from "react";
import { GasAnhKietAPI } from "../../axios/gasanhkiet";
import ProductByCategory from "../../components/productbycategory";
import { productInterface } from "../../utils/interfaces/product/productInterface";

const DayGasPage = () => {
    const [products, setProducts] = useState<productInterface[]>();
    useEffect(() => {
        fetchProductsFromResponse();
    }, []);

    const fetchProductsFromResponse = async () => {
        let response = await GasAnhKietAPI.fetchDayGas();
        setProducts(response.data.products);
    };
    return (
        <ProductByCategory
            category="Các Sản Phẩm Về Dây Gas"
            products={products!}
        ></ProductByCategory>
    );
};

export default DayGasPage;
