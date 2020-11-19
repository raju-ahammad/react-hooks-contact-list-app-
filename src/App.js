import React from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Header from './Components/Header/index';
import GlobalProvider from "./Context/Provider";
import routes from "./Routes";
import isAuthenticated from "./Utils/isAuthenticated";

const RenderRoute = (route) => {
  const history = useHistory();

  document.title = route.title || "trulyContact"

  if (route.needsAuth && !isAuthenticated()) {
    history.push("/auth/login");
  }
  return (
    <Route  path={route.path} exact render={(props) => <route.component {...props} />}></Route>
  )
}

function App() {

  return (
    <GlobalProvider>
     <Router>
     <Header/>
       <Switch>
         {
           routes.map((route, index)=> (
             <RenderRoute {...route} key={ index }/>
           ))
         }
       </Switch>
     </Router>
    </GlobalProvider>
  );
}

export default App;
