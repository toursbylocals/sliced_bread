Short video detailing submission:
loom.com/share/7707271840674375ad684067f7b4d2e3

Longer version:
loom.com/share/39661334002e4d41b36cf4d5d17f9ae5

# Greatest Beverage

Congratulations! After years of tinkering with your secret recipe you have managed to create the world's greatest beverage. Inspired by some of the great modern day entrepreneurs, you have chosen to sell your beverage directly to consumers from your site. With an MVP perspective, you have chosen to ship a minimal set of features to start with the intention of improving the site based off of your customers' feedback.

### Create a landing page that

- [x] Tells the visitor what your drink is called
- [x] Includes an image (or images) that has your drink in it.
- [x] Describe the drink so everyone understands why it’s the greatest beverage ever.
- [x] A privacy focused “pay me later” order form that contains the following:
- [x] Customers name
- [x] Quantity of drinks to purchase
- [x] City
- [x] State/Province
- [x] Country
- [x] An order button

### After ordering

- [x] Confirmation that the order succeeded
- [x] Provide order confirmation number
- [x] Provide unique URL to see order confirmation & details

### Tooling Changes

I've replaced `eslint` and `prettier` with [biomejs](https://biomejs.dev/) that does a great job providing both linting and formatting at a fraction of the time required compared to the former. They also have a [VSCode extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) and a CLI that operates very similarly to the `eslint` and `prettier` plugins.

The reasoning behind this is that the config required for both sometimes took as much time as getting a full feature completed. Biome is more opinionated and provides a better out of the box solution with much less configuration.

I've updated the scripts in `package.json` accordingly if you'd like to see or try these changes yourselves.

### AI / Resource Uses

ChatGPT was used to generate the base layout (two columns) to avoid having to spend unnecessary time designing as well as some of the base jest tests. As far as form fields went I used some examples provided on [tailwindui.com](https://tailwindui.com/).

### Privacy

To maintain customer privacy, the use of JWTs was implemented to mask the data in the URL, in a real-world scenario, this would just be an order id and a login token passed along to validate ownership of the order. On successful order, the URL is updated with the token so you can revisit at any time.

### Nice-to-haves

Given more time I would have liked to add permanent storage with an ORM such as Prisma for schema introspection and order storage, and Playwright for some e2e testing.