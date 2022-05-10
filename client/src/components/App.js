import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";


function App() {
  const [user, setUser] = useState(null);

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
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
