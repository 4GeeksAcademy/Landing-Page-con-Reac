import React from "react";

//include images into your bundle
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";

//create your first component
const Home = () => {
	const array = [1,2,3]
	return (
		<div className="text-center">
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<div className="d-flex justify-content-center d-flex-wrap">
			<Cards></Cards>
			{array.map((item) => {
				return (
					<Cards cardsArray={item}></Cards>
				)
			})}
			</div>
		</div>
	);
};

export default Home;
