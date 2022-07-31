import './Navbar.css'
import Button from '../Button/Button'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {

    return (
      <nav className="Navbar">
        <div>
          <h1>Compumundo HMR</h1>
        </div>
        <div>
          <Button color='black'>Notebooks</Button>
          <Button color='black'>PC</Button>
          <Button color='black'>Componentes</Button>
          <Button color='black'>Celulares</Button>
          <Button color='black'>Consolas</Button>
        </div>
        <CartWidget />
      </nav>
    )
}

export default Navbar 