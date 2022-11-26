import { Link } from 'react-router-dom'

export default function Card({ item }) {
    return (
        <div class="shadow-lg rounded-2xl w-64 h-[15rem] p-4 py-6 bg-white">
            <div class="flex flex-col items-center justify-center">
                <Link to={`${item.cliente}`}>
                    <div class="w-24 h-24 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-8 h-8 text-white absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                        </svg>
                    </div>
                </Link>
                <p class="text-gray-800 uppercase text-xl font-medium mb-4 mt-4">
                    {item.cliente}
                </p>
                <p class="text-gray-500 text-center text-xs px-2">
                    {item.escenario}
                </p>
            </div>
        </div>
    )
}
