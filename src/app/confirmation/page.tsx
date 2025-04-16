"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { useOrder } from "../../context/OrderContext";
import { useBeverage } from "../../context/BeverageContext";

export default function ConfirmationPage() {
	const router = useRouter();
	const { order } = useOrder();
	const { beverageData } = useBeverage();

	const searchParams = useSearchParams();

	const confirmationId = searchParams.get("confirmId");

	useEffect(() => {
		if (!order) router.replace("/");
	}, [order, router]);

	if (!order) router.push(`/`);

	return (
		<div
			className="font-sans grid grid-rows-[20px_1fr_20px] 
      
      justify-center 
      min-h-screen 
      p-8 
      pb-20 
      gap-16 "
		>
			<main className="font-sans p-6 max-w-xl mx-auto">
				<h1 className="text-2xl font-bold mb-4 text-center text-teal-800">
					Order Confirmed <br />
					{confirmationId}
				</h1>

				<p>
					Thank you, <strong>{order?.customerName}</strong>!
				</p>

				<p>
					We are sending you <strong>{order?.drinkQuantity}</strong> of the
					delicious <strong>{beverageData?.name}</strong> drink
					{order?.drinkQuantity && Number(order?.drinkQuantity) > 1
						? "s"
						: ""}{" "}
					to:
				</p>

				<address className="mt-2 not-italic">
					{order?.city}, {order?.stateProv}, {order?.country}
				</address>

				<p className="mt-4 text-sm text-gray-500">
					Remember, you pay later. No need for any payment info right now.
				</p>
			</main>
		</div>
	);
}
