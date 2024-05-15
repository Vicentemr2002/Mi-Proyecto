'use client'

import style from './card.turnos.module.css'
import Image from 'next/image'

const t= [
    {
        raza: "Raza: Caniche",
        baños_image: "/image/Caniche.png",
        precio: {
            baño: "Baño: 7.500Ars",
            corte: "Baño y Corte: 8.900Ars"
        },
        duracion: {
            duracion_baño: "Duracion: 1hs",
            duracion_baño_corte: "Duracion 2hs"
        }

    },
    {
        raza: "Raza: Schnauzer",
        baños_image: "/image/Caniche.png",
        precio: {
            baño: "Baño: 7.500Ars",
            corte: "Baño y Corte: 8.900Ars"
        },
        duracion: {
            duracion_baño: "Duracion: 1hs",
            duracion_baño_corte: "Duracion 2hs"
        }

    },
]


const CardTurnos = () => {
    return (
        <>
            {
                t.map((t, index) => (
                    <div key={index} className={style.indexTurnos}>
                        <div className={style.imgTurnos}>
                            <Image src={t.baños_image} width={400} height={400} />
                        </div>
                        <div className={style.contenidoTurnos}>
                            <h2 className={style.title}> {t.raza} </h2>
                            <h1 className={style.valores}> {t.precio.baño} </h1>
                            <h1 className={style.valores}> {t.precio.corte} </h1>
                            <div className={style.duracion}> {t.duracion.duracion_baño} </div>
                            <div className={style.duracion}> {t.duracion.duracion_baño_corte} </div>
                            <div id="shop" className={style.btn}>
                                <button>Pedir Turno</button>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default CardTurnos;