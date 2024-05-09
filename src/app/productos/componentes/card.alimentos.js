'use client'

import Image from 'next/image'
import style from './card.alimento.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


let producto = [

  {
    titulo_Marca: "Excellent",
    nombre: "Excellent || Perro Adulto Raza Pequeña x Fraccion",
    alimentos_image: "/image/excellent perro adulto raza pequeña.png",
    precio: "1000 ARS",
    categoria: {
      marca: "Excellent",
      raza: "Perro",
      tamaño: "Adulto",

    }
  },
  {
    titulo_Marca: "Excellent",
    nombre: "Excellent || Perro Puppy Raza Pequeña x Fraccion",
    alimentos_image: "/image/excellent perro puppy raza pequeña.png",
    precio: "1000 ARS",
    categoria: {
      marca: "Excellent",
      raza: "Perro",
      tamaño: "Puppy",

    }
  },
  {
    titulo_Marca: "Excellent",
    nombre: "Excellent || Perro Adulto Raza Grande x Fraccion",
    alimentos_image: "/image/excellent perro adulto raza grande.png",
    precio: "1000 ARS",
    categoria: {
      marca: "Excellent",
      raza: "Perro",
      tamaño: "Adulto",

    }
  },
  {
    titulo_Marca: "Excellent",
    nombre: "Excellent || Perro Puppy Raza Grande x Fraccion",
    alimentos_image: "/image/excellent perro puppy.png",
    precio: "1000 ARS",
    categoria: {
      marca: "Excellent",
      raza: "Perro",
      tamaño: "puppy",

    }
  },
  {
    titulo_Marca: "Excellent",
    nombre: "Excellent || Gato Adulto x Fraccion",
    alimentos_image: "/image/excellent gato adulto.png",
    precio: "1000 ARS",
    categoria: {
      marca: "Excellent",
      raza: "Gato",
      tamaño: "Adulto",

    }
  },
  {
    titulo_Marca: "Excellent",
    nombre: "Excellent || Gato Kitten x Fraccion",
    alimentos_image: "/image/excellent gato kitten.png",
    precio: "1000 ARS",
    categoria: {
      marca: "Excellent",
      raza: "Gato",
      tamaño: "kitten",

    }
  },
  {
    titulo_Marca: "Excellent",
    nombre: "Excellent || Gato Adulto Senior x Fraccion",
    alimentos_image: "/image/excellent gato senior.png",
    precio: "1000 ARS",
    categoria: {
      marca: "Excellent",
      raza: "Gato",
      tamaño: "Adulto",
      nombre_categoria : "senior"

    }
  },
  {
    titulo_Marca: "Excellent",
    nombre: "Excellent || Gato Adulto Sterilized x Fraccion",
    alimentos_image: "/image/excellent gato sterilazed.png",
    precio: "1000 ARS",
    categoria: {
      marca: "Excellent",
      raza: "Gato",
      tamaño: "Adulto",
      nombre_categoria : "sterilized"

    }
  },
  {
    titulo_Marca: "Excellent",
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
    titulo_Marca: "Excellent",
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


]


const settings = {
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

const cardAlimetos = () => {
  return (
    <>
      <h2 className={style.cardExcellentTittles}> Alimentos Excellent </h2>
      <div>
        <Slider {...settings}>
          {
            producto.map((producto, index) => (
              <div key={index} className={style.cardProducto}>
                <div className={style.imgAlimento}>
                  <Image src={producto.alimentos_image} alt='Alimentos' width={300} height={300} />
                </div>
                <div className={style.contenidoAlimento}>
                  <h3 className={style.alimento}>{producto.nombre}</h3>
                  <h1 className={style.precioAlimento}>{producto.precio}</h1>
                  <div className={style.categoria}>
                    <p className={style.categoriaAlimento}>{producto.categoria.marca}</p>
                    <p className={style.categoriaAlimento}>{producto.categoria.raza}</p>
                    <p className={style.categoriaAlimento}>{producto.categoria.tamaño}</p>
                    <p className={style.categoriaAlimento}>{producto.categoria.nombre_categoria}</p>
                  </div>
                  <div className={style.btn}>
                    <button>Comprar</button>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  )
};

export default cardAlimetos;