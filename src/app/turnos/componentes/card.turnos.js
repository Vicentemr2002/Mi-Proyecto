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


export default function CardTurnos() {
    return (


        <div className={style.indexTurnos}>
            <div className={style.imgTurnos}>
                <Image src="/image/poodles.png" width={400} height={400} />
            </div>
            <div className={style.contenidoTurnos}>
                <div className={style.title}>Raza: Caniche</div>
                <div className={style.valores}>Baño: 7.500Ars</div>
                <div className={style.valores}>Baño y Corte: 8.900Ars</div>
                <div className={style.duracion}>Duracion: 2HS</div>
                <div className={style.datoRaza}>Dato de raza: El caniche (en inglés, poodle) es una raza canina que hasta el siglo xv se consideró de uso exclusivo de los aristócratas y nobles.
                    Fue un perro cobrador de aguas hasta el Renacimiento: recuperaban las presas ya cazadas que habían caído al agua, como patos y cisnes.</div>
                <div className={style.btn}>
                    <button>Pedir Turno</button>
                </div>
            </div>
        </div>

    )
}