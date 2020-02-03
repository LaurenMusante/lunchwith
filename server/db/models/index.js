/* eslint object-shorthand: "off" */

// Renaming and exporting all model classes:

const Users = require('./users');
const Lunches = require('./lunches');

module.exports = {
  Users: Users,
  Lunches: Lunches
};