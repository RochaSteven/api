import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({isOpen,toggle}) => {
    return (
        <div className={
            isOpen
              ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
              : 'hidden'
          } onClick={toggle}>
           <Link className='p-4' to="/">Inicio</Link>
            <Link className='p-4' to="/recepcion">Recepción</Link>
            <Link className='p-4' to="/mantenimiento">Mantenimiento</Link>
            <Link className='p-4' to="/entrega">Entrega</Link> 
            <Link className='p-4' to="/map">Mapa</Link> 
        </div>
    )
}

export default Dropdown
