import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { doctorId } = useParams()
    console.log(doctorId)
    return (
        <div style={{marginTop:'80px',color:'red'}}>
            <h1>Id Number Is: {doctorId}</h1>
           
        </div>
    );
};

export default Details;