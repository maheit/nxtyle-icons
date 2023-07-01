import { execSync } from "child_process";
import { existsSync, mkdir, mkdirSync, rmSync, readdirSync } from "fs";
import { join, relative, resolve } from "path";
import { __dirname } from "./shared.js";
import { ICON_LIB, ICON_LIB_META } from "./config.js";
import {
  COMMAND_ENUMS,
  COMMAND_META,
  PROCESS_CONFIRMATION_NEEDED,
} from "./constants.js";
import { input } from "./cli.js";

function getCommandRootDir(command, type = "dest") {
  if (command && command in COMMAND_META) {
    return join(__dirname, COMMAND_META[command][type]);
  } else {
    throw Error("UNKNOWS COMMAND DESTINATION PATH!!!");
  }
}

function cleanAll(name, command) {
  if (name && command) {
    let rootDir = getCommandRootDir(command, "dest");
    let outPaths = [];
    for (let props of ICON_LIB_META[name]) {
      outPaths.push(join(rootDir, props.dest));
    }
    for (let destDir of outPaths) {
      if (existsSync(destDir)) {
        rmSync(destDir, { recursive: true });
      }
      mkdirSync(destDir, { recursive: true });
    }
    return outPaths;
  }
  return [];
}

function clean(command, path) {
  debugger;
  if (command && path) {
    let rootDir = getCommandRootDir(command, "dest");

    let folder = join(rootDir, path);
    if (existsSync(folder)) {
      rmSync(folder, { recursive: true });
    }
    mkdirSync(folder, { recursive: true });
  }
}

const getConfirmationQuestion = (command, name, options) => {
  switch (command) {
    case COMMAND_ENUMS.OPTIMIZE:
      return `Do you want to ${command} "${name}/${options.meta.alias}" SVG icon groups - (y/yes):`;
    case COMMAND_ENUMS.COMPOSE:
      return `Do you want to ${command} "${name}/${options.meta.alias}" SVG icon groups - (y/yes):`;
    case COMMAND_ENUMS.FONT:
      return `Do you want to create ${command} for "${name}/${options.meta.alias}" SVG icon groups - (y/yes):`;
  }
};

const buildConfirm = async (icon) => {
  return new Promise((resolve, reject) => {
    input.question(
      `Do you want to create webfont for "${icon}" SVG icon groups - (y/yes): `,
      async (response) => {
        if (
          response &&
          (response.toLocaleLowerCase() === "y" ||
            response.toLocaleLowerCase() === "yes")
        ) {
          await executeCommand(icon, COMMAND_ENUMS.OPTIMIZE, [], {});
          await executeCommand(icon, COMMAND_ENUMS.COMPOSE, [], {});
        }
        resolve();
      }
    );
  });
};

async function run(command, params = [], options) {
  debugger;
  if (options?.meta?.dest) {
    clean(command, options?.meta.dest);
  }
  const instruction = `npm run ${command} -- ${params.join(" ")}`;
  const result = await execSync(instruction, { stdio: "inherit" });
}

async function execScript(
  command,
  params = [],
  options = { confirm: PROCESS_CONFIRMATION_NEEDED, name: "", meta: {} }
) {
  debugger;
  return new Promise(async (resolve, reject) => {
    try {
      if (
        command &&
        Object.values(COMMAND_ENUMS).includes(command) &&
        options?.name &&
        Object.values(ICON_LIB).includes(options.name)
      ) {
        const question = getConfirmationQuestion(
          command,
          options?.name,
          options
        );
        if (options.confirm) {
          input.question(question, async (response) => {
            if (
              response &&
              (response.toLocaleLowerCase() === "y" ||
                response.toLocaleLowerCase() === "yes")
            ) {
              debugger;
              await run(command, params, options);
            }
            resolve();
          });
        } else {
          await run(command, params, options);
          resolve();
        }
      } else {
        throw Error(
          `Unknow command or icon library [ ${command} - ${options?.name}]`
        );
      }
    } catch (error) {
      console.log(JSON.stringify(error));
      reject(error);
    }
  });
}

function getRelativePath(currentPath) {
  return relative(__dirname, currentPath);
}
async function optimizer(iconMeta, name, command) {
  if (Array.isArray(iconMeta)) {
    let sourceDir = getCommandRootDir(command, "source");
    let destDir = getCommandRootDir(command, "dest");
    for (let iconData of iconMeta) {
      if ("source" in iconData && "dest" in iconData) {
        let destFolder = join(destDir, iconData.dest);
        if (Array.isArray(iconData.source)) {
          for (let sourcePath of iconData.source) {
            let sourceFolder = join(sourceDir, sourcePath);
            const params = [];
            params.push(`-f ${getRelativePath(sourceFolder)}`);
            params.push(`-o ${getRelativePath(destFolder)}`);
            await execScript(COMMAND_ENUMS.OPTIMIZE, params, {
              confirm: PROCESS_CONFIRMATION_NEEDED,
              name,
              meta: iconData,
            });
          }
        } else {
          let sourceFolder = join(sourceDir, iconData.source);
          const params = [];
          params.push(`-f ${getRelativePath(sourceFolder)}`);
          params.push(`-o ${getRelativePath(destFolder)}`);
          await execScript(COMMAND_ENUMS.OPTIMIZE, params, {
            confirm: PROCESS_CONFIRMATION_NEEDED,
            name,
            meta: iconData,
          });
        }
      }
    }
  }
}

async function optimize(name, command, args, options) {
  if (name && command) {
    // switch (name) {
    //   case ICON_LIB.FEATHER:
    //     return await optimizer(ICON_LIB_META[ICON_LIB.FEATHER], name, command);
    //     break;
    //   case ICON_LIB.BOX_ICONS:
    //     return await optimizer(
    //       ICON_LIB_META[ICON_LIB.BOX_ICONS],
    //       name,
    //       command
    //     );
    //   case ICON_LIB.PHOSPHOR_ICONS:
    //     return await optimizer(
    //       ICON_LIB_META[ICON_LIB.PHOSPHOR_ICONS],
    //       name,
    //       command
    //     );
    //     break;
    // }
    const iconGroup = Object.values(ICON_LIB).find((icon) => icon === name);
    if (iconGroup && iconGroup in ICON_LIB_META) {
      return await optimizer(
        ICON_LIB_META[iconGroup],
        name,
        command,
        args,
        options
      );
    } else {
      throw Error("UNKNOWS SUPPORTED ICON. Please check available commands.");
    }
  }
}

async function composer(iconMeta, name, command) {
  if (Array.isArray(iconMeta)) {
    let sourceDir = getCommandRootDir(command, "source");
    let destDir = getCommandRootDir(command, "dest");
    for (let iconData of iconMeta) {
      if ("dest" in iconData) {
        let destFolder = join(destDir, iconData.dest);
        if (Array.isArray(iconData.dest)) {
          for (let sourcePath of iconData.dest) {
            let sourceFolder = join(sourceDir, sourcePath);
            const params = [];
            params.push(`-s ${getRelativePath(sourceFolder)}`);
            params.push(`-d ${getRelativePath(destFolder)}`);
            await execScript(COMMAND_ENUMS.COMPOSE, params, {
              confirm: PROCESS_CONFIRMATION_NEEDED,
              name,
              meta: iconData,
            });
          }
        } else {
          let sourceFolder = join(sourceDir, iconData.dest);
          const params = [];
          params.push(`-s ${getRelativePath(sourceFolder)}`);
          params.push(`-d ${getRelativePath(destFolder)}`);
          await execScript(COMMAND_ENUMS.COMPOSE, params, {
            confirm: PROCESS_CONFIRMATION_NEEDED,
            name,
            meta: iconData,
          });
        }
      }
    }
  }
}

async function compose(name, command, args, options) {
  if (name && command) {
    // switch (name) {
    //   case ICON_LIB.FEATHER:
    //     return await composer(ICON_LIB_META[ICON_LIB.FEATHER], name, command);
    //     break;
    //   case ICON_LIB.BOX_ICONS:
    //     return await composer(ICON_LIB_META[ICON_LIB.BOX_ICONS], name, command);
    //     break;
    //   case ICON_LIB.PHOSPHOR_ICONS:
    //     return await composer(
    //       ICON_LIB_META[ICON_LIB.PHOSPHOR_ICONS],
    //       name,
    //       command
    //     );
    //     break;
    // }
    const iconGroup = Object.values(ICON_LIB).find((icon) => icon === name);
    if (iconGroup && iconGroup in ICON_LIB_META) {
      return await composer(
        ICON_LIB_META[iconGroup],
        name,
        command,
        args,
        options
      );
    } else {
      throw Error("UNKNOWS SUPPORTED ICON. Please check available commands.");
    }
  }
}

function getDirFileCount(dir) {
  if (dir) {
    const files = readdirSync(dir);
    if (files) {
      return files.length;
    }
  }
  return 0;
}

async function webFontBuilder(iconMeta, name, command, args, options) {
  debugger;
  let webFontStartCode = options?.startCode ? options?.startCode : "0xff01";
  const result = {
    startCode: webFontStartCode,
    // endCode
  };
  if (Array.isArray(iconMeta)) {
    let sourceDir = getCommandRootDir(command, "source");
    let destDir = getCommandRootDir(command, "dest");
    let prefix = "nxi";
    let fontDefaultParams = ["--selector .nxi", "-n index", ...args];
    for (let iconData of iconMeta) {
      if ("dest" in iconData) {
        let destFolder = join(destDir, iconData.dest);
        if (Array.isArray(iconData.dest)) {
          for (let sourcePath of iconData.dest) {
            let sourceFolder = join(sourceDir, sourcePath);
            const params = [];
            let startCodePoints = result?.endCode
              ? result?.endCode
              : result.startCode;

            params.push(`${getRelativePath(sourceFolder)}`);
            params.push(`-o ${getRelativePath(destFolder)}`);
            params.push(
              `--startCode 0x${Number(startCodePoints).toString(16)}`
            );
            let prefixData = [prefix];
            if (iconData?.prefix) {
              prefixData.push(iconData?.prefix);
            }
            prefixData = prefixData.join("-");
            params.push(`-p ${prefixData}`);
            const commandResponse = await execScript(
              COMMAND_ENUMS.FONT,
              [...params, ...fontDefaultParams],
              { confirm: PROCESS_CONFIRMATION_NEEDED, name, meta: iconData }
            );
            const filesCount = getDirFileCount(getRelativePath(sourceFolder));
            if (filesCount) {
              result.endCode = Number(startCodePoints) + filesCount;
            }
          }
        } else {
          let sourceFolder = join(sourceDir, iconData.dest);
          let startCodePoints = result?.endCode
            ? result?.endCode
            : result.startCode;
          const params = [];
          params.push(`${getRelativePath(sourceFolder)}`);
          params.push(`-o ${getRelativePath(destFolder)}`);
          params.push(`--startCode 0x${Number(startCodePoints).toString(16)}`);
          let prefixData = [prefix];
          if (iconData?.prefix) {
            prefixData.push(iconData?.prefix);
          }
          prefixData = prefixData.join("-");
          params.push(`-p ${prefixData}`);

          const commandResponse = await execScript(
            COMMAND_ENUMS.FONT,
            [...params, ...fontDefaultParams],
            { confirm: PROCESS_CONFIRMATION_NEEDED, name, meta: iconData }
          );

          const filesCount = getDirFileCount(getRelativePath(sourceFolder));
          if (filesCount) {
            result.endCode = Number(startCodePoints) + filesCount;
          }
        }
      }
    }
  }
  return result;
}

async function webFont(name, command, args, options) {
  if (name && command) {
    const iconGroup = Object.values(ICON_LIB).find((icon) => icon === name);
    if (iconGroup && iconGroup in ICON_LIB_META) {
      return await webFontBuilder(
        ICON_LIB_META[iconGroup],
        name,
        command,
        args,
        options
      );
    } else {
      throw Error("UNKNOWS SUPPORTED ICON. Please check available commands.");
    }
  }
}

export async function executeCommand(name, command, args = [], options = {}) {
  if (command && command in COMMAND_META) {
    if (name && name in ICON_LIB_META) {
      // clean(name, command);
      switch (command) {
        case COMMAND_ENUMS.OPTIMIZE:
          return await optimize(name, command, args, options);
          break;
        case COMMAND_ENUMS.COMPOSE:
          return await compose(name, command, args, options);
          break;
        case COMMAND_ENUMS.FONT:
          return await webFont(name, command, args, options);
          break;
      }
    } else {
      throw Error("UNKNOWS SUPPORTED ICON. Please check available commands.");
    }
  } else {
    throw Error("UNKNOWS COMMAND. Please check available commands.");
  }
}
// executeCommand(ICON_LIB.FEATHER, COMMAND_ENUMS.OPTIMIZE);
// executeCommand(ICON_LIB.BOX_ICONS, COMMAND_ENUMS.OPTIMIZE);

// executeCommand(ICON_LIB.FEATHER, COMMAND_ENUMS.COMPOSE);
// executeCommand(ICON_LIB.BOX_ICONS, COMMAND_ENUMS.COMPOSE);

// executeCommand(ICON_LIB.FEATHER, COMMAND_ENUMS.FONT);
// executeCommand(ICON_LIB.BOX_ICONS, COMMAND_ENUMS.FONT);

// export function executeCommand() {
//   if (command && command in COMMAND_ENUMS) {
//     if (name && name in ICON_LIB_META) {
//       clean(name, command);
//       switch (command) {
//         case COMMAND_ENUMS.OPTIMIZE:
//           optimize();
//           break;
//       }
//     } else {
//       throw Error("UNKNOWS SUPPORTED ICON. Please check available commands.");
//     }
//   } else {
//     throw Error("UNKNOWS COMMAND. Please check available commands.");
//   }
// }
