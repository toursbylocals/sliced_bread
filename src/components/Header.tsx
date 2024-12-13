import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex gap-8 grid grid-cols-12 mb-6">
      <div className="col-start-3 col-span-2">
        <Image
          alt="Spicy Manhattan"
          height={240}
          src="/drink.jpg"
          width={158}
        />
      </div>
      <div className="col-span-6">
        A Spicy Manhattan is a bold variation of the classic Manhattan, adding a
        lively kick to the traditional cocktail. It begins with the usual base
        of smooth rye whiskey or bourbon, complemented by sweet vermouth and
        aromatic bitters. The twist comes with the addition of spicy
        elements—often a splash of chili-infused bitters or a muddled jalapeño
        slice—bringing a layer of heat that contrasts beautifully with the
        sweetness of the vermouth. The drink is stirred to perfection and served
        chilled, typically garnished with a cherry or an orange peel for a burst
        of citrus aroma. The Spicy Manhattan offers a thrilling balance of rich,
        warming whiskey flavors with an exciting spicy finish, perfect for those
        who enjoy a bold, flavorful cocktail with a little extra heat.
      </div>
    </div>
  );
};
