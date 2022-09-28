import React from 'react';
import './Activity.css';

const Activity = ({ activity, handelAddToList }) => {
    const {img, name, time, age } = activity;

    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <h4>{name}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sint?</p>
                <p>For Age: <span>{age}</span></p>
                <p>Time required: <span>{time}s</span></p>
                <button onClick={() => handelAddToList(time)}>Add to list</button>
            </div>
        </div>
    );
};

export default Activity;