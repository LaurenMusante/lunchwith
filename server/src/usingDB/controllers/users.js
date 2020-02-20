import uuidv4 from 'uuid/v4';
import db from '../db';
import Helper from './helper';

const User = {
  /**
   * Create A User
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object 
   */
  async create(req, res) {
    if (!req.body.email || !req.body.password || !req.body.firstname || !req.body.lastname) {
      return res.status(400).send({ 'message': 'Some values are missing' });
    }
    if (!Helper.isValidEmail(req.body.email)) {
      return res.status(400).send({ 'message': 'Please enter a valid email address' });
    }
    const hashPassword = Helper.hashPassword(req.body.password);

    const createQuery = `INSERT INTO
      users(id, firstname, lastname, email, password)
      VALUES($1, $2, $3, $4, $5)
      returning *`;
    const values = [
      uuidv4(),
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      hashPassword,
    ];

    try {
      const { rows } = await db.query(createQuery, values);
      const token = Helper.generateToken(rows[0].id);
      const response = {
        rows: rows,
        token: token
      }
      return res.status(200).send(response);
      //need to return token still somehow
    } catch (error) {
      console.log(error);

      if (error.routine === '_bt_check_unique') {
        return res.status(400).send({ 'message': 'User with that EMAIL already exist' })
      }
      return res.status(400).send(error);
    }
  },

  /**
   * Login
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
  async login(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ 'message': 'Some values are missing' });
    }
    if (!Helper.isValidEmail(req.body.email)) {
      return res.status(400).send({ 'message': 'Please enter a valid email address' });
    }
    const text = 'SELECT * FROM users WHERE lower(email) = lower($1)';
    try {
      const { rows } = await db.query(text, [req.body.email]);

      if (!rows[0]) {
        return res.status(400).send({ 'message': 'The credentials you provided are incorrect' });
      }
      if (!Helper.comparePassword(rows[0].password, req.body.password)) {
        return res.status(400).send({ 'message': 'The credentials you provided are incorrect' });
      }
      const token = Helper.generateToken(rows[0].id);
      const response = {
        rows: rows,
        token: token
      }
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).send(error)
    }
  },

  /**
   * Get All Users
   * @param {object} req 
   * @param {object} res 
   * @returns {object} lunches array
   */
  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM users';
    try {
      const { rows } = await db.query(findAllQuery);
      return res.status(200).send({ rows });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async update(req, res) {
    const findOneQuery = 'SELECT * FROM users WHERE id=$1';
    // const updateOneQuery = `UPDATE users
    //   SET firstname=$1,lastname=$2,email=$3,password=$4bio=$5,mentor=$6,skills=$7
    //   WHERE id=$8 returning *`;
      const updateOneQuery = `UPDATE users
      SET bio=$1,mentor=$2,skills=$3
      WHERE id=$4 returning *`;
    try {
      console.log("try: ", req.params.userID);
      const { rows } = await db.query(findOneQuery, [req.params.userID]);
      if (!rows[0]) {
        return res.status(404).send({ 'message': 'lunch not found' });
      }
      const values = [
        // req.body.firstname || rows[0].firstname,
        // req.body.lastname || rows[0].lastname,
        // req.body.email || rows[0].email,
        // req.body.password || rows[0].password,
        req.body.bio || rows[0].bio,
        req.body.mentor || rows[0].mentor,
        req.body.skills || rows[0].skills,
        req.params.id,
      ];
      const response = await db.query(updateOneQuery, values);
      return res.status(200).send(response.rows[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  /**
   * Delete A User
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return status code 204 
   */
  async delete(req, res) {
    const deleteQuery = 'DELETE FROM users WHERE id=$1 returning *';
    try {
      const { rows } = await db.query(deleteQuery, [req.user.id]);
      if (!rows[0]) {
        return res.status(404).send({ 'message': 'user not found' });
      }
      return res.status(204).send({ 'message': 'deleted' });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default User;