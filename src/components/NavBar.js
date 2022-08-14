import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "about",
		},
		{
			id: 3,
			link: "portfolio",
		},
		{
			id: 4,
			link: "skills",
		},
		{
			id: 5,
			link: "contact",
		},
	];
	return (
		<div className=' flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
			<div>
				<Link to='home' smooth duration={400}>
					<h1 className='text-5xl font-signature ml-2 text-orange-700 md:text-2xl sm:text-base  '>
						Maurice Smith
					</h1>
				</Link>
			</div>
			<ul className='lg:flex'>
				{links.map(({ id, link }) => (
					<li
						key={id}
						className='px-4 cursor-pointer capitalize font-medium hover:text-orange-500 hover:scale-110 text-white duration-200 '
					>
						<Link to={link} smooth duration={500}>
							{link}
						</Link>
					</li>
				))}
			</ul>

			<div
				onClick={() => setNav(!nav)}
				className='cursor-pointer  pr-2 z-10 text-gray-500 md:hidden'
			>
				{nav ? <FaIcons.FaTimes size={30} /> : <FaIcons.FaBars size={30} />}
			</div>
			{nav && (
				<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-200 '>
					{links.map(({ id, link }) => (
						<li
							key={id}
							className='px-4 cursor-pointer capitalize py-6 text-4xl text-orange-500'
						>
							<Link
								onClick={() => setNav(false)}
								to={link}
								smooth
								duration={500}
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NavBar;
