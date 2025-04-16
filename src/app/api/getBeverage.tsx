import { BEVERAGE_RECIPES } from "../../lib/urls.constants";
import { BeverageResponse } from "../../lib/types/response.types";

const transformDrinkData = async (data: any): Promise<BeverageResponse> => {
	const drink = await data.drinks[0];

	return {
		name: drink.strDrink,
		imageSrc: drink.strDrinkThumb,
		description: `This drink isn’t just a beverage — it’s an experience. From the first sip, it wraps your 
		senses in a perfect storm of flavor: bold yet smooth, refreshing but with depth, a harmony of warmth,
		brightness, and just the right touch of sweetness. It’s the kind of drink that elevates conversations,
		softens the edges of long days, and turns ordinary moments into something memorable. Whether sipped slowly
		or enjoyed with friends, it delivers the kind of satisfaction that only comes from something expertly
		balanced and endlessly enjoyable. It’s not just a drink — it’s the one you always come back to.`,
	};
};

export async function getBeverage() {
	const res = fetch(BEVERAGE_RECIPES);
	const data = await (await res).json();

	const beverageData = transformDrinkData(data);

	return beverageData;
}
