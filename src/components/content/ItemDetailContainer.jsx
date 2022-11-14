import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataAccess } from "../../assets/functions/DataAccess";
import ProductDetail from "./ProductDetail";
import "../app.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        DataAccess("./../data/Products.json").then(products => {
            const selectedProduct = products.find(productArr => productArr.id === parseInt(id));
            setProduct(selectedProduct);
        });
    }, [id]);

    return (
        <section>
            <ProductDetail id={product.id} imageName={product.image} imageAlt={`imagen de ${product.name}`} productName={product.name} productDescription={product.description} productPrice={product.price} />
        </section>
    );
}

export default ItemDetailContainer;
