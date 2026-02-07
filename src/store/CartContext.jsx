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

    if (action === 'DELETE_ITEM') { }
}

export default function CartContext({ children }) {
    useReducer(cartReducer, { items: [] })
    return (
        <CartContext>{children}</CartContext>
    )
}
