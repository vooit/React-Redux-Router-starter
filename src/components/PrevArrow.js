/**
 * Created by Wojtek on 2018-02-03.
 */
import React from 'react';


const PrevArrow = (props) => {
    return (
        <div onClick={props.prevSlide}   className="slider-left-arrow">
            <span>left</span>
        </div>
    )
};

export default PrevArrow;