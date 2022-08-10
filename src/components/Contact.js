import React from "react";

const Contact = () => {
	return (
		<div
			name='contact'
			className=' w-full h-screen sm:h-[105vh] bg-gradient-to-b from-black to-gray-800 p-4 text-white'
		>
			<div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
				<div className='pb-2'>
					<p className='text-4xl font-bold inline border-b-4 border-gray-500'>
						Contact
					</p>
					<p className='py-6'>Submit the form and lets connect!</p>
				</div>
				<div className='flex justify-center items-center'>
					<form action='' className='flex flex-col w-full md:w-1/2'>
						<input
							type='text'
							name='name'
							placeholder='Enter your name'
							className='p-2 bg-transparent border-2 border-orange-500 rounded-md text-white focus:outline-none'
						/>
						<input
							type='text'
							name='email'
							placeholder='Enter your email'
							className='p-2 my-4 bg-transparent border-2  border-orange-500 rounded-md text-white focus:outline-none'
						/>
						<textarea
							name='message'
							placeholder='Enter message here'
							rows='5'
							className='p-2 bg-transparent border-2  border-orange-500 rounded-md text-white focus:outline-none'
						></textarea>
						<button className=' button  text-white bg-gradient-to-b from-[#fdc50f] to-[#fb982f] shadow-lg shadow-[#fb982f] px-6 py-3 my-8 mx-auto flex items-center justify-center rounded-lg hover:scale-110 duration-300'>
							Connect
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
