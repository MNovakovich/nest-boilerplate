'use strict';

module.exports = {
  up: async (queryInterface) => {
    const data = [
      {
        ROLE_NAME: 'SUPERADMIN',
        EDIT_CONFIGURATION: true,
        EDIT_TREATMENTS: true,
      },
      { ROLE_NAME: 'ADMIN', EDIT_CONFIGURATION: false, EDIT_TREATMENTS: true },
      {
        ROLE_NAME: 'DOCTOR',
        EDIT_CONFIGURATION: false,
        EDIT_TREATMENTS: true,
      },
    ];
    await queryInterface.bulkInsert('USERS_ROLE', data, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('USERS_ROLE', null, {});
  },
};
