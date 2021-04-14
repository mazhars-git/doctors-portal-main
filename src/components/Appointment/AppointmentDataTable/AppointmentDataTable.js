import React from 'react';

const AppointmentDataTable = ({appointments}) => {
    return (
        <div>
            <table class="table table-success table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">SL NO.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) => 
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{appointment.name}</td>
                                <td>{appointment.gender}</td>
                                <td>Age</td>
                                <td>Weight</td>
                                <td>{appointment.phone}</td>
                                <td>{appointment.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentDataTable;