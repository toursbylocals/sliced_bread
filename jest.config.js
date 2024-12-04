module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '@/app/(.*)$': '<rootDir>/src/app/$1',
    '@/components/(.*)$': '<rootDir>/src/components/$1',
    '@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '@/stores/(.*)$': '<rootDir>/src/stores/$1',
    '@/stores/(.*)$': '<rootDir>/src/stores/$1',
    'next/font/(.*)': `<rootDir>/src/app/__mocks__/nextFontMock.js`,
  },
  modulePaths: ['<rootDir>'],
};
