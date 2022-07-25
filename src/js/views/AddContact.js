import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	const contactCard = {
		id:"",
		name: "",
		address: "",
		phone: "",
		email: "",
		agenda_slug:"JamesWList",
	}
	
	const { store, actions } = useContext(Context);
	const [input, setInput] = useState(contactCard);

	
	const handleChange = e => {
		const { name, value } = e.target;
		setInput({...input, [name]: value});
		console.log(input)
	};
	
	const handleSubmit = e => {
		if (input !== "") {
			actions.addContact(input);
			setInput("");
		}
		  
	};
	
	return (
		<div className="container">
			<form>
				<div className="form-group">
					<label htmlFor="name">Full Name</label>
					<input 
					onChange={handleChange}
					defaultValue={contactCard.name}
					name="name"
					type="text" 
					className="form-control" 
					id="name" 
					placeholder="Enter Full Name"></input>
				</div>
				<div className="form-group">
					<label htmlFor="address">Address</label>
					<input 
					onChange={handleChange}
					defaultValue={contactCard.address}
					name="address"
					type="text" 
					className="form-control" 
					id="address" 
					placeholder="Enter Address"></input>
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone Number</label>
					<input 
					onChange={handleChange}
					defaultValue={contactCard.phone}
					name="phone"
					type="text" 
					className="form-control" 
					id="phone" 
					placeholder="Enter Phone Number"></input>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input 
					onChange={handleChange}
					name="email"
					defaultValue={contactCard.email}
					type="text" 
					className="form-control" 
					id="email" 
					placeholder="Enter Email"></input>
				</div>
			</form>
			<br />
			<Link to="/" onClick={handleSubmit}>
			<button className="btn btn-primary">save</button>
			</Link>
			<br/>
			<Link to="/">
				<button className="btn btn-primary">Get back to Contacts</button>
			</Link>
		</div>
	);
}
