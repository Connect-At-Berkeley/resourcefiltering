import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import './App.css';
import CardBkg from './CardBkg';
import Rating from './Rating';



const type = [
    { value: 'student success', label: 'Student Success' },
    { value: 'basic needs', label: 'Basic Needs' },
  ]
const issue = [
    { value: 'academics', label: 'Academics' },
    { value: 'professional', label: 'Professional Development' },
    { value: 'sports', label: 'Sports' },
    { value: 'arts', label: 'Arts' },
    { value: 'research', label: 'Research' },
    { value: 'otherecs', label: 'Other Extracurriculars' },
  ]
const college = [
    { value: 'coc', label: 'College of Chemistry' },
    { value: 'coe', label: 'College of Engineering' },
    { value: 'ced', label: 'College of Environmental Design' },
    { value: 'lns', label: 'Letters and Science' },
    { value: 'cns', label: 'College of Natural Resources' },
    { value: 'haas', label: 'Haas School of Business' },
  ]
const App = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [finalSelections, setFinalSelections] = useState(['']);
  
const handleChange = (e) => {
    setSelectedValue(e.value);
    setFinalSelections(finalSelections => [...finalSelections, e.value]);
    console.log("This is the final array: ", finalSelections);
    console.log("This is the option we are adding: ", selectedValue);
  }
  

  
    return (
      <div>

      <div className="dropdown">
        <div className="">
          <h3 className="" style={{color: "#056BA5"}}> Your Filters </h3> 
        </div>
        <br></br>
            
        <div className="">
          <div className="">
            <h5 style={{color: "#056BA5"}}> Type </h5>
            <Select options = {type} isMulti/>
          </div>
        </div>
      <br></br>
        <div className="">
          <div className="">
            <h5 style={{color: "#056BA5"}}> Issue Area</h5>
            <Select options = {issue} isMulti/>
          </div>
        </div>
        <br></br>

        <div className="">
          <div className="">
            <h5 style={{color: "#056BA5"}}> College</h5>
            <Select options = {college} isMulti/>
          </div>
        </div>
        <br></br>

        <div className="">
          <div className="">
            <h5 style={{color: "#056BA5"}}> Department</h5>
            <Select options = {college} isMulti/>
          </div>
        </div>
        <br></br>

        <div className="">
          <div className="">
            <h5 style={{color: "#056BA5"}}>Industry</h5>
            <Select options = {college} isMulti/>
          </div>
        </div>

      <br></br>
      <div>
        <button style={{"margin-right": "1vw"}} className="btn-style">Email My Results</button>
        {/* <button style={{"margin-left": "1vw"}}className="btn-style">Rate Our Matching</button> */}
        <Rating/>
      </div>
      </div>
  
      <style>{'body { background-color: #056BA5;}'}</style>
      <div>
        <CardBkg/>
        <div className="bot-btns">
          <button style={{"margin-left": "4.75vw"}} className="btn-style2">Prev</button>
          <button style={{"margin-right": "5.5vw"}} className="btn-style2">Next</button>
        </div>
      </div>
      
     

      </div>
        // {finalSelections.map((a) => ${a}).join('')}

        );
}
export default App;