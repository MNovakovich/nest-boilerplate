'use strict';
import { hashSync } from 'bcrypt';
import { internet } from 'faker';
export function up(queryInterface) {
  const data = [
    {
      NAME: 'MOTHER',
    },
    {
      NAME: 'FATHER',
    },
    {
      NAME: 'FAMILLY',
    },
    {
      NAME: 'ASSISTENT',
    },
  ];

  return queryInterface.bulkInsert('VALUETYPE', data, {});
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('VALUETYPE', null, {});
}
