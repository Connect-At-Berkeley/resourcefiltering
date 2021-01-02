import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import './App.css';
import ResourceDisplay from "./ResourceDisplay";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  const [selectedValue, setSelectedValue] = useState('');
  // const [finalSelections, setFinalSelections] = useState([]);
  
  const handleChange = (e) => {
    setSelectedValue(e.value);
    // setFinalSelections(finalSelections => [...finalSelections, selectedValue]);
    // console.log("This is the final array: ", finalSelections);
    console.log("This is the option we are adding: "+ selectedValue);

    
  }
  // const colourStyles = {
  //   control: styles => ({ ...styles, backgroundColor: 'white' }),
  //   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
  //     const color = chroma(data.color);
  //     return {
  //       ...styles,
  //       backgroundColor: isDisabled ? 'red' : blue,
  //       color: '#FFF',
  //       cursor: isDisabled ? 'not-allowed' : 'default',
  //       ...
  //     };
  //   },
  //   ...
  // };
  
    return (
      <Container fluid>
        <Row>
        <Col sm={4}>
        <div className="dropdown">
          <h2> Your Filters </h2> 
          <div className="dropdownbox">
            <h3> Choices </h3>
            <Select 
            // styles={colourStyles}
            menuColor="red"
            width="200px"
            options = {choices} 
            isMulti
            value = {choices.find(obj => obj.value === selectedValue)}
            onChange={handleChange}
            />
             </div>
        <div className="dropdownbox">
            <h3> Type </h3>
            <Select options = {type} isMulti/>
        </div>
        <div className="dropdownbox">
            <h3> Issue Area</h3>
            <Select options = {issue} isMulti/>
        </div>

        <div className="dropdownbox">
            <h3> College</h3>
            <Select options = {college} isMulti/>
        </div>

        <div className="dropdownbox">
            <h3> Department</h3>
            <Select options = {college} isMulti/>
        </div>

        <div className="dropdownbox">
            <h3>Industry</h3>
            <Select options = {college} isMulti/>
        </div>
        
        </div>
        <button className="button-style">Email My Results</button> 
        <button className="button-style"> Rate Our Matching</button>
        
        </Col>
        <Col>
        <ResourceDisplay finalSelections ={selectedValue}/>
        </Col>
        
        </Row>
        </Container>
        
        );
}
export default App;
// {finalSelections.map((a) => `${a}`).join('')}

