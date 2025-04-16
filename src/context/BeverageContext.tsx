"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

import { BeverageResponse } from "../lib/types/response.types";

type BeverageContextType = {
	beverageData: BeverageResponse | null;
	setBeverageData: (order: BeverageResponse) => void;
};

export const BeverageContext = createContext<BeverageContextType | undefined>(
	undefined
);

export const BeverageProvider = ({ children }: { children: ReactNode }) => {
	const [beverageData, setBeverageData] = useState<BeverageResponse | null>(
		null
	);

	return (
		<BeverageContext.Provider value={{ beverageData, setBeverageData }}>
			{children}
		</BeverageContext.Provider>
	);
};

export const useBeverage = () => {
	const context = useContext(BeverageContext);

	if (!context)
		throw new Error("useBeverage must be used within BeverageProvider");

	return context;
};
