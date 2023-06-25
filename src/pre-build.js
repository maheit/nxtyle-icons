import { execSync } from "child_process";
import { existsSync, mkdir, mkdirSync, rmSync } from "fs";
import { join, relative, resolve } from "path";
import { __dirname } from "./utlis.js";
import {
  COMMAND_ENUMS,
  COMMAND_META,
  ICON_LIB,
  ICON_LIB_META,
} from "./config.js";
function getCommandRootDir(command, type = "dest") {
  if (command && command in COMMAND_META) {
    return join(__dirname, COMMAND_META[command][type]);
  } else {
    throw Error("UNKNOWS COMMAND DESTINATION PATH!!!");
  }
}

function clean(name, command) {
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

function execScript(command, params = []) {
  try {
    const instruction = `npm run ${command} -- ${params.join(" ")}`;
    console.log(JSON.stringify(instruction));
    const result = execSync(instruction, { stdio: "inherit" });
    // console.log(JSON.stringify(result));
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}

function getRelativePath(currentPath) {
  return relative(__dirname, currentPath);
}
function optimizer(iconMeta, name, command) {
  if (Array.isArray(iconMeta)) {
    let sourceDir = getCommandRootDir(command, "source");
    let destDir = getCommandRootDir(command, "dest");
    for (let iconData of iconMeta) {
      if ("source" in iconData && "dest" in iconData) {
        let destFOlder = join(destDir, iconData.dest);
        if (Array.isArray(iconData.source)) {
          for (let sourcePath of iconData.source) {
            let sourceFolder = join(sourceDir, sourcePath);
            const params = [];
            params.push(`-f ${getRelativePath(sourceFolder)}`);
            params.push(`-o ${getRelativePath(destFOlder)}`);
            execScript(COMMAND_ENUMS.OPTIMIZE, params);
          }
        } else {
          let sourceFolder = join(sourceDir, iconData.source);
          const params = [];
          params.push(`-f ${getRelativePath(sourceFolder)}`);
          params.push(`-o ${getRelativePath(destFOlder)}`);
          execScript(COMMAND_ENUMS.OPTIMIZE, params);
        }
      }
    }
  }
}

function optimize(name, command) {
  if (name && command) {
    switch (name) {
      case ICON_LIB.FEATHER:
        optimizer(ICON_LIB_META[ICON_LIB.FEATHER], name, command);
        break;
      case ICON_LIB.BOX_ICONS:
        optimizer(ICON_LIB_META[ICON_LIB.BOX_ICONS], name, command);
        break;
    }
  }
}

function composer(iconMeta, name, command) {
  if (Array.isArray(iconMeta)) {
    let sourceDir = getCommandRootDir(command, "source");
    let destDir = getCommandRootDir(command, "dest");
    for (let iconData of iconMeta) {
      if ("dest" in iconData) {
        let destFOlder = join(destDir, iconData.dest);
        if (Array.isArray(iconData.dest)) {
          for (let sourcePath of iconData.dest) {
            let sourceFolder = join(sourceDir, sourcePath);
            const params = [];
            params.push(`-s ${getRelativePath(sourceFolder)}`);
            params.push(`-d ${getRelativePath(destFOlder)}`);
            execScript(COMMAND_ENUMS.COMPOSE, params);
          }
        } else {
          let sourceFolder = join(sourceDir, iconData.dest);
          const params = [];
          params.push(`-s ${getRelativePath(sourceFolder)}`);
          params.push(`-d ${getRelativePath(destFOlder)}`);
          execScript(COMMAND_ENUMS.COMPOSE, params);
        }
      }
    }
  }
}

function compose(name, command) {
  if (name && command) {
    switch (name) {
      case ICON_LIB.FEATHER:
        composer(ICON_LIB_META[ICON_LIB.FEATHER], name, command);
        break;
      case ICON_LIB.BOX_ICONS:
        composer(ICON_LIB_META[ICON_LIB.BOX_ICONS], name, command);
        break;
    }
  }
}

function webFontBuilder(iconMeta, name, command) {
  if (Array.isArray(iconMeta)) {
    let sourceDir = getCommandRootDir(command, "source");
    let destDir = getCommandRootDir(command, "dest");
    let fontDefaultParams = ["--selector .nxi", "-p nxi", "-n index"];
    for (let iconData of iconMeta) {
      if ("dest" in iconData) {
        let destFOlder = join(destDir, iconData.dest);
        if (Array.isArray(iconData.dest)) {
          for (let sourcePath of iconData.dest) {
            let sourceFolder = join(sourceDir, sourcePath);
            const params = [];
            params.push(`${getRelativePath(sourceFolder)}`);
            params.push(`-o ${getRelativePath(destFOlder)}`);
            execScript(COMMAND_ENUMS.FONT, [...params, ...fontDefaultParams]);
          }
        } else {
          let sourceFolder = join(sourceDir, iconData.dest);
          const params = [];
          params.push(`${getRelativePath(sourceFolder)}`);
          params.push(`-o ${getRelativePath(destFOlder)}`);
          execScript(COMMAND_ENUMS.FONT, [...params, ...fontDefaultParams]);
        }
      }
    }
  }
}

function webFont(name, command) {
  if (name && command) {
    switch (name) {
      case ICON_LIB.FEATHER:
        webFontBuilder(ICON_LIB_META[ICON_LIB.FEATHER], name, command);
        break;
      case ICON_LIB.BOX_ICONS:
        webFontBuilder(ICON_LIB_META[ICON_LIB.BOX_ICONS], name, command);
        break;
    }
  }
}

export function executeCommand(name, command, args = []) {
  debugger;
  if (command && command in COMMAND_META) {
    if (name && name in ICON_LIB_META) {
      clean(name, command);
      switch (command) {
        case COMMAND_ENUMS.OPTIMIZE:
          optimize(name, command);
          break;
        case COMMAND_ENUMS.COMPOSE:
          compose(name, command);
          break;
        case COMMAND_ENUMS.FONT:
          webFont(name, command);
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
