import React from "react";
import BE from "../assests/portfolio/Be-bc-05.PNG";

const Portfolio = () => {
	const portfolio = [
		{
			id: 1,
			src: BE,
			href: "https://blackeverything.com/",
			text: "Live",
		},
	];
	return (
		<div
			name='portfolio'
			className='w-full h-[85vh] bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'
		>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-gray-500'>
						Portfolio
					</p>
					<p className='py-6'>Check out some of my work</p>
				</div>

				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
					{portfolio.map(({ id, src, href, text }) => (
						<div
							key={id}
							className='shadow-md shadow-gray-600 rounded-lg'
						>
							<img
								src={src}
								alt=''
								className='rounded-md duration-200 hover:scale-105'
							/>
							<a href={href} target='_blank' rel='noreferrer'>
								<div className='flex items-center justify-center '>
									<button className='flex justify-center w-1/2 sm:w-1/4 px-6 py-3 m-4  hover:scale-105 duration-200 border-2 border-gray-500 rounded-lg hover:border-orange-500  '>
										{text}
									</button>
									<button className='flex justify-center w-1/2 sm:w-1/4 px-6 py-3 m-4 hover:scale-105 duration-200 border-2 border-gray-500 rounded-md hover:border-orange-500 '>
										Code
									</button>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
