import Nav from "../componentes/nav";
import Footer from "@/componentes/footer";
import ContainerProductos from "@/componentes/container-productos";
import CardProducto from "@/componentes/card-productos";
import Testimonios from "@/componentes/testimonios";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (

        <body>
            <Nav />
            <div className="container-baños">
                <div className="container-img-baños">
                    <Image src="/image/container-baños.png" width={450} height={450} />
                </div>
                <div className="index-baños">
                    <div className="animal">Profesionales Al Cuidado De Du Mascotas</div>
                    <div className="adoption">Reserve Su Turno</div>
                    <div className="description-baños">Damos los turnos de lunes a viernes de 10 a 20 Hs</div>
                    <div className="buttom-baños">
                        <Link className="bt-button" href="turnos">Solicitar Turno</Link>
                    </div>
                </div>
            </div>

            <ContainerProductos>

           <CardProducto>
            
            </CardProducto> 


           <Testimonios/>

            </ContainerProductos>



            <Footer />

        </body>

    );
}
