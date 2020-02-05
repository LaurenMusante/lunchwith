import UsersModel from '../models/users';

const Users = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
  create(req, res) {
    if (!req.body.name && !req.body.email && !req.body.password) {
      return res.status(400).send({ 'message': 'All fields are required' })
    }
    const user = UsersModel.create(req.body);
    return res.status(201).send(user);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} users array
   */
  getAll(req, res) {
    const users = UsersModel.findAll();
    return res.status(200).send(users);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object
   */
  getOne(req, res) {
    const user = UsersModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ 'message': 'user not found' });
    }
    return res.status(200).send(user);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated user
   */
  update(req, res) {
    const user = UsersModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ 'message': 'user not found' });
    }
    const updatedUsers = UsersModel.update(req.params.id, req.body)
    return res.status(200).send(updatedUsers);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const user = UsersModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ 'message': 'user not found' });
    }
    const ref = UsersModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Users;