import {Switch, Route, useHistory } from 'react-router-dom';
import  {useEffect,useState} from 'react';
import Home from './Home';
import Login from './Login';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
// import NavBar from './NavBar';

function App(){
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  
  

  const history = useHistory();




  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        
      };
    });
  }, []);


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
    {/* <NavBar user={user} setUser={setUser} /> */}
    <>
    <Switch>
      <Route exact path="/">
        <Home  user={user} setUser={user} todos={todos}  />
      </Route>
      
      <Route exact path="/login">
        <Login user={user} setUser={user}/>
      </Route>

      <Route exact path="/new">
        <NewTodo user={user} />
      </Route>

      <Route exact path="/">
        <TodoList todos={todos} user={user} setUser={setUser}/>
      </Route>

    </Switch>
    </>

    </>
  );

};



export default App;