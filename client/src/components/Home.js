import React, {useState} from "react";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import NewTodo from "./NewTodo";




function Home({ user,setUser, setTodos, todos, todo,  }) {

console.log(todos);

function capitalizeFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function handleDeleteTask(deletedTaskText){
  setTodos(todos.filter((todo) => todo.text !== deletedTaskText));
}

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
              <h1>Welcome Back  {capitalizeFirstLetter(user.username)}!</h1>
              <p >  This app was made for you to help organize your day. 
              <br></br>
              <br></br>
              Click the "New Todo" button to get started!
              <br></br>
              <br></br>
              </p>
            </> 
      }
        {/* <NewTodo todo={todos} setTodos={setTodos}/>  */}
        {/* should contain the newtodos */}


        <Wrapper>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <Todo key={todo.id}>
                <Box>
                  <h2>{todo.title}</h2>
                  <p>{todo.description}</p>
                  <button onClick={handleDeleteTask}>🚮</button>
                </Box>
              </Todo>
            ))
          ) : (
            <>
              <h2>No todos around here</h2>
              <Button as={Link} to="/new">
                Create New Todos
              </Button>
            </>
          )}
        </Wrapper>
      
    </div>

  );
}


const Wrapper = styled.section`
max-width: 800px;
margin: 40px auto;
`;

const Todo = styled.article`
margin-bottom: 24px;
`;



export default Home;
