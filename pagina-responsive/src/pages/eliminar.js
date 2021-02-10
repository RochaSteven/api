import React from 'react'

const Eliminar = () => {
    return (
        <center>
              <div className=" justify-center p-6 ">
        <h1 class=" text-center font-serif text-4xl ">Eliminar</h1>
        <br></br>
        <br></br>
        <label class="w-full  text-black   px-4 mb-3" id="title" type="text">
            Codigo de Barras
        </label>
        <select class="border-2 border-indigo-300 self-center">
    <option></option>
    <option>Seleccione</option>
    <option>243</option>
    <option>354</option>
    <option>443</option>
  </select>
        
        <br></br>
        <br></br>
        <br></br>
        <button    class="rounded-full inline-block no-underline shadow md:shadow-lg  text-black text-sm py-2 transition duration-500 ease-in-out bg-yellow-400 hover:bg-yellow-400 hover:text-black 
    sm:hover:bg-black sm:hover:text-white  md:hover:bg-black md:hover:text-white  transform hover:-translate-y-1 hover:scale-110  pl-2 pr-2 poppins mr-2">
            Eliminar
        </button>
        <button class="rounded-full inline-block no-underline shadow md:shadow-lg  text-black text-sm py-2 transition duration-500 ease-in-out bg-yellow-400 hover:bg-yellow-400 hover:text-black 
    sm:hover:bg-black sm:hover:text-white  md:hover:bg-black md:hover:text-white  transform hover:-translate-y-1 hover:scale-110  pl-2 pr-2 poppins ml-2">Cancelar 
        </button>


    </div>
    
        </center>
    )
}

export default Eliminar