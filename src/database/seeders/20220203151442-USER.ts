'use strict';
import { hashSync } from 'bcrypt';
import faker from '@faker-js/faker';
import { SEEDER_NUM } from '../seeder.constants';
export function up(queryInterface) {
  const password = '1111111';
  const data = [
    {
      DOCTORS_OFFICE_ID: 1,
      USER_ROLE_ID: 1,
      EMAIL: 'safet@mail.ba',
      USER_NAME: 'markon1',
      PASSWORD: hashSync(password, 10),
      FIRST_NAME: 'Safet',
      LAST_NAME: 'Isovic',
      PHONE: '063 521216',
    },
  ];

  for (let i = 0; i < SEEDER_NUM.CARETAKER; i++) {
    data.push({
      DOCTORS_OFFICE_ID: 1,
      USER_ROLE_ID: faker.datatype.number({ min: 1, max: 3 }),
      EMAIL: faker.internet.email(),
      USER_NAME: faker.internet.userName(),
      PASSWORD: hashSync(password, 10),
      FIRST_NAME: faker.name.firstName(),
      LAST_NAME: faker.name.lastName(),
      PHONE: faker.phone.phoneNumber('+381 ## ### ###'),
    });
  }

  return queryInterface.bulkInsert('OFFICE_USER', data, {});
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('OFFICE_USER', null, {});
}
