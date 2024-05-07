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
            baño : "Baño: 7.500Ars",
            corte: "Baño y Corte: 8.900Ars"
        },
        duracion : "Duracion: 2 hs"
    },
    {
        raza: "Raza: Schnauzer",
        baños_image: "/image/Shnauzer.png",
        precio: {
            baño : "Baño: 7.900Ars",
            corte: "Baño y Corte:  9.500Ars"
        },
        duracion : "Duracion: 2 hs"
    },    {
        raza: "Raza: Shih Tzu ",
        baños_image: "/image/shih tzu.png",
        precio: {
            baño : "Baño: 7.900Ars",
            corte: "Baño y Corte: 9.500Ars"
        },
        duracion : "Duracion: 2 hs"
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
                                    <Image src={turno.baños_image} alt='Turnos' width={400} height={400}/>
                                </div>
                                <div className={style.contenidoTurnos}>
                                    <h1 className={style.razaTurnos}>{turno.raza}</h1>
                                    <h3 className={style.precioTurnos}>{turno.precio.baño}</h3>
                                    <h3 className={style.precioTurnos}>{turno.precio.corte}</h3>
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
