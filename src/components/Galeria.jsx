import React from 'react'
import Banner from './Banner'
import Imagen from './Imagen'

const Galeria = () => {
  return (
    <section className='galeria'> 
    <Banner></Banner>
    <h2 className='subtitulo'>Navega por la Galeria</h2>
      <section className='imagenes'>
       <Imagen></Imagen>
        <Imagen></Imagen>
        <Imagen></Imagen>
        <Imagen></Imagen>
      
      </section>
    
    </section>

  )
}

export default Galeria