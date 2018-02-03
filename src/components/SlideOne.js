/**
 * Created by Wojtek on 2018-02-01.
 */
import React, {Component} from 'react';

const SlideOne = (props) => {
    const background = {
        backgroundImage: 'url(src/img/slide1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    };
    return (
    <div className="singleSlide slide" style={background}></div>
    )
};

export default SlideOne;