import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Service from './Service';
// import Footer from './Footer';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import {Switch, Route, Redirect} from 'react-router-dom';
const App =()=>{
    return(
        <>
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/service' component={Service}/>
        <Route exact path='/contact' component={Contact}/>
        <Redirect to='/'/>
        </Switch>
        {/* <Footer/> */}
        </>
    );
};
export default App;