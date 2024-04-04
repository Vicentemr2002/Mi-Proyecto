import Nav from "../componentes/nav"; 
import Footer from "@/componentes/footer";


export default function Home() {
  return (

<body>
 <Nav />

<div class="intermedio-container">

    <div class="card-baños">

        <div class="card-img-baños" id="pantalla">
            <div class="card">
                <div class="image">
                    <img src="./img/raza mestiza.jpg"></img>
                </div>
                <div class="contenido">
                    <div class="title-baños">
                        <div class="name">Turnos de baños</div>
                    </div>
                    <div class="raza">Raza: Mestiza</div>
                    <div class="horario">Horario:</div>
                    <div class="precio"> 1000$</div>
                    <div class="date">Dato de la raza: El perro mestizo, también conocido como raza
                        mixta o perro
                        criollo, es aquel perro que no pertenece a ninguna raza en particular; estos
                        perros no
                        poseen rasgos característicos que puedan atribuirse a una raza específica, ya
                        que ellos,
                        como su nombre lo indica, vienen del mestizaje de varias razas de perros.</div>

                    <div class="button">
                        <button>PEDIR TURNO</button>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="image">
                    <img src="./img/raza caniche.jpg"></img>
                </div>
                <div class="contenido">
                    <div class="title-baños">
                        <div class="name">Turnos de baños</div>
                    </div>
                    <div class="raza">Raza: Caniche</div>
                    <div class="horario">Horario:</div>
                    <div class="precio"> 1000$</div>
                    <div class="date">Dato de la raza: El caniche (en inglés, poodle) es una raza canina
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
                    <div class="button">
                        <button>PEDIR TURNO </button>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="image">
                    <img src="./img/raza golden retriever.jpg"></img>
                </div>
                <div class="contenido">
                    <div class="title-baños">
                        <div class="name">Turnos de baños</div>
                    </div>
                    <div class="raza">Raza: Golden Retrievir</div>
                    <div class="horario">Horario:</div>
                    <div class="precio"> 1000$</div>
                    <div class="date">Dato de la raza: El golden retriever es una raza de perro cobrador
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
                    <div class="button">
                        <button>PEDIR TURNO </button>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="image">
                    <img src="./img/perro-Schnauzer.jpg"></img>
                </div>
                <div class="contenido">
                    <div class="title-baños">
                        <div class="name">Turnos de baños</div>
                    </div>
                    <div class="raza">Raza: Schnauzer</div>
                    <div class="horario">Horario:</div>
                    <div class="precio"> 1000$</div>
                    <div class="date">Dato de la raza: El Schnauzer pronunciado /ʃnaʊ̯t͡sɐ/ es una raza
                        canina que
                        se originó en Alemania durante los siglos XV y XVI​ Su nombre deriva del alemán
                        Schnauze​
                        'hocico', relacionado con Schnauzbart4​ y Schnurrbart5​ 'bigote', dada su muy
                        característica
                        barba que comienza en la parte superior del hocico en esta raza. Los Schnauzer
                        fueron
                        criados para perseguir y cazar.</div>
                    <div class="button">
                        <button>PEDIR TURNO </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mini-fotos">
            <div class="card">
                <img src="./img/raza mestiza.jpg" />
                <div class="contenido">
                    <div class="raza">
                        Raza: Mestiza
                    </div>
                    <div class="horario">
                        Horario:
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="./img/Perros-Caniches.jpg" />
                <div class="contenido">
                    <div class="raza">
                        Raza: Caniche
                    </div>
                    <div class="horario">
                        Horario:
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="./img/raza golden retriever.jpg" />
                <div class="contenido">
                    <div class="raza">
                        Raza: Golden Retriever
                    </div>
                    <div class="horario">
                        Horario:
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="./img/Peluquería-De-Perros.jpg" />
                <div class="contenido">
                    <div class="raza">
                        Raza: Schnauzer
                    </div>
                    <div class="horario">
                        Horario:
                    </div>
                </div>
            </div>

        </div>
        <div class="slider">
            <button id="prev">&#60;</button>
            <button id="next">&#62;</button>
        </div>
        <div class="time"></div>
    </div>


    <div class="title-alimento">
        <h2>Alimentos</h2>
    </div>

    <div class="container-alimento">

                <div class="card-productos">
                    <div class="img-alimento">
                        <img src="./img/alimento-excellent..png" alt=""/>
                    </div>
                    <div class="contenido-alimento">
                        <div class="alimento">Excellent || Raza Cat Adulto X Fraccion</div>
                        <div class="precio-alimento"> 1.683ARS</div>
                        <div class="categoria">
                            <div class="categoria-alimento">Alimento Seco</div>
                            <div class="categoria-alimento">Excellent</div>
                            <div class="categoria-alimento">Alimento Para Gatos</div>
                            <div class="categoria-alimento">Adulto</div>
                        </div>
                        <div class="button-alimento">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>


                <div class="card-productos">
                    <div class="img-alimento">
                        <img src="./img/alimento-proplan.png" alt=""/>
                    </div>
                    <div class="contenido-alimento">
                        <div class="alimento">Pro Plan || Raza Mediana Adulto x Fraccion</div>
                        <div class="precio-alimento">3.000$</div>
                        <div class="categoria">
                            <div class="categoria-alimento">Alimento Seco</div>
                            <div class="categoria-alimento">Pro Plan</div>
                            <div class="categoria-alimento">Alimento Para Perros</div>
                            <div class="categoria-alimento">Adulto</div>
                            <div class="categoria-alimento">Raza Mediana</div>
                        </div>
                        <div class="button-alimento">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>

        <div class="card-productos">
            <div class="img-alimento">
                <img src="./img/alimento-royal-cannin.png"/>
            </div>
            <div class="contenido-alimento">
                <div class="alimento">Royal Cannin || Raza Mini Adulto x Fraccion</div>
                <div class="precio-alimento"> 1000ARS</div>
                <div class="categoria">
                    <div class="categoria-alimento">Alimento Seco</div>
                    <div class="categoria-alimento">Royal Canin</div>
                    <div class="categoria-alimento">Alimento para perros</div>
                    <div class="categoria-alimento">Adulto</div>
                </div>
                <div class="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>

        <div class="card-productos">
            <div class="img-alimento">
                <img src="./img//alimento-dog-chow-adultos-razas-medianas-y-grandes-00768a93ee32e75854169923749257281-ba4a7eff6daf0ce35b16992375120130-1024-1024-fotor-bg-remover-20240311145643.png"
                    alt=""/>
            </div>
            <div class="contenido-alimento">
                <div class="alimento">Dog Chow || Raza Mediana Y Grande Puppy x Fraccion</div>
                <div class="precio-alimento">3.000$</div>
                <div class="categoria">
                    <div class="categoria-alimento">Alimento Seco</div>
                    <div class="categoria-alimento">Dog Chow</div>
                    <div class="categoria-alimento">Alimento Para Perros</div>
                    <div class="categoria-alimento">Puppy</div>
                    <div class="categoria-alimento">Raza Mediana Y Grande</div>
                </div>
                <div class="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    </div>

    <div class="title-alimento">
        <h2>Ropa</h2>
    </div>

    <div class="container-ropa">

        <div class="card-productos">

            <div class="img-alimento">
                <img src="./img/Ropa.png"/>
            </div>

            <div class="contenido-alimento">
                <div class="alimento">Ropa Tipo Polar Soff || Raza Pequeña </div>
                <div class="precio-alimento"> 3.000ARS</div>
                <div class="categoria">
                    <div class="categoria-alimento">Polar Soff</div>
                    <div class="categoria-alimento">Con Capucha</div>
                    <div class="categoria-alimento">Tallas: S-O M</div>
                </div>
                <div class="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>

        <div class="card-productos">

            <div class="img-alimento">
                <img src="./img/ropa-perro-bandera-fotor-bg-remover-20240312105943.png" alt=""/>
            </div>

            <div class="contenido-alimento">
                <div class="alimento">Ropa Tipo Polar Soff || Raza Pequeña</div>
                <div class="precio-alimento"> 1.000ARS</div>
                <div class="categoria">
                    <div class="categoria-alimento">Polar Soff</div>
                    <div class="categoria-alimento">Sin Capucha</div>
                    <div class="categoria-alimento">Tallas: S-M</div>
                </div>
                <div class="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>
        <div class="card-productos">

            <div class="img-alimento">
                <img src="./img/ropa-01-capucha-fotor-bg-remover-2024031211141.png" alt=""/>
            </div>

            <div class="contenido-alimento">
                <div class="alimento">Ropa Tipo Polar Soff || Raza Pequeña</div>
                <div class="precio-alimento"> 3.000ARS</div>
                <div class="categoria">
                    <div class="categoria-alimento">Polar Soff</div>
                    <div class="categoria-alimento">Con Capucha</div>
                    <div class="categoria-alimento">Tallas: XXS-XS</div>
                </div>
                <div class="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>

        <div class="card-productos">

            <div class="img-alimento">
                <img src="./img/ropa-02-concapucha.png" alt=""/>
            </div>

            <div class="contenido-alimento">
                <div class="alimento">Ropa Tipo Polar Soff || Raza Mediana Y Grande</div>
                <div class="precio-alimento"> 4.000ARS</div>
                <div class="categoria">
                    <div class="categoria-alimento">Polar Soff</div>
                    <div class="categoria-alimento">Con Capucha</div>
                    <div class="categoria-alimento">Tallas: L-2XL</div>
                </div>
                <div class="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>

    </div>


    <div class="title-alimento">
        <h2>Juguetes y Accesorios</h2>
    </div>

    <div class="container-accesorios">

        <div class="card-productos">

            <div class="img-alimento">
                <img src="" alt=""/>
            </div>

            <div class="contenido-alimento">
                <div class="alimento">Juguete</div>
                <div class="precio-alimento"> 1000ARS</div>
                <div class="categoria">
                    <div class="categoria-alimento">Alimento Seco</div>
                    <div class="categoria-alimento">Alimento para gatos</div>
                    <div class="categoria-alimento">Adulto</div>
                </div>
                <div class="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>

        <div class="card-productos">

            <div class="img-alimento">
                <img src="" alt=""/>
            </div>

            <div class="contenido-alimento">
                <div class="alimento">Juguete</div>
                <div class="precio-alimento"> 1000ARS</div>
                <div class="categoria">
                    <div class="categoria-alimento">Alimento Seco</div>
                    <div class="categoria-alimento">Alimento para gatos</div>
                    <div class="categoria-alimento">Adulto</div>
                </div>
                <div class="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>

        <div class="card-productos">

            <div class="img-alimento">
                <img src="" alt=""/>
            </div>

            <div class="contenido-alimento">
                <div class="alimento">Juguete</div>
                <div class="precio-alimento"> 1000ARS</div>
                <div class="categoria">
                    <div class="categoria-alimento">Alimento Seco</div>
                    <div class="categoria-alimento">Alimento para gatos</div>
                    <div class="categoria-alimento">Adulto</div>
                </div>
                <div class="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>

        <div class="card-productos">

            <div class="img-alimento">
                <img src="" alt=""/>
            </div>

            <div class="contenido-alimento">
                <div class="alimento">Juguete</div>
                <div class="precio-alimento"> 1000ARS</div>
                <div class="categoria">
                    <div class="categoria-alimento">Alimento Seco</div>
                    <div class="categoria-alimento">Alimento para gatos</div>
                    <div class="categoria-alimento">Adulto</div>
                </div>
                <div class="button-alimento">
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    </div>

</div>


<Footer />
  
</body>

  );
}
