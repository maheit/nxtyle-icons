export const COMMAND_ENUMS = {
  OPTIMIZE: "optimize",
  COMPOSE: "compose",
  FONT: "font",
};

export const COMMAND_META = {
  [COMMAND_ENUMS.OPTIMIZE]: {
    source: "svg-icons",
    dest: "optimize",
  },
  [COMMAND_ENUMS.COMPOSE]: {
    source: "optimize",
    dest: "compose",
  },
  [COMMAND_ENUMS.FONT]: {
    source: "compose",
    dest: "fonts",
  },
};

export const PROCESS_CONFIRMATION_NEEDED = false;

export const FONT_START_CODE = 0xe000;

export const RESET_FONT_START_CODE = true;
