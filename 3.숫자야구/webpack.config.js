module.exports = {
  name: "numberbaseball-settings",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"]
  },

  entry: {
    app: ["./client"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"]
                },
                debug: true
              }
            ],
            "@babel/preset-react"
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel"
          ]
        }
      }
    ]
  },
  plugins: [],
  output: {
    filename: "app.js",
    publicPath: "/dist"
  }
};
