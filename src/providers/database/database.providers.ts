import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/domains/user/user.model';
import { Role } from 'src/domains/role/role.model';
import sequelize from '../../config/database/sequelize';
import { paginateFilterUrl } from 'src/core/filter.pagination.decorator';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      sequelize;
      sequelize.addModels([User, Role]);

      paginateFilterUrl.setModels(sequelize.models);
      //console.log(paginationInit.isModelExists('Role'));
      //await sequelize.sync({ force: true });
      await sequelize.sync();
      return sequelize;
    },
  },
];
