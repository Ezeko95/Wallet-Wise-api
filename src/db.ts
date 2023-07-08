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
// export const sequelize = new Sequelize(
//   "postgres://walletwise_rna8_user:K7QtR9L9CIdljUpCYfFIRvtAHI3Aiqe7@dpg-ciccogd9aq03rjmsppag-a/walletwise_rna8",
//   { models: [__dirname + "/models"] }
// );

/////// *DEPLOY EXTERNA* //////////////////////
export const sequelize = new Sequelize(
  "postgres://walletwise_rna8_user:K7QtR9L9CIdljUpCYfFIRvtAHI3Aiqe7@dpg-ciccogd9aq03rjmsppag-a.oregon-postgres.render.com/walletwise_rna8",
  {
    models: [__dirname + "/models"],
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // You may need to set this to false if you're using a self-signed certificate
      },
    },
  }
);
