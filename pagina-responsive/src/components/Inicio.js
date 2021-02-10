import React from 'react';
import {Link} from 'react-router-dom';
import imagenUno from '../img/recepcion.jpg';
import imagenDos from '../img/mantenimiento.jpg';
import imagenTres from '../img/entrega.jpg';

const Content2 = () => {
    return (
        <>
        <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
            <img src={imagenUno} alt="" className='h-full rounded mb-20 shadow'/>
            <Link to='/recepcion'>
            <div className='flex flex-col justify-center items-center rounded-full bg-yellow-300 hover:bg-yellow-500 p-2'>
                <h2 className='text-2xl mb-2'>Recepción</h2>
                <p className='mb-2'>Adminisión de computadoras de los donantes</p>
            </div>
            </Link>
        </div>
        
        <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
            <img src={imagenDos} alt="" className='h-full rounded mb-20 shadow'/>
            <Link to='/mantenimiento'>
            <div className='flex flex-col justify-center items-center p-2 bg-blue-300 hover:bg-blue-500 rounded-full'>
                <h2 className='text-2xl mb-2'>Mantenimiento</h2>
                <p className='mb-2'>Mantenimiento y reparación de los equipos donados</p>
            </div>
            </Link>
         </div>   

         <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
            <img src={imagenTres} alt="" className='h-full rounded mb-20 shadow'/>
            <Link to='/entrega'>
            <div className='flex flex-col justify-center items-center p-2 bg-green-300 hover:bg-green-500 rounded-full'>
                <h2 className='text-2xl mb-2'>Entrega</h2>
                <p className='mb-2'>Entrega de equipos  a estudiantes de bajos recursos</p>
            </div>
            </Link>
         </div>  
            </>
    )
}

export default Content2
