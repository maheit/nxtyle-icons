import readline from "readline";
import { ICON_BUILD_ORDER, ICON_LIB_META } from "./config.js";
import { COMMAND_ENUMS } from "./constants.js";

import { executeCommand } from "./utils.js";
import { resolve } from "path";

export const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
