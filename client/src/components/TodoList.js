import  React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
function TodoList({user, todos,setTodos}){

    return (
        <Wrapper>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <Todo key={todo.id}>
                <Box>
                  <h2>{todo.title}</h2>
                  <ReactMarkdown>{todo.description}</ReactMarkdown>
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