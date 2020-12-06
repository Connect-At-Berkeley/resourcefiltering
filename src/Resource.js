import React from "react";

const Resource = ({title, link, image}) => {
    return (
        <div> 
            <h4> {title}</h4>
            <p> {link}</p>
            <img src={image} alt=""/>
        </div>
    )
}
export default Resource