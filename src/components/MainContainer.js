import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
	return (
		<div className="col-span-11 m-2 bg-slate-500">
			<ButtonsList />
			<VideoContainer />
		</div>
	);
};

export default MainContainer;
