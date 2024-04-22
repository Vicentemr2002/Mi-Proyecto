import Nav from "../componentes/nav";
import Footer from "@/componentes/footer";
import ContainerProductos from "@/componentes/container-productos";
<<<<<<< HEAD
import CardProducto from "@/componentes/card-productos";
import Image from "next/image";


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
=======
import Productos from "./productos/page";
import CardProducto from "../componentes/card-productos";
import Image from "next/image";
>>>>>>> 7acdcb053c48fca6855dca3455de4f125f5e9922


]

export default function Home() {
    return (

        <body>
            <Nav />
<<<<<<< HEAD
            <div className="container-baños">
                <div className="container-img-baños">
                    <Image src="/image/container-baños.png" width={450} height={450} />
=======

            <div className="container-baños">
                <div className="container-img-baños">
                    <Image src="/image/container-baños.png" width={500} height={500} />
>>>>>>> 7acdcb053c48fca6855dca3455de4f125f5e9922
                </div>
                <div className="index-baños">
                    <div className="animal">Profesionales Al Cuidado De Du Mascotas</div>
                    <div className="adoption">Reserve Su Turno</div>
                    <div className="description-baños">Damos los turnos de lunes a viernes de 10 a 20 Hs</div>
                    <div className="buttom-baños">
<<<<<<< HEAD
                        <button>Turnos De Baños</button>
=======
                    <button>Turnos De Baños</button>
>>>>>>> 7acdcb053c48fca6855dca3455de4f125f5e9922
                    </div>
                </div>
            </div>

            <ContainerProductos>

<<<<<<< HEAD
                <CardProducto />


=======

                <CardProducto />

>>>>>>> 7acdcb053c48fca6855dca3455de4f125f5e9922
            </ContainerProductos>



            <Footer />

        </body>

    );
}
