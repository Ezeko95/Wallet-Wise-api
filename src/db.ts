import { Sequelize } from "sequelize-typescript";
import config from "../lib/config";
config;

////////////////// *LOCAL* /////////////////////////

// export const sequelize = new Sequelize({
//   dialect: "postgres",
//   database: config.dbName,
//   password: config.dbPassword,
//   username: config.dbUser,
//   storage: ":memory:",
//   models: [__dirname + "/models"],
// });

// // /////////////// *DEPLOY INTERNA* ////////////////////
export const sequelize = new Sequelize(
  "postgres://walletwise_3w01_user:eeW0g1Y77fBAlXJZ8Km5UobnXzQpAj3j@dpg-cil155tgkuvinfmcoqg0-a/walletwise_3w01",
  { models: [__dirname + "/models"] }
);

/////// *DEPLOY EXTERNA* //////////////////////
// export const sequelize = new Sequelize(
//   "postgres://walletwise_3w01_user:eeW0g1Y77fBAlXJZ8Km5UobnXzQpAj3j@dpg-cil155tgkuvinfmcoqg0-a.oregon-postgres.render.com/walletwise_3w01",
//   {
//     models: [__dirname + "/models"],
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false, // You may need to set this to false if you're using a self-signed certificate
//       },
//     },
//   }
// );
