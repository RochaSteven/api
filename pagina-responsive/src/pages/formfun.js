import React from 'react'

const About = () => {
    return (
        <center>
           <div class="md:w-1/2 px-3 p-6">
        <h1 class="font-serif text-4xl"> FUNCIONAL </h1> 
    
        <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Id Donante
        </label>
        <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Id Donante"></input>
        
        <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Marca
        </label>
        <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder=" Marca"></input>
        
        <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Tipo de Mantenimiento
        </label>
        <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Tipo de Mantenimiento"></input>

        <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
            Código de barras
        </label>
        <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Código de barras"></input>
        
        <button
            class="rounded-full inline-block no-underline shadow md:shadow-lg  text-black text-sm py-2 transition duration-500 ease-in-out bg-yellow-400 hover:bg-yellow-400 hover:text-black 
    sm:hover:bg-black sm:hover:text-white  md:hover:bg-black md:hover:text-white  transform hover:-translate-y-1 hover:scale-110  pl-2 pr-2 poppins mr-2">
             CREAR </button>
          <button
            class="rounded-full inline-block no-underline shadow md:shadow-lg  text-black text-sm py-2 transition duration-500 ease-in-out bg-yellow-400 hover:bg-yellow-400 hover:text-black 
    sm:hover:bg-black sm:hover:text-white  md:hover:bg-black md:hover:text-white  transform hover:-translate-y-1 hover:scale-110  pl-2 pr-2 poppins ml-2">
             CANCELAR </button>
        </div> 
        </center>
    )
}

export default About
