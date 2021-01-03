import React from "react";
import './App.css';
import Card from './Card';

const CardBkg = ({title, link, image}) => {
    return (
        <div> 
            <section className="title__subtxt">
                <h1 className="title">Resource Finder</h1> 
                <h3 className="sub-txt">1 of 8 resources</h3>
            </section>
            <Card/>
        </div>
    )
}
export default CardBkg