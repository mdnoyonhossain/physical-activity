import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';
import ActivityDetails from '../ActivityDetails/ActivityDetails';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState([]);

    useEffect( () => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);

    const handelAddToList = (id) => {
        const newTime = [...time, id];
        setTime(newTime);
    }

    return (
        <div className='activities-container'>
            <div className="activity-card">
                {
                    activities.map(activity => <Activity key={activity.id} activity={activity} handelAddToList={handelAddToList}></Activity>)
                }
            </div>
            <div className="activity-info">
                <ActivityDetails activities={time}></ActivityDetails>
            </div>
        </div>
    );
};

export default Activities;