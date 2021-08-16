const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@scss": path.resolve(__dirname, "src/scss"),
    }
  }
}
