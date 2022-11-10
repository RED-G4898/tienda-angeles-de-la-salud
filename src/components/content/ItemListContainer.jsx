import "../app.css";
import { DataAccess } from "./../../assets/functions/DataAccess";
import { useState, useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
            DataAccess().then(product => setProducts(product));
    }, []);
    return (
        <section className="text-center text-fasgreen text-3xl grid grid-cols-12 auto-rows-auto">
            <h2>{greeting}</h2>
            <section className="col-start-2 col-span-10 row-start-2 grid grid-cols-8 auto-rows-auto gap-4">
                {products}
            </section>
        </section>
    );
}

export default ItemListContainer;
