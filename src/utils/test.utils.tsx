import React from "react";
import { render } from "@testing-library/react";

import { BeverageContext } from "../context/BeverageContext";
import { OrderContext } from "../context/OrderContext";

export const renderWithProviders = (
	ui: React.ReactElement,
	{
		beverageValue = {
			beverageData: {
				name: "Espresso Rumtini",
				imageSrc:
					"https://www.thecocktaildb.com/images/media/drink/acvf171561574403.jpg",
				description: "This drink isn’t just.....",
			},
			setBeverageData: jest.fn(),
		},
		orderValue = {
			order: {
				customerName: "",
				drinkQuantity: 0,
				city: "Toronto",
				stateProv: "Ontario",
				country: "Canada",
			},
			setOrder: jest.fn(),
		},
	} = {}
) => {
	const Wrapper = ({ children }: { children: React.ReactNode }) => (
		<BeverageContext.Provider value={beverageValue}>
			<OrderContext.Provider value={orderValue}>
				{children}
			</OrderContext.Provider>
		</BeverageContext.Provider>
	);

	return render(ui, { wrapper: Wrapper });
};

export * from "@testing-library/react";
export { renderWithProviders as render };
