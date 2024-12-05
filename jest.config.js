module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest',
    '^.+\\.(ts|tsx)$': 'babel-jest', 
    '^.+\\.js$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}
