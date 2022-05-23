import {Switch, Route} from 'react-router-dom';
import  {useEffect,useState} from 'react';
import Home from './Home';
import Login from './Login';

function App(){
  const [user, setUser] = useState(null);
  const [todo, setTodo] =useState([])
  

  




  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        
      };
    });
  }, []);


  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home  user={user} setUser={setUser} />
        </Route>
        <Route exact path="/login">
          <Login onLogin={setUser} />
        </Route>
      </Switch>

    </>
  );

};



export default App;