import React from "react";
import Image from "next/image";

const ProductDescription: React.FC = () => (
  <div className="md:w-1/2">
    <Image
      src="https://images.unsplash.com/photo-1551024709-8f23befc6f87"
      alt="Elixir of Eternity"
      width={600}
      height={400}
      className="rounded-lg shadow-lg mb-4"
    />
    <p className="text-lg mb-4">
      Discover the Elixir of Eternity, the world's most extraordinary beverage!
      This miraculous concoction blends rare herbs, exotic fruits, and a touch
      of cosmic energy to create an unparalleled taste experience.
    </p>
    <p className="text-lg">
      Each sip rejuvenates your body, sharpens your mind, and connects you to
      the universe's infinite wisdom. It's not just a drink; it's a journey to
      eternal vitality and enlightenment!
    </p>
  </div>
);

export default ProductDescription;
