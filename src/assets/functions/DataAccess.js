import "./../../components/app.css";
export const DataAccess = async (url) => {
    const promise = await fetch(url);
    const products = await promise.json();
    return products;
}