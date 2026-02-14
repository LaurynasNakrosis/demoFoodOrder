import { useContext } from "react"
import CartContext from "../store/CartContext"
import Modal from "./UI/Modal"
import UserProgressContext from "../store/UserProgressContext"
import { currencyFormatter } from "../util/formatting"

export default function Cart() {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce((totalPrice, item) =>
        totalPrice + item.quantity * item.price,
        0
    )
    return (
        <Modal open={userProgressCtx.progress}>
            <ul>
                {cartCtx.items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                    </li>
                ))}
                <p>{currencyFormatter.format(cartTotal)}</p>
            </ul>
        </Modal>
    )
}
