import Nav from "../componentes/nav";
import Footer from "@/componentes/footer";
import ContainerProductos from "@/componentes/container-productos";
import Productos from "./productos/page";
import CardProducto from "../componentes/card-productos";
import Image from "next/image";



export default function Home() {

    let Alimento = [
        {
            "nombre": "Excellent || Gato Aduldto",
            "precio": "1000 ARS",
            "categoria": {
                "marca": "Excellent",
                "raza": "Gato",
                "Tamaño": "Adulto",
            }
        },
        {
            "nombre": "Pro Plan || Perro Adulto",
            "precio": "1000 ARS",
            "categoria": {
                "marca": "ProPlan",
                "Raza": "Perro",
                "Tamaño": "Adulto"
            }
        },
        {
            "nombre": "Eukanuba || Perro Adulto",
            "precio": "1000 ARS",
            "categoria": {
                "marca": "Eukanuba",
                "raza": "Perro",
                "Tamaño": "Adulto"
            }
        },
        {
            "nombre": "Royal Canin || Perro Adulto",
            "precio": "1000 ARS",
            "categoria": {
                "marca": "royalcanin",
                "raza": "Perro",
                "tamaño": "Adulto"
            }
        }


    ]



    return (

        <body>
            <Nav />

            <div className="container-baños">
                <div className="container-img-baños">
                    <Image src="/image/container-baños.png" width={500} height={500} />
                </div>
                <div className="index-baños">
                    <div className="animal">Profesionales Al Cuidado De Du Mascotas</div>
                    <div className="adoption">Reserve Su Turno</div>
                    <div className="description-baños">Damos los turnos de lunes a viernes de 10 a 20 Hs</div>
                    <div className="buttom-baños">
                    <button>Turnos De Baños</button>
                    </div>
                </div>
            </div>

            <ContainerProductos>


                <CardProducto />

            </ContainerProductos>


            <Footer />

        </body>

    );
}
