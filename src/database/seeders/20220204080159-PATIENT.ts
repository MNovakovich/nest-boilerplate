'use strict';
import { hashSync } from 'bcrypt';
import faker from '@faker-js/faker';
import { SEEDER_NUM } from '../seeder.constants';
export function up(queryInterface) {
  const password = '1111111';
  const data = [
    // {
    //   CARETAKER_TYPE_ID: 1,
    //   EMAIL: 'safet@mail.ba',
    //   PASSWORD: password,
    //   FIRST_NAME: 'Safet',
    //   LAST_NAME: 'Isovic',
    //   ADDRESS: 'Srpskih junaka 10, Novi Sad',
    //   PHONE: '063 521216',
    // },
  ];

  for (let i = 0; i < SEEDER_NUM.PATIENT; i++) {
    data.push({
      DOCTORS_OFFICE_ID: faker.datatype.number({ min: 1, max: 2 }),
      FIRST_NAME: faker.name.firstName(),
      LAST_NAME: faker.name.lastName(),
      MIDDLE_NAME: faker.name.middleName(),
      DATE_OF_BIRTH: faker.date.between('2010-01-01', '2021-01-01'),
      OPEN_DATE: faker.date.between('2021-01-01', '2022-02-05'),
      ACTIVATION_CODE: '#code',
      ACTIVAION_TIME: faker.date.soon(),
    });
  }

  return queryInterface.bulkInsert('PATIENT', data, {});
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('PATIENT', null, {});
}
