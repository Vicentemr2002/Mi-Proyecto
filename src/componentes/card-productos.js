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
        precio: "4.200 ARS",
        categoria: {
            marca: "Excellent",
            raza: "Gato",
            tamaño: "Adulto",

        }
    },
    {
        nombre: "Pro Plan || Gato Adulto x Fraccion",
        alimentos_image: "/image/proplancaturinary.png",
        precio: "7.200 ARS",
        categoria: {
            marca: "Pro Plan",
            raza: "Gato",
            tamaño: "Adulto",
        }
    }, {
        nombre: "Royal Canin || Perro Adulto x Fraccion",
        alimentos_image: "/image/alimento-royal-cannin.png",
        precio: "4.200 ARS",
        categoria: {
            marca: "Royal Canin",
            raza: "Perro",
            tamaño: "Adulto",
        }
    },
];


const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
                                        <div className={style.btn}>
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
