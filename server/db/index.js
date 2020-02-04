/* eslint-disable */

// Bluebird is the best promise library available today,
// and is the one recommended here:
const promise = require('bluebird');

const models = require('./models'); // loading all models

// const URL = require('url-parse');

// pg-promise initialization options:
const initOptions = {

  // Use a custom promise library, instead of the default ES6 Promise:
  promiseLib: promise,

  // Extending the database protocol with our custom models;
  // API: http://vitaly-t.github.io/pg-promise/global.html#event:extend
  extend(obj, dc) {
    // Database Context (dc) is mainly useful when extending multiple databases
    // with different access API-s.

    // Do not use 'require()' here, because this event occurs for every task
    // and transaction being executed, which should be as fast as possible.
    obj.users = new models.Users(obj, pgp);
    obj.lunches = new models.Lunches(obj, pgp);
  }
};

// Database connection parameters:
const config = {
  host: 'localhost',
  port: 5432,
  database: 'users_api',
  user: 'lunchwith'
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);

// Create the database instance:
const db = pgp(process.env.DATABASE_URL || config);

// Load and initialize optional diagnostics:
const diagnostics = require('./diagnostics');

diagnostics.init(initOptions);

// If you ever need access to the library's root (pgp object), you can do it via db.$config.pgp
// See: http://vitaly-t.github.io/pg-promise/Database.html#.$config
module.exports = db;