import { format } from 'mysql2';
import winston from 'winston';

const { createLogger, transports } = winston;

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new transports.File({
            filename: './logs/error.log',
            level: 'info',
            maxsize: "1024 * 1024"
        }),

        new transports.File({
            filename: './logs/info.log',
            level: 'info',
            maxsize: "1024 * 1024"
        }),

        new transports.File({
            filename: './logs/combined.log',
            level: 'info',
            maxsize: "1024 * 1024"
        }),

        new transports.File({
            filename: './logs/happy.log',
            level: 'error',
            maxsize: "1024 * 1024"
        }),

        new transports.Console()
        
    ],
});

export default logger;


