import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from "react/cjs/react.development";
import './App.css';
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import Appointment from "./components/Appointment/Appointment/Appointment";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./components/Dashboard/Dahsboard/Dashboard";
import Contact from "./components/Home/Contact/Contact";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";

export const UserContext = createContext();

function App() {
   const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
             <Route exact path="/">
                <Home></Home>
             </Route>
             <Route path="/appointment">
                <Appointment></Appointment>
             </Route>
             <PrivateRoute path="/dashboard/appointment">
                <Dashboard></Dashboard>
             </PrivateRoute>
             <Route path="/dashboard/patients">
                <AllPatients></AllPatients>
             </Route>
             <Route path="/dashboard/addDoctor">
                <AddDoctor></AddDoctor>
             </Route>
             <Route path="/contact">
                <Contact></Contact>
             </Route>
             <Route path="/login">
                <Login></Login>
             </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
