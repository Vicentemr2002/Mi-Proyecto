let categoria = [

    {
        id: 0,
        nombre: "Alimento",
        propiedades: [
            {

                titulo: "Marca",
                opciones: [
                    "Excellent", "Pro plan", "Eukanuba", "Dog Chow"
                ]

            },
            {
                titulo: "Razas",
                opciones: ["Alimento Para Perros", "Alimento Para Gatos"]
            },
            {
                titulo: "Tipo De Alimentos",
                opciones: [
                    "Alimento Seco", "Alimento Humedo"
                ]
            },
            {
                titulo: "Tamaño De La Raza",
                opciones: [
                    "Raza Grande", "Raza Mediana", "Raza pequeña"
                ]
            },
        ]
    },

    {
        id: 1,
        nombre: "Ropa",
        propiedades: [
            {
                titulo: "Tallas",
                opciones: [
                    "00(cm)", "0(25cm)", "1(30cm)", "2(35cm)", "3(40cm)", "4(45cm)", "5(50cm)",
                    "6(55cm)", "7(60cm)", "8(65cm)", "8(70cm)", "9(75cm)", "10(80cm)"
                ]

            },

            {
                titulo: "Marcas",
                opciones: ["Polar Soff", "Camperas Matelasse"]
            },
            {
                titulo: "Modelos",
                opciones: ["Con Capucha", "Sin Capucha"]

            }
        ]
    }

]


let categoryfiltros = document.getElementById('filtros-categoria');
let result = document.getElementById('result')
let filtroCategoria = document.getElementById('productos')
let filtrosActuales = []

categoria.forEach(function (valor) {
    let option = document.createElement("option");
    option.value = valor.id
    option.innerText = valor.nombre
    categoryfiltros.appendChild(option);
}

)


categoryfiltros.addEventListener("change", function (e) {

    let propiedades = categoria[e.target.value].propiedades


    filtrosActuales.forEach(function (filtro) {

        filtroCategoria.removeChild(filtro);

    })

    filtrosActuales = []

    for (let i = 0; i < propiedades.length; i++) {

        let select = document.createElement('select')



        for (let j = 0; j < propiedades[i].opciones.length; j++) {

            let opctionElement = document.createElement('option')

            opctionElement.innerText = propiedades[i].opciones[j]
            select.appendChild(opctionElement);


        }

        let label = document.createElement('label');
        label.innerText = propiedades[i].titulo

        filtroCategoria.appendChild(label);
        filtroCategoria.appendChild(select);
        filtrosActuales.push(label)
        filtrosActuales.push(select)
    }
})


import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./firebaseconfig"

const db = getFirestore(app);

let render = document.getElementById("render_productos");
const querySnapshot = await getDocs(collection(db, "productos"));

querySnapshot.forEach((doc) => {
    let producto = doc.data()
    let html = `
    <div class="card-productos">
        <div class="img-alimento">
            <img src="${producto["imagen"]}" alt="">
        </div>
        <div class="contenido-alimento">
            <div class="alimento">${producto['name']}</div>
            <div class="precio-alimento"> ${producto["precio"]}</div>
            <div class="categoria">
                <div class="categoria-alimento">Alimento Seco</div>
                <div class="categoria-alimento">Excellent</div>
                <div class="categoria-alimento">Alimento Para Perros</div>
                <div class="categoria-alimento">Puppy</div>
                <div class="categoria-alimento">Raza Pequeña</div>
            </div>
            <div class="button-alimento">
                <button>Comprar</button>
            </div>
        </div>
    </div>`
    render.innerHTML = render.innerHTML + html;
});


