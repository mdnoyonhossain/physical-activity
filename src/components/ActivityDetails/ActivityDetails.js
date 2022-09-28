import React, { useState } from 'react';
import './ActivityDetails.css';
import developer from '../../noyonhossain.jpg';
import Swal from 'sweetalert2';

const ActivityDetails = ({ activities }) => {
    const [breakTime, setBreakTime] = useState('');

    let total = 0;
    for (const time of activities) {
        total = total + parseFloat(time);
    }

    const breakTimeHandler = (e) => {
        setBreakTime(e.target.innerText);
        localStorage.setItem('break-item', breakTime);
        
    }

    const toastAlert = () => {
        Swal.fire(
            'Congratulations!',
            'Project Done!',
            'success'
        )
    }

    return (
        <div className='activityDetails'>
            <div className="avatar">
                <img src={developer} alt="" />
                <div className='avatar-info'>
                    <h4>Noyon Hossain</h4>
                    <p style={{ margin: 0 }}><small>Jessore, Dhaka</small></p>
                </div>
            </div>
            <div className='year'>

                <div>
                    <h3>55</h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>6.2</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>21</h3>
                    <p>Age</p>
                </div>
            </div>

            <h4>Add A Break</h4>
            <div onClick={(e) => breakTimeHandler(e)} className='addbreak'>
                <div>
                    <p>10s</p>
                </div>
                <div>
                    <p>20s</p>
                </div>
                <div>
                    <p>30s</p>
                </div>
                <div>
                    <p>40s</p>
                </div>
                <div>
                <p>50s</p>
                </div>
            </div>

            <h4>Exercise Details</h4>
            <div className='exercisedetils'>
                <p>Exercise time:</p>
                <p>{total} seconds</p>
            </div>
            <div className='exercisedetils'>
                <p>Break time:</p>
                <p>{breakTime}</p>
            </div>
            <button onClick={toastAlert}>Activity Completed</button>
        </div>
    );
};

export default ActivityDetails;