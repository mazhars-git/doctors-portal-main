import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarWeek, faCoffee, faCog, faFileAlt, faSignOutAlt, faTh, faUserFriends, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsDoctor(data))
    }, [])
    return (
        <section>
            <div className="sidebar d-flex flex-column justify-content-between py-5 px-4 bg-warning" style={{height:"100vh"}}>
                 <ul>
                     <li>
                         <Link to='/dashboard/appointment'>
                            <FontAwesomeIcon icon={faTh} /> <span>Dashboard</span>
                         </Link>
                     </li>
                    {isDoctor && <div>
                        <li>
                            <Link to='/dashboard/appointment'>
                                <FontAwesomeIcon icon={faCalendarWeek} /> <span>Appointment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/patients'>
                                <FontAwesomeIcon icon={faUserFriends} /> <span>Patients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/prescriptions'>
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/addDoctor'>
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/setting'>
                                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                            </Link>
                        </li>
                    </div>}
                 </ul>
                <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;