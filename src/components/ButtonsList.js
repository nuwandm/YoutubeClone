import React from "react";
import Button from "./Button";

const Lists = [
	"All",
	"Gaming",
	"Songs",
	"Live",
	"Cricket",
	"Funny",
	"News",
	"Cooking",
	"Piano",
	"Workout",
];

const ButtonsList = () => {
	return (
		<div
			className="flex  overflow-x-auto "
			style={{ scrollBehavior: "smooth" }}
		>
			{Lists.map((list, index) => (
				<Button key={index} text={list} />
			))}
		</div>
	);
};

export default ButtonsList;
