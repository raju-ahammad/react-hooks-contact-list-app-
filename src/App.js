import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import routes from "./Routes";


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         {
           routes.map((route, index)=> (
             <Route key={index} path={route.path} exact render={(props) => <route.component {...props} />}></Route>
           ))
         }
       </Switch>
     </Router>
    </div>
  );
}

export default App;
