import { useContext } from "react"
import CartContext from "../store/CartContext"
import Modal from "./UI/Modal"

export default function Cart() {
    const cartCtx = useContext(CartContext)

    const cartTotal = cartCtx.items.reduce((totalPrice, item) =>
        totalPrice + item.quantity * item.price,
        0
    )
    return (
        <Modal>
            <ul>
                {cartCtx.items.map((item) => (
                    <li key={item.id}>
                        {item.name - item.quantity}
                    </li>
                ))}
                <p>{cartTotal}</p>
            </ul>
        </Modal>
    )
}
