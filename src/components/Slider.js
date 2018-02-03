/**
 * Created by Wojtek on 2018-02-01.
 */
import React from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';


export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideCount: 1
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide= this.prevSlide.bind(this);
    }


    nextSlide() {
        this.setState({ slideCount: this.state.slideCount + 1 })
    }

    prevSlide() {
        this.setState({ slideCount: this.state.slideCount - 1 })
    }


    render() {
        return (
            <div className="slider">
                {/*slides*/}
                {this.state.slideCount === 1 ? <SlideOne/> : null}
                {this.state.slideCount === 2 ? <SlideTwo/> : null}
                {this.state.slideCount === 3 ? <SlideThree/> : null}
                <NextArrow nextSlide = {this
                    .nextSlide}/>
                <PrevArrow prevSlide = {this.prevSlide}/>
            </div>
        )
    }
}