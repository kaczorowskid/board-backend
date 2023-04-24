if (process.env.NO_ENVFILE === null || process.env.NO_ENVFILE === undefined) {
  const dotenv = require("dotenv");

  dotenv.config({ path: ".env.development" });
}

import { databaseConfig } from "./databaseConfig";

export const config = {
  ...databaseConfig,
};
