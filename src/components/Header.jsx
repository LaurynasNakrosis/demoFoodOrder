import React, { useContext } from 'react'

import './Header.css'
import logo from '../assets/logo.png'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'

export default function Header() {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)


    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity
    }, 0)

    function handleShowCard() {
        userProgressCtx.showCart()
    }

    return (
        <header className='main-header'>
            <div id='title' alt='A take away'>
                <img src={logo} />
                <h1>Demo Food App</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCard} >Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}