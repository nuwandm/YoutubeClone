import React from "react";

const Button = ({ text }) => {
	return (
		<div>
			<button className=" px-5 py-1 m-2 bg-gray-200 rounded-lg shadow-md">{text}</button>
		</div>
	);
};

export default Button;
