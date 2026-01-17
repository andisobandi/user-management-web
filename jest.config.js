module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^@utils$": "<rootDir>/src/utils/index.js",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@context/(.*)$": "<rootDir>/src/context/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@test-utils/(.*)$": "<rootDir>/src/test-utils/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "json"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",

    "!src/**/*.stories.{js,jsx}",
    "!src/**/index.{js,jsx}",
    "!src/main.jsx",
    "!src/app.jsx",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 75,
      statements: 75,
    },
  },
};
