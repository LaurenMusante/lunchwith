const sql = require('../sql').lunches;

const cs = {}; // Reusable ColumnSet objects.

/*
This repository mixes hard-coded and dynamic SQL, primarily to show a diverse example of using both.
*/

// Example of statically initializing ColumnSet objects:

function createColumnsets(pgp) {
  // create all ColumnSet objects only once:
  if (!cs.insert) {
    // Type TableName is useful when schema isn't default "public" ,
    // otherwise you can just pass in a string for the table name.
    const table = new pgp.helpers.TableName({ table: 'lunches', schema: 'public' });

    cs.insert = new pgp.helpers.ColumnSet(['mentorid', 'menteeid'], { table });
    cs.update = cs.insert.extend(['?id', '?mentorid', '?menteeid']);
  }
  return cs;
}

class LunchesModel {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;

    // set-up all ColumnSet objects, if needed:
    createColumnsets(pgp);
  }

  // Creates the table;
  create() {
    return this.db.none(sql.create);
  }

  // Drops the table;
  // drop() {
  //   return this.db.none(sql.drop);
  // }

  // Removes all records from the table;
  // empty() {
  //   return this.db.none(sql.empty);
  // }

  // Adds a new record and returns the full object;
  // It is also an example of mapping HTTP requests into query parameters;
  add(values) {
    return this.db.one(sql.add, {
      mentorid: +values.mentorid,
      menteeid: values.menteeid
    });
  }

  // Tries to delete a lunch by id, and returns the number of records deleted;
  remove(id) {
    return this.db.result('DELETE FROM lunches WHERE id = $1', +id, r => r.rowCount);
  }

  // Tries to find a user lunch from user id + lunch name;
  find(values) {
    return this.db.oneOrNone(sql.find, {
      mentorid: values.mentorid,
      menteeid: values.menteeid
    });
  }

  // Returns all lunch records;
  all() {
    return this.db.any('SELECT * FROM lunches');
  }

  // Returns the total number of lunches;
  total() {
    return this.db.one('SELECT count(*) FROM lunches', [], a => +a.count);
  }
}

module.exports = LunchesModel;