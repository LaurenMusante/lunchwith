// src/usingDB/controllers/User.js
import uuidv4 from 'uuid/v4';
import db from '../db';

const User = {
  /**
   * Create A User
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
  async create(req, res) {
    const text = `INSERT INTO
      users(id, name, email, password)
      VALUES($1, $2, $3)
      returning *`;
    const values = [
      uuidv4(),
      req.body.name,
      req.body.email,
      req.body.password,
      moment(new Date()),
      moment(new Date())
    ];

    try {
      const { rows } = await db.query(text, values);
      return res.status(201).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get All User
   * @param {object} req 
   * @param {object} res 
   * @returns {object} users array
   */
  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM users';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get A User
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object
   */
  async getOne(req, res) {
    const text = 'SELECT * FROM users WHERE id = $1';
    try {
      const { rows } = await db.query(text, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ 'message': 'user not found' });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error)
    }
  },
  /**
   * Update A User
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated user
   */
  async update(req, res) {
    const findOneQuery = 'SELECT * FROM users WHERE id=$1';
    const updateOneQuery = `UPDATE users
      SET name=$1,email=$2,password=$3
      WHERE id=$5 returning *`;
    try {
      const { rows } = await db.query(findOneQuery, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ 'message': 'user not found' });
      }
      const values = [
        req.body.name || rows[0].name,
        req.body.email || rows[0].email,
        req.body.password || rows[0].password,
        moment(new Date()),
        req.params.id
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
   * @returns {void} return statuc code 204 
   */
  async delete(req, res) {
    const deleteQuery = 'DELETE FROM users WHERE id=$1 returning *';
    try {
      const { rows } = await db.query(deleteQuery, [req.params.id]);
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