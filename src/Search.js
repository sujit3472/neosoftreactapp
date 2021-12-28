import axios from "axios"
import {useState, useEffect} from "react"
import Cake from './Cake'

function Search() {
	let searchApiCall = "https://apifromashu.herokuapp.com/api/searchcakes?q="+"red"
	let[cakeresult, setCakeResult] = useState([])
	useEffect(() => {
		axios({
			method:'get',
			url : searchApiCall,
		}).then( (response) => {
			// console.log("in search", response.data.data);
			// console.log("all cakes", response.data.data);
			setCakeResult(response.data.data)
		}, (error) => {
			console.log("error in search api call", error);
		})
	})
	return(
		<div className="container">
			<div className="row mt-2">
				<div>
				</div>
				{cakeresult?.length >0 ? cakeresult.map((each, index) =>  {
					return (<Cake data={each} key={index} />)
				}) : <div className="alert alert-danger mt-2 ms-2">No search result found</div>}
			</div>
		</div>
	)
}

export default Search;