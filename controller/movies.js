// const db = require('../config/db.config.js');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
// const env = require('../config/env.js');
const db = require("../model");
const { response } = require("../helper");

const Movies = db.movies;
const Op = db.Sequelize.Op;
const getPagination = (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (result, page, limit) => {
  const { count: totalItems, rows: data } = result;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, data, totalPages, currentPage };
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "can not be empty!",
    });
    return;
  }

  const data = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    thumbnail: req.body.thumbnail
  };
  Movies.create(data)
    .then((result) => {
      kode = 200;
      message = "Sukses";
      response.response(res, { kode, message, data: result }, kode);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
};

exports.findAll = (req, res) => {
  const { page, size, category , q} = req.query;
  var condition = category ? { category: { [Op.like]: `%${category}%` } } : null;
  var condition1 = q ? { category: { [Op.like]: `%${q}%` }} : null;
  const { limit, offset } = getPagination(page, size);
  Movies.findAndCountAll({
    where: condition,condition1,
    limit,
    offset,
  }).then((result) => {
    const respon = getPagingData(result, page, limit);
    kode = 200;
    message = "Sukses";
    response.response(res, { kode, message, data: respon }, kode);
  });
};

// Find a User by Id
exports.findById = (req, res) => {
  Movies.findByPk(req.params.id).then((result) => {
    if(!result){
       kode = 406;
       message = "Data tidak ditemukan";
       response.response(res, { kode, message}, kode);
    }else{
    kode = 200;
    message = "Sukses";
    response.response(res, { kode, message, data: result }, kode);
    }
    
  });
};

// Update a User
exports.update = (req, res) => {
  const id = req.params.id;
  Movies.update(req.body, { where: { id: id } }).then((result) => {
    kode = 200;
    message = "Sukses";
    response.response(res, { kode, message, data: result }, kode);
  });
};

// Delete a User by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  Movies.destroy({
    where: { id: id },
  }).then((result) => {
    kode = 200;
    message = "Sukses";
    response.response(res, { kode, message, data: result }, kode);
  });
};

