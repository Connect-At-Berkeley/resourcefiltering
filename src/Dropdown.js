import React from "react";
import Select from 'react-select';
import './App.css';

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
const Dropdown = () => {
    return (
        <div>
        
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
        
        </div>

        
        );
}
export default Dropdown;