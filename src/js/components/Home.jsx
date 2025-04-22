import React from "react";
import Palo from "./PaloSemaforo"
import TrafficLights from "./TrafficLight";

//create your first component
const Home = () => {
	return (
		<>
			<TrafficLights/>
			<Palo/>
		</>
	);
};

export default Home;