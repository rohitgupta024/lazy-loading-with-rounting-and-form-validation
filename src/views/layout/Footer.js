import React from "react";
// import { FontAwesomeIcon,faEdit } from "@fortawesome/react-fontawesome";
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import ContactPhoneTwoToneIcon from '@material-ui/icons/ContactPhoneTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faEdit ,faWhatsapp} from '@fortawesome/free-solid-svg-icons'

export default class Footer extends React.Component{
render(){
    return(
        <>
        <div className="container-fluid bg-primary p-5 mt-5">
            <div className="row">
            <div className="col-sm-4 align-items-center">
                    {/* <FontAwesomeIcon icon={faEdit}/> */}
                    <HomeTwoToneIcon style={{color:'white'}}/> : Phone<br/><br/>
                   <p style={{color:'white'}}>312 WANDSWORTH BRIDGE ROAD, &nbsp;<br/> LONDON, SW6 2UA</p>  
                </div>
                
                <div className="col-sm-4 align-items-center">
                    {/* <FontAwesomeIcon icon={faEdit}/> */}
                    <ContactPhoneTwoToneIcon style={{color:'white'}}/> : Phone<br/><br/>
                   <p style={{color:'white'}}>900000XXXXX</p> 
                 
                </div>
                <div className="col-sm-4 align-items-center">
                    {/* <FontAwesomeIcon icon={faEdit}/> */}
                    <EmailSharpIcon style={{color:'white'}}/> : Email<br/><br/>
                    <p style={{color:'white'}}> RohitGupta247@gamil.com</p>
                </div>
            </div>
        </div>
        </>
    )
}
}