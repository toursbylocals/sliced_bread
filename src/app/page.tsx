import React from "react";
import OrderForm from "@/components/OrderForm";

export default function Home() {
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
        <OrderForm />
      </section>
    </>
  );
}
