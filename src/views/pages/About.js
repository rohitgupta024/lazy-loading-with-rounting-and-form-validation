import React from 'react';
import aboutimg from "../../assets/img/about.jpg";
import about2ndfrom from "../../assets/img/about2nd.jpg";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";


export default class About extends React.Component {
    render() {
        return (<>
            <img src={aboutimg} className="img-fluid" alt="img" />
            <div className="container-sm mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={about2ndfrom} className="rounded-circle img-fluid" />
                            <Card.Body>
                                <Card.Title>Danish khan</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
          </Card.Text>
                                <NavLink className="btn btn-danger" to="/contect" >Contect</NavLink>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={about2ndfrom} className="rounded-circle img-fluid" />
                            <Card.Body>
                                <Card.Title>Danish khan</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
          </Card.Text>
                                <NavLink className="btn btn-danger" to="/contect" >Contect</NavLink>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={about2ndfrom} className="rounded-circle img-fluid" />
                            <Card.Body>
                                <Card.Title>Danish khan</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
          </Card.Text>
                                <NavLink className="btn btn-danger" to="/contect" >Contect</NavLink>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
