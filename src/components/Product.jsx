import { useEffect, useState } from "react"

import './Product.css'
import ProductItem from "./ProductItem"

export default function Meals() {

    const [loadedProducts, setLoadedProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {

            const response = await fetch('http://localhost:3000/meals')

            const meals = await response.json()
            setLoadedProducts(meals)
        }
        fetchProducts()
    }, [])

    return (
        <ul className='main-product'>
            {loadedProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ul>
    )
}
