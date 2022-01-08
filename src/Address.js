import {useState, useEffect} from "react"
function Address() {
	var [formErros, setFormErrors] = useState({})
	var validate = (elements) => {
		var errors = {}
		if(!elements.name.value) {
			errors.name = "Name is required"
		}

		if(!elements.phone.value) {
			errors.phone = "Phone number is required"
		}
		
		if(!elements.address.value) {
			errors.address = "Address is required"
		}

		if(!elements.city.value) {
			errors.city = "City is required"
		}

		if(!elements.pincode.value) {
			errors.pincode = "Pincode is required"
		}

		var erroKeys = Object.keys(errors)
		if(erroKeys.length > 0)
			return errors;
		else 
			return false
	}
	let placeOrder = (event) => {
		var form = document.getElementById('formAddress');
		
		var errors = validate(form.elements)
		if(errors) {
			setFormErrors(errors)
		} else {
			alert("form submit");
		}
	} 
	return(
		<div>
			<div className="col-sm-10">
				<div>
					<h3 className="text-center p-4 mt-2">Shipping Details</h3>
					<div className="row">
						<div className="col-sm-9" style={{margin: "30px auto"}}>
							<form className="text-center mx-5 px-5" id="formAddress" >
								<div className="form-group">
									<label htmlFor="inputName">Name</label>
									<input type="text" className="form-control " name="name" id="inputName" placeholder="Enter Name" />
									
									{formErros?.name && <div className="form-error">{formErros.name}</div>}	
								</div>
								<div className="form-group ">
									<label htmlFor="inputPhone">Phone</label>
									<input type="number" className="form-control " name="phone" id="inputPhone" placeholder="Enter Phone Number" />
									
									{formErros?.name && <div className="form-error">{formErros.name}</div>}	
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress">Address</label>
									<input type="text" className="form-control " name="address" id="inputAddress" placeholder="Enter Address" />
									{formErros?.address && <div className="form-error">{formErros.address}</div>}	
								</div>
								<div className="row mt-4">
									<div className="form-group col-md-6">
										<label htmlFor="inputCity">City</label>
										<input type="text" className="form-control " name="city" id="inputCity" placeholder="Enter City" />
										{formErros?.city && <div className="form-error">{formErros.city}</div>}	
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPincode">Pincode</label>
										<input type="text" className="form-control " name="pincode" id="inputPincode" placeholder="Enter Pincode" />
										{formErros?.pincode && <div className="form-error">{formErros.pincode}</div>}	
									</div>
								</div>
								<button type="button" className="btn btn-success mt-5" onClick={placeOrder } style={{margin_top:"10px"}}>Continue to Checkout</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Address