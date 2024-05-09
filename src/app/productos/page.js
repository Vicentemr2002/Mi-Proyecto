import Nav from "@/componentes/nav";
import Footer from "@/componentes/footer";
import CardProducto from "./componentes/card.alimentos";
import cardAlimetos from "./componentes/card.alimentos";
import ContainerProductos from "@/componentes/container-productos";


export default function producto() {

  return (

    <body>

      <Nav />

      <ContainerProductos>

    <CardProducto />
    
     <cardAlimetos />
       
      </ContainerProductos>

      <Footer />

    </body>

  );

}