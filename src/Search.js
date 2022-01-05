import axios from "axios"
import {useState, useEffect} from "react"
import Cake from './Cake'
import queryString from 'query-string'
function Search(props) {
	
	const parsed 	 = queryString.parse(props.location.search)
	let searchApiCall = "https://apifromashu.herokuapp.com/api/searchcakes?q="+parsed.q
	let[cakeresult, setCakeResult] = useState([])
	useEffect(() => {
		axios({
			method:'get',
			url : searchApiCall,
		}).then( (response) => {
			setCakeResult(response.data.data)
		}, (error) => {
			console.log("error in search api call", error);
		})
	}, [props.location.search])
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