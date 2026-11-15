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

export function getPeopleByAge(people, age) {
  const peopleByAge = [];
  people.filter((person) => {
    if (person.age === age) {
      peopleByAge.push(person.firstName);
    }
  });
  return peopleByAge;
}

getPeopleByAge(people, 21);

export function getPeopleNamesOlderThan(people, age) {
  const peopleNamesOlderThan = [];
  people.filter((person) => {
    if (person.age > age) {
      return peopleNamesOlderThan.push(
        `${person.firstName} ${person.lastName}`
      );
    }
  });
  return peopleNamesOlderThan;
}

export function getPeopleByLastName(people, lastName) {
  const peopleByLastName = [];
  people.filter((person) => {
    if (person.lastName === lastName) {
      return peopleByLastName.push(`${person.firstName} ${person.lastName}`);
    }
  });
  return peopleByLastName;
}

export function findPersonById(people, id) {
  return people.find((person) => {
    if (person.id === id) {
      console.log(person);
      return person;
    }
  });
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getLastNamesSortedByAge(people) {
  console.log(
    people.toSorted((a, b) => a.age - b.age).map((person) => person.lastName)
  );
}
