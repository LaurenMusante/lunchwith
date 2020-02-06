import moment from 'moment';
import uuidv4 from 'uuid/v4';
import db from '../db';

const Lunch = {
  /**
   * Create A Lunch
   * @param {object} req 
   * @param {object} res
   * @returns {object} lunch object 
   */
  async create(req, res) {
    const createQuery = `INSERT INTO
      lunches(id, mentorid, menteeid, status, date, restaurant)
      VALUES($1, $2, $3, $4, $5, $6)
      returning *`;
    const values = [
      uuidv4(),
      req.body.mentorid,
      req.body.menteeid,
      req.body.status,
      req.body.date,
      req.body.restaurant
    ];

    try {
      const { rows } = await db.query(createQuery, values);
      return res.status(201).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get All Lunches
   * @param {object} req 
   * @param {object} res 
   * @returns {object} lunches array
   */
  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM lunches where owner_id = $1';
    try {
      const { rows, rowCount } = await db.query(findAllQuery, [req.user.id]);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get A Lunch
   * @param {object} req 
   * @param {object} res
   * @returns {object} lunch object
   */
  async getOne(req, res) {
    const text = 'SELECT * FROM lunches WHERE id = $1';
    try {
      const { rows } = await db.query(text, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ 'message': 'lunch not found' });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error)
    }
  },
  /**
   * Update A Lunch
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated lunch
   */
  async update(req, res) {
    const findOneQuery = 'SELECT * FROM lunches WHERE id=$1';
    const updateOneQuery = `UPDATE lunches
      SET mentorid=$1,menteeid=$2,status=$3,date=$4,restaurant=$5
      WHERE id=$5 returning *`;
    try {
      const { rows } = await db.query(findOneQuery, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ 'message': 'lunch not found' });
      }
      const values = [
        req.body.mentorid || rows[0].mentorid,
        req.body.menteeid || rows[0].menteeid,
        req.body.status || rows[0].status,
        req.body.date || rows[0].date,
        req.body.restaurant || rows[0].restaurant,
        req.params.id,
      ];
      const response = await db.query(updateOneQuery, values);
      return res.status(200).send(response.rows[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  /**
   * Delete A Lunch
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  async delete(req, res) {
    const deleteQuery = 'DELETE FROM lunches WHERE id=$1 returning *';
    try {
      const { rows } = await db.query(deleteQuery, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ 'message': 'lunch not found' });
      }
      return res.status(204).send({ 'message': 'deleted' });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default Lunch;