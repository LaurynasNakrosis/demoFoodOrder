import React, { useContext } from 'react'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../util/formatting'
import Modal from './UI/Modal'
import Button from './UI/Button'
import UserProgressContext from '../store/UserProgressContext'
import Input from './UI/Input'

export default function Checkout() {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce((totalPrice, item) =>
        totalPrice + item.quantity * item.price,
        0
    )
    function handleClose() {
        userProgressCtx.hideCheckout()
    }
    return (
        <Modal open={userProgressCtx.progress === 'checkout'} >
            <form>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label='Full Name' type='text' id='full-name' />
                <Input label='Email' type='email' id='email' />
                <Input label='Street' type='text' id='street' />
                <div>
                    <Input label='Postal Code' type='text' id='postel-code' />
                    <Input label='City' type='text' id='city' />
                </div>
                <p>
                    <Button textOnly onClick={handleClose}>Close</Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}
