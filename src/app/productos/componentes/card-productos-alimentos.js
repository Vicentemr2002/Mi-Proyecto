'use client'

import style from "./card-productos-alimentos.module.css"
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

let producto = [
    {
        nombre: "Excellent || Gato Adulto x Fraccion",
        alimentos_image: "/image/alimento-excellent..png",
        precio: "1000 ARS",
        categoria: {
            marca: "Excellent",
            raza: "Gato",
            tamaño: "Adulto",

        }
    },
]


const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 1500,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const CardAlimento = () => {
    return (
        <>
            <h2 className={style.CardProductoTittles}>Los Mejores Productos</h2>
            <div>
                <Slider {...settings}>
                    {
                        producto.map((producto, index) => (
                            <div key={index} className={style.CardAlimento}>

                            </div>
                        ))}
                </Slider>
            </div >

        </>
    );
};

export default CardAlimento;
