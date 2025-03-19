import { faker } from "@faker-js/faker";

const userSchema = () => {
  return {
    name: faker.person.fullName(),
    gender: faker.person.gender(),
  };
};

export const users = faker.helpers.multiple(userSchema, { count: 10 });
