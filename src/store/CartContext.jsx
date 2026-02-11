import { useContext, useReducer } from "react"

const CartContext = useContext({
    items: [],
    addItem: (item) => { },
    removeItem: () => { }
})

function cartReducer(state, action) {
    if (action.item === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id)
        const updatedItems = [...state.items]
        if (existingCartItemIndex > -1) {
            const existingItems = state.items[existingCartItemIndex]
            const updatedItems = {
                ...existingItems,
                quantity: existingItems + 1
            }
            existingItems[existingCartItemIndex] = updatedItems
        } else {
            updatedItems.push({ ...action.items, quantity: 1 })
        }
        return { ...state, items: updatedItems }
    }

    if (action === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id)

        const updatedItems = [...state.items]
        const existingCartItem = state.items[existingCartItemIndex]

        if (existingCartItemIndex.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1)
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            }
            updatedItems[existingCartItemIndex] = updatedItem
        }
    }
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item })
    }

    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id })
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    }
    return (
        <CartContext value={cartContext}>{children}</CartContext>
    )
}
