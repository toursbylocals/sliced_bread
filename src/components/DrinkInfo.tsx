import Image from 'next/image';

export const DrinkInfo = () => {
  return (
    <>
      <div data-testid="drinkinfo-photo" className="flex justify-center pb-4">
        <Image
          alt="Spicy Manhattan"
          height={360}
          src="/drink.jpg"
          width={237}
        />
      </div>
      <h2
        data-testid="drinkinfo-title"
        className="text-2xl font-semibold text-gray-800 mb-4"
      >
        Spicy Manhattan
      </h2>
      <p data-testid="drinkinfo-description" className="text-gray-600">
        A Spicy Manhattan is a bold twist on the classic cocktail, combining rye
        whiskey or bourbon, sweet vermouth, and aromatic bitters with a spicy
        kick from chili-infused bitters or muddled jalapeño. Stirred and served
        chilled, it's typically garnished with a cherry or orange peel. This
        drink offers a thrilling balance of rich whiskey flavors and a spicy
        finish, ideal for those who enjoy bold, flavorful cocktails with heat.
      </p>
    </>
  );
};
