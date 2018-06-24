module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/?(*.)(spec|test).{js,jsx,mjs}',
    '!src/index.js'
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98
    }
  },
  coverageReporters: ['json', 'lcov', 'text-summary'],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
    '<rootDir>/config/jest-mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/config/jest-mocks/image.js'
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/config/test-setup.js'
}