import "../app.css";

const ItemListContainer = ({ greeting }) => {
    return (
        <section className="text-center text-fasgreen text-3xl">
            <h2>{greeting}</h2>
        </section>
    );
}

export default ItemListContainer;
