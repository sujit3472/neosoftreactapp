import {Component} from "react"
import axios from "axios"

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			onlineUsers   : 0,
			errorMessage  : '',
			emailError 	  : '',
			passwordError : '',
			txtEmail 	  : '',
			txtPassword	  : '',
		}
		//alert("in constuction");
	}
	user = {}
	
	/*componentDidMount() {
		alert("Mounted")
	}

	componentDidUpdate() {
		alert("component updated")
	}

	componentWillUnmount() {

	}*/
	getEmail = (event) => {
		this.user.email = event.target.value;
		this.setState({
			txtEmail: event.target.value 
		})
	}

	getPassword = (event) => {
		this.user.password = event.target.value;
		this.setState({
			txtPassword: event.target.value 
		})	
	}

	getUser = (event) => {
		this.user.name = event.target.value;
		this.setState({
			txtName: event.target.value 
		})	
	}
	goOnline= () => {
		this.setState({
			onlineUsers : this.state.onlineUsers+1
		})
	}

	checkRegister = (event) => {
		event.preventDefault();
		console.log("user details", this.user);
		/*if(this.state.txtEmail == '' || this.state.txtEmail == undefined ) {
			this.setState({
				emailError : "Please enter the email"
			})
		} else {
			this.setState({
				emailError : ""
			})
		} 
		if(this.state.txtPassword == '' || this.state.txtPassword == undefined) {
			this.setState({
				passwordError : "Please enter the password"
			})
		} else {
			this.setState({
				passwordError : ""
			})	
		}*/
		if(!this.user.email || !this.user.password || !this.user.name) {
			this.setState({
				errorMessage : "Please fill all details"
			})
			return
		} else {
			this.setState({
				errorMessage : ""
			})
			let apiUrl = 'https://apifromashu.herokuapp.com/api/register';
			axios({
				url : apiUrl,
				method : "post",
				data : this.user
			}).then( (response)=> {
				console.log("in response", response.data.message);
				this.setState({
					errorMessage : response.data.message
				})

			},(error)=> {

			});
		}

		/*if(this.user.email == 'sujit3472shinde@gmail.com' && this.user.password == 'password') {
			alert("login successfully");
		} else {
			alert("In valid login details")
		}*/
	}

	/*goOnline () {
		console.log(this);
		this.setState({
			onlineUsers : this.state.onlineUsers+1

		})
	}*/
	render() {
		return (
			<div style={{ width:"50%", margin:"auto", padding: "5px" }}>
				<div className="form-group">
					<lable>Email : </lable>
					<input type="email" onChange={this.getEmail} name="email" className="form-control"/>
					<lable>{this.state.emailError}</lable><br/>
					<lable>Name : </lable>
					<input type="email" onChange={this.getUser} name="name" className="form-control"/>
					<lable>{this.state.emailError}</lable><br/>
					<lable>Password : </lable>
					<input type="password" onChange={this.getPassword} name="password" className="form-control"/>
					<lable>{this.state.passwordError}</lable><br/>
					<div className="" style={{ color:'red', margin:"5px", padding: "5px"  }}>
						{this.state.errorMessage}
					</div>
					<button onClick={this.checkRegister} className="btn btn-primary">Register</button>
				</div>

				{/* hey Users {this.state.onlineUsers}
				<button onClick={this.goOnline}>Go online</button><br/>
				<button onClick={this.goOnline.bind(this)}>Go online</button>*/}
			</div>
		)
	}
}


export default Signup;
