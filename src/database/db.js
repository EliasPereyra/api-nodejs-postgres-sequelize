import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'password',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            required: 30000,
            idle: 10000
        },
        logging: false
    }
)