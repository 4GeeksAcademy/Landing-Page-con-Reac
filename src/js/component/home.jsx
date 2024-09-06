import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";

//create your first component
const Home = () => {
	const array = []
	return (
		<div className="text-center">
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<Cards></Cards>
			{array.map((ar1, i) => {
				return (
					<Cards cardsArray={ar1}></Cards>
				)
			})}
		</div>
	);
};

export default Home;
