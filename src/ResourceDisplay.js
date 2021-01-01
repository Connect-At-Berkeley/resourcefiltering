//adapted from Dev Ed
import React, {useEffect, useState} from 'react';
import './App.css';
import Resource from "./Resource";
//help


const ResourceDisplay = ({finalSelections}) => {
    const APP_ID = '53ce6f41';
    const APP_KEY = '5ffbad31fe45083fbe0f866dd398d4db';
    //get id and key here: https://developer.edamam.com/edamam-recipe-api
    const [resources, setResources] = useState([]);
    

    useEffect(() =>
    {
      getResources();


    }, [finalSelections]);
   
    const getResources = async () =>{
      // `https://api.edamam.com/search?q=${finalSelections}&app_id=${APP_ID}&app_key=${APP_KEY}`
      const response = await fetch("")
      console.log("this is the api: " + `https://api.edamam.com/search?q=${finalSelections}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setResources(data.hits);
      console.log(data.hits);
      
    }
  

    return (
        <div className ="ResourceFinder">
          <h1 className="background"> Resource Finder</h1>
          <div className="resourcedisplay">
          {resources.map(recipe =>(
            <Resource title={recipe.recipe.label} link={recipe.recipe.calories} image={recipe.recipe.image}/>
          ))}
          </div>
          
        </div>
        
        );
    }

    export default ResourceDisplay;