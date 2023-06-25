export default {
  multipass: true, // boolean. false by default
  // datauri: "unenc", // 'base64' (default), 'enc' or 'unenc'.
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    // set of built-in plugins enabled by default
    "preset-default",

    // enable built-in plugins by name
    "prefixIds",

    // or by expanded notation which allows to configure plugin
    {
      name: "sortAttrs",
      params: {
        xmlnsOrder: "alphabetical",
      },
    },
    {
      name: "convertStyleToAttrs",
      params: {
        keepImportant: false,
      },
    },
    // {
    //   name: "removeViewBox",
    //   params: {
    //     width: "24",
    //     height: "24",
    //   },
    // },
    {
      name: "removeDimensions",
      params: {
        width: "24",
        height: "24",
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "class",
      },
    },
    // {
    //   name: "removeAttrs",
    //   params: {
    //     attrs: "",
    //   },
    // },
    // {
    //   name: "addAttributesToSVGElement",
    //   params: {
    //     attributes: [
    //       {
    //         fill: "blue",
    //       },
    //       {
    //         "data-image": "test",
    //       },
    //     ],
    //   },
    // },
  ],
};
