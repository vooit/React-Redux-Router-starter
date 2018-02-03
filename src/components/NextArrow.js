/**
 * Created by Wojtek on 2018-02-02.
 */
import React from 'react';


const NextArrow = (props) => {
    return (
        <div onClick={props.nextSlide}  className="slider-right-arrow">
            <span>right</span>
        </div>
    )
};

export default NextArrow;
