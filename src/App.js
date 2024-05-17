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
import LogoCube from "./pages/cube";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";
import Dancer from "./pages/dancer";
import Model from "./pages/model";
import Engineer from "./pages/engineer";
import NoPage from "./pages/NoPage";

const App = () => {
	// const styles = {
	// 	display: "flex",
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	height: "100vh",
	// };
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<LogoCube />} />
					<Route exact path='/home' element={<LogoCube />} />
					<Route exact path='/model' element={<Model />} />
					<Route exact path='/engineer' element={<Engineer />} />
					<Route exact path='/dancer' element={<Dancer />} />
					<Route path='*' element={<NoPage />} />
				</Routes>
			</Router>
			{/* <NavBar />
			<Home />
			<About />
			<Portfolio />
			<Skills />
			<Contact />

			<SocialLinks /> */}
			<LogoCube />
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
