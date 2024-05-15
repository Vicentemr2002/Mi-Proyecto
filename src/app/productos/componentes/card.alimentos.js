'use client'

import style from './card.alimento.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import app from '../../../../firebase'
import { getFirestore, query, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react'



const settings = {
  arrows: false,
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

  const [producto, setProducto] = useState(null);

  useEffect(function () {
    const db = getFirestore(app);
    const q = query(collection(db, "productos"))
    const unsub = onSnapshot(q, (snap) => {
      const productosLimpios = snap.docs.map(element => {
        return {
          id: element.id,
          ...element.data()
        }
      });
      setProducto(productosLimpios)
    });
    return () => unsub();
  }, [])

  if (producto == null) return <> <div style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>CARGANDO...</div></>

  return (
    <>
      <div>

        <h2 className={style.cardTittles}> Alimentos Excellent </h2>

        <Slider className={style.slider} {...settings}>
          {
            producto.filter(p => (p.categoria.marca == "Excellent")).map((producto, index) => (
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

        <h2 className={style.cardTittles}> Alimentos Pro Plan </h2>

        <Slider className={style.slider} {...settings}>
          {
            producto.filter(p => (p.categoria.marca == "Pro Plan")).map((producto, index) => (
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
                    <button onClick={function () {
                      let carrito = localStorage.getItem("carrito")
                      if (carrito == null){
                          
                      }  
                      
                    }}>Comprar</button>
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