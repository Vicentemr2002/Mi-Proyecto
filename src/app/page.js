import Nav from "../componentes/nav"; 
import Footer from "@/componentes/footer";
import ContainerProductos from "@/componentes/container-productos";




export default function Home() {
  return (

<body>
 <Nav />

<div className="intermedio-container">

    <div className="card-baños">

        <div className="card-img-baños" id="pantalla">
            <div className="card">
                <div className="image">
                    <img src="./img/raza mestiza.jpg"></img>
                </div>
                <div className="contenido">
                    <div className="title-baños">
                        <div className="name">Turnos de baños</div>
                    </div>
                    <div className="raza">Raza: Mestiza</div>
                    <div className="horario">Horario:</div>
                    <div className="precio"> 1000$</div>
                    <div className="date">Dato de la raza: El perro mestizo, también conocido como raza
                        mixta o perro
                        criollo, es aquel perro que no pertenece a ninguna raza en particular; estos
                        perros no
                        poseen rasgos característicos que puedan atribuirse a una raza específica, ya
                        que ellos,
                        como su nombre lo indica, vienen del mestizaje de varias razas de perros.</div>

                    <div className="button">
                        <button>PEDIR TURNO</button>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="image">
                    <img src="./img/raza caniche.jpg"></img>
                </div>
                <div className="contenido">
                    <div className="title-baños">
                        <div className="name">Turnos de baños</div>
                    </div>
                    <div className="raza">Raza: Caniche</div>
                    <div className="horario">Horario:</div>
                    <div className="precio"> 1000$</div>
                    <div className="date">Dato de la raza: El caniche (en inglés, poodle) es una raza canina
                        que hasta
                        el siglo xv se consideró de uso exclusivo de los aristócratas y nobles. Fue un
                        perro
                        cobrador de aguas hasta el Renacimiento: recuperaban las presas ya cazadas que
                        habían caído
                        al agua, como patos y cisnes. Hoy en día se les encuentra frecuentemente en las
                        exposiciones
                        caninas de belleza. Existen cuatro variedades: grande, mediano, enano y toy.
                        Aparte del
                        caniche común, también existe la variedad Cordelé</div>
                    <div className="button">
                        <button>PEDIR TURNO </button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="image">
                    <img src="./img/raza golden retriever.jpg"></img>
                </div>
                <div className="contenido">
                    <div className="title-baños">
                        <div className="name">Turnos de baños</div>
                    </div>
                    <div className="raza">Raza: Golden Retrievir</div>
                    <div className="horario">Horario:</div>
                    <div className="precio"> 1000$</div>
                    <div className="date">Dato de la raza: El golden retriever es una raza de perro cobrador
                        que se
                        desarrolló alrededor de 1850 en el Reino Unido, concretamente en Escocia Con sus
                        características de perro cobrador, sabueso, bloodhound y spaniel de agua, es un
                        hábil perro
                        de caza con aptitudes para el rastreo. Posee una disposición amigable y una
                        actitud que lo
                        ha convertido en una de las razas familiares más populares (mediante registro)
                        en los
                        Estados Unidos, Argentina y en Canadá​ el quinto más popular en Australia, y la
                        octava
                        raza más popular en el Reino Unido​</div>
                    <div className="button">
                        <button>PEDIR TURNO </button>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="image">
                    <img src="./img/perro-Schnauzer.jpg"></img>
                </div>
                <div className="contenido">
                    <div className="title-baños">
                        <div className="name">Turnos de baños</div>
                    </div>
                    <div className="raza">Raza: Schnauzer</div>
                    <div className="horario">Horario:</div>
                    <div className="precio"> 1000$</div>
                    <div className="date">Dato de la raza: El Schnauzer pronunciado /ʃnaʊ̯t͡sɐ/ es una raza
                        canina que
                        se originó en Alemania durante los siglos XV y XVI​ Su nombre deriva del alemán
                        Schnauze​
                        'hocico', relacionado con Schnauzbart4​ y Schnurrbart5​ 'bigote', dada su muy
                        característica
                        barba que comienza en la parte superior del hocico en esta raza. Los Schnauzer
                        fueron
                        criados para perseguir y cazar.</div>
                    <div className="button">
                        <button>PEDIR TURNO </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="mini-fotos">
            <div className="card">
                <img src="./img/raza mestiza.jpg" />
                <div className="contenido">
                    <div className="raza">
                        Raza: Mestiza
                    </div>
                    <div className="horario">
                        Horario:
                    </div>
                </div>
            </div>
            <div className="card">
                <img src="./img/Perros-Caniches.jpg" />
                <div className="contenido">
                    <div className="raza">
                        Raza: Caniche
                    </div>
                    <div className="horario">
                        Horario:
                    </div>
                </div>
            </div>
            <div className="card">
                <img src="./img/raza golden retriever.jpg" />
                <div className="contenido">
                    <div className="raza">
                        Raza: Golden Retriever
                    </div>
                    <div className="horario">
                        Horario:
                    </div>
                </div>
            </div>
            <div className="card">
                <img src="./img/Peluquería-De-Perros.jpg" />
                <div className="contenido">
                    <div className="raza">
                        Raza: Schnauzer
                    </div>
                    <div className="horario">
                        Horario:
                    </div>
                </div>
            </div>

        </div>
        <div className="slider">
            <button id="prev">&#60;</button>
            <button id="next">&#62;</button>
        </div>
        <div className="time"></div>
    </div>


    <div className="title-alimento">
        <h2>Alimentos</h2>
    </div>

    <ContainerProductos>

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
    </ContainerProductos>

    <div className="title-alimento">
        <h2>Ropa</h2>
    </div>

    <ContainerProductos>

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
    </ContainerProductos>


    <div className="title-alimento">
        <h2>Juguetes y Accesorios</h2>
    </div>

    <ContainerProductos>

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

</div>


<Footer />
  
</body>

  );
}
