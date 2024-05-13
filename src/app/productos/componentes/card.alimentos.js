'use client'

import style from './card.alimento.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


let producto = [

  {
    titulo_Marca: "Excellent",
    nombre: "Excellent || Perro Adulto Raza Pequeña x Fraccion",
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2F.png?alt=media&token=760392e9-31e3-469c-b95b-69e9ff752568g",
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
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Fexcellent%20perro%20puppy%20raza%20pequeña.png?alt=media&token=2912c34a-f3ed-44ad-9fdc-2fa5203b0430",
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
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Fexcellent%20perro%20adulto%20raza%20grande.png?alt=media&token=6d70a42b-f40c-40ee-96ba-834943aed7b9",
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
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Fexcellent%20perro%20puppy.png?alt=media&token=eb5c802f-431c-4e40-984f-5a1f7c5b5baa",
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
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Fexcellent%20gato%20adulto.png?alt=media&token=3354d089-ddf2-4dda-8f0d-52d2d8830b91",
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
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Fexcellent%20gato%20kitten.png?alt=media&token=b78f1eb3-3e96-481f-a0d5-5355d6b95247",
    precio: "1000 ARS",
    categoria: {
      marca: "Excellent",
      raza: "Gato",
      tamaño: "kitten",

    }
  },
  {
    titulo_Marca: "Excellent",
    nombre: "Excellent || Gato Adulto Skin Care x Fraccion",
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Fexcellent%20gato%20skin%20care.png?alt=media&token=cf523568-3c20-4f06-9f4c-8b565ec56116",
    precio: "1000 ARS",
    categoria: {
      marca: "Excellent",
      raza: "Gato",
      tamaño: "Adulto",
      nombre_categoria : "Skin Care"

    }
  },
  {
    titulo_Marca: "Excellent",
    nombre: "Excellent || Gato Adulto Sterilized x Fraccion",
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Fexcellent%20gato%20sterilazed.png?alt=media&token=9f815381-7578-4068-9b44-c6b91d5e8180",
    precio: "1000 ARS",
    categoria: {
      marca: "Excellent",
      raza: "Gato",
      tamaño: "Adulto",
      nombre_categoria : "sterilized"

    }
  },
  {
    nombre: "Pro Plan || Pro-Plan Perro Adulto Raza Pequeña x Fraccion",
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Fpropla%20perro%20adulto%20raza%20pequeña.png?alt=media&token=034fa486-9d52-414e-9e28-5443a0e26ca7",
    precio: "1000 ARS",
    categoria: {
      marca: "Pro Plan",
      raza: "Gato",
      tamaño: "Adulto",
    }
  }, 
  {
    nombre: "Pro Plan || Pro-Plan Perro Puppy Raza Pequeña x Fraccion",
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Fpropla-puppy-raza-pequeña.png?alt=media&token=76066474-3cd5-4254-b9f7-483cdae61d0a",
    precio: "1000 ARS",
    categoria: {
      marca: "Pro Plan",
      raza: "Gato",
      tamaño: "Puppy",
    }
  }, 
  {
    nombre: "Pro Plan || Pro-Plan Perro Adulto Raza Mediana x Fraccion",
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Fproplan-adulto-raza-mediana.png?alt=media&token=eb592283-3bf3-4061-bd94-0e021ce64a01",
    precio: "1000 ARS",
    categoria: {
      marca: "Pro Plan",
      raza: "Gato",
      tamaño: "Adulto",
    }
  }, 
  {
    nombre: "Pro Plan || Pro-Plan Perro Puppy Raza Pequeña x Fraccion",
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Fproplan-puppy-raza-mediana.png?alt=media&token=3f20ca80-7284-48d8-b8c6-e46c7aa2a15b",
    precio: "1000 ARS",
    categoria: {
      marca: "Pro Plan",
      raza: "Gato",
      tamaño: "Adulto",
    }
  }, 
  {
    nombre: "Royal Canin || Perro Adulto x Fraccion",
    alimentos_image: "https://firebasestorage.googleapis.com/v0/b/login-kotitas.appspot.com/o/public%2Falimento-royal-cannin.png?alt=media&token=993b0d6a-78fa-4e95-a8af-525800318ed7",
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

const CardAlimetos = () => {
  return (
    <>
      <h2 className={style.cardExcellentTittles}> Alimentos Excellent </h2>
      <div>
        <Slider {...settings}>
          {
            producto.map((producto, index) => (
              <div key={index} className={style.cardProducto}>
                <div className={style.imgAlimento}>
                  <img src={producto.alimentos_image} alt='Alimentos' width={300} height={300} />
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

export default CardAlimetos;