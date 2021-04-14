import React from 'react';

const AppointmentShortList = ({appointments}) => {
    return (
        <div>
            <table class="table table-success table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) => 
                            <tr>
                                <td>{appointment.name}</td>
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

export default AppointmentShortList;