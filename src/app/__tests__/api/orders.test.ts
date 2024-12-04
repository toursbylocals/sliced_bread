import { generateRandomName, generateRandomQuantity } from "../../../lib/utils";

describe("Order API Utilities", () => {
  const NAME_SUFFIX = 1000;

  test("generateRandomName should return a string starting with Anonymous", () => {
    const name = generateRandomName(NAME_SUFFIX);

    expect(name).toMatch(/^Anonymous\d+$/);
  });

  test("generateRandomQuantity should return a number within the specified range", () => {
    const MAX_QUANTITY = 10;
    const quantity = generateRandomQuantity(1, MAX_QUANTITY);

    expect(quantity).toBeGreaterThanOrEqual(1);
    expect(quantity).toBeLessThanOrEqual(MAX_QUANTITY);
  });
});
