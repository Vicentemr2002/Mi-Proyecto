"use client"

import { useState } from "react"
import Image from "next/image"
import  Link  from "next/link"

 
export default function Nav() {

 const [abierto, cambiarAbierto] = useState(false) 

    return (

        <header>

        <div className="header-izquierda">

            <div className="boton-abrir" onClick={() => cambiarAbierto(true)}>

                <Image src="/image/menu.svg" alt="" width={50} height={50} />

            </div>
        </div>

        <div className="header-derecha">

            <div className="header-logo">
                <Image src="/image/logo_mascotitas.svg" width={500} height={500} />
            </div>
        </div>

        <nav id="main-menu" className={abierto ? "menu-open" : ""}>

            <div className="container-boton-cerrar">

                <div className="title-header">
                    <div className="titulo">+Kotitas Tu Amigo fiel</div>
                </div>

                <div className="boton-cerrar" onClick={() => cambiarAbierto(false)}>

                    <Image src="/image/icons8-close.svg" width={50} height={50} alt=""/>

                </div>

            </div>

            <div className="enlances-container">
                <ol>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="productos">Productos</Link>
                    </li>
                    <li>
                        <Link href="turnos">Turnos</Link>
                    </li>
                </ol>
            </div>


            <div className="enlances-redsocial-container">
                <a href="https://www.instagram.com/kotitasamigofiel/'" className="instagram" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://whatsapp.com/" className="whatsapp" target="_blank">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>

        </nav>

    </header>

    )
}