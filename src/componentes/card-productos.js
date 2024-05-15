'use client'

import style from './card-producto.module.css'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useContext } from 'react'
import { ProductsContext } from '@/app/state'



const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
};


const CardProducto = () => {

    const { state, dispatch } = useContext(ProductsContext);
    const alimentos = state && state.productos ? state.productos.slice(0, 2) : null

    if (!alimentos) return <div> Cargando...</div>
    return (
        <>
            <h2 className={style.CardProductoTittles}>Los Mejores Productos</h2>


            <div>
                <Slider {...settings}>
                    {
                        alimentos.map((alimento, index) => (

                            <div key={index} className={style.cardProducto}>
                                <div className={style.imgAlimento}>
                                    <img src={alimento.alimentos_image} alt='Alimentos' />
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
                                        <button onClick={() => {
                                            dispatch({ type: "ADD_CARRITO", value: alimento.id })
                                        }}>Comprar</button>
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
