import style from './card.turnos.module.css'
import Image from 'next/image'

const turnos = [
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


export default function cardTurnos() {
    return (


        <div className={style.indexTurnos}>
            <div className={style.imgTurnos}>
                <Image src="/image/Caniche.png" width={500} height={500}/>
            </div>
        </div>

    )
}