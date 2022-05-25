import {Switch, Route } from 'react-router-dom';
import  {useEffect, useState} from 'react';
import Login from './Login';
import NewTodo from './NewTodo';
import NavBar from './NavBar';
import TodoList from './TodoList';

function App(){
  const [user, setUser] = useState(null);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        
      };
    });
  }, []);




  //fetching todo's dont need to fetch them from here?





  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <>
        <Switch>
          <Route path="/new">
            <NewTodo user={user} />
          </Route>
          <Route path="/">
            <TodoList />
          </Route>
        </Switch>
      </>
    </>
  );

};



export default App;