import Nav from "@/componentes/nav";
import Footer from "@/componentes/footer";

export default function Productos() {

    return (

        <body>

            <Nav />

            <div className="intermedio-container-2">

                <div className="section-index">
                    <div className="title">
                        <h3>Productos</h3>
                    </div>
                    <div className="index-category" id="productos">
                        <label className="pb-2">Categoria</label>
                        <select form="controls" className="edit-select" name="alimentos" id="filtros-categoria">
                            <option className="select" value="todos">--Todos--</option>


                        </select>
                        <div className="result" id="result"></div>
                    </div>
                </div>

                <div className="index-cards">

                    <div className="title">
                        <h2>Alimentos</h2>
                    </div>

                    <div className="excellent">

                        <div className="title">
                            <h1>Excellent</h1>
                            <h4>Alimento Para Perros</h4>
                        </div>

                        <div className="alimento-perro">

                            <div className="card-productos">
                                <div className="img-alimento">
                                    <img src="./img/Excelent-cachorros-razas-pequenas-fotor-bg-remover-20240307153347.png"
                                        alt="" />
                                </div>
                                <div className="contenido-alimento">
                                    <div className="alimento">Excellent || Raza Pequeña Puppy x Fraccion</div>
                                    <div className="precio-alimento"> 1.916ARS</div>
                                    <div className="categoria">
                                        <div className="categoria-alimento">Alimento Seco</div>
                                        <div className="categoria-alimento">Excellent</div>
                                        <div className="categoria-alimento">Alimento Para Perros</div>
                                        <div className="categoria-alimento">Puppy</div>
                                        <div className="categoria-alimento">Raza Pequeña</div>
                                    </div>
                                    <div className="button-alimento">
                                        <button>Comprar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </body>


    );

}