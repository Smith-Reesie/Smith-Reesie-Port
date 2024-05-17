import * as React from "react";
import "./Cube.css";
import Cube from "react-3d-cube";
import Hero from "../assests/heroImage.png";
import Linkedin from "../assests/linkedin.jpg";
import Puma from "../assests/puma.jpg";
import blue from "../assests/blue.png";
import gold from "../assests/gold.png";
import twodays from "../assests/2sdays.jpeg";

class LogoCube extends React.Component {
	render() {
		return (
			<div>
				<center>
					<div
						style={{
							width: 300,
							height: 300,
						}}
					>
						<Cube size={300} index='front'>
							<img
								style={{ width: "300px", height: "300px" }}
								src={Hero}
								alt=''
							/>

							<div>
								{" "}
								<img
									style={{ width: "300px", height: "300px" }}
									src={Linkedin}
									alt=''
								/>
							</div>
							<div>
								<img
									style={{ width: "300px", height: "300px" }}
									src={Puma}
									alt=''
								/>
							</div>
							<div>
								<img
									style={{ width: "300px", height: "300px" }}
									src={blue}
									alt=''
								/>
							</div>
							<div>
								<img
									style={{
										width: "300px",
										height: "300px",
										background: "black",
									}}
									src={gold}
									alt=''
								/>
							</div>
							<div>
								<img
									style={{ width: "300px", height: "300px" }}
									src={twodays}
									alt=''
								/>
							</div>
						</Cube>
					</div>
				</center>
			</div>
		);
	}
}
export default LogoCube;
