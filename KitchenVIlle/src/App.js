import React, { useEffect, useState } from 'react';
import Recipe from './Recipie';
import './App.css';

const App = () => {
  const APP_ID = "08706b89";
  const APP_KEY = "30f4b2c1b4937486525d9a0817552ebe";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  useEffect(() => {
    document.title="KitchenVille"
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Strange Recipes Finder</h1>
        <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button  className="search-button" type="submit">
          Search 
        </button>
      </form>
      
      </header>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;