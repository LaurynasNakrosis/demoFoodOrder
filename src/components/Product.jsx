import { useEffect, useState } from "react"

import './Product.css'
import MealItem from "./MealItem"

export default function Meals() {

    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(() => {
        async function fetchMeals() {

            const response = await fetch('http://localhost:3000/meals')

            const meals = await response.json()
            setLoadedMeals(meals)
        }
        fetchMeals()
    }, [])

    return (
        <ul className='main-product'>
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    )
}
