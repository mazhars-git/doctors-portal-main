import { faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const DoctorDetails = ({doctor}) => {
    return (
        <div className="col-md-4 px-5">
           {    
               doctor.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`}/>
               :
               <img style={{height: '200px'}} className="img-fluid" src={`http://localhost:5000/${doctor.img}`} alt=""/> 
            }
           <h4 className="mt-3">{doctor.name}</h4>
           <p><FontAwesomeIcon icon={faPhone} /> +000 126 5568</p>
        </div>
    );
};

export default DoctorDetails;