const minify = require('html-minifier').minify
const fs = require('fs')
const path = require('path')
const pages = ['index.html', 'market-item.html', 'market-land.html', 'market-axie.html'] // 'market-bundle.html', 'inventory-axie.html', 'inventory-item.html', 'inventory-land.html', 'inventory-bundle.html', 'offer.html', 'login.html']
pages.forEach(page => {
  console.log('minifying', page)
  const body = fs.readFileSync(path.join(__dirname, '/packaged/', page)).toString()
  const m = minify(body, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true
  })
  fs.writeFileSync(path.join(__dirname, '/minified/', page), m)
})