import Nav from "../componentes/nav";
import Footer from "@/componentes/footer";
import ContainerProductos from "@/componentes/container-productos";
import Productos from "./productos/page";
import CardProducto from "../componentes/card-productos";





export default function Home() {
 
    let Alimento = {

        "Nombre" : "Nombre Alimento",
        "Precio" : "1000ARS",
        "Categoria" : [
         
        ]

    }



    return (

        <body>
            <Nav />

           
            <ContainerProductos>

        

               

                <div className="title-alimento">
                    <h2>Alimentos</h2>
                </div>
               
              <CardProducto />

              <CardProducto />

              



                <div className="title-alimento">
                    <h2>Ropa</h2>
                </div>


                <div className="card-productos">

                    <div className="img-alimento">
                        <img src="./img/Ropa.png" />
                    </div>

                    <div className="contenido-alimento">
                        <div className="alimento">Ropa Tipo Polar Soff || Raza Pequeña </div>
                        <div className="precio-alimento"> 3.000ARS</div>
                        <div className="categoria">
                            <div className="categoria-alimento">Polar Soff</div>
                            <div className="categoria-alimento">Con Capucha</div>
                            <div className="categoria-alimento">Tallas: S-O M</div>
                        </div>
                        <div className="button-alimento">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>

                <div className="card-productos">

                    <div className="img-alimento">
                        <img src="./img/ropa-perro-bandera-fotor-bg-remover-20240312105943.png" alt="" />
                    </div>

                    <div className="contenido-alimento">
                        <div className="alimento">Ropa Tipo Polar Soff || Raza Pequeña</div>
                        <div className="precio-alimento"> 1.000ARS</div>
                        <div className="categoria">
                            <div className="categoria-alimento">Polar Soff</div>
                            <div className="categoria-alimento">Sin Capucha</div>
                            <div className="categoria-alimento">Tallas: S-M</div>
                        </div>
                        <div className="button-alimento">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="card-productos">

                    <div className="img-alimento">
                        <img src="./img/ropa-01-capucha-fotor-bg-remover-2024031211141.png" alt="" />
                    </div>

                    <div className="contenido-alimento">
                        <div className="alimento">Ropa Tipo Polar Soff || Raza Pequeña</div>
                        <div className="precio-alimento"> 3.000ARS</div>
                        <div className="categoria">
                            <div className="categoria-alimento">Polar Soff</div>
                            <div className="categoria-alimento">Con Capucha</div>
                            <div className="categoria-alimento">Tallas: XXS-XS</div>
                        </div>
                        <div className="button-alimento">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>

                <div className="card-productos">

                    <div className="img-alimento">
                        <img src="./img/ropa-02-concapucha.png" alt="" />
                    </div>

                    <div className="contenido-alimento">
                        <div className="alimento">Ropa Tipo Polar Soff || Raza Mediana Y Grande</div>
                        <div className="precio-alimento"> 4.000ARS</div>
                        <div className="categoria">
                            <div className="categoria-alimento">Polar Soff</div>
                            <div className="categoria-alimento">Con Capucha</div>
                            <div className="categoria-alimento">Tallas: L-2XL</div>
                        </div>
                        <div className="button-alimento">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>



                <div className="title-alimento">
                    <h2>Juguetes y Accesorios</h2>
                </div>



                <div className="card-productos">

                    <div className="img-alimento">
                        <img src="" alt="" />
                    </div>

                    <div className="contenido-alimento">
                        <div className="alimento">Juguete</div>
                        <div className="precio-alimento"> 1000ARS</div>
                        <div className="categoria">
                            <div className="categoria-alimento">Alimento Seco</div>
                            <div className="categoria-alimento">Alimento para gatos</div>
                            <div className="categoria-alimento">Adulto</div>
                        </div>
                        <div className="button-alimento">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>

                <div className="card-productos">

                    <div className="img-alimento">
                        <img src="" alt="" />
                    </div>

                    <div className="contenido-alimento">
                        <div className="alimento">Juguete</div>
                        <div className="precio-alimento"> 1000ARS</div>
                        <div className="categoria">
                            <div className="categoria-alimento">Alimento Seco</div>
                            <div className="categoria-alimento">Alimento para gatos</div>
                            <div className="categoria-alimento">Adulto</div>
                        </div>
                        <div className="button-alimento">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>

                <div className="card-productos">

                    <div className="img-alimento">
                        <img src="" alt="" />
                    </div>

                    <div className="contenido-alimento">
                        <div className="alimento">Juguete</div>
                        <div className="precio-alimento"> 1000ARS</div>
                        <div className="categoria">
                            <div className="categoria-alimento">Alimento Seco</div>
                            <div className="categoria-alimento">Alimento para gatos</div>
                            <div className="categoria-alimento">Adulto</div>
                        </div>
                        <div className="button-alimento">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>

                <div className="card-productos">

                    <div className="img-alimento">
                        <img src="" alt="" />
                    </div>

                    <div className="contenido-alimento">
                        <div className="alimento">Juguete</div>
                        <div className="precio-alimento"> 1000ARS</div>
                        <div className="categoria">
                            <div className="categoria-alimento">Alimento Seco</div>
                            <div className="categoria-alimento">Alimento para gatos</div>
                            <div className="categoria-alimento">Adulto</div>
                        </div>
                        <div className="button-alimento">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </ContainerProductos>


            <Footer />

        </body>

    );
}
