import Nav from "@/componentes/nav";
import Footer from "@/componentes/footer";
import Image from "next/image";
import style from "./pages.css"

export default function Turnos() {


    return (

        <body>

            <Nav />

                <div className={style.indexTurnos}>
                    <div className={style.imgTurno}>
                        <Image src={"/image/poodles.jpg"} width={500} height={500}/>
                    </div>
                </div>

       

            <Footer />

        </body>

    );
}