const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});

/**
 * Create Lunches Table
 */
const createLunchesTable = () => {
  const queryText =
    `CREATE TABLE IF NOT EXISTS
      lunches(
        id UUID PRIMARY KEY,
        mentorid VARCHAR(255) NOT NULL,
        menteeid VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        restaurant VARCHAR(255)
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

/**
 * Create Users Table
 */
const createUsersTable = () => {
  const queryText =
    `CREATE TABLE IF NOT EXISTS
      users(
        id UUID PRIMARY KEY,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

/**
 * Create All Tables
 */
const createAllTables = () => {
  createUsersTable();
  createLunchesTable();
}

module.exports = {
  createLunchesTable,
  createUsersTable,
  createAllTables,
};

require('make-runnable');