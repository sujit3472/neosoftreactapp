import { useParams} from "react-router-dom"
import axios from "axios"
import {useState, useEffect} from "react"
import { connect} from "react-redux"

function CakeDetails(props) {
	let params = useParams()
	
	
	let [cakeData, setCakeDetails] = useState([]);
	let urlCakeDetails = 'https://apifromashu.herokuapp.com/api/cake/'+params.cakeid
	useEffect(() => {
		axios({
			method:'get',
			url : urlCakeDetails,
		}).then( (response) => {
			setCakeDetails(response.data.data); 
			
		}, (error) => {
			console.log("error in all cake api call", error);
		})
	}, [setCakeDetails])

	let addToCart = (event) => {
		
		event.preventDefault();
		
		if(localStorage.token && props.user) {
			let apiUrl = 'https://apifromashu.herokuapp.com/api/addcaketocart';
			axios({
				url : apiUrl,
				headers : {
					authtoken: localStorage.token
				},
				method : 'post',
				data : { 'cakeid' : cakeData.cakeid, 'name' : cakeData.name, 'image' :  cakeData.image, 'price' :  cakeData.price, 'weight' : cakeData.weight} 
			}).then((response) => {
				console.log(response.data);
				if(response.data === 'Session Expired')
					alert(response.data)
				else {
					alert('Cake added to cart successfully');
					props.dispatch({
						type: "ADDTOCART",
						payload:response.data.data
					})
				}
			}, (error) => {
				console.log("in err", );
			})
		} else {
			alert("You have not logged in please login")
		}
	}

	return(
		<div className="container  mt-5">
			<div className="card">
				<div className="container-fliud">
					<div className="wrapper row">
						<div className="preview col-md-6">
							<div className="preview-pic tab-content">
								<div className="tab-pane active" id="pic-1">
									<img src={cakeData.image}  style={{height: '500px', width:'500px'}}/>
								</div>
							</div>
							<ul className="preview-thumbnail nav nav-tabs">
							</ul>
						</div>
						<div className="details col-md-6 ">
							<h3 className="product-title ms-2">{cakeData.name}</h3>
							<div className="rating">
								<div className="stars">
									{cakeData.ratings} ratings
								</div>
								<span className="review-no">{cakeData.reviews} reviews</span>
							</div>
							<p className="product-description">{cakeData.description}</p>
							<h4 className="price"> Price: <span>{cakeData.price}</span></h4>
							
							<h5 className="sizes">Weight:
								<span className="size" data-toggle="tooltip" title="small">{cakeData.weight}kg</span>
							</h5>
							
							<div className="action">
								<button className="add-to-cart btn btn-warning" type="button" onClick={addToCart}>Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default connect(function (state, props){
    return {
        user:state?.user,
        cart:state?.cart
    }
})(CakeDetails);