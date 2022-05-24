import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../styles";


function NavBar({ user, setUser}) {
    const history = useHistory();
    
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
            history.push("/")
        }
        });
    }



    return (
        <>
            {!user ? <Button as={Link} to="/login" exact>
            Logout
            </Button> :
            <>
            <Button variant="outline" onClick={handleLogoutClick}>
            Logout
            </Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </>}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
        </>
    );
    }

    export default NavBar;