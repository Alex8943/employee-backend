import { Sequelize } from 'sequelize';
import { config } from '../../config.js'; // Ensure correct path

const dbConfig = config.dbConfig.mysql;

const sequelize = new Sequelize(
    dbConfig.mysql_database,
    dbConfig.mysql_user,
    dbConfig.mysql_password,
    {
        host: dbConfig.mysql_host,
        dialect: 'mysql',
        port: dbConfig.mysql_port,
        logging: false,
    }
);



export default sequelize;
