import { Link } from 'react-router-dom'

export default function Header({ itemFind }) {
  return (
        <header class="text-gray-600 body-font">
            <div class="flex items-center py-4 overflow-y-auto whitespace-nowrap">
                <a href="https://www.greydive.com/" target="_blank" rel="noreferrer">
                    <img 
                    className='w-9 h-9'
                    src="https://media-exp1.licdn.com/dms/image/C4D0BAQFW7bpa2V_eXw/company-logo_200_200/0/1634668056966?e=1677110400&v=beta&t=Q2pNKXezEhLA_ZQxFeQ-kV1IPSOm49RbSCiojGk3lB0" 
                    alt="Greydive Company" />
                </a>
                <span class="mx-5 text-gray-500 dark:text-gray-300">
                    |
                </span>
                <Link to='/'>
                    <span class="ml-3 text-xl">Inicio</span>
                </Link>
                <span class="mx-5 text-gray-500 dark:text-gray-300">
                    |
                </span>
                <span class="capitalize ml-3 text-xl">
                    {itemFind.cliente}
                </span>
            </div>
        </header>
    )
}
