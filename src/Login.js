import {useState, useEffect} from "react"
import axios from "axios"

function Login(props) {

	var [errorMessage, setError] = useState('')
	var [user, setUser] 		 = useState({});

	useEffect(() => {
		// alert("mounted & updated")
	},[])

	
	let getEmail = (event)=> {
		setUser({
			...user,
			email:event.target.value, 
			// password: user.password
		})
		user.email = event.target.value
	}

	let getPassword = (event)=> {
		setUser({
			...user,
			password : event.target.value, 
			// email:user.email
		})
		user.password = event.target.value
	}

	let login = (event) => {

		let apiUrl = 'https://apifromashu.herokuapp.com/api/login';
		console.log("User is trying to login", user);

		if(!user.email || !user.password) {
			setError("Please fill all details")
		} else {
			axios({
				url : apiUrl,
				method : 'post',
				data : { 'email' : user.email, 'password' : user.password} 
			}).then((response) => {
				
				if(response.data.message === "Invalid Credentials") {
					setError(response.data.message)
				} else {
					props.informlogin(response.data.name)
					setError("Successfully Login")
				}
			}, (error) => {
				console.log("in err", error.data.message);
			})

		}
		/*if(user.email == 'admin@yopmail.com' && user.password == 'password') {
			// console.log(".......", props);
			props.informlogin("Sujit Shinde")
			
			setError("Successfully login")
		} else {
			setError("Invalid login")
		}*/
	}
	return(
		<div style={{ width:"50%", margin:"auto", padding: "5px" }}>
			<div className="form-group">
				<lable>Email : </lable>
				<input type="email" onChange={getEmail} name="email" className="form-control"/>
				
				{ user && <lable>{ user.email } </lable>}
				<lable>Password : </lable>
				<input type="password" onChange={getPassword} name="password" className="form-control"/>
				{ user && <lable> { user.password }</lable>}
				<div className="" style={{ color:'red', margin:"5px", padding: "5px"  }}>
					{errorMessage}
				</div>
				<button onClick={login} className="btn btn-primary">Login</button>
			</div>

			
		</div>
	)
}

export default Login