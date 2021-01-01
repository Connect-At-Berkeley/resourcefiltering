import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import './App.css';
import ResourceDisplay from "./ResourceDisplay";

const choices = [
  { value: 'chicken', label: 'Chicken' },
  { value: 'banana', label: 'Banana' },
  { value: 'rice', label: 'Rice' },
  {value: 'lemon', label: "Lemon"},
  {value: 'salt', label: "Salt"},
  {value: 'cherry', label: "Cherry"}
]
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
  const [selectedValue, setSelectedValue] = useState('chicken');
  // const [finalSelections, setFinalSelections] = useState([]);
  
  const handleChange = (e) => {
    setSelectedValue(e.value);
    // setFinalSelections(finalSelections => [...finalSelections, selectedValue]);
    // console.log("This is the final array: ", finalSelections);
    console.log("This is the option we are adding: "+ selectedValue);

    
  }
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled ? 'red' : blue,
        color: '#FFF',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ...
      };
    },
    ...
  };
  
    return (
      <div>
        <div className ="dropdown">
        
        <div className="">
          <h2 className="" style={{color: "#056BA5"}}> Your Filters </h2> 
        </div>
        <br></br>
            <h3 style={{color: "#056BA5"}}> Choices </h3>
            <Select 
            styles={colourStyles}
            menuColor="red"
            width="200px"
            options = {choices} 
            isMulti
            value = {choices.find(obj => obj.value === selectedValue)}
            onChange={handleChange}
            />
        <br></br>
        <div className="">
          <div className="">
            <h3 style={{color: "#056BA5"}}> Type </h3>
            <Select options = {type} isMulti/>
          </div>
        </div>
      <br></br>
        <div className="">
          <div className="">
            <h3 style={{color: "#056BA5"}}> Issue Area</h3>
            <Select options = {issue} isMulti/>
          </div>
        </div>
        <br></br>

        <div className="">
          <div className="">
            <h3 style={{color: "#056BA5"}}> College</h3>
            <Select options = {college} isMulti/>
          </div>
        </div>
        <br></br>

        <div className="">
          <div className="">
            <h3 style={{color: "#056BA5"}}> Department</h3>
            <Select options = {college} isMulti/>
          </div>
        </div>
        <br></br>

        <div className="">
          <div className="">
            <h3 style={{color: "#056BA5"}}>Industry</h3>
            <Select options = {college} isMulti/>
          </div>
        </div>
        <br></br>
        <button style={{"margin-left": '5vw'}} className="button-style">Email My Results</button> 
        <button className="button-style"> Rate Our Matching</button>
        
        
        </div>
        <ResourceDisplay finalSelections ={selectedValue}/>
        </div>
        
        );
}
export default App;
// {finalSelections.map((a) => `${a}`).join('')}

