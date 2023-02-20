// Modules
// CommonJS, every file is module (by default)
// MOdules - Encapsulated Code (only share minimum)

const names = require("./3-names")
const sayHi = require("./5-utils")
const data = require("./6-alternate_usage_of_exports")
require("./7-mind-granade")
console.log(data);
console.log(names);
sayHi("ANIL")
sayHi(names._name)
// console.log(num1);