'use strict';

export function up(queryInterface) {
  const data = [
    {
      ADDRESS: 'Bulevar Evrope 3, Novi Sad',
      NAME: 'Pedijatrija',
      PHONE: '063 521216',
    },
    {
      ADDRESS: 'Radnicka 5',
      NAME: 'Estetska hirurgija',
      PHONE: '555-333',
    },
  ];

  return queryInterface.bulkInsert('DOCTORS_OFFICE', data, {});
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('DOCTORS_OFFICE', null, {});
}
