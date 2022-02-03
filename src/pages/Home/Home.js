import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Home = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
      fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    }, []);
    return (
        <div>
            <img style={{marginBottom:'20px'}} src="https://c8.alamy.com/comp/2CA56W4/doctors-group-surgeon-and-nurse-on-hospital-background-2CA56W4.jpg" alt="" />
           
            <Row xs={1} md={2} className="g-4">
            {
                doctors.map(doctor=><Doctor doctor={doctor} key={doctor.id}></Doctor>)
            }

            </Row>

            
            
        </div>
    );
};

export default Home;