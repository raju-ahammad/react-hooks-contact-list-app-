import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Header from './Components/Header/index';
import routes from "./Routes";
function App() {
  return (
    <div className="App">
     
     <Router>
     <Header/>
       <Switch>
         {
           routes.map((rout, index)=> (
             <Route key={index} path={rout.path} exact render={(props) => <rout.component {...props} />}></Route>
           ))
         }
       </Switch>
     </Router>
    </div>
  );
}

export default App;
