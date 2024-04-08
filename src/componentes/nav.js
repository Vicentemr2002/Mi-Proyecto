"use client"

import { useState } from "react"

 
export default function Nav() {

 const [abierto, cambiarAbierto] = useState(false) 

    return (

        <header>

        <div className="header-izquierda">

            <div className="boton-abrir" onClick={() => cambiarAbierto(true)}>

                <img src="./img/menu.svg" alt=""/>

            </div>
        </div>

        <div className="header-derecha">

            <div className="header-logo">
                <img src="./img/logo_mascotitas.svg"/>
            </div>
        </div>

        <nav id="main-menu" className={abierto ? "menu-open" : ""}>

            <div className="container-boton-cerrar">

                <div className="title-header">
                    <div className="titulo">+Kotitas Tu Amigo fiel</div>
                </div>

                <div className="boton-cerrar" onClick={() => cambiarAbierto(false)}>

                    <img src="./img/icons8-close.svg" alt=""/>

                </div>
            </div>

            <div className="enlances-container">
                <ol>
                    <li>
                        <a href="home.html">Home</a>
                    </li>
                    <li>
                        <a href="k.productos.html">Productos</a>
                    </li>
                    <li>
                        <a href="k.turnos.html">Turnos</a>
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