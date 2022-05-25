import {Switch, Route } from 'react-router-dom';
import {useHistory} from 'react-router'
import  {useEffect, useState} from 'react';
import Home from './Home';
import Login from './Login';
import NewTodo from './NewTodo';
 import NavBar from './NavBar';

function App({todo, title, description, setErrors,setIsLoading}){
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  
  



  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        
      };
    });
  }, []);

  const history = useHistory();

  function handleDelete(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  //fetching todo's dont need to fetch them from here?

  useEffect(() => {
    fetch("/todos").then((r) => {
      if (r.ok) {
        r.json().then((todos) => {
        console.log(todos)
        setTodos(todos)
        });
      }
    })
  }, []);



  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <>
    <Switch>
      
      <Route  exact path="/">
        <Home  user={user} setUser={user} todos={todos} setTodos={setTodos}  todo={todo} onDelete={handleDelete}/>
      </Route>
      
      <Route   exact path="/login">
        <Login user={user} setUser={user}/>
      </Route>
      
      <Route path="/new"> 
        <NewTodo  user={user} setUser={user} todos={todos} setTodos={setTodos}/>
      </Route>

      {/* <Route exact path="/">
        <TodoList todos={todos} user={user} setUser={setUser}/>
      </Route> */}

    </Switch>
    </>

    </>
  );

};



export default App;