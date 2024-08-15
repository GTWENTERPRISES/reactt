

const Banner = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 ">
    <div className="max-w-screen-xl mx-auto px-4 py-10 gap-12 text-gray-600 dark:text-gray-300 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-xl text-indigo-600 dark:text-indigo-400 font-medium">
                Tenemos a los mejores expertos
            </h1>
            <h2 className="text-4xl text-gray-800 dark:text-gray-100 font-extrabold mx-auto md:text-5xl">
                ¡Conviértete en un profesional ahora mismo!
            </h2>
            <p className="max-w-2xl mx-auto">
                Explora nuestros cursos, gestiona inscripciones, y obtén toda la información que necesitas para avanzar en tu educación profesional.
            </p>
        </div>
        <div className="mt-14">
            <img src="https://img.freepik.com/free-photo/front-view-kid-cheating-school_23-2150105036.jpg?t=st=1723347543~exp=1723351143~hmac=5cfe2b84331e17476549ab73ff6d1446bd07fb68433f1bb24e95b22b9450d0c1&w=1380" 
                 className="w-full h-50% shadow-lg rounded-lg border dark:border-gray-700" 
                 alt="Imagen representativa" />
        </div>
    </div>
</section>

  )
}

export default Banner