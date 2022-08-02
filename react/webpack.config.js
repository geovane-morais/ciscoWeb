const path = require("path");
  
module.exports = [
  {
    entry: "./src/menu/menu.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "public/"),
      publicPath: "/public/",
      filename: "menuMin.js",
    } 
  },
  {
  entry: "./src/login/login.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "public/"),
      publicPath: "/public/",
      filename: "loginMin.js",
    } 
  },
  {
    entry: "./src/testAuto/testAuto.js",
      mode: "development",
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] },
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      resolve: { extensions: ["*", ".js", ".jsx"] },
      output: {
        path: path.resolve(__dirname, "public/"),
        publicPath: "/public/",
        filename: "testAutoMin.js",
      } 
    },
    {
      entry: "./src/testMan/testMan.js",
        mode: "development",
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules)/,
              loader: "babel-loader",
              options: { presets: ["@babel/env"] },
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
            },
          ],
        },
        resolve: { extensions: ["*", ".js", ".jsx"] },
        output: {
          path: path.resolve(__dirname, "public/"),
          publicPath: "/public/",
          filename: "testManMin.js",
        } 
      }
];