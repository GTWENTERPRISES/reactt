import React, { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-3 mx-auto">
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <a href="#" className="flex items-center">
                    <img className="h-16 w-auto" src="https://scontent.fatf4-1.fna.fbcdn.net/v/t39.30808-6/217483400_105912085104142_1101236672080800580_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=TKxUCSeJ4eUQ7kNvgEEfIJv&_nc_ht=scontent.fatf4-1.fna&oh=00_AYAyi9P4Ob1yaxan3kOyhwJ_Hylh7-ySVBmm9E35fH1P3g&oe=66BDF911" alt="Logo"/>
                    <span className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Corporación Educativa Americano</span>
                </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 ml-auto">
                <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">Inicio</a>
                <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">Cursos</a>
                <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">Inscripciones</a>
                <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">Nosotros</a>
                <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">Contacto</a>
                
                <div className="flex items-center space-x-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">
                        <i className="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>

            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none"
                    aria-label="toggle menu"
                >
                    {!isOpen ? (
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"></path>
                        </svg>
                    )}
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden mt-2 bg-white dark:bg-gray-900">
                <div className="flex flex-col space-y-2">
                    <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">Inicio</a>
                    <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">Cursos</a>
                    <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">Inscripciones</a>
                    <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">Nosotros</a>
                    <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">Contacto</a>
                </div>
                <div className="flex justify-center mt-4 space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">
                        <i className="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>
        )}
    </div>
</nav>

    );
}

export default Nav;