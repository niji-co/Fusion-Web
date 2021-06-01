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
    "^@/(.*)":  "<rootDir>/src/$1",
    "^actions/(.*)":  "<rootDir>/src/actions/$1",
    "^api/(.*)":  "<rootDir>/src/api/$1",
    "^components/(.*)":  "<rootDir>/src/components/$1",
    "^dev/(.*)":  "<rootDir>/src/dev/$1",
    "^layouts/(.*)":  "<rootDir>/src/layouts/$1",
    "^models/(.*)":  "<rootDir>/src/models/$1",
    "^pages/(.*)":  "<rootDir>/src/pages/$1",
    "^reducers/(.*)":  "<rootDir>/src/reducers/$1",
  },
};
