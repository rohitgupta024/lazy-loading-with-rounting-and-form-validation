import React from 'react';

import { Card } from "react-bootstrap";
import Css from "../../assets/img/css.jpg";
import { NavLink } from 'react-router-dom';
class Servies extends React.Component {
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Css} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title>HTML Course</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
          </Card.Text>
                                    <NavLink className="btn btn-danger" to="/about" >Go somewhere</NavLink>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Css} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title>Css Course</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
          </Card.Text>
                                    <NavLink className="btn btn-danger" to="/about" >Go somewhere</NavLink>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Css} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title>HTML Course</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
          </Card.Text>
                                    <NavLink className="btn btn-danger" to="/about" >Go somewhere</NavLink>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Css} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title>HTML Course</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
          </Card.Text>
                                    <NavLink className="btn btn-danger" to="/about" >Go somewhere</NavLink>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Css} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title>Css Course</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
          </Card.Text>
                                    <NavLink className="btn btn-danger" to="/about" >Go somewhere</NavLink>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 ">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Css} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title>HTML Course</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
          </Card.Text>
                                    <NavLink className="btn btn-danger" to="/about" >Go somewhere</NavLink>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Servies;