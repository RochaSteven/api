import React from 'react';
import mapa from '../img/mapa.jpeg';
import entrega from '../img/entrega.jpg';

const Entregar = () => {
    return (
       <center>
           <div class="md:w-1/2 px-3 p-6">
        <h1 class="font-serif text-4xl"> ENTREGA </h1> 
    
        <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Beneficiario
        </label>
        <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Beneficiario"></input>
        
        <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Semestre
        </label>
        <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Semestre"></input>
        
        <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Carrera
        </label>
        <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Carrera"></input>

        <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Instituto
        </label>
        <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Instituto"></input>
        
        <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Ubicacion del beneficiario
        </label>
        <img class="h-97 w-screen object-center md:w-96 bounceIn" src={mapa} alt=""/>
        
        <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Evidencia de entrega
        </label>
        <img class="h-97 w-screen object-center md:w-96 bounceIn" src={entrega} alt=""/>


        <button
            class="rounded-full inline-block no-underline shadow md:shadow-lg  text-black text-sm py-2 transition duration-500 ease-in-out bg-yellow-400 hover:bg-yellow-400 hover:text-black 
    sm:hover:bg-black sm:hover:text-white  md:hover:bg-black md:hover:text-white  transform hover:-translate-y-1 hover:scale-110  pl-2 pr-2 poppins mr-2">
             ACEPTAR </button>
          <button
            class="rounded-full inline-block no-underline shadow md:shadow-lg  text-black text-sm py-2 transition duration-500 ease-in-out bg-yellow-400 hover:bg-yellow-400 hover:text-black 
    sm:hover:bg-black sm:hover:text-white  md:hover:bg-black md:hover:text-white  transform hover:-translate-y-1 hover:scale-110  pl-2 pr-2 poppins ml-2">
             CANCELAR </button>
        </div>
       </center>
    )
}

export default Entregar