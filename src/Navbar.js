import { Link } from 'react-router-dom';
import {useState, useEffect} from "react"
import { connect} from "react-redux"

function Navbar(props) {
	//console.log(props);
	// console.log("navbar...", props.loginStatus);
	let count = 0;
	var [searchText, setSearchText] = useState('');
	let getSearch = (event)=> {
		setSearchText(event.target.value)
	}

	let userLogout = (event) => {
		event.preventDefault();
		
		props.dispatch({
			type: "LOGOUT",
			payload:''
		})
	}
	
	/*let search = function(event) {
		event.preventDefault();
		console.log("on click");
	}*/
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<small className="ms-3">{props.children}</small>
				
			    <Link to="/"><a className="navbar-brand">My Cake Shop</a></Link>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    	<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				        
				        <li className="nav-item">
				        	{props.user &&<a className="nav-link disabled">Welcome {props.user}</a>}
				        </li>
			    	</ul>
			    	<form className="d-flex">
				    	Count {count}
				        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={getSearch}/>
				        <Link to={'/search?q='+ searchText}><button className="btn btn-outline-success">Search</button></Link>
			        	{!props.loginStatus && <Link to="/login"><button className="btn btn-info ms-2">Login</button></Link>}
			        	{props.loginStatus && <Link to="/cart" className="ms-3"><i className="fas fa-shopping-cart"></i>Cart</Link>}
			        	{props.loginStatus && <button className="btn btn-warning ms-2" onClick={userLogout}>Logout</button>}
			      	</form>
			    </div>
		  	</div>
		</nav>
	)
}
//mapstatetoprops

export default connect(function(state, props) {
	// console.log("...............initial state", state);
	return {
		user: state && state?.user?.name,
		loginStatus : state && state?.isloggedin,
	}
})(Navbar) 