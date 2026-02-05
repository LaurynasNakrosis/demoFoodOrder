import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header className='main-header'>
            <div id='title' alt='A take away'>
                <img src={logo} />
                <h1>Demo Food App</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    )
}