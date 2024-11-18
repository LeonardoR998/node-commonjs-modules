const createName = require("./names");
const createHobbies = require("./hobbies");

function createPerson() {
  const { firstName, lastName } = createName;
  const { hobbies } = createHobbies;

  return {
    firstName,
    lastName,
    hobbies,
  };
}

module.exports = createPerson;
