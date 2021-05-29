import React, { lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Layout from "./Layout";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";




const Home = lazy(()=> import('./views/pages/Home'));
const Services = lazy(()=> import("./views/pages/Service"));
const About = lazy(()=> import('./views/pages/About'));
const Contect = lazy(()=> import( './views/pages/Contect'));

class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Layout exact path="/" component={Home} />
                <Layout  path="/Services" component={Services} />
                <Layout  path="/About" component={About} />
                <Layout  path="/Contect" component={Contect} />
            </Switch>
            </BrowserRouter>
        )
    }
}
export default Routes;