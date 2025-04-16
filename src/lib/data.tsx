import { getBeverage } from "@/app/api/getBeverage";

export async function getStaticData() {
	const data = await getBeverage();

	return {
		props: {
			recipeData: data,
		},
	};
}
