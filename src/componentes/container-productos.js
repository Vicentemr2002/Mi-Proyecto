
import { Children } from 'react'
import './container-productos.module.css'


export default function ContainerProductos({children}) {
    return(

        <div className="container-productos">
            {children}
        </div>


    )
}
