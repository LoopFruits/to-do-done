import React from "react";
import { Redirect } from "react-router-dom";


function Home({user}){
    // if user is unrecognized then redirect to login screen 
    if(!user) return <Redirect to="/login"/>;

    return (
        <>
            <h1> Home Page</h1>
        </>
    );
}




export default Home;