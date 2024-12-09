module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "@swc/jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1", // Matches `./src/*` in tsconfig
  },
};
