import {Route, Link, useRouteMatch } from 'react-router-dom';
import Order from './Order'
import Payment from './Payment'
import CartSummery from './CartSummery'
import Address from './Address'

function Checkout() {
	var route = useRouteMatch()
	var url   = route.url
	var path  = route.path
	
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-4 mt-5">			
						<Link to={url}><li>Cart Summery</li></Link>
						<Link to={url+"/address"}><li>Address</li></Link>
						<Link to={url+"/payment"}><li>Payment</li></Link>
						<Link to={url+"/order"}><li>Order</li></Link>
					</div>
					<div className="col-md-8">
						<Route exact path={path} component={CartSummery} />
						<Route exact path={path+"address"} component={Address} />
						<Route exact path={path+"payment"} component={Payment}/>
						<Route exact path={path+"order"} component={Order} />
					</div>
				</div>	
			</div>
		</>
	)
}

export default Checkout;