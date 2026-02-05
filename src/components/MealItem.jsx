import React from 'react'

export default function MealItem({ meal }) {
    return (
        <li>
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p>{meal.price}</p>
                    <p>{meal.description}</p>
                </div>
                <p>
                    <button>Add to Cart</button>
                </p>
            </article>
        </li>
    )
}
