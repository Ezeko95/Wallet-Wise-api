//           ____                ___
//         ,'  , `.            ,--.'|_             ,--,
//      ,-+-,.' _ |            |  | :,'   __  ,-.,--.'|
//   ,-+-. ;   , ||            :  : ' : ,' ,'/ /||  |,     ,--,  ,--,
//  ,--.'|'   |  || ,--.--.  .;__,'  /  '  | |' |`--'_     |'. \/ .`|
// |   |  ,', |  |,/       \ |  |   |   |  |   ,',' ,'|    '  \/  / ;
// |   | /  | |--'.--.  .-. |:__,'| :   '  :  /  '  | |     \  \.' /
// |   : |  | ,    \__\/: . .  '  : |__ |  | '   |  | :      \  ;  ;
// |   : |  |/     ," .--.; |  |  | '.'|;  : |   '  : |__   / \  \  \
// |   | |`-'     /  /  ,.  |  ;  :    ;|  , ;   |  | '.'|./__;   ;  \
// |   ;/        ;  :   .'   \ |  ,   /  ---'    ;  :    ;|   :/\  \ ;
// '---'         |  ,     .-./  ---`-'           |  ,   / `---'  `--`
//                `--`---'                        ---`-'

import { sequelize } from "./src/db";
import app from "./src/app";
sequelize
  .sync({ force: true, logging: false })
  .then(() => {
    app.listen(3001, function () {
      console.log("Wake up, Neo...");
    });
  })
  .catch((err) => console.error(err));
