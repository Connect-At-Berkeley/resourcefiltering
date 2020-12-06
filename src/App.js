import logo from './logo.svg';
//adapted from Dev Ed
import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import './App.css';
import Dropdown from "./Dropdown";
import Resource from "./Resource";
//help

const choices = [
  { value: 'chicken', label: 'Chicken' },
  { value: 'banana', label: 'Banana' },
  { value: 'rice', label: 'Rice' },
  {value: 'lemon', label: "Lemon"},
  {value: 'salt', label: "Salt"},
  {value: 'cherry', label: "Cherry"}
]
const App = () => {
    const APP_ID = 'your id';
    const APP_KEY = 'your key';
    //get id and key here: https://developer.edamam.com/edamam-recipe-api
    const [resources, setResources] = useState([]);
    const [selectedValue, setSelectedValue] = useState("chicken");

    useEffect(() =>
    {
      getResources();


    }, [selectedValue]);
    const getResources = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=${selectedValue}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setResources(data.hits);
      console.log(data.hits);
      
    }
    const handleChange = e => {
      console.log("Selected it!")
      setSelectedValue(e.value);
    }
    

    return (
        <div className ="ResourceFinder">
          
          <div className="dropdown">
          <Dropdown/>
          <div className="">
          <div className="">
            <br></br>
            <h5 style={{color: "#056BA5"}}> Choices </h5>
            <Select 
            options = {choices} 
            isMulti = {false}
            value={choices.find(obj => obj.value === selectedValue)}
            onChange={handleChange}
            />
          </div>
        </div>
          </div>
         
          <h3 className="background"> Resource Finder</h3>
          <div className="resourcedisplay">
          {resources.map(recipe =>(
            <Resource title={recipe.recipe.label} link={recipe.recipe.calories} image={recipe.recipe.image}/>
          ))};
          </div>
          
        </div>
        
        );
    }

    export default App;