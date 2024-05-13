import Nav from "@/componentes/nav";
import Footer from "@/componentes/footer";
import CardTurnos from "./componentes/card.turnos";
import ContainerProductos from "@/componentes/container-productos";

export default function Turnos() {


    return (

        <body>

            <Nav />

            <ContainerProductos>

                <CardTurnos />

            </ContainerProductos>
            
            <Footer />

        </body>

    );
}