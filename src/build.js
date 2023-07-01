import { executeCommand } from "./utils.js";
import { ICON_BUILD_ORDER } from "./config.js";
import {
  COMMAND_ENUMS,
  FONT_START_CODE,
  RESET_FONT_START_CODE,
} from "./constants.js";
import { input } from "./cli.js";
export const buildAll = async () => {
  let startCode = Number(FONT_START_CODE).toString(10);
  for (let icon of ICON_BUILD_ORDER) {
    console.log(startCode);
    const result = await executeCommand(icon, COMMAND_ENUMS.FONT, [], {
      startCode: Number(startCode).toString(10),
    });
    if (!RESET_FONT_START_CODE && result?.endCode) {
      startCode = result?.endCode;
    }
  }
  input.close();
};

buildAll();
