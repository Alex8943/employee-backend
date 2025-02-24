import { DataTypes, Model } from 'sequelize';
import sequelize from "../../other_services/sequelizeConnection.js";

// Model for class Info
export class Info extends Model {}

Info.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vejnavn: {
        type: DataTypes.STRING,
        allowNull: false
    },
    by: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postnummer: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Info'
});

// Model for class User
export class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {  // Added missing field
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User'
});

export default { Info, User };
