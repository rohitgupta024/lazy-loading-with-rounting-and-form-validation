import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
import Header from "./views/layout/Header";
import Footer from "./views/layout/Footer";



const Layout = (props) => {
    const { component: Component, ...rest } = props;

    return (
        <Route {...rest}
            render={() => {
                return (
                    <>
                        <Header />
                        
                        <Suspense fallback={<div>Loading........</div>}>
                            <Component />
                        </Suspense>
                        <Footer />
                        
                    </>
                )
            }}
        />
    )
}
export default Layout;