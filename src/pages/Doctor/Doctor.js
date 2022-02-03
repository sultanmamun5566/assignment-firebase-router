import React from 'react';
import { Button, Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase/useFirebse';
import { HashLink } from 'react-router-hash-link';


const Doctor = (props) => {

    const { id,name, img, skill, department, hospital} = props.doctor;
    console.log(props.doctor);
    
    return (
        <div>



            {/* <Link to={`/details/${id}`}>go here</Link> */}

             <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
         <Card.Title>{ name}</Card.Title>
          <Card.Text>
                            <p>{skill}</p>
                            <h5>{department}</h5>
                            <p>{hospital}</p>
                        </Card.Text>
                       
                        <Nav.Link as={HashLink} to={`/details/${id}`}>
                        <Button variant="danger">Appointment Now</Button> 
                        </Nav.Link>
        </Card.Body>
      </Card>
            </Col>

           


        </div>
    );
};

export default Doctor;