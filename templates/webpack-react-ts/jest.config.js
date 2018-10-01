module.exports = {
  setupFiles: ["<rootDir>/config/jest/test-setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: ["**/src/**.(test|spec).(jsx|tsx|js|ts)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
