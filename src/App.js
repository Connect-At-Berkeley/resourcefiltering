import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import './App.css';
import ResourceDisplay from "./ResourceDisplay";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";

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
  // const [selectedValue, setSelectedValue] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [secondModalShow, setSecondModalShow] = React.useState(false);
  const [finalSelections, setFinalSelections] = useState([""]);
  
  // const handleChange = (e) => {
  //   setSelectedValue(e.value);
  //   // setFinalSelections(finalSelections => [...finalSelections, selectedValue]);
  //   // console.log("This is the final array: ", finalSelections);
  //   console.log("This is the option we are adding: "+ e.value);

    
  // }
  const handleSelectedMultiple = (e) =>{
    // let choicesArray = [...finalSelections, e];
    // setFinalSelections(choicesArray)
    // // console.log('values', choicesArray)
    let dummy = [{value: '', label:''}].concat(e)
    setFinalSelections(dummy)
    
  }
  function concatFunc(total, addition){
    console.log("this is the selections", finalSelections)
    console.log("starting value", total)
    if (total.value == ''){
      return addition.value;
    }
    // if (total instanceof String){
    //   return total + " + " + addition.value;
    // }
    else{
      return total + " + " + addition.value;
    }
  }
  function EmailEnter(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Email My Results!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            Email: 
            <input type="text" name="email"></input>
          </label>
        </Modal.Body>
        <Modal.Footer>
          <button className="button-style" onClick={() => { setSecondModalShow(true);}}>Send Email</button>
        </Modal.Footer>
      </Modal>
    );
  }
  function SentEmail(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Thank you!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            Your email has been sent!
          </label>
        </Modal.Body>
        <Modal.Footer>
          <button className="button-style" onClick={() => {props.onHide; setModalShow(false); setSecondModalShow(false);}}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }

  
    return (
      <Container fluid>
        <Row>
        <Col sm={4}>
        <div className="sticky-top">
        <div className="dropdown">
          <h2> Your Filters </h2> 
          <div className="dropdownelem">
            <h4> Choices </h4>
            <Select 
            options = {choices} 
            isMulti
            onChange={handleSelectedMultiple}
            />
             </div>
        <div className="dropdownelem">
            <h4> Type </h4>
            <Select options = {type} isMulti/>
        </div>
        <div className="dropdownelem">
            <h4> Issue Area</h4>
            <Select options = {issue} isMulti/>
        </div>

        <div className="dropdownelem">
            <h4> College</h4>
            <Select options = {college} isMulti/>
        </div>

        <div className="dropdownelem">
            <h4> Department</h4>
            <Select options = {college} isMulti/>
        </div>

        <div className="dropdownelem">
            <h4>Industry</h4>
            <Select options = {college} isMulti/>
        </div>
        <div className="dropdownelem">
        <button onClick={() => setModalShow(true)} className="button-style">Email My Results</button> 
        <button className="button-style"> Rate Our Matching</button>
        </div>
        
        </div>
        </div>

  
        <EmailEnter
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <SentEmail
        show={secondModalShow}
        onHide={()=> setSecondModalShow(false)}
        />
        </Col>
        <Col>
        <ResourceDisplay finalSelections ={finalSelections.reduce(concatFunc)}/>
        </Col>
        
        </Row>
        </Container>
        
        );
        // <ResourceDisplay finalSelections ={selectedValue}/>
}
export default App;
// {finalSelections.map((a) => `${a}`).join('')}

