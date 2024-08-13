import React from "react";

const SideBar = () => {
	return (
		<div className="p-2 shadow-lg col-span-1 m-2">
			<ul>
				<li>Home</li>
				<li>Shorts</li>
				<li>Videos</li>
				<li>Lives</li>
			</ul>
			<h1 className="font-bold pt-5">Subscriptions</h1>
			<ul>
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
			<h1 className="font-bold pt-5">Watch Later</h1>
			<ul>
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
		</div>
	);
};

export default SideBar;
