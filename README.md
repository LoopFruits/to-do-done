

## Table of Contents

* [General info](#general-info)
* [Setup](#setup)
* [Code Snippet](#code-snippet)
* [Backend Features](#backend-features)
* [Contact Info](#contact-info)
    

##   General info 

Task managing application that tracks tasks called to-do's, users will be able to read,create and delete tasks.
     

##   Setup

* React v15 
* Rails v7.2
* Ruby on Rails
* CSS
    


## Code Snippet

```
function NavBar({ user, setUser }) {
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

```

## Backend Features

* Auth
* Tests
* Multiple has_many_through relationships
* Seeds from a complex data set
* Custom routes
* Custom controller/model methods
* Validation

     


##   Contact Info 
* https://www.linkedin.com/in/kenneth-the-dev/
* https://medium.com/@Kenneththedev
* https://twitter.com/Kenneththedev
* https://github.com/LoopFruits

