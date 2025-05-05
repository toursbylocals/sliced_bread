'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { generateUsername } from './util/utils';
import { reviews } from './data/reviews';
import { Review } from './interfaces/review';
import { Order } from './interfaces/order';

export default function Home() {
  const [status, setStatus] = useState<string | null>(null);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  const [reviewsToShow, setReviewsToShow] = useState<Array<Review> | null>(null);

  useEffect(() => {
    setReviewsToShow(reviews.sort(() => 0.5 - Math.random()).slice(0, 2))
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name')?.toString().trim() || generateUsername();
    const quantityInput = formData.get('quantity')?.toString().trim();
    const quantity = quantityInput ? parseInt(quantityInput, 10) : 1;

    const order = {
      name,
      quantity,
      city: formData.get('city'),
      province: formData.get('province'),
      country: formData.get('country'),
    };

    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });

    const result = await res.json();
    console.log('result', result)
    if (res.ok) {
      setStatus(`${result.quantity} bottle(s) of room temp water ordered! (Order-Number:${result.id})`);
      setLastOrder(result)
    } else {
      setStatus('Oops. Something went wrong.');
    }
  }

  return (
    <main className="p-8 max-w-3xl mx-auto font-sans text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 tracking-tight">Room Temperature Water</h1>
        <p className="text-lg text-gray-600">
          Just water. Nothing added. Nothing removed. Not cold. Not hot.<br />
          It's hydration at its most neutral.
        </p>
      </header>

      <div className="mb-10">
        <img
          src="/water.jpg"
          alt="Room Temperature Water"
          className="w-full h-auto rounded-xl shadow-xl object-cover"
        />
      </div>

      {reviewsToShow && (
        <div className="reviews-container space-y-6 mb-10">
          {reviewsToShow.map((review, index) => (
            <div key={index} className="review-box p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
              <div className="stars text-yellow-500 mb-2">★★★★★</div>
              <p className="review-text text-gray-700 mb-2">{review.review}</p>
              <div className="review-author text-sm text-gray-500">— {review.name}</div>
            </div>
          ))}
        </div>
      )}

      
      {status && (
        <p className="mt-6 text-green-600 font-medium text-center">{status}</p>
      )}
      {lastOrder && (
        <p className="mt-6 text-green-600 font-medium text-center">please click <a href={`/order/${lastOrder.id}`}>HERE</a> to view your most recent order<br/></p>
      )}

      <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Reserve Your Water</h2>
        <p className="text-sm text-gray-500 mb-6">
          No payment required. Just tell us where to send your H₂O.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Your name (optional)"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              name="quantity"
              type="number"
              min={1}
              placeholder="Quantity (optional)"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <input
            name="city"
            placeholder="City"
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            name="province"
            placeholder="State/Province"
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            name="country"
            placeholder="Country"
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg py-3 rounded-md transition-colors"
          >
            Hydrate Me
          </button>
        </form>
      </section>
    </main>
  );
}