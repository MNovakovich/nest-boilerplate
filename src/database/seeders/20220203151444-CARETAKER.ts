'use strict';
import { hashSync } from 'bcrypt';
import faker from '@faker-js/faker';
import { SEEDER_NUM } from '../seeder.constants';
export function up(queryInterface) {
  const password = '1111111';
  const data = [
    {
      CARETAKER_TYPE_ID: 1,
      EMAIL: 'safet@mail.ba',
      PASSWORD: password,
      FIRST_NAME: 'Safet',
      LAST_NAME: 'Isovic',
      ADDRESS: 'Srpskih junaka 10, Novi Sad',
      PHONE: '063 521216',
    },
  ];

  for (let i = 0; i < SEEDER_NUM.CARETAKER; i++) {
    data.push({
      CARETAKER_TYPE_ID: faker.datatype.number({ min: 1, max: 4 }),
      EMAIL: faker.internet.email(),
      PASSWORD: password, // hashSync(password, 10),
      FIRST_NAME: faker.name.firstName(),
      LAST_NAME: faker.name.lastName(),
      ADDRESS: ` ${faker.address.streetName()} 21000, Novi Sad`,
      PHONE: faker.phone.phoneNumber('+381 ## ### ###'),
    });
  }

  return queryInterface.bulkInsert('CARETAKER', data, {});
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('CARETAKER', null, {});
}
