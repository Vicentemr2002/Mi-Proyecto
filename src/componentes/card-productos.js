import './card-producto.module.css'


export default function CardProducto({producto}) {
    return( <div className="card-productos">
    <div className="img-alimento">
        <img src="./img/alimento-excellent..png" alt="" />
    </div>
    <div className="contenido-alimento">
        <div className="alimento">Excellent || Raza Cat Adulto X Fraccion</div>
        <div className="precio-alimento"> 1.683ARS</div>
        <div className="categoria">
            <div className="categoria-alimento">Alimento Seco</div>
            <div className="categoria-alimento">Excellent</div>
            <div className="categoria-alimento">Alimento Para Gatos</div>
            <div className="categoria-alimento">Adulto</div>
        </div>
        <div className="button-alimento">
            <button>Comprar</button>
        </div>
    </div>
</div>)
}