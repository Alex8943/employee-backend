import dotenv from 'dotenv';
dotenv.config();

const environment = process.env.NODE_ENV || 'development';  // Default to 'development'

export const config = {
    current_env: environment,
    dbConfig: {
        mysql: {
            mysql_host: process.env.dev_host || 'localhost',
            mysql_user: process.env.dev_user || 'root',
            mysql_password: process.env.dev_password || 'fake_password',
            mysql_database: process.env.dev_db_name || 'your_database',
            mysql_port: process.env.dev_port ? parseInt(process.env.dev_port) : 3306,
        },
        APP_PORT: process.env.dev_port ? parseInt(process.env.dev_port) : 8080,
    },
};

console.log(`Current Environment: ${environment}`);