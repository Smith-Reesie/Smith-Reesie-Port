import React from "react";
import "./About.css";

const About = () => {
	return (
		<div
			name='about'
			className='w-full h-[90vh] sm:h-[125vh] bg-gradient-to-b from-orange-800 to-black text-white'
		>
			<div className=' about max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl text-black font-bold inline border-b-4'>
						About
					</p>
				</div>
				<p className='text-xl mt-5'>
					{" "}
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Molestias aut, repellat ipsum facere voluptate dicta obcaecati
					deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Molestias aut, repellat ipsum
					facere voluptate dicta obcaecati deserunt nobis suscipit eaque?{" "}
				</p>
				<br />

				<p className='text-xl'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Molestias aut, repellat ipsum facere voluptate dicta obcaecati
					deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Molestias aut, repellat ipsum
					facere voluptate dicta obcaecati deserunt nobis suscipit eaque?{" "}
				</p>
			</div>
		</div>
	);
};

export default About;
