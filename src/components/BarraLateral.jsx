import React from 'react'
import ItemMenu from './ItemMenu'

const BarraLateral = () => {
  return (
   <aside>

      <nav>
        <ul className="listaMenu"></ul>
        <ItemMenu textoMenu="Inicio"></ItemMenu>
        <ItemMenu textoMenu="Mas vistas"></ItemMenu>
        <ItemMenu textoMenu="Favoritas"></ItemMenu>
        <ItemMenu textoMenu="Nueva"></ItemMenu>
        <ItemMenu textoMenu="Explorar"></ItemMenu>       

      </nav>
   </aside>
  )
}

export default BarraLateral