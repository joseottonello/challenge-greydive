import Card from '../custom/Card'

export default function Container({ items }) {
    return (
        <div className='flex flex-col justify-center m-8 space-x-4'>
            <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span>
                    Bienvenido al challenge de <strong className='underline decoration-pink-500'>Greydive</strong>
                </span>
                <span class="block text-pink-500">
                    Escoje una de las siguientes opciones
                </span>
            </h2>
            <div className='flex flex-row justify-center m-8 space-x-4'>
                {
                    items.map((item) => (
                        <Card item={item}/>
                    ))
                }
            </div>
        </div>
    )
}
