import "./../app.css";
import ProductCard from "./ProductCard";



const ProductList = ({products}) => {

    return (
        <>
            {products.map(product => <ProductCard key={product.id} id={product.id} imageName={product.image} imageAlt={`imagen de ${product.name}`} productName={product.name} productDescription={product.description} productPrice={product.price} />)}
        </>
    );
}

export default ProductList;
