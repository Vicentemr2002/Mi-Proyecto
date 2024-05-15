"use client"

import { useState } from "react"
import style from "./nav.module.css"
import Image from "next/image"
import Link from "next/link"


export default function Nav() {

    const [abierto, cambiarAbierto] = useState(false)
    const [carritoAbierto, cambiarCarritoAbierto] = useState(false)

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
                <div className={style.headerCart}>
                    <Image src="/image/carrito.svg" alt="carrito" width={50} height={50} onClick={() => cambiarCarritoAbierto(true)} />
                </div>

                <div className={style.carritoContainer}>
                    <div className={`${style.carritoIndex} ${carritoAbierto ? style.carritoAbierto : ""}`}>

                        <div className={style.carritoCerrar} onClick={() => cambiarCarritoAbierto(false)}>

                            <Image src="/image/icons8-close.svg" width={50} height={50} alt="menu cerrar" />

                            
                        </div>
                        <div className={style.titleCarrito}>Carrito</div>
                    </div>


                </div>



            </header>
            <div className={style.placeholderHeader}></div>
        </>
    )
}