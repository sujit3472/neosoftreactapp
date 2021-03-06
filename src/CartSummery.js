import axios from "axios"
import {useState, useEffect} from "react"
import { Link } from 'react-router-dom';

var cardImage = {
	height:"50px",
	width:"50px"
}

function CartSummery() {
	var price = 0;
	let [cakeData, setCakeCartData] = useState([]);
	let [loader, setLoader] = useState(true);
	let urlCakeCart = 'https://apifromashu.herokuapp.com/api/cakecart/'
	useEffect(() => {
		axios({
			method:'POST',
			headers : {
				authtoken : localStorage.token
			},
			url : urlCakeCart,
		}).then( (response) => {
			setCakeCartData(response.data.data); 
			setLoader(false); 
			
		}, (error) => {
			setLoader(false); 
			console.log("error in all cake api call", error);
		})
	}, [setCakeCartData])
	return (
		<div className="container">
			<div className="row mt-2">
				<h3 className="text-center">Cart Summery</h3>
				{loader && <h3>Loading ...</h3>}
				
				<div className="col-md-6">
			      	{cakeData?.length > 0 &&<table className="table table-striped" style= {{width:"100%"}}>
			          	<thead className="text-center">
			              	<tr>
			                    <th>Sr. No.</th>
				                <th>Image</th>
								<th>Name</th>
								<th>Price</th>
								<th>Quantity</th>
								
			              	</tr>
			          	</thead>
			          	<tbody className="text-center">
			          			
			          		{cakeData?.length > 0 && cakeData.map((each, index) =>  {
			          			price = price + each.price
			          			return (
			          				<tr key={index}>
			          					<td>{index +1}</td>
			          					<td>
			          						<Link to={'/cake/'+each.cakeid}>
			          						<img src={each.image} className="card-img-top" alt="..." style={cardImage}/>
			          						</Link>
			          					</td>
			          					<td>{each.name}</td>
			          					<td>{each.price}</td>
			          					<td>{each.quantity}</td>
			          				</tr>
			          			)
			          		})}
			          	</tbody>
			          	<tfoot>
			          		<tr className="">
			          			<th colspan="5">Total Price : {price}</th>
			          		</tr>
			          	</tfoot>
					</table>}
					{cakeData?.length > 0 &&<Link to="checkout/address"><button className="btn btn-info" style={{ float : "right"}}>Next</button></Link>}
				</div>	
			</div>	
		</div>
	)
}

export default CartSummery