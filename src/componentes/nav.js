"use client"

import { useContext, useState } from "react"
import style from "./nav.module.css"
import Image from "next/image"
import Link from "next/link"
import { ProductsContext } from "@/app/state"
import producto from "@/app/productos/page"


export default function Nav() {

    const [abierto, cambiarAbierto] = useState(false)


    return (

        <>
            <header className={style.header}>


                <Link rel="apple-icon.png" href="/image/favicon.png" type="image/png" sizes="32x32" />
                <div className={style.headerIndex}>
                    <div className={style.botonAbrir} onClick={() => cambiarAbierto(true)}>
                        <Image src="/image/menu.svg" alt="Menu-abrir" width={50} height={50} />
                    </div>
                </div>
                <div className={style.headerMenu}>
                    <div className={style.headerLogo}>
                        <Image src="/image/logo_mascotitas.svg" alt="logo" width={500} height={500} />
                    </div>
                </div>
                <nav id={style.mainMenu} className={abierto ? style.menuOpen : ""}>
                    <div className={style.containerBotonCerrar}>
                        <div className={style.logoStyle}>
                            <Image src="/image/logo_mascotitas.svg" alt="logo" width={100} height={100} />
                        </div>

                        <div className={style.botonCerrar} onClick={() => cambiarAbierto(false)}>
                            <Image src="/image/icons8-close.svg" width={50} height={50} alt="menu cerrar" />
                        </div>
                    </div>
                    <div className={style.enlancesContainer}>
                        <ol>
                            <li>
                                <Link className={style.a} href="/">Home</Link>
                            </li>
                            <li>
                                <Link className={style.a} href="productos">Productos</Link>
                            </li>
                            <li>
                                <Link className={style.a} href="turnos">Turnos</Link>
                            </li>
                        </ol>
                    </div>
                </nav>
                <Carrito />
            </header >
            <div className={style.placeholderHeader}></div>
        </>
    )
}


function Carrito() {
    const [carritoAbierto, cambiarCarritoAbierto] = useState(false)
    const { state, dispatch } = useContext(ProductsContext)

    return <div className={style.carritoContainer}>

        <div className={style.headerCart}>
            <Image src="/image/carrito.svg" alt="carrito" width={50} height={50} onClick={() => cambiarCarritoAbierto(true)} />
        </div>
        <div className={`${style.carritoIndex} ${carritoAbierto ? style.carritoAbierto : ""}`}>

            <div className={style.carritoCerrar} onClick={() => cambiarCarritoAbierto(false)}>
                <Image src="/image/icons8-close.svg" width={50} height={50} alt="menu cerrar" />
                <div className={style.titleCarrito}>Carrito</div>
            </div>
            <div className={style.carritoBody}>

                {
                    state && state.carrito ?
                        !state.productos ? <div>Cargando Productos...</div> :
                            Object.keys(state.carrito).map((id) => {
                                let p = state.productos.find((i) => i.id == id)
                                return <div className={style.cartItem}>
                                    <img src={p.alimentos_image} alt='Alimentos' />
                                    <div>
                                        {p.nombre}
                                    </div>
                                    <div>
                                        Cantidad: {state.carrito[id]}
                                    </div>

                                    <button onClick={() => dispatch({ type: "REMOVE_CARRITO", value: id })}>
                                        <Image src="/image/icons8-close.svg" width={50} height={50} alt="menu cerrar" />
                                    </button>
                                </div>
                            }) : <div>No hay productos en el carrito</div>
                }
            </div>
        </div>
    </div>
}
