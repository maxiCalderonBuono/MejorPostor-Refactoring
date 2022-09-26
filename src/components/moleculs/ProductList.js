import React from "react";
import CardProduct from "./CardProduct";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "../../pages/pujas.css";

// import required modules
import { Grid, Pagination } from "swiper";

// Función para mapear el componente Card con todas las popiedades que se le pasen. EN PROCESO.
const ProductList = ({ products }) => {
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {products.length > 0 ? (
          products.map((product, index) => (
            <SwiperSlide key={index}>
              <CardProduct
                name={product.name}
                image={product.image}
                description={product.description}
                initialPrice={product.initialPrice}
                user={product.user}
                createdAt={product.createdAt}
                _id={product._id}
                duration={product.duration}
                highestBid={product.highestBid}
                bidUser={product.bidUser}
                deleted={product.deleted}
              />
            </SwiperSlide>
          ))
        ) : (
          <p>Cargando Productos...</p>
        )}
      </Swiper>
    </>
  );
};
export default ProductList;
