import React from 'react';
import {Link} from 'react-router-dom';
import logoNur from '../img/logo_nur_tech.png';

const Navbar =({toggle})=>{
    return(
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'>
            <Link to='/'><img src={logoNur} alt="Nur-Tech" id="logo" className="p-4" /></Link>
            <div className='px-4 cursor-pointer sm:hidden'  onClick={toggle}>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
            </div>
            <div className='pr-8 sm:block hidden'>
            <Link className='p-4' to="/">Inicio</Link>
            <Link className='p-4' to="/recepcion">Recepción</Link>
            <Link className='p-4' to="/mantenimiento" >Mantenimiento
            </Link>
            <Link className='p-4' to="/entrega">Entrega</Link>
            <Link className='p-4' to="/map">Mapa</Link>
            </div>
        </nav>
        
    )
}

export default Navbar
