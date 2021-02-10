import React from 'react';

const Recepcion = () => {
    return (
        <div >
            <form className="h-full overflow-hidden flex items-center justify-center">
                <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                            <div class="max-w-md mx-auto">
                                <div class="flex items-center space-x-5">
                                    <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">R</div>
                                    <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                                        <h2 class="leading-relaxed">Recepción de equipos donados</h2>
                                        <p class="text-sm text-gray-500 font-normal leading-relaxed">Formulario de recepción de equipo donado.</p>
                                    </div>
                                </div>
                                <div class="divide-y divide-gray-200">
                                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div class="flex flex-col">
                                            <label class="leading-loose">Donante</label>
                                            <div class="flex items-center space-x-4">
                                                <div class="flex flex-col">
                                                    <div class="relative focus-within:text-gray-600 text-gray-400">
                                                        <input type="text" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Nombre" />

                                                    </div>
                                                </div>
                                                <div class="flex flex-col">
                                                    <div class="relative focus-within:text-gray-600 text-gray-400">
                                                        <input type="text" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Apellido" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                            <label class="leading-loose">Ubicación</label>
                                            <button class="bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">Capturar</button>
                                        </div>
                                    <div class="flex items-center space-x-4">
                                        <div class="flex flex-col">
                                        <label class="leading-loose">Foto</label>
                                            <div class="overflow-hidden relative w-64 mt-4 mb-4">
                                                <button class="bg-blue-500 hover:bg-indigo-dark text-white font-bold py-2 px-4  inline-flex items-center">
                                                    <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                                                    </svg>
                                                    <span class="ml-2">Galería</span>
                                                </button>
                                                <input class="cursor-pointer absolute block opacity-0 pin-r pin-t" type="file" name="vacancyImageFiles"  onChange="fileName" multiple/>
                                            </div>
                                        </div>
                                        <div class="flex flex-col">
                                        <label class="leading-loose">Video</label>
                                            <div class="overflow-hidden relative w-64 mt-4 mb-4">
                                                <button class="bg-blue-500 hover:bg-indigo-dark text-white font-bold py-2 px-4 inline-flex items-center">
                                                    <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                                                    </svg>
                                                    <span class="ml-2">Galería</span>
                                                </button>
                                                <input class="cursor-pointer absolute block opacity-0 pin-r pin-t" type="file" name="vacancyImageFiles"  onChange="fileName" multiple/>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-sm text-gray-500 font-normal leading-relaxed">Características básicas</p>
                                        <div class="flex flex-col">
                                            <label class="leading-loose">Tipo de equipo</label>
                                            <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label class="leading-loose">Procesador</label>
                                            <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label class="leading-loose">RAM</label>
                                            <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label class="leading-loose">Memoria Interna</label>
                                            <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label class="leading-loose">Sistema operativo</label>
                                            <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label class="leading-loose">Características extras del equipo</label>
                                            <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" />
                                        </div>
                                    </div>
                                    <div class="pt-4 flex items-center space-x-4">
                                        <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancelar </button>
                                        <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Guardar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Recepcion
