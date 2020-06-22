const Sequelize = require('sequelize');

module.exports = {
    config: () => {
        return {
            user: 'admin',
            password: 'Kumple22*zu+',
            port: 1521,
            server: 'db-alerce.cw940nrosqfm.sa-east-1.rds.amazonaws.com', // You can use 'localhost\\instance' to connect to named instance
            database: 'ccmvqwa'
        }
    },
    key: () => {
        return {
            llave: 'miclaveultrasecreta123*'
        }
    },
    sequelize: () => {
        return new Sequelize('ccmvqa', 'admin', 'Kumple22*zu+', {
            host: 'db-alerce.cw940nrosqfm.sa-east-1.rds.amazonaws.com',
            port: 1521,
            dialect: 'mssql',
            dialectOptions: {
                useUTC:false,
            },
            timezone: '+00:00',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        })
    }
};