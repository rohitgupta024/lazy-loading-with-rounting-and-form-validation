import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../App.css'
import  validate from "../../assets/util/validate";

class Contect extends React.Component {
    constructor(){
        super();
        this.state={
             felids:{
                 user:"",
                 email:"",
                 password:"",
                 
             },
             err:{
                user:"",
                email:"",
                password:"",
                
            }
        }
    }
    handleChange =(getvalue,keyname)=>{
        const statecopy = {...this.state};
        statecopy.felids[keyname]=getvalue;
        statecopy.err[keyname]= "";
        this.setState(statecopy);
        // console.log(statecopy)
        this.validatefrom(keyname)


    }
    validatefrom=(keyname)=>{
        const statecopy = {...this.state};
       if(keyname === 'user'){
           if(!statecopy.felids[keyname]){
               statecopy.err.user = "invalid"
           }
       }
       if(keyname === 'email'){
           const checkvalue = validate.EMAIL(statecopy.felids[keyname]);
           if(checkvalue){statecopy.err[keyname]="invalid"}
       }
       if(keyname === 'password'){
        const checkvalue = validate.PASSWORD(statecopy.felids[keyname]);
        if(checkvalue){statecopy.err[keyname]="invalid"}
    }
           
       this.setState({statecopy})
       console.log(statecopy)
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let checkerr = false;
        let checkallvalue = ['user', 'email' ,'password']
        checkallvalue.map((keyname,i)=>{
            return(
            this.validatefrom(keyname)
            )
        })
        for(let keyname in this.state.err){
            if(this.state.err[keyname]){
                checkerr = true;
            }
        }
        if(!checkerr){
            console.log('pass')
        }else{
            console.log('fail')
        }
    }
    render() {
        return (<>
        <div className="mein"> 
            <div className="container p-5">

                <Form>
                    <Form.Group >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" onChange={(e)=>{this.handleChange(e.target.value,'user')}} />
                        {this.state.err.user? <small style={{color:'red'}}>Enter full name</small> :null}
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>{this.handleChange(e.target.value,'email')}} />
                        {this.state.err.email? <small style={{color:'red'}}>Enter Right Email Address</small> :null}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>{this.handleChange(e.target.value,'password')}} />
                        {this.state.err.password ? <small style={{color:'red'}}>unique password </small> :null}
                    </Form.Group>
                    <Form.Group >
                     
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={(e)=>{this.handleSubmit(e)}}>
                        Submit
                    </Button>
                </Form>
            </div>
            </div>

        </>)
    }
}
export default Contect;