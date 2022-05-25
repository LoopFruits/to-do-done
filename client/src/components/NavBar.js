import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../styles";
import styled, { keyframes } from "styled-components";


function NavBar({ user, setUser }) {

  const history = useHistory();

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
  
    return (
      <Wrapper>
        <Rotate>
            <Logo>
                <Link to="/">To-Dos</Link>
            </Logo>
        </Rotate>
        <Nav>
          <Button as={Link} to="/new">
            New Todo
          </Button>
          <Button variant="outline" onClick={handleLogoutClick}>
            Logout
          </Button>
        </Nav>
      </Wrapper>
    );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family:  Helvetica, sans-serif;
  font-size: 3rem;
  color: #4287f5;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;





export default NavBar;