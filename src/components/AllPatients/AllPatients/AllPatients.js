import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import AppointmentDataTable from '../../Appointment/AppointmentDataTable/AppointmentDataTable';
import Dashboard from '../../Dashboard/Dahsboard/Dashboard';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <h2 className="text-brand text-center">All Patients</h2>
                        <AppointmentDataTable appointments={appointments}></AppointmentDataTable>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllPatients;