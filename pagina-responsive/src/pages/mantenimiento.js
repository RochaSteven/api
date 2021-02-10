import React from 'react';
import {Link} from 'react-router-dom';

const Mantenimiento = () => {
    return (
        <>
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'>
            <div className='pr-8 '>
            <Link className='p-4' to="/funcional">Formulario fun.</Link>
            <Link className='p-4' to="/repuesto">Formulario rep.</Link>
            <Link className='p-4' to="/obsoleto">Formulario obs.</Link>
            <Link className='p-4' to="/eliminar">Eliminar</Link>
            </div>
        </nav>

<p class="font-mono text-xl text-center  ...">Registro de donaciones</p>
    <table class="table-fixed m-16">
  <thead>
    <tr>
      <th class="w-1/5 ...">Cod. Barras</th>
      <th class="w-1/5 ...">Marca</th>
      <th class="w-1/5 ...">Modelo</th>
      <th class="w-1/5 ...">Mantenimiento</th>
      <th class="w-1/5 ...">Repuesto</th>
      <th class="w-1/5 ...">Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>HP</td>
      <td>HP-858</td>
      <td>Si</td>
      <td>Si</td>
      <td>Funcional</td>
      <td class=" h-20"><button class=" mr-3 bg-gray-200 hover:bg-blue-700 hover:text-white border border-gray-400 text-blue-700 font-bold py-1 px-6 rounded-lg">
  Modificar
</button></td>
    </tr>
    <tr class="bg-blue-200">
      <td>02</td>
      <td>Acer</td>
      <td>Aspire v3</td>
      <td>Si</td>
      <td>No</td>
      <td>Repuesto</td>
      <td class=" h-20"><button class="mr-3 bg-gray-200 hover:bg-blue-700 hover:text-white border border-gray-400 text-blue-700 font-bold py-1 px-6 rounded-lg">
  Modificar
</button></td>
    </tr>
    <tr>
      <td>03</td>
      <td>Toshi</td>
      <td>sa telutec</td>
      <td>No</td>
      <td>No</td>
      <td>Obsoleto</td>
      <td class=" h-20"><button class="mr-3 bg-gray-200 hover:bg-blue-700 hover:text-white border border-gray-400 text-blue-700 font-bold py-1 px-6 rounded-lg">
  Modificar
</button></td>
    </tr>
  </tbody>
</table>
</>
    )
}

export default Mantenimiento
