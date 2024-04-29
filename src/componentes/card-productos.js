'use client'

import style from './card-producto.module.css'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const alimentos = [
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
    {
        nombre: "Pro Plan || Gato Adulto x Fraccion",
        alimentos_image: "/image/proplancaturinary.png",
        precio: "1000 ARS",
        categoria: {
            marca: "Pro Plan",
            raza: "Gato",
            tamaño: "Adulto",
        }
    }, {
        nombre: "Royal Canin || Perro Adulto x Fraccion",
        alimentos_image: "/image/alimento-royal-cannin.png",
        precio: "1000 ARS",
        categoria: {
            marca: "Royal Canin",
            raza: "Perro",
            tamaño: "Adulto",
        }
    },
];


    const settings = {
        dots: true,
        infinite: true,
        autoPlay: true,
        autoPlaySpeed: 1500,
        speed: 500,
        cssEase: "linear",
        slidesToShow: 1,
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


const CardProducto = () => {
    return (    
        <>
            <h2 className={style.CardProductoTittles}>Los Mejores Productos</h2>


            <div>
                <Slider {...settings}>
                    {
                        alimentos.map((alimento, index) => (
                            <div key={index} className={style.cardProducto}>
                                <div className={style.imgAlimento}>
                                    <Image src={alimento.alimentos_image} alt='Alimentos' width={300} height={300} />
                                </div>
                                <div className={style.contenidoAlimento}>
                                    <h3 className={style.alimento}>{alimento.nombre}</h3>
                                    <h1 className={style.precioAlimento}>{alimento.precio}</h1>
                                    <div className={style.categoria}>
                                        <p className={style.categoriaAlimento}>{alimento.categoria.marca}</p>
                                        <p className={style.categoriaAlimento}>{alimento.categoria.raza}</p>
                                        <p className={style.categoriaAlimento}>{alimento.categoria.tamaño}</p>
                                    </div>
                                    <div className={style.buttonAlimento}>
                                        <button>Comprar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div >

        </>
    );
};

export default CardProducto;
