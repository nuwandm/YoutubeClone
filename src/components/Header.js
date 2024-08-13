import React from "react";
import { useDispatch } from "react-redux";
// Assers
import HamburgerIcon from "../Asserts/HamburgerIcon.jpg";
import YoutubeLogo from "../Asserts/Youtube.png";
import UserIcon from "../Asserts/UserIcon.png";
import SearchIcon from "../Asserts/SearchIcon.png";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
	const dispatch = useDispatch();

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="grid grid-flow-col p-5 m-2 shadow-lg">
			<div className="flex col-span-1">
				<img
					onClick={toggleMenuHandler}
					className="h-10 cursor-pointer"
					src={HamburgerIcon}
					alt="Hamburger Icon"
				/>
				<a href="/">
					<img className="h-10 mx-2" src={YoutubeLogo} alt="Youtube Logo" />
				</a>
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
