import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUpForm from "./SignUpForm";





function App() {

  const [user, setUser] = useState(false);
  // const [user, setUser] = useState(null);



  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/SignUpForm">
            <SignUpForm/>
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
        </Switch>
    </>
  );
}

export default App;
