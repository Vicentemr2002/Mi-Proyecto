
import './container-productos.module.css'


export default function ContainerProductos({children, titulo}) {
    return(

        <div className="container-productos">
            <div className='title-alimento'>
                <h2>
                    {titulo}
                </h2>
            </div>
            {children}
        </div>


    )
}
