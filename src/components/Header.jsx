import React, { useContext } from 'react'

import './Header.css'
import logo from '../assets/logo.png'
import Button from './UI/Button'
import CartContext from '../store/CartContext'

export default function Header() {
    const cartCtx = useContext(CartContext)
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity
    }, 0)
    return (
        <header className='main-header'>
            <div id='title' alt='A take away'>
                <img src={logo} />
                <h1>Demo Food App</h1>
            </div>
            <nav>
                <Button textOnly >Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}