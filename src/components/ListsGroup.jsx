import React from 'react';
import Slider from "react-slick";
import { useSelector } from 'react-redux';

import List from './List.jsx';
import ListsNavPanel from './ListsNavPanel.jsx';




export default function ListsGroup() {
    const lists = useSelector(state => state.lists.data);

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return <React.Fragment>
        <div className="section flex flex-col">
            <div className="list-slides">
                <Slider {...settings}>
                    {
                        lists.map( (list, index) => <List key={index} listId={index} />)
                    }

                </Slider>
            </div>
            <hr />
            <ListsNavPanel />
        </div>
        

    </React.Fragment>
}