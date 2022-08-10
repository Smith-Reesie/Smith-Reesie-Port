// import Art from "./components/Art";
// import Tech from "./components/Tech";
// import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

const App = () => {
	// const styles = {
	// 	display: "flex",
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	height: "100vh",
	// };
	return (
		<div className='tech flex flex-col justify-between'>
			<NavBar />
			<Home />
			<About />
			<Portfolio />
			<Skills />
			<Contact />

			<SocialLinks />
		</div>
		// <div style={styles}>
		// 	<div className='flex items-center justify-center '>
		// 		<Link
		// 			to='/tech'
		// 			className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200
		// 			border-2 border-gray-500 rounded-lg hover:border-orange-500 '
		// 		>
		// 			Arts
		// 		</Link>
		// 		<button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 border-2 border-gray-500 rounded-md hover:border-orange-500 '>
		// 			Tech
		// 		</button>
		// 	</div>

		// 	{/* <Tech />
		// 	<Art /> */}
		// </div>
	);
};

export default App;
