import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
import Search from './Search'
import { useState } from 'react'
import {BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import CakeDetails from './CakeDetails'
import Cart from './Cart'
import Checkout from './Checkout'
import axios from "axios"
import { connect} from "react-redux"



function App(props) {

    if(localStorage.token && !props.user) {

        var token = localStorage.token
        console.log("means user is logged in");
        axios({
            method:"GET",
            url: "https://apifromashu.herokuapp.com/api/getuserdetails",
            headers : {
                authtoken :token
            }
        }).then((response) => {
            props.dispatch({
                type: "CheckUserLOGIN",
                payload:response.data.data
            })
        }, (error) => {
            console.log("error from user details", error);
        })
    }

    /*var [user, setUser] = useState(); 
    var [loginStatus, setLoginStatus] = useState(false);*/ 
    /*function LoginDone(data) {
        console.log("date", data);
        setUser(data)
        setLoginStatus(true)
        //alert("Login compnent calling parent component")
    }*/
    
    return (
        <div className="">
            <Router>
            <Navbar/>
                <div>
                    <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact  > <Login/></Route>
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/search" exact component={Search} />
                    <Route path="/cake/:cakeid" exact component={CakeDetails} />
                    {props.user && <Route path="/cart/" exact component={Cart} />}
                    {props.user && <Route path="/checkout/" component={Checkout} />}
                
                    <Route path="/*">
                        <Redirect to="/"> </Redirect>
                    </Route>
                    </Switch>
                   
                </div>
            </Router>
        </div>
    );
}

export default connect(function (state, props){
    return {
        user:state?.user
    }
})(App);
