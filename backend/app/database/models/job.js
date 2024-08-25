const { DataTypes, Model } = require('sequelize');
const dbc = require('../db_connection.js');

class Job extends Model { };

Job.init({
  title: DataTypes.STRING,
  referenceNo: DataTypes.STRING,
  location: DataTypes.STRING,
  company: DataTypes.STRING,
  description: DataTypes.STRING,
  salary: DataTypes.STRING,
  expireTime: DataTypes.DATE,
  userId: DataTypes.INTEGER
}, {
  sequelize: dbc,
  modelName: 'Job',
  tableName: 'jobs',
});

module.exports = Job;