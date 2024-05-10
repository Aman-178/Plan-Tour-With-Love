import { useState } from "react";
import './Card.css';

function Card({ id, name, image, info, price,removetour }) {

    const [readmore ,setReadmore]=useState(false);
    const Description = readmore ? info : `${info.substring(0, 220)}...`;

    function readmorehandler(){
        setReadmore(!readmore);
    }
    return (
       <div id="tour-card">
         <div id='tour'>
            <img src={image} alt={name}></img> {/* Use image variable here, not string */}
            <div className="tour-details">
                <h4 id='price'>{price}</h4>
                <h4 id='name'>{name}</h4>
                <p >{Description}
                    <span onClick={readmorehandler}>
                        {readmore  ?'show less':'read more'}
                    </span>
                
                </p> {/* Changed to <p> for semantic correctness as it's likely to be a longer text */}
            </div>
            <button onClick={()=>removetour(id)}>Not interested</button>
        </div>
       </div>
    );
}

export default Card;