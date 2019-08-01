const path = require("path");

module.exports = {
  name: "wordrelay-settings",
  mode: "development", //실서비스: production
  devtool: "eval", //실서비스: hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"]
  },

  //입력
  entry: {
    app: ["./client"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
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
            "react-hot-loader/babel"]
        }
      }
    ]
  },

  plugins: [],

  //출력
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: '/dist/'    //localhost:8081/dist/app.js 파일 생성 (브라우저에서 확인하기)
  }

};
