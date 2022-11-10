import "./../../components/app.css";
import ProductCard from "./../../components/content/ProductCard";
export const DataAccess = async () => {
    const promise = await fetch('./data/Products.json');
    const products = await promise.json();
    const productCards = products.map(product =>
        <ProductCard imageName={product.image} imageAlt={`${product.name} image`} productName={product.name} productDescription={product.description} productPrice={product.price} keyNumber={product.id} />
    );
    return productCards;
}