import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Testimonials = () => {
  const [tareas, setTareas] = useState([]);
  const [newTarea, setNewTarea] = useState({ nombre: '', carrera: '', comentario: '' });

  useEffect(() => {
    fetchTareas();
  }, []);

  const fetchTareas = async () => {
    try {
      const response = await fetch('http://192.168.0.108:8000/api/comentarios/');
      const data = await response.json();
      setTareas(data);
    } catch (error) { 
      console.error('Error fetching tareas:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTarea(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const createTarea = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.0.108:8000/api/comentarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTarea),
      });

      if (!response.ok) {
        throw new Error('Failed to create tarea');
      }

      fetchTareas();
      setNewTarea({ nombre: '', carrera: '', comentario: '' });
    } catch (error) {
      console.error('Error creating tarea:', error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-black-800 capitalize lg:text-3xl dark:text-white">
          Lo que nuestros <span className="text-blue-500">estudiantes</span> dicen
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-black-500 dark:text-gray-300">
          Nuestros estudiantes comparten sus experiencias y logros después de completar nuestros cursos.
        </p>

        {/* Formulario para crear nueva tarea */}
        <form onSubmit={createTarea} className="max-w-md mx-auto mt-8">
          <input
            type="text"
            name="nombre"
            value={newTarea.nombre}
            onChange={handleInputChange}
            placeholder="Nombre"
            className="w-full px-3 py-2 mb-3 text-gray-700 border rounded"
            required
          />
          <input
            type="text"
            name="carrera"
            value={newTarea.carrera}
            onChange={handleInputChange}
            placeholder="Carrera"
            className="w-full px-3 py-2 mb-3 text-gray-700 border rounded"
            required
          />
          <textarea
            name="comentario"
            value={newTarea.comentario}
            onChange={handleInputChange}
            placeholder="Comentario"
            className="w-full px-3 py-2 mb-3 text-gray-700 border rounded"
            required
          ></textarea>
          <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded">
            Enviar Comentario
          </button>
        </form>

        {/* Carrusel de tareas */}
        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {tareas.map((tarea) => (
              <SwiperSlide key={tarea.id}>
                <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                  <p className="leading-loose text-gray-500 dark:text-gray-300">
                    {tarea.comentario}
                  </p>
                  <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                    <div className="mx-4">
                      <h1 className="font-semibold text-blue-500 dark:text-blue-400">{tarea.nombre}</h1>
                      <span className="text-sm text-gray-500 dark:text-gray-300">Estudiante de {tarea.carrera}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;