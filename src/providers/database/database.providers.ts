import { Sequelize } from 'sequelize-typescript';

import sequelize from '../../config/database/sequelize';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      sequelize;
      sequelize.addModels([]);

      paginateFilterUrl.setModels(sequelize.models);
      //console.log(paginationInit.isModelExists('Role'));
      //await sequelize.sync({ force: true });
      await sequelize.sync();
      return sequelize;
    },
  },
];
