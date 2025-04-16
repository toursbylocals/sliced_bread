export interface BeverageContainerProps {
	beverageData: {
		name: string;
		imageSrc: string;
		description: string;
	};
}

export interface ImageContainerProps {
	imageSorce: string;
	imageAlt: string;
}

export interface OrderTypes {
	customerName: string | undefined;
	drinkQuantity: number;
	city: string;
	stateProv: string;
	country: string;
}
