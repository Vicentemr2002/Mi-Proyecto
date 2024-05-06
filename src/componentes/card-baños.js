'use client'

import style from './card-baños.module.css'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const turnos = [
    {
        raza: "Raza: Caniche",
        baños_image: "/image/Caniche.png",
        precio: {
            Baño : "Baño: 7.500Ars",
            Corte: "Baño y Corte: 8.900Ars"
        },
        duracion : "Duracion: 2 hs"
    },
    {
        nombre: "Pro Plan || Gato Adulto x Fraccion",
        baños_image: "/image/proplancaturinary.png",
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
            <h2 className={style.CardBañosTittles}>Turnos De Baños</h2>


            <div>
                <Slider {...settings}>
                    {
                        turnos.map((turno, index) => (
                            <div key={index} className={style.cardBaños}>
                                <div className={style.imgBaños}>
                                    <Image src={turno.baños_image} alt='Alimentos' width={400} height={400}/>
                                </div>
                                <div className={style.contenidoTurnos}>
                                    <h1 className={style.raza}>{turno.raza}</h1>
                                    <h3 className={style.precioTurnos}>
                                        {turno.precio.Baño}
                                        {turno.precio.Corte}
                                    </h3>
                                    <div className={style.duracion}>{turno.duracion}</div>
                                    <div className={style.btn}>
                                        <button>Pedir Turno</button>
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
