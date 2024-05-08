import Nav from "@/componentes/nav";
import Footer from "@/componentes/footer";
import CardProducto from "./componentes/cardExcellent";
import cardExcellent from "./componentes/cardExcellent";
import ContainerProductos from "@/componentes/container-productos";


export default function producto() {

  return (

    <body>

      <Nav />

      <ContainerProductos>

      <cardExcellent />
  
       <CardProducto />
       
      </ContainerProductos>

      <Footer />

    </body>

  );
}