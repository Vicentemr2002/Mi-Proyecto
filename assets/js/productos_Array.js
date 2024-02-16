let categoria = [

    {
        id: 0,
        nombre: "Alimento",
        propiedades: [
            {

                titulo: "Marca",
                opciones: [
                    "Execellent", "Pro plan", "Eukanuba", "Dog Chow"
                ]

            },
            {
              titulo: "Raza",
              opciones:["Perro","Gato"]  
            },
            {
                titulo: "Tipo De Alimento",
                opciones: [
                    "Tipo Seco", "Tipo Humedo"
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
                titulo: "talla",
                talla: [
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
categoria.forEach(function(valor) {    
      let option = document.createElement("option");
      option.value = valor.id
      option.innerText = valor.nombre
      categoryfiltros.appendChild(option);
    }

)


categoryfiltros.addEventListener("change", function() {

 
})

let indexFiltro = document.getElementById('productos');