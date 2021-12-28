var carousel1 = "slider1.jpeg";
var carousel2 = "slider2.jpeg";
var carousel3 = "slider3.jpeg";

var carouselImage = {
	height:"550px"
}

function Carousel () {
	return(
		<div>
			<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
				    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
			  	<div className="carousel-inner">
				    <div className="carousel-item active">
				    	<img  style={carouselImage} src={carousel1} className="d-block w-100" alt="slider1"/>
				    </div>
				    <div className="carousel-item">
				    	<img style={carouselImage} src={carousel2} className="d-block w-100" alt="slider2"/>
				    </div>
				    <div className="carousel-item">
				    	<img style={carouselImage} src={carousel3} className="d-block w-100" alt="slider3"/>
				    </div>
			  	</div>
			  	<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
			    	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    	<span className="visually-hidden">Previous</span>
			  	</button>
			  	<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
			    	<span className="carousel-control-next-icon" aria-hidden="true"></span>
			    	<span className="visually-hidden">Next</span>
			  	</button>
			</div>
		</div>
		
	)
}

export default Carousel;