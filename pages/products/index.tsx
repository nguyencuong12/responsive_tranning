import React, { useEffect, useState } from "react";
import { GasAnhKietAPI } from "../../axios/gasanhkiet";
import ProductByCategory from "../../components/productbycategory";
import { productInterface } from "../../utils/interfaces/product/productInterface";

const ProductsPage = () => {
    const [products, setProducts] = useState<productInterface[]>();
    useEffect(() => {
        fetchProductsFromResponse();
    }, []);

    const fetchProductsFromResponse = async () => {
        let response = await GasAnhKietAPI.fetchAllProductsInStore();
        setProducts(response.data.products._productList);
    };
    return (
        <ProductByCategory
            category="Tất cả sản phẩm có sẵn tại cửa hàng"
            products={products!}
        ></ProductByCategory>
    );
};

export default ProductsPage;
