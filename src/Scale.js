import React, { useState } from 'react';
import { FaCircle } from "react-icons/fa";
 
const Scale = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="circles">
            {[ ...Array(5)].map((circle, i) => {
                const ratingVal = i + 1;

                return (
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingVal}
                            onClick={() => setRating(ratingVal)}  
                        />
                        <FaCircle 
                            className="circle" 
                            color={ratingVal <= (hover || rating) ? "#056BA5" : "#888888"} 
                            size={40}
                            onMouseEnter={() => setHover(ratingVal)}
                            onMouseLeave={() => setHover(null)} 
                        />
                    </label>
                );
            })}
        </div>
    )

}

export default Scale