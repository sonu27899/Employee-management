'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
//console.log(__dirname + '../config/dbconfig');
const config = require('../config/dbconfig');

const db = {};
const  { Op } = Sequelize;
const operatorsAliases = {

  $eq: Op.eq,

  $ne: Op.ne,

  $gte: Op.gte,

  $gt: Op.gt,

  $lte: Op.lte,

  $lt: Op.lt,

  $not: Op.not,

  $in: Op.in,

  $notIn: Op.notIn,

  $is: Op.is,

  $like: Op.like,

  $notLike: Op.notLike,

  $iLike: Op.iLike,

  $notILike: Op.notILike,

  $regexp: Op.regexp,

  $notRegexp: Op.notRegexp,

  $iRegexp: Op.iRegexp,

  $notIRegexp: Op.notIRegexp,

  $between: Op.between,

  $notBetween: Op.notBetween,

  $overlap: Op.overlap,

  $contains: Op.contains,

  $contained: Op.contained,

  $adjacent: Op.adjacent,

  $strictLeft: Op.strictLeft,

  $strictRight: Op.strictRight,

  $noExtendRight: Op.noExtendRight,

  $noExtendLeft: Op.noExtendLeft,

  $and: Op.and,

  $or: Op.or,

  $any: Op.any,

  $all: Op.all,

  $values: Op.values,

  $col: Op.col

}
let sequelize;

sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
