import React from "react";
import HeroImage from "../assests/heroImage.png";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-scroll";
import Typed from "react-typed";
import "./Home.css";

const Home = () => {
	const typed = ["Full Stack Developer", "Model", "Dancer", "Creative"];

	return (
		<div
			name='home'
			className=' home lg:h-[109vh] sm:h-[90vh]  w-full bg-gradient-to-b from-black via-black to-orange-800 text-white'
		>
			<div
				className='max-w-screen-lg mx-auto flex flex-col items-center
            justify-center h-full px-4 md:flex-row '
			>
				<div className='flex flex-col justify-center h-full sm:mb-0'>
					<h2
						className=' sm:text-4xl lg:text-7xl  font-bold pb-2
                    '
					>
						I'm a{" "}
						<Typed
							className='typing text-red-700'
							strings={typed}
							typeSpeed={40}
							loop={true}
							backSpeed={60}
						/>
					</h2>
					<p>
						Leveraging creative analytics and problem-solving skills as a
						FullStack Software Engineer gifted at translating basic client
						requirements into technical development plans. Motivated to
						advance and expand my skill set through targeted mentorship
						and large scale projects. Experienced in Ruby on Rails,
						JavaScript, Tailwind CSS, and Bootstrap programming.
					</p>
					<br />
					<div>
						<Link
							to='portfolio'
							smooth
							duration={500}
							className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-400 via-orange-600 to-orange-600 cursor-pointer'
						>
							Portfolio
							<span className='group-hover:rotate-90 duration-300'>
								<RiArrowRightSFill size={25} className='ml-1' />
							</span>
						</Link>
					</div>
				</div>
				<div className='hero'>
					<img
						src={HeroImage}
						alt='headshot'
						className='rounded-2xl mx-auto w-2/3 md:w-full '
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
