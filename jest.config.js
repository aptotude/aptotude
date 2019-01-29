module.exports = {
  roots: [
    "<rootDir>/src/client"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
}