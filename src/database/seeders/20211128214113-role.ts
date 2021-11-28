'use strict';

module.exports = {
  up: async (queryInterface) => {
    const data = [
      { name: 'admin', description: 'all access' },
      { name: 'user', description: 'can see only own content' },
      { name: 'subscriber', description: 'has some other accesses' },
    ];
    await queryInterface.bulkInsert('roles', data, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('roles', null, {});
  },
};
