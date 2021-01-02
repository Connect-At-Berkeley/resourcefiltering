import React from "react";

const Resource = ({title, link, image}) => {
    return (
        <div> 
            <img className="img-style" src={image} alt=""/>
            <div className="description-style">
                <h2> {title}</h2>
                <div > Tags: <p className="tag-style"> {link}</p></div>
            </div>
            
        </div>
    )
}
export default Resource