import React from "react";

const Resource = ({title, link, image}) => {
    return (
        <div> 
            <img className="img-style" src={image} alt=""/>
            <div className="description-style">
                <h4 className="spacing-now"> {title}</h4>
                <div className="spacing-now"> Links: {link} </div>
                <div className=""> Tags: 
                    <div className="tag-style"> {link}</div> 
                    <div className="tag-style"> {link}</div>
                    <div className="tag-style"> {link}</div>
                    </div>
            </div>
            
        </div>
    )
}
export default Resource