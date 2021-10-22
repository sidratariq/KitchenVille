import React from 'react'
import './recipie.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol></ol>
            <p>{calories}</p>
            <ul className="ingredients">
                {ingredients.map((ingredient, index) => (
                    <li className="ingredient" key={index}>
                        <i className="fas fa-caret-right" /> {ingredient.text}
                    </li>
                ))}
            </ul>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;