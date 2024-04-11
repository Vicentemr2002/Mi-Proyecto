import Nav from "../componentes/nav"; 
import Footer from "@/componentes/footer";
import ContainerProductos from "@/componentes/container-productos";
import Slider from "@/componentes/Slider";



export default function Home() {
  return (

<body>
 <Nav />
    
   <ContainerProductos>

<Slider />

    <div className="title-alimento">
        <h2>Alimentos</h2>
    </div>

    

                <div className="card-productos">
                    <div className="img-alimento">
                        <img src="./img/alimento-excellent..png" alt=""/>
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
                </div>


                <div className="card-productos">
                    <div className="img-alimento">
                        <img src="./img/alimento-proplan.png" alt=""/>
                    </div>
                    <div className="contenido-alimento">
                        <div className="alimento">Pro Plan || Raza Mediana Adulto x Fraccion</div>
                        <div className="precio-alimento">3.000$</div>
                        <div className="categoria">
                            <div className="categoria-alimento">Alimento Seco</div>
                            <div className="categoria-alimento">Pro Plan</div>
                            <div className="categoria-alimento">Alimento Para Perros</div>
                            <div className="categoria-alimento">Adulto</div>
                            <div className="categoria-alimento">Raza Mediana</div>
                        </div>
                        <div className="button-alimento">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>

        <div className="card-productos">
            <div className="img-alimento">
                <img src="./img/alimento-royal-cannin.png"/>
            </div>
            <div className="contenido-alimento">
                <div className="alimento">Royal Cannin || Raza Mini Adulto x Fraccion</div>
                <div className="precio-alimento"> 1000ARS</div>
                <div className="categoria">
                    <div className="categoria-alimento">Alimento Seco</div>
                    <div className="categoria-alimento">Royal Canin</div>
                    <div className="categoria-alimento">Alimento para perros</div>
                    <div className="categoria-alimento">Adulto</div>
                </div>
                <div className="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>

        <div className="card-productos">
            <div className="img-alimento">
                <img src="./img//alimento-dog-chow-adultos-razas-medianas-y-grandes-00768a93ee32e75854169923749257281-ba4a7eff6daf0ce35b16992375120130-1024-1024-fotor-bg-remover-20240311145643.png"
                    alt=""/>
            </div>
            <div className="contenido-alimento">
                <div className="alimento">Dog Chow || Raza Mediana Y Grande Puppy x Fraccion</div>
                <div className="precio-alimento">3.000$</div>
                <div className="categoria">
                    <div className="categoria-alimento">Alimento Seco</div>
                    <div className="categoria-alimento">Dog Chow</div>
                    <div className="categoria-alimento">Alimento Para Perros</div>
                    <div className="categoria-alimento">Puppy</div>
                    <div className="categoria-alimento">Raza Mediana Y Grande</div>
                </div>
                <div className="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>
   

    <div className="title-alimento">
        <h2>Ropa</h2>
    </div>


        <div className="card-productos">

            <div className="img-alimento">
                <img src="./img/Ropa.png"/>
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
                <img src="./img/ropa-perro-bandera-fotor-bg-remover-20240312105943.png" alt=""/>
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
                <img src="./img/ropa-01-capucha-fotor-bg-remover-2024031211141.png" alt=""/>
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
                <img src="./img/ropa-02-concapucha.png" alt=""/>
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
                <img src="" alt=""/>
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
                <img src="" alt=""/>
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
                <img src="" alt=""/>
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
                <img src="" alt=""/>
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
