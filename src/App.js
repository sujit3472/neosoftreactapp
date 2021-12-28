import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
import Search from './Search'
import { useState } from 'react'


function App() {
    var [user, setUser] = useState(); 
    var [loginStatus, setLoginStatus] = useState(false); 
    function LoginDone(data) {
        setUser(data)
        setLoginStatus(true)
        //alert("Login compnent calling parent component")
    }
    return (
        <div className="">
            <Navbar user={user} loginStatus= {loginStatus}>Hello</Navbar>
            <Login informlogin={LoginDone}  />
            <Search/>
            <Signup/>
            <Home/>
        </div>
    );
}

export default App;
