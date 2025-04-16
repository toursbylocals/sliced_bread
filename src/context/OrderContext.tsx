"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

import { OrderTypes } from "../lib/types/components.types";

type OrderContextType = {
	order: OrderTypes | null;
	setOrder: (order: OrderTypes) => void;
};

export const OrderContext = createContext<OrderContextType | undefined>(
	undefined
);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
	const [order, setOrder] = useState<OrderTypes | null>(null);

	return (
		<OrderContext.Provider value={{ order, setOrder }}>
			{children}
		</OrderContext.Provider>
	);
};

export const useOrder = () => {
	const context = useContext(OrderContext);

	if (!context) throw new Error("useOrder must be used within OrderProvider");

	return context;
};
