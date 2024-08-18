import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// Assers
import HamburgerIcon from "../Asserts/HamburgerIcon.jpg";
import YoutubeLogo from "../Asserts/Youtube.png";
import UserIcon from "../Asserts/UserIcon.png";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
	const dispatch = useDispatch();
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [showResults, setShowResults] = useState(false);

	useEffect(() => {
		if (!searchQuery) return;

		const timer = setTimeout(() => fetchData(), 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const fetchData = async () => {
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const json = await data.json();
		setSearchResults(json[1]);
	};

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="grid grid-flow-col p-3 m-2 shadow-lg">
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
			<div className="col-span-10 px-10 ">
				<div>
					<input
						className="w-1/2 border border-gray-400 p-2 rounded-l-full pl-6"
						type="text"
						value={searchQuery}
						onChange={(e) => {
							setSearchQuery(e.target.value);
						}}
						onFocus={() => setShowResults(true)}
						onBlur={() => setShowResults(false)}
					/>
					<button className="px-5 py-2 border border-gray-400   rounded-r-full bg-gray-100">
						🔍
					</button>
				</div>
				{showResults && (
					<div className="absolute py-2 px-5 w-[26rem] shadow-lg rounded-lg bg-slate-100">
						<ul>
							{searchResults.map((result, index) => (
								<li
									key={index}
									className="hover:bg-slate-300 rounded-lg m-1 cursor-pointer "
								>
									🔍 {result}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className="col-span-1">
				<img className="h-10" src={UserIcon} alt="User Icon" />
			</div>
		</div>
	);
};

export default Head;
