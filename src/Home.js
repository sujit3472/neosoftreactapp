import Carousel from './Carousel'
import Cake from './Cake'
// import cakes from './data.js'
import CakeDetails from './CakeDetails'
import axios from "axios"
import {useState, useEffect} from "react"

/*var cakeData = [{name: "Chocolate Tuffle", image:"cake1.jpg"}, 
				{name: "Chocolate Cake", image:"cake2.jpeg"},
				{name: "Birthday Cake", image:"cake3.jpg"},
				{name: "Ice Cake", image:"cake3.jpeg"},
				{name: "Black Forest Cake", image:"cake4.jpeg"},
				]*/
var obj = {
	name : "Test cake",
	image: "cake1.jpg",
	price: "$210",
	id: 1233377
}
function Home() {
	let [cakes, setCakes] = useState([]);
	let allcakeApi = 'https://apifromashu.herokuapp.com/api/allcakes'
	useEffect(() => {
		axios({
			method:'get',
			url : allcakeApi,
		}).then( (response) => {
			console.log("all cakes", response.data.data);
			setCakes(response.data.data); 
			// return
		}, (error) => {
			console.log("error in all cake api call", error);
		})
	})
	return (
		<div>
			<Carousel></Carousel>
			<div className="row mt-2">
				<Cake data={obj}  />
				{cakes?.length > 0 && cakes.map((each, index) =>  {
					return (<Cake data={each} key={index} />)
				})}
			</div>
			<CakeDetails></CakeDetails>
		</div>	
	)
}

export default Home