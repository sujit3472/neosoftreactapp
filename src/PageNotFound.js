import {Link } from 'react-router-dom';
function PageNotFound() {
	return(
		<>
			<h3 className="text-center">Page Not Found</h3>
			<Link to="/"><button className="btn btn-primary">Go To Home Page</button></Link>
		</>
	)
}

export default PageNotFound;