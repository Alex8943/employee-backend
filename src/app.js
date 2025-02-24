import express from 'express';
import {testDBConnection} from "./database/connection.js";
import authRouter from "./routes/authRouter.js"
import logger from "./other_services/winstonLogger.js";

const app = express();

testDBConnection();

app.use(authRouter);

process.on('SIGINT', () => {
    logger.end();
    console.log('See ya later asshole');
    process.exit(0);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})