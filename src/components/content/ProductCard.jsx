import { Link } from "react-router-dom";
import "../app.css";
import Image from "./Image";

const ProductCard = (props) => {
	return (
		<article className="col-span-2 grid h-96 w-full grid-cols-1 grid-rows-[80%_20%] items-center border-solid border-2 rounded-md" key={props.keyNumber}>
			<section className="row-span-1">
				<div>
					<Image imageName={props.imageName} imageAlt={props.imageAlt} />
				</div>
				<div className="">
					<h4 className="text-start text-xxl">{props.productName}</h4>
					<p className="text-start text-base">{props.productDescription}</p>
					<p className="text-xl">{props.productPrice}</p>
				</div>
			</section>
			<section className="row-span-1 bg-fasgreen text-white rounded-lg text-lg">
				<button>Botón</button>
			</section>
		</article>
	);
};

export default ProductCard;
