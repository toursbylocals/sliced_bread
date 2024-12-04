/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from "react";
import '../../app/i18n';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

const OrderForm: React.FC = () => {
  const { t , i18n} = useTranslation();
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

  return (<section id="order">    
      <form onSubmit={handleSubmit} className="order-form">
        <h2 style={{ textAlign: 'center' }}>{t('order')}</h2>
        <label className="form-label">
          <span>{t('name')}:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"            
          />
        </label>

        <label className="form-label">
          <span>{t('city')}:</span>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>

        <label className="form-label">
          <span>{t('state')}:</span>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>

        <label className="form-label">
          <span>{t('country')}:</span>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>

        <label className="form-label">
          <span>{t('product')}:</span>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="" disabled>
              {t('select_product')}
            </option>
            {products.map((product) => {
              // Fetch the product name based on the selected language
              const productName = product.name[i18n.language]; // Use the current language from i18n
              return (
                <option key={product._id} value={product._id}>
                  {productName} - ${product.price.toFixed(2)}
                </option>
              );
            })}
          </select>
        </label>

        <label className="form-label">
          <span>{t('quantity')}:</span>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            className="form-input"
          />
        </label>

        <button type="submit" className="form-submit">
          {t('submit_order')}
        </button>
      </form>
  </section> 
  );
};

export default OrderForm;