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
    { value: 'student-success', label: 'Student Success' },
    { value: 'basic-needs', label: 'Basic Needs' },
    { value: 'diversity-equity-and-inclusion', label: 'Diversity, Equity, and Inclusion' },
    { value: 'health', label: 'Health' },
    { value: 'covid19', label: 'COVID-19' },
    { value: 'financial aid', label: 'Financial Aid' },
  ]
  const issue = [
    {
      label: "Student Success",
      options: [
        { value: 'chemistry', label: 'Chemistry' },
        { value: 'engineering', label: 'Engineering' },
        { value: 'college-of-environmental-design', label: 'College of Environmental Design' },
        { value: 'lns', label: 'Letters and Science' },
        { value: 'cns', label: 'College of Natural Resources' },
        { value: 'haas', label: 'Haas School of Business' }
      ]
    },
    {
      label: "Basic Needs",
      options: [

    { value: 'legal', label: 'Legal' },
    { value: 'international', label: 'International' },
    { value: 'tutoring', label: 'Tutoring' },
    { value: 'tech-resources', label: 'Tech Resources' },
    { value: 'accommodations', label: 'Accommodations' },
    { value: 'athletics', label: 'Athletics' },
    { value: 'parents-and-family', label: 'Parents and Family' },
    { value: 'food', label: 'Food' },
    { value: 'on-campus-housing', label: 'Housing - On Campus' },
    { value: 'off-campus-housing', label: 'Housing - Off Campus' },
    { value: 'transportation', label: 'Transportation' },


      ]
    },
    {
      label: "Health",
      options: [
        { value: 'mental', label: 'Mental' },
        { value: 'physical', label: 'Physical'},
      ]
    },
    {
      label: "COVID-19",
      options:[
          

    { value: 'academic-support', label: 'Academic Support' },
    { value: 'finance', label: 'Finance'},
    { value: 'health-mental-health', label: 'Health and Mental Health'},
      ]
    }

  ]

  const college = [
    {
      label: "All Colleges",
      options: [
        { value: 'career', label: 'Career' },
    { value: 'scholarships', label: 'Scholarships' },
    { value: 'involvement', label: 'Involvement' },
    { value: 'course-advice', label: 'Course Advice' },
    { value: 'research', label: 'Research' },

      ]
    },


  ]
const App = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [secondModalShow, setSecondModalShow] = React.useState(false);
  const [finalSelections, setFinalSelections] = useState([""]);
  const [multipleFilters, setMultipleFilters] = useState({});
  const [disableIssue, setDisableIssue] = useState(true);
  const [disableFilter, setDisableFilter] = useState(true);

  const handleSelectedMultiple = (e, name) =>{
    console.log("e", e)
    setFinalSelections(e)
    setMultipleFilters({...multipleFilters, [name]: e})
    if (name=="type"){
      setDisableIssue(false);
    }
    if(name=="issue"){
      setDisableFilter(false);
    }
    
  }
 

  function concatDictionary(){

    let finalstring = ""
    console.log("obj", multipleFilters);
    if (multipleFilters == null){
      return ;

    }else{
      for (const value of Object.values(multipleFilters)) {
        if (Array.isArray(value)){
          for (const obj of value) {
            console.log("obj: ", obj["value"])
            finalstring = finalstring + obj["value"] + "+"
            
    
          }
             finalstring = finalstring.replace(/.$/, "/");
        }

        }
       console.log(finalstring);
       return finalstring;

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
  // const IssueArea = () =>(
  //   <div className="dropdownelem">
  //           <h4> Issue Area</h4>
  //           <Select 
  //           options = {issue} 
  //           isMulti
  //           onChange={(e) => handleSelectedMultiple(e,"issue")}
  //           />
  //       </div>
  // )

  
    return (
      <Container fluid>
        <Row>
        <Col sm={4}>
        <div className="sticky-top">
        <div className="dropdown">
          <h2> Your Filters </h2> 
        <div className="dropdownelem">
            <h4> Type </h4>
            <Select 
            placeholder={<div>select the type...</div>}
            options = {type} 
            isMulti
            onChange={(e) => handleSelectedMultiple(e,"type")}
            />
        </div>
        <br></br>
        <div className="dropdownelem" style={disableIssue ? {pointerEvents: "none", opacity: "0.4"} : {}}>
            <h4> Issue Area</h4>
            <Select 
            placeholder={<div>select the issue area...</div>}
            options = {issue} 
            isMulti
            onChange={(e) => handleSelectedMultiple(e,"issue")}
            />
        </div>
        <br></br>
        <div className="dropdownelem" style={disableFilter ? {pointerEvents: "none", opacity: "0.4"} : {}}>
            <h4> Student Success Specific Filter</h4>
            <Select 
            placeholder={<div>specify for student success...</div>}
            options = {college} 
            isMulti
            onChange={(e) => handleSelectedMultiple(e,"further")}
            />
        </div>
        <br></br>

        <div className="dropdownelem">
        {/* <button onClick={() => setModalShow(true)} className="button-style">Email My Results</button>  */}
        <a href=""> <button className="button-style"> Rate Our Matching</button> </a>
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
        <ResourceDisplay finalSelections ={concatDictionary()}/>
        </Col>
        
        </Row>
        </Container>
        
        );
}
export default App;
// ss --> college --> issue area
// #bn --> issue area --> student needs, then theres a sub issue area


