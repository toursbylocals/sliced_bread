"use client";

import React, { useEffect } from "react";

import ImageContainer from "../ImageContainer/ImageContainer";

import { BeverageContainerProps } from "../../lib/types/components.types";

import { useBeverage } from "../../context/BeverageContext";

const BeverageContainer: React.FC<BeverageContainerProps> = ({
	beverageData,
}) => {
	const { setBeverageData } = useBeverage();

	useEffect(() => {
		setBeverageData(beverageData);
	}, [beverageData]);

	return (
		<div
			className="flex flex-col gap-8 row-start-2 
        items-center sm:items-start"
		>
			<h1
				className="font-bold leading-snug tracking-tight text-teal-800 my-6 
			w-full text-2xl lg:max-w-3xl lg:text-5xl"
			>
				{beverageData?.name}
			</h1>

			<ImageContainer
				imageAlt={beverageData?.name}
				imageSorce={beverageData?.imageSrc}
			/>

			<div>
				<h4
					className="font-semibold leading-snug tracking-normal text-teal-800 my-6 w-full 
				text-lg max-w-md lg:max-w-xl lg:text-2xl"
				>
					Description
				</h4>

				<p>{beverageData.description}</p>
			</div>
		</div>
	);
};

export default BeverageContainer;
