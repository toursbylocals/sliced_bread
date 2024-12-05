// src/components/ProductSelect.tsx

import React from "react";
import { useTranslation } from "react-i18next";

interface ProductSelectProps {
    products: Array<{ _id: string; name: { [key: string]: string }; price: number }>;
    register: any;
    error: any;
    DECIMAL_PLACES: number;
}

const ProductSelect: React.FC<ProductSelectProps> = ({ products, register, error, DECIMAL_PLACES }) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="mb-4">
            <label className="block text-lg font-medium">{t('product')}:</label>
            <select
                {...register("product")}
                className={`mt-2 p-2 w-full border rounded-md shadow-sm ${error ? 'border-red-500' : ''}`}
            >
                <option value="" disabled>
                    {t('select_product')}
                </option>
                {products.map((product) => {
                    const productName = product.name[i18n.language];
                    
                    return (
                        <option key={product._id} value={product._id}>
                            {productName} - ${product.price.toFixed(DECIMAL_PLACES)}
                        </option>
                    );
                })}
            </select>
            {error && <span className="text-red-500">{error.message}</span>}
        </div>
    );
};

export default ProductSelect;
