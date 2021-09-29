import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import College from "./components/colleges";
import CollegesList from "./components/colleges-list";
import Dashboard from "./components/dashboard";



function App() {





  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark" >
        <a href="/colleges" className="navbar-brand"  >
        Top Colleges in India
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/colleges"} className="nav-link">
              Colleges
            </Link>
          </li>

          <li className="nav-item" >
            <Link to={"/dashboards"} className="nav-link">
              Dashboard
            </Link>
          </li>
        </div>
      </nav>
      
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/colleges"]} component={CollegesList} />
          <Route 
            path="/colleges/:id"
            render={(props) => (
              <College {...props}  />
            )}
          />
          <Route path = {"/dashboards"} component={Dashboard} />
        </Switch>
      </div>
    


    </div>
    
  );
}

export default App;
