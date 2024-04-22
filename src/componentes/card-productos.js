import './card-producto.module.css'
import Image from 'next/image'

export default function CardProducto({ producto }) {
    return (
        <div className="card-productos">
            <div className="img-alimento">
                <Image src="/image/proplancaturinary.png" width={500} height={500}
                    alt="" />
            </div>
            <div className="contenido-alimento">
                <div className='index-card'>Los Mejores productos</div>
                <div className="alimento">Excellent || Raza Pequeña Puppy x Fraccion</div>
                <div className="precio-alimento"> 1.916ARS</div>
                <div className="categoria">
                    <div className="categoria-alimento">Alimento Seco</div>
                    <div className="categoria-alimento">Excellent</div>
                    <div className="categoria-alimento">Alimento Para Perros</div>
                    <div className="categoria-alimento">Puppy</div>
                    <div className="categoria-alimento">Raza Pequeña</div>
                </div>
                <div className="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>)
}