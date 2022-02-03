import {
  IConfig,
  ModelBuilder,
  DialectMySQL,
} from 'sequelize-typescript-generator';

(async () => {
  const config: IConfig = {
    connection: {
      dialect: 'mysql',
      database: 'nikolic',
      username: 'root',
      password: 'root',
    },

    lintOptions: {
      // configFile: './',
      fix: true,
    },
    output: {
      clean: true,
      outDir: 'my-models',
    },
    metadata: {
      case: 'PASCAL',

      // associationsFile: './associations.csv',
    },
    strict: false,
  };

  const dialect = new DialectMySQL();

  const builder = new ModelBuilder(config, dialect);

  // await builder.build();
})();
// npx stg -D mysql -h localhost -p 3306 -d node_bp -u root -x root --case pascal:camel --out-dir new-models --clean
