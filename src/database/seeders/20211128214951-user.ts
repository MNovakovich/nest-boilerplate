'use strict';
import { hashSync } from 'bcrypt';
import { internet } from 'faker';
export function up(queryInterface) {
  const password = '1111111';
  const data = [
    {
      email: 'marko.novakovic@mail.ru',
      password: hashSync(password, 10),
      role_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];
  for (let i = 0; i < 30; i++) {
    data.push({
      email: internet.email(),
      password: hashSync(password, 10),
      role_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  return queryInterface.bulkInsert('users', data, {});
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('users', null, {});
}
