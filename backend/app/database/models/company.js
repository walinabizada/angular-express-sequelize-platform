const { DataTypes, Model } = require('sequelize');
const dbc = require('../db_connection.js');

class Company extends Model { }

Company.init({
  name: DataTypes.STRING,
  industry: DataTypes.STRING,
  location: DataTypes.STRING,
  employeeCount: DataTypes.INTEGER,
  description: DataTypes.STRING,
  website: DataTypes.STRING,
  logoUrl: DataTypes.STRING,
  userId: DataTypes.INTEGER
}, {
  sequelize: dbc,
  modelName: 'Company',
  tableName: 'companies'
});

module.exports = Company;