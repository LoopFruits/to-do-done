import React from "react";
import NavBar from "./NavBar"



function Home({ user,setUser, setTodos, todos }) {
  
console.log(todos)

  return (
    <div>
     <NavBar user={user} setUser={setUser} setTodos={setTodos}/>

      {!user ?  
            <>
              <h1>Welcome!</h1>
              <p> 
                This app was made for you to help organize your day.
              </p> 
            </> :
            <>
              <h1>Welcome back {(user.username)}!</h1>
              <p >  This app was made for you to help organize your day. 
              <br></br>
              <br></br>
              Click the "New" button to get started!
              <br></br>
              <br></br>
              </p>
            </> 
      }
      
    </div>

  );
}

export default Home;
