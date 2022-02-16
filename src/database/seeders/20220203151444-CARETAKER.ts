'use strict';

import faker from '@faker-js/faker';
import { SEEDER_NUM } from '../seeder.constants';
export function up(queryInterface) {
  const data = [
    {
      CARETAKER_TYPE_ID: 1,
      ADDRESS: 'Srpskih junaka 10, Novi Sad',
      PHONE: '063 521216',
      USER_ID: 1,
    },
  ];

  for (let i = 0; i < SEEDER_NUM.CARETAKER; i++) {
    data.push({
      CARETAKER_TYPE_ID: faker.datatype.number({ min: 1, max: 4 }),
      ADDRESS: ` ${faker.address.streetName()} 21000, Novi Sad`,
      PHONE: faker.phone.phoneNumber('+381 ## ### ###'),
      USER_ID: i + 2,
    });
  }

  return queryInterface.bulkInsert('CARETAKER', data, {});
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('CARETAKER', null, {});
}
