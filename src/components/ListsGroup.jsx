import React, {useRef} from 'react';
import Slider from "react-slick";
import { useSelector } from 'react-redux';

import {GrPrevious, GrNext} from 'react-icons/gr';
import List from './List.jsx';




export default function ListsGroup() {
    const lists = useSelector(state => state.lists.data);
    const sliderRef = useRef();

    const settings = {
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => <p>{`${i + 1} of ${lists.length}`}</p>
      };

    function gotoNext() {
        sliderRef.current.slickNext();
    }

    function gotoPrev() {
        sliderRef.current.slickPrev();
    }

    const Navigation = () => {
        return (
        <div className="nav flex justify-between -mt-1 z-20">
            <button onClick={gotoPrev} className="my-1 p-2" disabled={lists.length > 1 ? false : true}>
                <div className="flex items-center">
                    <GrPrevious />
                    <div className="flex flex-col ml-2">
                        <span className="text-xs">PREV LIST</span>
                    </div>
                </div>
            </button>
            <button onClick={gotoNext} className="my-1 p-2" disabled={lists.length > 1 ? false : true}>
                <div className="flex items-center">
                    <div className="flex flex-col mr-2">
                        <span className="text-xs">NEXT LIST</span>
                        
                    </div>
                    <GrNext />
                </div>
            </button>
        </div>
    )}

    return <React.Fragment>
        <div className="section flex flex-col h-full flex-grow">
            <div className="flex flex-col h-full" >
                <Slider {...settings} ref={sliderRef} className="flex-grow">
                    {
                        lists.map( (list, index) => <List key={index} listId={index} />)
                    }
                </Slider>
                <Navigation />
            </div>
        </div>
        

    </React.Fragment>
}