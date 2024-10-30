module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}
