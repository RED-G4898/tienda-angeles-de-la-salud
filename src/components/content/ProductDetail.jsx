import React from "react";
import Image from "./Image";

const ProductDetail = (props) => {
	return (
		<article className="my-8 grid grid-cols-2">
			<section className="col-span-1 col-start-1 mx-auto w-[60%]">
				<Image imageName={props.imageName} imageAlt={props.imageAlt} />
			</section>
			<section className="col-span-1 col-start-2 flex flex-col gap-4">
				<h2 className="text-2xl text-fasgreen font-medium">{props.productName}</h2>
				<p>{props.productDescription}</p>
				<p>{`$${props.productPrice} mxn`}</p>
			</section>
		</article>
	);
};

export default ProductDetail;
