"use client";

import React, { useEffect, useState } from "react";
import '../../app/i18n';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const OrderForm: React.FC = () => {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState<string | null>(null);

    // Fetch products
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("/api/products");
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError('Failed to load products. Please try again later.');
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, []);

    // Validation schema using Yup
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
        control,
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

                <div className="mb-4">
                    <label className="block text-lg font-medium">{t('name')}:</label>
                    <input
                        type="text"
                        {...register("name")}
                        className={`mt-2 p-2 w-full border rounded-md shadow-sm ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium">{t('city')}:</label>
                    <input
                        type="text"
                        {...register("city")}
                        className={`mt-2 p-2 w-full border rounded-md shadow-sm ${errors.city ? 'border-red-500' : ''}`}
                    />
                    {errors.city && <span className="text-red-500">{errors.city.message}</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium">{t('state')}:</label>
                    <input
                        type="text"
                        {...register("state")}
                        className={`mt-2 p-2 w-full border rounded-md shadow-sm ${errors.state ? 'border-red-500' : ''}`}
                    />
                    {errors.state && <span className="text-red-500">{errors.state.message}</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium">{t('country')}:</label>
                    <input
                        type="text"
                        {...register("country")}
                        className={`mt-2 p-2 w-full border rounded-md shadow-sm ${errors.country ? 'border-red-500' : ''}`}
                    />
                    {errors.country && <span className="text-red-500">{errors.country.message}</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium">{t('product')}:</label>
                    <select
                        {...register("product")}
                        className={`mt-2 p-2 w-full border rounded-md shadow-sm ${errors.product ? 'border-red-500' : ''}`}
                    >
                        <option value="" disabled>
                            {t('select_product')}
                        </option>
                        {products.map((product) => {
                            const productName = product.name[i18n.language];
                            return (
                                <option key={product._id} value={product._id}>
                                    {productName} - ${product.price.toFixed(2)}
                                </option>
                            );
                        })}
                    </select>
                    {errors.product && <span className="text-red-500">{errors.product.message}</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium">{t('quantity')}:</label>
                    <input
                        type="number"
                        {...register("quantity")}
                        className={`mt-2 p-2 w-full border rounded-md shadow-sm ${errors.quantity ? 'border-red-500' : ''}`}
                        min="1"
                    />
                    {errors.quantity && <span className="text-red-500">{errors.quantity.message}</span>}
                </div>

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
