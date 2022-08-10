import React from "react";
import Html from "../assests/html.png";
import CSS from "../assests/css.png";
import JavaScript from "../assests/javascript.png";
import Github from "../assests/github.png";
import Tailwind from "../assests/tailwind.png";
import RoR from "../assests/rr.png";
import react from "../assests/react.png";

const Skills = () => {
	const techs = [
		{
			id: 1,
			src: Html,
			title: "HTML",
			style: "shadow-orange-500",
		},
		{
			id: 2,
			src: CSS,
			title: "CSS",
			style: "shadow-blue-500",
		},
		{
			id: 3,
			src: JavaScript,
			title: "JavaScript",
			style: "shadow-yellow-500",
		},
		{
			id: 4,
			src: react,
			title: "React",
			style: "shadow-blue-600",
		},
		{
			id: 5,
			src: RoR,
			title: "Ruby on Rails",
			style: "shadow-red-600",
		},
		{
			id: 6,
			src: Tailwind,
			title: "Tailwind",
			style: "shadow-sky-400",
		},
		{
			id: 6,
			src: Github,
			title: "Github",
			style: "shadow-white",
		},
	];
	return (
		<div
			name='skills'
			className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen md:h-screen sm:h-[136vh]'
		>
			<div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
				<div>
					<p className='text-4xl font-bold border-b-4 border-gray-500 inline '>
						Skills
					</p>
					<p className='py-6'>
						These are some of the technologies I've worked with
					</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
					{techs.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
						>
							<img src={src} alt='' className='w-20 mx-auto' />
							<p className='mt-4'>{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
