import { Datatype, Model } from 'sequelize';
import sequelize from '../../sequelizeConnection';


// Model for class Info
export class Info extends Model {
    id
    vejnavn
    by
    postnummer
}

Info.init({
    id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vejnavn: {
        type: Datatype.STRING,
        allowNull: false
    },
    By: {
        type: Datatype.STRING,
        allowNull: false
    },
    Postnummer: {
        type: Datatype.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Info'
});

// Model for class User
export class User extends Model {
    id
    name
    lastname
    username
    password
    role
}

User.init({
    Id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: Datatype.STRING,
        allowNull: false
    },
    Lastname: {
        type: Datatype.STRING,
        allowNull: false
    },

    Password: {
        type: Datatype.STRING,
        allowNull: false
    },
    Role: {
        type: Datatype.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User'
});



