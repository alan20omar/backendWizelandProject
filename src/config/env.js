import 'dotenv/config';

export default {
    host: process.env.HOST,
    port: process.env.PORT,
    portIO: process.env.PORT_IO,
    dbConnectionString: process.env.dbConnectionString,
};
