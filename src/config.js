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

export const ICON_LIB = {
  FEATHER: "feather",
  BOX_ICONS: "box-icons",
};

export const ICON_LIB_META = {
  [ICON_LIB.FEATHER]: [
    {
      name: [ICON_LIB.FEATHER],
      alias: "index",
      id: "fe",
      label: "feather",
      source: ["feather"],
      dest: "feather",
    },
  ],
  [ICON_LIB.BOX_ICONS]: [
    {
      name: [ICON_LIB.BOX_ICONS],
      alias: "index",
      id: "bx",
      label: "box-icons",
      source: ["box-icons/regular"],
      dest: "box-icons/regular",
    },
    {
      name: [ICON_LIB.BOX_ICONS],
      alias: "solid",
      id: "bxs",
      label: "box-icons",
      source: ["box-icons/solid"],
      dest: "box-icons/solid",
    },
    {
      name: [ICON_LIB.BOX_ICONS],
      name: "logo",
      id: "bxl",
      label: "box-icons",
      source: ["box-icons/logos"],
      dest: "box-icons/logos",
    },
  ],
};
