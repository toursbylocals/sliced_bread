"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const orderId = "YOURID12304";
  const router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(name, quantity, city, region, country);
    router.push(`/order-details/${orderId}`);
  };

  return (
    <>
      <section className="container px-4 mx-auto">
        <h2>Mountain Soul</h2>
        <p className="leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid amet at culpa
          delectus dignissimos eligendi esse et expedita, facere harum ipsum libero modi natus,
          nesciunt nihil nulla numquam quisquam quo recusandae reiciendis repellendus reprehenderit
          rerum similique, totam vero voluptatum? Delectus dolor ea excepturi labore non quo sed?
          Consequuntur deserunt dicta laboriosam magni nostrum, placeat qui quia! Ab accusantium ad
          adipisci animi at blanditiis earum eius eligendi eos esse et eum eveniet exercitationem
          expedita incidunt laudantium nemo neque praesentium quis ratione, reprehenderit similique
          sint sit sunt tempora temporibus vel voluptas voluptate voluptatem voluptates? Ab
          blanditiis, corporis cumque debitis deserunt dolor dolorem error inventore possimus vero?
        </p>
      </section>
      <section className="container px-4 mx-auto">
        <form onSubmit={handleFormSubmit}>
          <input
            className="block border-black border mb-2"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="block border-black border mb-2"
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(Number(e.target.value));
            }}
          />
          <input
            className="block border-black border mb-2"
            type="text"
            name="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input
            className="block border-black border mb-2"
            type="text"
            name="region"
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          />
          <input
            className="block border-black border mb-2"
            type="text"
            name="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />

          <button className="block border-black border mb-2 p-2" type="submit">
            Hydrate Me!
          </button>
        </form>
      </section>
    </>
  );
}
