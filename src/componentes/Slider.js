export default function Slider(){
    return(

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


    )
    
}