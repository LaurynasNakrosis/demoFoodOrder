import { useEffect, useState } from "react"

import './Meals.css'

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
        <ul className='main-meals'>
            {loadedMeals.map((meal) => (
                <li key={meal.id}>{meal.name}</li>
            ))}
        </ul>
    )
}
