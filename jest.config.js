module.exports = {
  roots: [
    "<rootDir>/src/"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    "^components/(.*)":  "<rootDir>/src/components/$1",
    "^dev/(.*)":  "<rootDir>/src/dev/$1",
    "^models/(.*)":  "<rootDir>/src/models/$1",
    "^pages/(.*)":  "<rootDir>/src/pages/$1",
    "^services/(.*)":  "<rootDir>/src/services/$1",
  },
};