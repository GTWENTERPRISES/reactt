import React from 'react'
import '/src/styles/index.css'

const Characteristics = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-black dark:text-white capitalize lg:text-3xl">
            Descubre Nuestros Cursos <span class="underline decoration-blue-500 dark:decoration-blue-300">Profesionales</span>
        </h1>

        <p class="mt-4 text-black-500 dark:text-gray-300 xl:mt-6">
            Aprende con los mejores y lleva tus habilidades al siguiente nivel con nuestros cursos especializados.
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-black dark:text-white ">Cursos Prácticos y Efectivos</h1>

                <p class="text-black-500 dark:text-gray-300">
                    Cursos diseñados para ofrecerte conocimientos prácticos que puedes aplicar de inmediato en el mundo real.
                </p>

                <a href="#" class="inline-flex items-center -mx-1 text-sm text-blue-500 dark:text-blue-400 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600 dark:hover:text-blue-300">
                    <span class="mx-1">leer más</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>

            <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-black dark:text-white capitalize">Con los mejores profesionales</h1>

                <p class="text-black-500 dark:text-gray-300">
                    Nuestros cursos están orientados por los mejores maestros quienes te guiarán durante tu aprendizaje.
                </p>

                <a href="#" class="inline-flex items-center -mx-1 text-sm text-blue-500 dark:text-blue-400 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600 dark:hover:text-blue-300">
                    <span class="mx-1">leer más</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>

            <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-black dark:text-white capitalize">Nuevos Cursos Mensualmente</h1>

                <p class="text-black-500 dark:text-gray-300">
                    Mantén tus habilidades actualizadas con nuestros nuevos cursos que se agregan cada mes.
                </p>

                <a href="#" class="inline-flex items-center -mx-1 text-sm text-blue-500 dark:text-blue-400 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600 dark:hover:text-blue-300">
                    <span class="mx-1">leer más</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>

           
        </div>
    </div>
</section>



     
  

  )
}

export default Characteristics