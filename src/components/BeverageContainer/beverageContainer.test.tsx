import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BeverageContainer from "./BeverageContainer";

import { render } from "../../utils/test.utils";

describe("<BeverageContainer />", () => {
	const beverageDataMock = {
		name: "Mock Coffee",
		imageSrc: "/mock.png",
		description: "Test description for coffee",
	};

	it("renders properly", async () => {
		render(<BeverageContainer beverageData={beverageDataMock} />);

		const text = screen.getByText("Description");

		expect(await text).toBeInTheDocument();
	});
});
