//adapted from Dev Ed
import React, {useEffect, useState} from 'react';
import './App.css';
import Resource from "./Resource";
//help
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ResourceDisplay = ({finalSelections}) => {
    const APP_ID = '';
    const APP_KEY = '';
    //get id and key here: https://developer.edamam.com/edamam-recipe-api
    const [resources, setResources] = useState([]);
    

    useEffect(() =>
    {
      getResources();


    }, [finalSelections]);
   
    const getResources = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=${finalSelections}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      console.log("this is the api: " + `https://api.edamam.com/search?q=${finalSelections}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setResources(data.hits);
      console.log(data.hits);
      
    }
  

    return (
        <div className ="ResourceFinder">
          <h1> Resource Finder</h1>
          <div className="resourcedisplay">
          {resources.map(recipe =>(
            <Resource title={recipe.recipe.label} link={recipe.recipe.calories} image={recipe.recipe.image}/>
          ))}
          </div>
          
        </div>
        
        );
    }

    export default ResourceDisplay;