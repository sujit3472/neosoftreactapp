import {createStore} from "redux"
import demo from './reducers'

// var store = createStore(demo)

/*store.dispatch({
	type:"login"
})
console.log('==============', store.getState());
store.dispatch({
	type:"LOGIN",
	payload : {email:"sujit3472shinde@gmail.com", name:"sujit"}
})

console.log('==========after login match', store.getState());*/

export default createStore(demo)