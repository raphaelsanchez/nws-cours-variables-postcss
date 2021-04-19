const postcssImport = require("postcss-import")
const postcssPresetEnv = require("postcss-preset-env")
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./**/*.html"],
  keyframes: true,
})
const cssnano = require("cssnano")({
  preset: "default",
})

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      browsers: "last 2 versions",
    }),
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : []),
  ],
}
