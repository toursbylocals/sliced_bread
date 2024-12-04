"use client";

import React, { useEffect, useState } from "react";
import '../../app/i18n';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

const OrderForm: React.FC = () => {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        city: "",
        state: "",
        country: "",
        product: "",
        quantity: 1,
    });
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-5 text-center">{t('order')}</h2>

                <label className="block mb-4">
                    <span className="text-lg font-medium">{t('name')}:</span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border rounded-md shadow-sm"
                        required
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-lg font-medium">{t('city')}:</span>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border rounded-md shadow-sm"
                        required
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-lg font-medium">{t('state')}:</span>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border rounded-md shadow-sm"
                        required
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-lg font-medium">{t('country')}:</span>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border rounded-md shadow-sm"
                        required
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-lg font-medium">{t('product')}:</span>
                    <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border rounded-md shadow-sm"
                        required
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
                </label>

                <label className="block mb-4">
                    <span className="text-lg font-medium">{t('quantity')}:</span>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min="1"
                        className="mt-2 p-2 w-full border rounded-md shadow-sm"
                    />
                </label>

                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
                    {t('submit_order')}
                </button>
            </form>
        </section>
    );
};

export default OrderForm;
