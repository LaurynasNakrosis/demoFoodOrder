import React from 'react'


import './ProductItem.css'
import { currencyFormatter } from '../util/formatting'
import Button from './UI/Button'

export default function ProductItem({ product }) {
    return (
        <li className='product-item'>
            <article >
                <img src={`http://localhost:3000/${product.image}`} alt={product.name} />
                <div>
                    <h3>{product.name}</h3>
                    <p className='product-item-price'>{currencyFormatter.format(product.price)}</p>
                    <p className='product-item-description'>{product.description}</p>
                </div>
                <p>
                    <Button className='product-item-button'>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}
