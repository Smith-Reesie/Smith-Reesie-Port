import React from "react";
import * as FaIcons from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import resume from "../../public/MauriceSResume.pdf";

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaIcons.FaLinkedin size={30} />
				</>
			),
			href: "https://www.linkedin.com/in/smithreesie/",
			style: "rounded-tr-md",
		},
		{
			id: 2,
			child: (
				<>
					Github <FaIcons.FaGithub size={30} />
				</>
			),
			href: "https://github.com/Smith-Reesie",
		},
		{
			id: 3,
			child: (
				<>
					Email <SiMinutemailer size={30} />
				</>
			),
			href: "mailto:Msmithdev00@gmail.com",
		},
		{
			id: 4,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={30} />
				</>
			),
			href: "/MauriceSResume.pdf",
			style: "rounded-br-md",
			download: true,
		},
	];
	return (
		<div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
			<ul>
				{links.map(({ id, child, href, style, download }) => (
					<li
						key={id}
						className={
							"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-orange-500" +
							" " +
							style
						}
					>
						<a
							href={href}
							className='flex justify-between items-center w-full text-white'
							download={download}
							target='_blank'
							rel='noreferrer'
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
