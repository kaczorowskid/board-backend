import { config } from "config";
import { Dialect, Options, Sequelize } from "sequelize";

const isDevelopment = config["env"] === "development";
const logging = isDevelopment ? (args: any) => console.trace(args) : false;

const { dialect, database, host, password, username } = config;

const sequelizeConfig: Options = {
  dialect: dialect as Dialect,
  host,
  logging,
  pool: {
    max: 60,
    min: 1,
    idle: 20000,
    acquire: 80000,
    evict: 20000,
  },
  define: {
    timestamps: true,
    underscored: true,
    paranoid: false,
    updatedAt: "updated_at",
    createdAt: "created_at",
  },
};

export const sequelize = new Sequelize(
  database,
  username,
  password,
  sequelizeConfig
);
