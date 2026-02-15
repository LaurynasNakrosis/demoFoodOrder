import { createContext, useState } from "react"

const UserProgressContext = createContext({
    progress: '',
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { }
})

export function UserProgressContextProvider({ children }) {
    const [userState, setUserState] = useState('')

    function showCart() {
        setUserState('cart')
    }

    function hideCart() {
        setUserState('')
    }

    function showCheckout() {
        setUserState('checkout')
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
        <UserProgressContext.Provider value={userContext}>{children}</UserProgressContext.Provider>
    )
}

export default UserProgressContext