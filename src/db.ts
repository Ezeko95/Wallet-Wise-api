import { Sequelize } from "sequelize-typescript";
import config from "../lib/config";
config;

 ////////////////// *LOCAL* /////////////////////////

export const sequelize = new Sequelize({
  dialect: "postgres",
  database: config.dbName,
  password: config.dbPassword,
  username: config.dbUser,
  storage: ":memory:",
  models: [__dirname + "/models"],
});

////////////////// *DEPLOY* ///////////////////////

// export const sequelize = new Sequelize({
//   dialect: "postgres",
//   database: "railway",
//   password: "C65Qhq92tHC7iDdKnibe",
//   username: "postgres",
//   host: "containers-us-west-159.railway.app",
//   port: 7322,
//   models: [__dirname + "/models"],
// });
