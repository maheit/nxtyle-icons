export const ICON_LIB = {
  FEATHER: "feather",
  BOX_ICONS: "box-icons",
  PHOSPHOR_ICONS: "phosphor-icons",
  TEENY_ICONS: "teeny-icons",
  BOOTSTRAP_ICONS: "bootstrap-icons",
  CRYPTOCURRENCY_ICONS: "cryptocurrency-icons",
  REMIX_ICONS: "remix-icons",
};

export const ICON_BUILD_ORDER = [
  ICON_LIB.FEATHER,
  ICON_LIB.BOX_ICONS,
  ICON_LIB.PHOSPHOR_ICONS,
  ICON_LIB.TEENY_ICONS,
  ICON_LIB.BOOTSTRAP_ICONS,
  ICON_LIB.CRYPTOCURRENCY_ICONS,
  ICON_LIB.REMIX_ICONS,
];

export const ICON_LIB_META = {
  [ICON_LIB.FEATHER]: [
    {
      name: ICON_LIB.FEATHER,
      alias: "feather",
      id: "fe",
      label: "feather",
      source: ["feather"],
      dest: "feather",
    },
  ],
  [ICON_LIB.BOX_ICONS]: [
    {
      name: ICON_LIB.BOX_ICONS,
      alias: "regular",
      id: "bx",
      label: "box-icons",
      source: ["box-icons/regular"],
      dest: "box-icons/regular",
    },
    {
      name: ICON_LIB.BOX_ICONS,
      alias: "solid",
      id: "bx-s",
      label: "box-icons",
      source: ["box-icons/solid"],
      dest: "box-icons/solid",
    },
    {
      name: ICON_LIB.BOX_ICONS,
      alias: "logos",
      id: "bx-l",
      label: "box-icons",
      source: ["box-icons/logos"],
      dest: "box-icons/logos",
    },
  ],
  [ICON_LIB.PHOSPHOR_ICONS]: [
    {
      name: ICON_LIB.PHOSPHOR_ICONS,
      alias: "regular",
      id: "pp",
      prefix: "pp",
      label: "phosphor-icons",
      source: ["phosphor-icons/regular"],
      dest: "phosphor-icons/regular",
    },
    {
      name: ICON_LIB.PHOSPHOR_ICONS,
      alias: "bold",
      id: "pp-b",
      prefix: "pp",
      label: "phosphor-icons",
      source: ["phosphor-icons/bold"],
      dest: "phosphor-icons/bold",
    },
    {
      name: ICON_LIB.PHOSPHOR_ICONS,
      alias: "light",
      id: "pp-li",
      prefix: "pp",
      label: "phosphor-icons",
      source: ["phosphor-icons/light"],
      dest: "phosphor-icons/light",
    },
    {
      name: ICON_LIB.PHOSPHOR_ICONS,
      alias: "thin",
      id: "pp-t",
      prefix: "pp",
      label: "phosphor-icons",
      source: ["phosphor-icons/thin"],
      dest: "phosphor-icons/thin",
    },
    {
      name: ICON_LIB.PHOSPHOR_ICONS,
      alias: "fill",
      id: "pp-f",
      prefix: "pp",
      label: "phosphor-icons",
      source: ["phosphor-icons/fill"],
      dest: "phosphor-icons/fill",
    },
    {
      name: ICON_LIB.PHOSPHOR_ICONS,
      alias: "duotone",
      id: "pp-d",
      prefix: "pp",
      label: "phosphor-icons",
      source: ["phosphor-icons/duotone"],
      dest: "phosphor-icons/duotone",
    },
  ],
  [ICON_LIB.TEENY_ICONS]: [
    {
      name: ICON_LIB.TEENY_ICONS,
      alias: "outline",
      id: "tny-o",
      prefix: "tny-outline",
      label: "teeny-icons",
      source: ["teeny-icons/outline"],
      dest: "teeny-icons/outline",
    },
    {
      name: ICON_LIB.TEENY_ICONS,
      alias: "solid",
      id: "tny-s",
      prefix: "tny-solid",
      label: "teeny-icons",
      source: ["teeny-icons/solid"],
      dest: "teeny-icons/solid",
    },
  ],
  [ICON_LIB.BOOTSTRAP_ICONS]: [
    {
      name: ICON_LIB.BOOTSTRAP_ICONS,
      alias: "bootstrap",
      id: "bi",
      prefix: "bi",
      label: "bootstrap-icons",
      source: ["bootstrap-icons"],
      dest: "bootstrap-icons",
    },
  ],
  [ICON_LIB.CRYPTOCURRENCY_ICONS]: [
    {
      name: ICON_LIB.CRYPTOCURRENCY_ICONS,
      alias: "cryptocurrency",
      id: "crp",
      prefix: "crp",
      label: "cryptocurrency-icons",
      source: ["cryptocurrency-icons"],
      dest: "cryptocurrency-icons",
    },
  ],
  [ICON_LIB.REMIX_ICONS]: [
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "arrows",
      id: "rmx",
      prefix: "rmx-arrows",
      label: "remix-icons",
      source: ["remix-icons/arrows"],
      dest: "remix-icons/arrows",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "buildings",
      id: "rmx",
      prefix: "rmx-buildings",
      label: "remix-icons",
      source: ["remix-icons/buildings"],
      dest: "remix-icons/buildings",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "business",
      id: "rmx",
      prefix: "rmx-business",
      label: "remix-icons",
      source: ["remix-icons/business"],
      dest: "remix-icons/business",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "communication",
      id: "rmx",
      prefix: "rmx-communication",
      label: "remix-icons",
      source: ["remix-icons/communication"],
      dest: "remix-icons/communication",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "design",
      id: "rmx",
      prefix: "rmx-design",
      label: "remix-icons",
      source: ["remix-icons/design"],
      dest: "remix-icons/design",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "development",
      id: "rmx",
      prefix: "rmx-development",
      label: "remix-icons",
      source: ["remix-icons/development"],
      dest: "remix-icons/development",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "device",
      id: "rmx",
      prefix: "rmx-device",
      label: "remix-icons",
      source: ["remix-icons/device"],
      dest: "remix-icons/device",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "document",
      id: "rmx",
      prefix: "rmx-document",
      label: "remix-icons",
      source: ["remix-icons/document"],
      dest: "remix-icons/document",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "editor",
      id: "rmx",
      prefix: "rmx-editor",
      label: "remix-icons",
      source: ["remix-icons/editor"],
      dest: "remix-icons/editor",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "finance",
      id: "rmx",
      prefix: "rmx-finance",
      label: "remix-icons",
      source: ["remix-icons/finance"],
      dest: "remix-icons/finance",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "health-medical",
      id: "rmx",
      prefix: "rmx-health-medical",
      label: "remix-icons",
      source: ["remix-icons/health-medical"],
      dest: "remix-icons/health-medical",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "logos",
      id: "rmx",
      prefix: "rmx-logos",
      label: "remix-icons",
      source: ["remix-icons/logos"],
      dest: "remix-icons/logos",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "map",
      id: "rmx",
      prefix: "rmx-map",
      label: "remix-icons",
      source: ["remix-icons/map"],
      dest: "remix-icons/map",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "media",
      id: "rmx",
      prefix: "rmx-media",
      label: "remix-icons",
      source: ["remix-icons/media"],
      dest: "remix-icons/media",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "others",
      id: "rmx",
      prefix: "rmx-others",
      label: "remix-icons",
      source: ["remix-icons/others"],
      dest: "remix-icons/others",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "system",
      id: "rmx",
      prefix: "rmx-system",
      label: "remix-icons",
      source: ["remix-icons/system"],
      dest: "remix-icons/system",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "user-faces",
      id: "rmx",
      prefix: "rmx-user-faces",
      label: "remix-icons",
      source: ["remix-icons/user-faces"],
      dest: "remix-icons/user-faces",
    },
    {
      name: ICON_LIB.REMIX_ICONS,
      alias: "weather",
      id: "rmx",
      prefix: "rmx-weather",
      label: "remix-icons",
      source: ["remix-icons/weather"],
      dest: "remix-icons/weather",
    },
  ],
};
