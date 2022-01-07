var demo = function(state, action) {

	switch(action.type) {
		case "LOGIN" : {
			
			state ={...state}
			state["isloggedin"] = true
			state["user"] = action.payload
			
			return state;
		}

		case "LOGOUT" : {
			
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
		 	
		 	return state;
		}

		case "ADDTOCART" : {
			state = {...state}
		 	state["cart"] = action.payload
		 	console.log("----in state", state);
		 	return state;
		}
		default : return state 
	}
}

export default demo