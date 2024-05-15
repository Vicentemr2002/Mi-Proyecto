import Nav from "@/componentes/nav";
import Footer from "@/componentes/footer";
import CardAlimetos from "./componentes/card.alimentos";
import ContainerProductos from "@/componentes/container-productos";

export default function producto() {

    return (

        <>
            <Nav />
            <ContainerProductos>
                <CardAlimetos />
            </ContainerProductos>
            <Footer />
        </>

    );

}
