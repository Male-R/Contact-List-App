import React from "react";
import "../../styles/home.css";
import ContactCard from "../component/ContactCard";
import { Navbar } from "/workspace/Contact-List-App/src/js/component/navbar.js";


export const Home = () => {
	
	return (
	<div>
		<div>
		<Navbar />
		<ContactCard/>
		</div>
	</div>
)
};
