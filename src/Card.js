import React from "react";
import img1 from './img/img1.png';

const Card = ({title, link, image}) => {
    return (
        <div> 
            <section className="card">
                <section className="left-card">
                    <h1>UC Berkeley's Biomedical Engineer Society</h1>
                    <h4>Resource Rating:</h4>
                    <h3>Link: </h3>
                    <h3>Description:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. </p>
                </section>
                <img className="right-card" src={img1}></img>
            </section>
        </div>
    )
}
export default Card