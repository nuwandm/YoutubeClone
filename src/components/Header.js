import React from "react";
import HamburgerIcon from "../Asserts/HamburgerIcon.jpg";
import YoutubeLogo from "../Asserts/Youtube.png";
import UserIcon from "../Asserts/UserIcon.png";
import SearchIcon from "../Asserts/SearchIcon.png";

const Head = () => {
	return (
		<div className="grid grid-flow-col p-5 m-2 shadow-lg">
			<div className="flex col-span-1">
				<img className="h-10" src={HamburgerIcon} alt="Hamburger Icon" />
				<img className="h-10 mx-2" src={YoutubeLogo} alt="Youtube Logo" />
			</div>
			<div className="col-span-10 px-10  flex items-center">
				<input
					className="w-1/2 border border-gray-400 p-2 rounded-l-full"
					type="text"
				/>
				<button className="px-10 border border-gray-400 p-2 rounded-r-full bg-gray-100">
					<img className="h-6" src={SearchIcon} alt="Search Icon" />
				</button>
			</div>
			<div className="col-span-1">
				<img className="h-10" src={UserIcon} alt="User Icon" />
			</div>
		</div>
	);
};

export default Head;
