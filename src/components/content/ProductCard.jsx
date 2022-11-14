import "../app.css";
import Image from "./Image";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
	return (
		<article className="col-span-2 grid h-96 w-full grid-cols-1 items-center border-solid border-2 rounded-md p-4">
			<section className="row-span-1 grid grid-cols-1 gap-4">
				<Link to={`/product/${props.id}`}>
					<div className="w-[60%] mx-auto">
						<Image imageName={props.imageName} imageAlt={props.imageAlt} />
					</div>
				</Link>
				<div>
					<h4 className="text-start text-xxl"><Link to={`/product/${props.id}`}>{props.productName}</Link></h4>
					<p className="text-start text-base text-black">{props.productDescription}</p>
					<p className="text-xl text-black">{`$${props.productPrice} mxn`}</p>
				</div>
			</section>
		</article>
	);
};

export default ProductCard;
