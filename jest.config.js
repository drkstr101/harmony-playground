const { getJestProjects } = require("@nrwl/jest")

module.exports = {
  projects: getJestProjects(),
  collectCoverageFrom: ["**/*.(t|j)sx?"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  testEnvironment: "node",
  coverageDirectory: "coverage",
  testRegex: ".*\\.spec\\.(j|t)sx?$",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest"
  }
}
