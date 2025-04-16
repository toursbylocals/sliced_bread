"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { useOrder } from "../../context/OrderContext";

import { OrderTypes } from "../../lib/types/components.types";

const MAX_QUANTITY = 12;
const MAX_NUM = 1000;

const FormContainer = () => {
	const {
		handleSubmit,
		control,
		formState: { isSubmitting, isDirty, isValid, errors },
	} = useForm<OrderTypes>();

	const router = useRouter();
	const { setOrder } = useOrder();

	const [drinkQuantity, setDrinkQuantity] = useState<number>(0);

	const orderBeverage = (data: OrderTypes) => {
		setOrder({
			customerName:
				data?.customerName === ""
					? `Guest_${Math.floor(Math.random() * MAX_NUM)}`
					: data?.customerName,
			drinkQuantity:
				drinkQuantity > 0
					? drinkQuantity
					: Math.floor(Math.random() * MAX_QUANTITY) + 1,
			city: data.city,
			stateProv: data.stateProv,
			country: data.country,
		});

		const params = new URLSearchParams({
			confirmId: uuidv4(),
		});

		router.push(`/confirmation?${params.toString()}`);
	};

	return (
		<form
			className="p-10 w-full border-2 border-indigo-600"
			onSubmit={handleSubmit((data) => orderBeverage(data))}
		>
			<h4
				className="font-semibold leading-snug tracking-normal mb-5 text-teal-800 w-full 
				text-lg max-w-md lg:max-w-xl lg:text-2xl"
			>
				Order Form
			</h4>

			<p className="mt-4 text-sm text-gray-500">
				You can pay later. No need for any payment info right now.
			</p>

			<div className="mb-1 flex flex-col gap-6">
				<div className="w-full max-w-sm min-w-[500px]">
					<label htmlFor="customerName">Customer's Name</label>

					<Controller
						render={({ field }) => (
							<input
								{...field}
								id="customerName"
								onChange={(e) => field.onChange(e.target.value)}
								className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm 
							border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease 
							focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm 
							focus:shadow"
							/>
						)}
						defaultValue={""}
						name="customerName"
						control={control}
					/>
				</div>

				<div className="w-full max-w-sm min-w-[500px]">
					<label htmlFor="drinkQuantity">Quantity of drinks</label>

					<Controller
						render={({ field }) => (
							<input
								{...field}
								id="drinkQuantity"
								onChange={(e) =>
									field.onChange(setDrinkQuantity(Number(e.target.value)))
								}
								className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm 
							border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease 
							focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm 
							focus:shadow"
							/>
						)}
						name="drinkQuantity"
						control={control}
					/>
				</div>

				<div className="w-full max-w-sm min-w-[500px]">
					<label htmlFor="city">City</label>

					<Controller
						rules={{
							required: true,
						}}
						render={({ field }) => (
							<input
								{...field}
								id="city"
								onChange={(e) => field.onChange(e.target.value)}
								className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 
							text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 
							ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm 
							focus:shadow"
							/>
						)}
						defaultValue={""}
						name="city"
						control={control}
					/>

					{errors.city && (
						<p className="text-red-500 text-xs mt-3 italic">
							Please fill out this field.
						</p>
					)}
				</div>

				<div className="w-full max-w-sm min-w-[500px]">
					<label htmlFor="state">State/Province</label>

					<Controller
						rules={{
							required: true,
						}}
						render={({ field }) => (
							<input
								{...field}
								id="state"
								onChange={(e) => field.onChange(e.target.value)}
								className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 
							text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease 
							focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm 
							focus:shadow"
							/>
						)}
						defaultValue={""}
						name="stateProv"
						control={control}
					/>

					{errors.stateProv && (
						<p className="text-red-500 text-xs mt-3 italic">
							Please fill out this field.
						</p>
					)}
				</div>

				<div className="w-full">
					<label htmlFor="country">Country</label>

					<Controller
						rules={{
							required: true,
						}}
						render={({ field }) => (
							<input
								{...field}
								id="country"
								onChange={(e) => field.onChange(e.target.value)}
								className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 
							text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease 
							focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm 
							focus:shadow"
							/>
						)}
						defaultValue={""}
						name="country"
						control={control}
					/>

					{errors.country && (
						<p className="text-red-500 text-xs mt-3 italic">
							Please fill out this field.
						</p>
					)}
				</div>

				<button
					type="submit"
					disabled={!isDirty || !isValid || isSubmitting}
					className="mt-4 w-full rounded-md bg-indigo-600 py-2 px-4 border border-transparent text-center 
					text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-indigo-700 
					focus:shadow-none active:bg-indigo-700 hover:bg-indigo-700 active:shadow-none 
					disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				>
					Ship them
				</button>
			</div>
		</form>
	);
};

export default FormContainer;
