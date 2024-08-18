import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParms] = useSearchParams();

	useEffect(() => {
		dispatch(closeMenu());
	}, []);

	return (
		<div className="flex flex-col">
			<div className="px-5">
				<iframe
					width="900"
					height="600"
					src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					// referrerpolicy="strict-origin-when-cross-origin"
					// allowfullscreen
				></iframe>
			</div>
			<CommentContainer />
		</div>
	);
};

export default WatchPage;
