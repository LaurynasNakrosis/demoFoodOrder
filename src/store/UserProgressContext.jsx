import { useState } from "react"

const UserProgrssContext = {
    progress: '',
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { }
}

export function UserProgressContext({ children }) {
    const [userState, setUserState] = useState('')

    function showCart() {
        setUserState('Cart')
    }

    function hideCart() {
        setUserState('')
    }

    function showCheckout() {
        setUserState('Checkout')
    }

    function hideCheckout() {
        setUserState('')
    }

    const userContext = {
        progress: userState,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return (
        <UserProgressContext value={userContext}>{children}</UserProgressContext>
    )
}

export default UserContext