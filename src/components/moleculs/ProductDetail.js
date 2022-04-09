import React from "react";

const ProductDetail = ({ detail }) => {
    return (
        <>
        <div className="flex flex-col h-screen w-full items-center justify-center">
            <div className="product-detail__image">
                <img className="w-full h-48" src={detail.thumbnail} alt={detail.title} />
            </div>
            <div className="flex flex-col h-full w-full">
                <h2 className="product-detail__title">{detail.title}</h2>
                <p className="product-detail__price">{detail.price}</p>
                <p className="product-detail__description">{detail.description}</p>
            </div>
        </div>
        </>
    );
};

export default ProductDetail;