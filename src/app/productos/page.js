import Nav from "@/componentes/nav";
import Footer from "@/componentes/footer";
import CardAlimentos from "./componentes/card-productos-alimentos";
import ContainerProductos from "@/componentes/container-productos";
import style from './pages.css'


export default function productos() {
  return (

    <body>

      <Nav />
      <ContainerProductos>

        <CardAlimentos />
        
      </ContainerProductos>
      <Footer />

    </body>

  )
}