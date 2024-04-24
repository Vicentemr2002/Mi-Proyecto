import style from './card-producto.module.css'
import Image from 'next/image'


let Alimento = [
    {
        "nombre": "Excellent || Gato Aduldto",
        "imagen": "ima",
        "precio": "1000 ARS",
        "categoria": {
            "marca": "Excellent",
            "raza": "Gato",
            "Tamaño": "Adulto",
        }
    },
    {
        "nombre": "Pro Plan || Perro Adulto",
        "precio": "1000 ARS",
        "categoria": {
            "marca": "ProPlan",
            "Raza": "Perro",
            "Tamaño": "Adulto"
        }
    },
    {
        "nombre": "Eukanuba || Perro Adulto",
        "precio": "1000 ARS",
        "categoria": {
            "marca": "Eukanuba",
            "raza": "Perro",
            "Tamaño": "Adulto"
        }
    },
    {
        "nombre": "Royal Canin || Perro Adulto",
        "precio": "1000 ARS",
        "categoria": {
            "marca": "royalcanin",
            "raza": "Perro",
            "tamaño": "Adulto"
        }
    }


]


export default function CardProducto({ producto }) {
    return (
        <div className={style.cardProducto}>
            <div className={style.imgAlimento}>
                <Image src="/image/proplancaturinary.png" width={500} height={500}
                    alt="" />
            </div>
            <div className={style.contenidoAlimento}>
                <div className={style.indexCard}>Los Mejores productos</div>
                <div className={style.alimento}>Excellent || Raza Pequeña Puppy x Fraccion</div>
                <div className={style.precioAlimento}> 1.916ARS</div>
                <div className={style.categoria}>
                    <div className={style.categoriaAlimento}>Alimento Seco</div>
                    <div className={style.categoriaAlimento}>Excellent</div>
                    <div className={style.categoriaAlimento}>Alimento Para Perros</div>
                    <div className={style.categoriaAlimento}>Puppy</div>
                    <div className={style.categoriaAlimento}>Raza Pequeña</div>
                </div>
                <div className={style.buttonAlimento}>
                    <button>Comprar</button>
                </div>
            </div>
        </div>)
}



