import React from 'react';
import { Link } from "react-router-dom";


export default class Header extends React.Component {
    constructor(){
        super();
        this.state={
            value:false
        }
    }
    click =()=>{
        this.setState({value:true})
    }
    render() {
        return (
            <>
                 <nav className="navbar navbar-expand-sm navbar-dark bg-primary  ">
                    <h1 className="navbar-brand f-size-6 " >Hack web</h1>
                     <button className="navbar-toggler" onClick={this.click} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-link active text-warning" to={'/'}>Home</Link>
                            <Link className="nav-link text-warning" to={'/Services'}>Services</Link>
                            <Link className="nav-link text-warning" to={'/About'}>About</Link>
                            <Link className="nav-link text-warning" to={'/Contect'}>Contect</Link>

                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
