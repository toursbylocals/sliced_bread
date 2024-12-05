"use client";

import React, { useEffect, useState } from "react";
import '../../app/i18n';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputField from "../inputfield/inputfield"; // Import the InputField component
import ProductSelect from "../product-select/productselect"; // Import the ProductSelect component

const OrderForm: React.FC = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState<string | null>(null);
    const DECIMAL_PLACES = 2;

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("/api/products");

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();
                
                setProducts(data);

            } catch (exception) {
                setError('Failed to load products. Please try again later.');
                console.error('Error fetching products:', exception);
            }
        }

        fetchProducts();
    }, []);

    const schema = Yup.object().shape({
        name: Yup.string().optional(),
        city: Yup.string().required(t('validation.city_required')),
        state: Yup.string().required(t('validation.state_required')),
        country: Yup.string().required(t('validation.country_required')),
        product: Yup.string().required(t('validation.product_required')),
        quantity: Yup.number()
            .required(t('validation.quantity_required'))
            .min(1, t('validation.quantity_min')),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            city: "",
            state: "",
            country: "",
            product: "",
            quantity: 1,
        },
    });

    const onSubmit = async (formData: any) => {
        const response = await fetch("/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();

        if (response.ok) {
            router.push(`/details?orderId=${result.order._id}`);
        } else {
            alert(`Order submission failed: ${result.message}`);
        }
    };

    return (
        <section id="order" className="py-10 px-5 bg-gray-50">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-5 text-center">{t('order')}</h2>
                {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
                <InputField
                    label={t('name')}
                    name="name"
                    type="text"
                    register={register}
                    error={errors.name}
                />
                <InputField
                    label={t('city')}
                    name="city"
                    type="text"
                    register={register}
                    error={errors.city}
                />
                <InputField
                    label={t('state')}
                    name="state"
                    type="text"
                    register={register}
                    error={errors.state}
                />
                <InputField
                    label={t('country')}
                    name="country"
                    type="text"
                    register={register}
                    error={errors.country}
                />
                <ProductSelect
                    products={products}
                    register={register}
                    error={errors.product}
                    DECIMAL_PLACES={DECIMAL_PLACES}
                />
                <InputField
                    label={t('quantity')}
                    name="quantity"
                    type="number"
                    register={register}
                    error={errors.quantity}
                    min="1"
                />
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                >
                    {t('submit_order')}
                </button>
            </form>
        </section>
    );
};

export default OrderForm;
