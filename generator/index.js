module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      "axios": "^0.18.0"
    },
    devDependencies: {
      "node-sass": "^4.11.0",
      "sass-loader": "^7.1.0"
    }
  })
  api.render(files => {
    Object.keys(files)
      .filter(path => (path.startsWith('src/') || path.startsWith('public/')))
      .forEach(path => delete files[path])
  })
  api.render('./files')
}
