import React from "react";
import userIcon from "../Asserts/UserIcon.png";

const commentsData = [
	{
		name: "Nuwan Madusanka",
		comment: "Level 1 Comment",
		replay: [
			{
				name: "Udara Maduranga",
				comment: "Level 2 Reply",
				replay: [],
			},
			{
				name: "Udara Maduranga",
				comment: "Level 2 Reply",
				replay: [
					{
						name: "Nuwan Madusanka",
						comment: "Level 3 Reply",
						replay: [
							{
								name: "Nuwan Madusanka",
								comment: "Level 4 Reply",
								replay: [
									{
										name: "Nuwan Madusanka",
										comment: "Level 5 Reply",
										replay: [],
									},
								],
							},
						],
					},
				],
			},
			{
				name: "Udara Maduranga",
				comment: "Level 2 Reply",
				replay: [
					{
						name: "Udara Maduranga",
						comment: "Level 3 Reply",
						replay: [],
					},
				],
			},
			{
				name: "Udara Maduranga",
				comment: "Level 2 Reply",
				replay: [],
			},
		],
	},
	{
		name: "Asintha Madushan",
		comment: "Level 1 Comment",
		replay: [
			{
				name: "Bhanuka Rajapakse",
				comment: "Level 2 Reply",
				replay: [],
			},
		],
	},
	{
		name: "Nuwan Madusanka",
		comment: "Level 1 Comment",
		replay: [
			{
				name: "Udara Maduranga",
				comment: "Level 2 Reply",
				replay: [
					{
						name: "Nuwan Madusanka",
						comment: "Level 3 Reply",
						replay: [],
					},
				],
			},
			{
				name: "Udara Maduranga",
				comment: "Level 2 Reply",
				replay: [],
			},
		],
	},
	{
		name: "Dilan Perera",
		comment: "Level 1 Comment",
		replay: [
			{
				name: "Udara Maduranga",
				comment: "Level 2 Reply",
				replay: [
					{
						name: "Nuwan Madusanka",
						comment: "Level 3 Reply",
						replay: [],
					},
				],
			},
			{
				name: "Udara Maduranga",
				comment: "Level 2 Reply",
				replay: [],
			},
		],
	},
];

const Comment = ({ data }) => {
	const { name, comment } = data;
	return (
		<div className="flex bg-gray-100 p-2 rounded-lg my-2">
			<img className="w-10 h-10 flex " src={userIcon} alt="User" />
			<div className="ml-2">
				<p className="font-bold">{name}</p>
				<p>{comment}</p>
			</div>
		</div>
	);
};

const CommentList = ({ comments }) => {
	return comments.map((comment, index) => (
		<div key={index}>
			<Comment data={comment} />
			{comment?.replay && (
				<div className="ml-5 pl-3 border border-l-black">
					{/* Recursing CommentList */}
					<CommentList comments={comment.replay} />
				</div>
			)}
		</div>
	));
};

const CommentContainer = () => {
	return (
		<div className="m-5 p-2">
			<h1 className="text-2xl font-bold">Comments :</h1>
			<CommentList comments={commentsData} />
		</div>
	);
};

export default CommentContainer;
