import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

configDotenv();
const env = process.env;

const sequelize = new Sequelize(env.POSTGRES_DATABASE, env.POSTGRES_USER, env.POSTGRES_PASSWORD, {
    host: env.POSTGRES_HOST,
    dialect: "postgres"
});

async function connectSequelize() {
    try {
      await sequelize.authenticate();
        console.log("Connected to database");
    } catch {
        console.error("Failed to connect to database");
    }
}
connectSequelize();

export { sequelize };
