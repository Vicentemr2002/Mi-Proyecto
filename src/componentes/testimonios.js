"use client"

import Image from "next/image"
import style from "./testimonios.module.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"


let clients = [
    {
        text: 'Muy feliz de haberlos encontrado! Tengo 3 perritos y el servicio fue de primera.Baño y corte no podría ser mejor,además de la atención excepcional.',
        author_image: '/image/author1.png',
        author: 'Renata Furtner',
        company: "Google"
    },
    {
        text: 'Maravillosa atención, muy atentos y detallistas. Mí perrita se quedó hermosa 🤩😍❤️',
        author_image: '/image/author2.png',
        author: 'Adriza Rodrigues Moraesr',
        company: "Google"
    },
    {
        text: 'Mejor atención! Son unos genios y mis perritos aman bañarse con ellos. Gracias x todo',
        author_image: "/image/author3.png",
        author: 'Helen Furtner',

        company: "Google"
    },
    {
        text: 'Los felicitoooo muy buen servicio!',
        author_image: '/image/author4.png',
        author: 'Sthefania Vitriago',

        company: "Google"
    },
    {
        text: 'Buen servicio y muy amables recomendasisimo',
        author_image: "/image/author5.png",
        author: 'Jose Vitriago',
        company: "Google"
    },
    {
        text: 'Mejor atención! Son unos genios y mis perritos aman bañarse con ellos. Gracias x todo',
        author_image: "/image/author3.png",
        author: 'Helen Furtner',
        company: "Google"
    },
]


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000, 
    autoplaySpeed: 1500,
    cssEase: "linear",
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
const testimonios = () => {
    return (
        <>

            <h2 className={style.testimoniosTitles}>Clientes</h2>
            <div>
                <Slider {...settings}>
                    {
                        clients.map((clients, index) => {
                            return (

                                <div key={index} className={style.testimonios}>
                                    <h3> {clients.text} </h3>
                                    <div className={style.author}>
                                        <Image src={clients.author_image} alt="Clients" width={50} height={50} />
                                        <p>
                                            {clients.author} <br />
                                            {clients.company} 
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

        </>
    );
};

export default testimonios