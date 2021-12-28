
var cardImage = {
	height:"200px"
}
function Cake(props) {
	// console.log("props received", props);
	return(
		<div className="card" style={{width: "18rem"}}>
			<img src={props.data.image} className="card-img-top" alt="..." style={cardImage}/>
			<div className="card-body">
		    	<h5 className="card-title">{props.data.name}
		    		<div className="float-end">{props.data.price}</div>
		    	</h5>

		    </div>
		</div>
	)
}

export default Cake;