import  React, {useEffect, useState,} from "react";
import {  Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";



function TodoList({todos}){
  console.log(todos);
    // const [todos,setTodos]=useState([]);

  // useEffect(() => {
  //   fetch("/todos")
  //     .then((r) => r.json())
  //     .then(setTodos);
  // }, []);

    return (
        <Wrapper>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <Todo key={todo.id}>
                <Box>
                  <h2>{todo.title}</h2>
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
      );
}
    
    const Wrapper = styled.section`
      max-width: 800px;
      margin: 40px auto;
    `;
    
    const Todo = styled.article`
      margin-bottom: 24px;
    `;



export default TodoList;