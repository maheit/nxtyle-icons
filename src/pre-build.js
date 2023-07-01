import { executeCommand } from "./utils.js";
import { ICON_BUILD_ORDER } from "./config.js";
import { COMMAND_ENUMS } from "./constants.js";
import { input } from "./cli.js";

const optimizeAndCompose = async () => {
  for (let icon of ICON_BUILD_ORDER) {
    await executeCommand(icon, COMMAND_ENUMS.OPTIMIZE, [], {});
    await executeCommand(icon, COMMAND_ENUMS.COMPOSE, [], {});
  }
  input.close();
};

// const Confirm = async (icon) => {
//   return new Promise((resolve, reject) => {
//     input.question(
//       `Do you want to compose "${icon}" SVG icon groups - (y/yes): `,
//       async (response) => {
//         if (
//           response &&
//           (response.toLocaleLowerCase() === "y" ||
//             response.toLocaleLowerCase() === "yes")
//         ) {
//           await executeCommand(icon, COMMAND_ENUMS.OPTIMIZE, [], {});
//           await executeCommand(icon, COMMAND_ENUMS.COMPOSE, [], {});
//         }
//         resolve();
//       }
//     );
//   });
// };

optimizeAndCompose();
