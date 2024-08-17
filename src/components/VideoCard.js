import React from "react";

const VideoCard = ({ info }) => {
	const { snippet, statistics } = info;
	const { channelTitle, title, thumbnails } = snippet;

	return (
		<div className="p-2 m-2 w-60 shadow-lg rounded-lg">
			<img
				className="rounded-lg "
				src={thumbnails.medium.url}
				alt="Thumbnail"
			/>
			<ul>
				<li className="font-bold py-2">{title}</li>
				<li>{channelTitle}</li>
				<li>{statistics.viewCount}</li>
			</ul>
		</div>
	);
};

// higher order function
export const RedBorderedVideoCard = ({ info }) => {
	return (
		<div className="p-1 m-1 border-4 border-black ">
			<VideoCard info={info} />
		</div>
	);
};

export default VideoCard;
