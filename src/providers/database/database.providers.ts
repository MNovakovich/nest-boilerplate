import sequelize from '../../config/database/sequelize';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';
import { exportedEntities } from 'src/exported-models';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      sequelize;
      sequelize.addModels([...exportedEntities]);

      paginateFilterUrl.setModels(sequelize.models);
      //console.log(paginationInit.isModelExists('Role'));

      //await sequelize.sync({ force: true });
      await sequelize.sync();
      return sequelize;
    },
  },
];
