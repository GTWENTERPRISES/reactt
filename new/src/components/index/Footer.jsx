import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-800">
    <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#" class="flex items-center">
            <img class="w-auto h-16" src="https://scontent.fatf4-1.fna.fbcdn.net/v/t39.30808-6/217483400_105912085104142_1101236672080800580_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=TKxUCSeJ4eUQ7kNvgEEfIJv&_nc_ht=scontent.fatf4-1.fna&oh=00_AYAyi9P4Ob1yaxan3kOyhwJ_Hylh7-ySVBmm9E35fH1P3g&oe=66BDF911" alt="Logo"/>
            <span class="ml-3 text-lg font-semibold dark:text-white">Corporación Educativa Americano</span>
        </a>

        <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Nuestra Empresa
            </a>
            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Cursos
            </a>
            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Políticas de privacidad
            </a>
            <a href="mailto:corpamericano@gmail.com" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Contacto
            </a>
        </div>
    </div>

    <div class="bg-gray-100 dark:bg-gray-900">
        <div class="container p-4 mx-auto text-center">
            <p class="text-sm text-gray-500 dark:text-gray-400">© 2024 <a href="#" class="dark:text-white hover:underline">Corporación Educativa Americano</a>. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>





  )
}

export default Footer