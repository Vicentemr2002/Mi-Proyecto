import Image from "next/image"


let clients = [
    {
        text: 'Muy feliz de haberlos encontrado! Tengo 3 perritos y el servicio fue de primera.Baño y corte no podría ser mejor,además de la atención excepcional.Siempre volveremos. Gracias',
        author_image: '/image/author1.png',
        author: 'Renata Furtner',
        ranking: 5,
    },
    {
        text: 'Hola',
        author_image: '/image/author2.png',
        author: 'Renata Furtner',
        ranking: '*' ,
        ranking_repeat: 5
    },
    {
        text: 'Muy feliz de haberlos encontrado! Tengo 3 perritos y el servicio fue de primera.Baño y corte no podría ser mejor,además de la atención excepcional.Siempre volveremos. Gracias',
        author_image: "/image/author3.png",
        author: 'Renata Furtner',
        ranking: 5,
    },
]

const testimonios = () => {
    return (
        <>
            <h2>Clients</h2>
            <div>
                {
                    clients.map((clients, index) => {
                        return  (
                            <div key={index}>
                                <h3> {clients.text} </h3>
                                <div>
                                    <Image src={`/image/${clients.author_image}`} width={50} height={50}/>
                                    {clients.author} <br/>
                                </div>  
                            </div>
                        )

                        
                    })
                }
            </div>
        </>
    )
}

export default  testimonios