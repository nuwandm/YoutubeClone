import React from "react";
import HamburgerIcon from "../Asserts/HamburgerIcon.jpg";
import YoutubeLogo from "../Asserts/Youtube.png";
import UserIcon from "../Asserts/UserIcon.png";
const Head = () => {
	return (
		<div className="grid grid-flow-col p-5 m-2 shadow-lg">
			<div className="flex col-span-1">
				<img className="h-8" src={HamburgerIcon} alt="Hamburger Icon" />
				<img className="h-8" src={YoutubeLogo} alt="Youtube Logo" />
			</div>
			<div className="col-span-10">
				<input type="text" />
				<button>Search</button>
			</div>
			<div className="col-span-1">
				<img className="h-8" src={UserIcon} alt="User Icon" />
			</div>
		</div>
	);
};

export default Head;
