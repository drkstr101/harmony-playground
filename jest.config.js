const { getJestProjects } = require("@nrwl/jest")

module.exports = {
  projects: getJestProjects(),
  collectCoverageFrom: ["**/*.(t|j)sx?"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  testEnvironment: "node",
  testRegex: ".*\\.spec\\.(j|t)sx?$",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest"
  }
}
