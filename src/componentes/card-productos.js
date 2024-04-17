import './card-producto.module.css'


export default function CardProducto({producto}) {
    return(  
    <div className="card-productos">
    <div className="img-alimento">
        <img src="./img//Excelent-cachorros-razas-pequenas-fotor-bg-remover-20240307153347.png"
            alt=""/>
    </div>
    <div className="contenido-alimento">
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