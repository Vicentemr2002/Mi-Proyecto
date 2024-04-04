
export default function Nav() {
    return (

        <header>

        <div class="header-izquierda">

            <div class="boton-abrir" id="open">

                <img src="./img/menu.svg" alt=""/>

            </div>
        </div>

        <div class="header-derecha">

            <div class="header-logo">
                <img src="./img/logo_mascotitas.svg"/>
            </div>
        </div>

        <nav id="main-menu">

            <div class="container-boton-cerrar">

                <div class="title-header">
                    <div class="titulo">+Kotitas Tu Amigo fiel</div>
                </div>

                <div class="boton-cerrar" id="close">

                    <img src="./img/icons8-close.svg" alt=""/>

                </div>
            </div>

            <div class="enlances-container">
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


            <div class="enlances-redsocial-container">
                <a href="https://www.instagram.com/kotitasamigofiel/'" class="instagram" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://whatsapp.com/" class="whatsapp" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </div>

        </nav>

    </header>

    )
}