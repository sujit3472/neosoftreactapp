var demo = function(state, action) {

	switch(action.type) {
		case "LOGIN" : {
			console.log('in login');
			state ={...state}
			state["isloggedin"] = true
			state["user"] = action.payload
			console.log(state);
			return state;
		}

		case "LOGOUT" : {
			console.log('in logout reduceras');
			state = {...state}
			localStorage.clear();
			/*state["isloggedin"] = false
			state["user"] = {}*/
			delete state['user']
			delete state['isloggedin']
			return state;
		}
		case "CheckUserLOGIN" : {

		 	state = {...state}
		 	state["isloggedin"] = true
		 	state["user"] = action.payload
		 	console.log("in check login", state);
		 	return state;
		}
		default : return state 
	}
}

export default demo