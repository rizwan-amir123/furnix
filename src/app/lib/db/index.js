const { Pool } = require('pg');

const pool = new Pool({
    //user: process.env.PGSQL_USER,
    //password: process.env.PGSQL_PASSWORD,
    //host: process.env.PGSQL_HOST,
    //port: process.env.PGSQL_PORT,
    //database: process.env.PGSQL_DATABASE,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

module.exports = pool;