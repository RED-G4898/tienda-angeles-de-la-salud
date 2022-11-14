import "../app.css";
import { DataAccess } from "./../../assets/functions/DataAccess";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            DataAccess("./../data/Products.json").then(products => {
                const filteredProducts = products.filter(product => product.category === category);
                const ProductCards = ProductList({products: filteredProducts});
                setProducts(ProductCards);
            });
        } else {
            DataAccess("./data/Products.json").then(productList => {
                const ProductCards = ProductList({products: productList});
                setProducts(ProductCards);
            });
        }
    }, [category]);

    return (
        <section className="text-center text-fasgreen text-3xl grid grid-cols-12 auto-rows-auto my-8">
            <section className="col-start-2 col-span-10 row-start-2 grid grid-cols-8 auto-rows-auto gap-4">
                {products}
            </section>
        </section>
    );
}

export default ItemListContainer;
