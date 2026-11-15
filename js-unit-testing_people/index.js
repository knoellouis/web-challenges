const people = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    id: 3,
    firstName: "Max",
    lastName: "Mustermann",
    age: 32,
  },
  {
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  },
  {
    id: 5,
    firstName: "Luke",
    lastName: "Skywalker",
    age: 23,
  },
];

export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  const fullNames = [];
  people.map((person) => {
    const fullName = `${person.firstName} ${person.lastName}`;
    fullNames.push(fullName);
    return fullName;
  });
  return fullNames;
}

export function getNameAndAge(people) {
  const namesAndAges = [];
  people.map((person) =>
    namesAndAges.push(`${person.lastName} (${person.age})`)
  );
  return namesAndAges;
}

export function getPeopleByAge(people, age) {}

export function getPeopleNamesOlderThan(people, age) {}

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getLastNamesSortedByAge(people) {}
