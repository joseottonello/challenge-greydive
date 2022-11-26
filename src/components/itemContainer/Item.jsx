import { useParams } from "react-router-dom"
import Header from "../custom/Header"

export default function Item({ items }) {
    const { cliente } = useParams()
    const itemFind = items.find(item => item.cliente === cliente)
    const itemTareas = itemFind.preguntas

    return (
        <div className='flex flex-col justify-center m-4 space-x-4'>
            <Header itemFind={itemFind}/>
            {
                <>
                    <div className=" w-full mx-auto text-center">
                        <h1 className="capitalize sm:text-3xl text-2xl font-medium mb-4 text-gray-800">{itemFind.cliente}</h1>
                        <h1 className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"> </h1>
                        <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-gray-800">Test: Test de usabilidad en el sitio web</h1>
                        <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-gray-800">Testeador 1</h1>
                    </div>
                    <video className='w-auto h-auto' controls>
                        <source src={itemFind.linkVideo} type="video/mp4"/>
                    </video>
                    <div className="flex flex-row justify-between px-5 py-24 mx-auto">
                        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <h2 className="uppercase text-gray-800 font-medium title-font tracking-wider text-sm">Transcripcion</h2>
                            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
                            <p className="leading-relaxed text-lg text-gray-500">
                                {itemFind.transcripcion}
                            </p>
                        </div>
                        <div className='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center'>
                            <h2 className="uppercase text-gray-800 font-medium title-font tracking-wider text-sm">Tareas</h2>
                            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
                            <h2 className="text-gray-800 leading-relaxed text-lg">Escenario: {itemFind.escenario}</h2>
                            <hr />
                            {
                                itemTareas.map((tarea) => (
                                    <div className="m-2 p-2">
                                        <p className="leading-relaxed text-lg text-gray-500"> {tarea.texto} </p> 
                                        <p className="leading-relaxed text-lg ">
                                            <span className="text-gray-800"> Duracion de la tarea: </span>     
                                            <span className="text-gray-500"> {tarea.tiempo} </span>
                                        </p> 
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
