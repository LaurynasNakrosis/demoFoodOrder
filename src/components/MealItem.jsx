import React from 'react'


import './MealItem.css'
import { currencyFormatter } from '../util/formatting'

export default function MealItem({ meal }) {
    return (
        <li className='product-item'>
            <article >
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className='product-item-price'>{currencyFormatter.format(meal.price)}</p>
                    <p className='product-item-description'>{meal.description}</p>
                </div>
                <p>
                    <button className='product-item-button'>Add to Cart</button>
                </p>
            </article>
        </li>
    )
}
