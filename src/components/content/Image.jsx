import "../app.css";

const Image = (props) => {
    try {
        const image = require(`/src/assets/images/${props.imageName}`);

        if (!image) {
            return null;
        }
        return <img className="object-cover w-full h-full"  src={image} alt={props.imageAlt} />;
    } catch (error) {
        console.log(`${props.imageName} not found`);
        return null;
    }
};

export default Image;
