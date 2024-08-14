import { DataTypes } from "sequelize";
import { sequelize } from "../sequelizeConnection.js";
import { defineModelCrud } from "../utils/modelsCrud.js";

const model = {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    scientific: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
    geometry: {
        type: DataTypes.GEOMETRY,
        unique: true,
        allowNull: false
    }
};

const database = sequelize.define("Plant", model);

const type = "POINT";
const plantFunctions = defineModelCrud(database, model, type);
const Plant = {
    type,
    database,
    model,
    ...plantFunctions
};

export { Plant };
