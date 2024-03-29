const Sequelize = require('sequelize');
const config = require('../config')

const sequelize = new Sequelize(
    config.db_name || 'postgres',
    config.username || 'postgres',
    config.password || '',
    {
        host: config.host || 'localhost',
        port: config.port || 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: process.env.DB_SSL === "true"
        }
    });

const StorageModel = sequelize.define('UrlStorage', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const UserModel = sequelize.define('Users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});


module.exports = {
    sequelize: sequelize,
    Storage: StorageModel,
    User: UserModel
};