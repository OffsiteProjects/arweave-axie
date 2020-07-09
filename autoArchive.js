const fs = require('fs')
const path = require('path')
const url = require('url')
const request = require('request')

// download all links in HTML
const pages = ['index.html', 'activity.html', 'dashboard.html', 'market-item.html', 'market-land.html', 'market-bundle.html', 'market-axie.html', 'inventory-axie.html', 'inventory-item.html', 'inventory-land.html', 'inventory-bundle.html', 'offer.html', 'login.html']
pages.forEach(page => {
  const body = fs.readFileSync(path.join(__dirname, '/pages-original/', page)).toString()
  const expression = /(?:ht|f)tps?:\/\/[-a-zA-Z0-9.]+\.[a-zA-Z]{2,3}(\/[^"<]*)?/g;
  const regex = new RegExp(expression)
  const links = body.match(regex)
  let newBody = body
  newBody = newBody.replace('https://fonts.googleapis.com/css?family=Changa+One&amp;display=swap', '/assets/font.css')

  links.forEach(link => {
    const basename = path.basename(url.parse(link).pathname)
    if (basename !== 'marketplace-website') {
      const p = path.join(__dirname, '/public/assets/', basename)
      if (fs.existsSync(p)) return
      const ws = fs.createWriteStream(p)
      request.get(link).pipe(ws)
    }
    const r = new RegExp(link, 'g')
    newBody = newBody.replace(r, '/assets/' + basename)
  })
  newBody = newBody.replace('<head>', '<head><script src="newRouter.js"></script>')
  fs.writeFileSync(path.join(__dirname, '/public/', page), newBody)
})

// manually download additional route links
const sources = [
  {
    host: 'https://cdn.axieinfinity.com',
    dir: '/assets/',
    links: [
      "/marketplace-website/_next/static/runtime/polyfills-648d91c5b2be116f9796.js",
      "/marketplace-website/_next/static/chunks/3a42bb26.244fee898b3068d48c5e.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/profile/[id]/item.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/profile/[id]/bundle.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/profile/[id]/land.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/profile/[id]/axie.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/sign-up.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/profile/offer.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/profile/activity.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/profile/inventory/item.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/profile/inventory/bundle.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/profile/inventory/land.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/profile/inventory/axie.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/profile/dashboard.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/bundle/[listingIndex].js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/land.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/item.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/bundle.js",
      "/marketplace-website/_next/static/chunks/14ee8a52d3eab1bd52c46f332a97003a00e7af0a.8b513544a6236dd58831.js",
      "/marketplace-website/_next/static/chunks/9b172b903dc406196f4f58bf6cb598c09ad6c0f0.142bc0ed2a58cb65a595.js",
      "/marketplace-website/_next/static/chunks/5412f458de8fc3c6819987bb1070d1cd85f0a1d7.64beea2054ab6688cca8.js",
      "/marketplace-website/_next/static/chunks/3baf77e28ca09454456257c9445bd335c0449ea7.2e9703cd4e9bbe8ecee9.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/_buildManifest.js",
      "/marketplace-website/_next/static/css/bd953753.2a30625a.chunk.css",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/land/[col]/[row].js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/item/[itemAlias]/[tokenId].js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/land/[col]/[row].js",
      "/marketplace-website/_next/static/chunks/f3d3238a95930e303e2071e705acc478e7066ec9.814b17737b5052eee43a.js",
      "/marketplace-website/_next/static/chunks/63c723245f41ec73c2c11b69afd94347629c5960.219a4f77a1c2df0d897b.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/axie.js", "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/login.js",
      "/marketplace-website/_next/static/chunks/a6d71db49b3b8a1a7d1815ef3c0e64a68ee26727.b7851724313bd9ba5dee.js",
      "/marketplace-website/_next/static/chunks/c7c9224c2dd5f048e55faf0c456d0691a1602c7a.8dcdc7a18c50c8cb2457.js",
      "/marketplace-website/_next/static/chunks/d8845088c2e713f19169883434f5b7e18b879c51.3639570a0bf2c5b2f28a.js",
      "/marketplace-website/_next/static/chunks/8533c472cdce2defdb8f4b1747b0522ae81636a0.3e4767b5337ecd11c897.js",
      "/marketplace-website/_next/static/chunks/85737449591ee3b4167e0a11a98dc7b6131fcb32.44dfc00fa88e15b8d31b.js",
      "/marketplace-website/_next/static/chunks/022d9ab3ccd10337699c4bd21f6fd97b93db8c20.c78fa0a551241c4beec4.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/axie/[id].js",
      "/marketplace-website/_next/static/chunks/593fcd7861a62fc8b770b8561486b5b2f2942255.448309316b0ad836e059.js",
      "/marketplace-website/_next/static/chunks/af84c6a4cda37dfd6ed2fa7d17b5dc4f5ab69e6e.b30d17d3a24f542111b3.js",
      "/marketplace-website/_next/static/chunks/571193eb8c5ccd93ac1af299e25d5749d89ffce9.dbf4504880205ce0f705.js",
      "/marketplace-website/_next/static/chunks/1a6afd2ee6ec05c7319334978cb0aef8114ca353.9760613b3f55255577eb.js",
      "/marketplace-website/_next/static/chunks/593fcd7861a62fc8b770b8561486b5b2f2942255.448309316b0ad836e059.js",
      "/marketplace-website/_next/static/css/styles.baae97d0.chunk.css",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/index.js",
      "/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/_app.js",
      "/marketplace-website/_next/static/runtime/webpack-979016eb2e38dceb457b.js",
      "/marketplace-website/_next/static/chunks/framework.3e85e57055f95c2b3dad.js",
      "/marketplace-website/_next/static/chunks/2edb282b.f6c84fae089205f44c4e.js",
      "/marketplace-website/_next/static/chunks/b2d8e36a.defff94abfd4b9bb7fbc.js",
      "/marketplace-website/_next/static/chunks/a5cf92e1.0380e62a3df4b30a3bc7.js",
      "/marketplace-website/_next/static/chunks/9d6f3f94.496d715643bb738652d0.js",
      "/marketplace-website/_next/static/chunks/b79bd3cd.bd6cadcc2e77cc4212dc.js",
      "/marketplace-website/_next/static/chunks/bd953753.c937e36db928c7f44c74.js",
      "/marketplace-website/_next/static/chunks/commons.6af5f75bf62074545509.js",
      "/marketplace-website/_next/static/chunks/69262031a6645d2731b66080500fa50042091f85.04c70779b611388dc85b.js",
      "/marketplace-website/_next/static/chunks/03824fc22649bdaee8235928f367ae78861f996f.f223dea7c73da762b281.js",
      "/marketplace-website/_next/static/chunks/df51fa8163f83cd0977cb0d2d9d5356ecf636356.4cedc8ce0b2de07224a4.js",
      "/marketplace-website/_next/static/chunks/a88e7161c23f6c2f9256eda2797d5aa2ee0d9bd3.4ca45e3d83ea925f1f25.js",
      "/marketplace-website/_next/static/chunks/10cf34f1a6196dd0c73ba1d1b1674380b85baefd.d82ec1d62d86447b914a.js",
      "/marketplace-website/_next/static/chunks/ee703893a016e58843ce70e8f4610e8af0e632ed.d8a00bb190650b4e536a.js",
      "/marketplace-website/_next/static/chunks/11f49b9c0c758d0ef6e8bb980ae24870884e3146.10dd272abc28b48b2e9c.js",
      "/marketplace-website/_next/static/chunks/b3d46420fd14cc3c336adceed876f946d1b193a8.a1fe42df4ba5b0b0c4d3.js",
      "/marketplace-website/_next/static/chunks/styles.fa01f39638579da51f93.js",
      "/marketplace-website/_next/static/runtime/main-bf7c4af7626a3a809c58.js",
      '/marketplace-website/_next/static/chunks/32bc7a815855e394a050f2c3c97da4ecfa7c1912.7d7937faed6392d09182.js',
    ]
  },
  {
    host: 'https://marketplace.axieinfinity.com',
    dir: '/',
    links: [
      "/static/image/quarter-circle.png",
      "/static/image/complete-stage.png",
      "/static/image/empty-activities.png",
      "/static/image/empty-bundle.png",
      "/static/image/empty-search.png",
      "/static/image/loom.png",
      "/static/image/ethereum.png",
      "/static/image/chest/chest-group.png",
      "/static/image/origin-coin.png",
      "/static/image/knc-token.png",
      "/static/image/axie-knc-token.png",
      "/static/image/dai-token.png",
      "/static/image/arrow-right.png",
      "/static/image/axie-dai-coin.png",
      "/static/image/love-potion.png",
      "/static/image/land/mystic.png",
      "/static/image/land/forest.png",
      "/static/image/land/savannah.png",
      "/static/image/land/arctic.png",
      "/static/image/empty-offer.png",
      "/static/image/floor.png",
      "/static/image/puff-loading.png",
      "/static/image/meta-mask.png",
      "/static/image/item.png",
      "/static/image/bundle-ava.png",
      "/static/image/banner.png",
      "/static/image/bundle.png",
      "/static/image/land.png",
      "/static/image/logo.png",
      "/static/image/puff.png",
      "/static/image/card-material/bg-beast.png",
      "/static/image/card-material/bg-aqua.png",
      "/static/image/card-material/bg-bird.png",
      "/static/image/card-material/icon-atk.png",
      "/static/image/card-material/icon-def.png",
      "/static/image/card-material/bg-bug.png",
      "/static/image/card-material/bg-reptile.png",
      "/static/image/card-material/bg-plant.png"
    ]
  }
]
sources.forEach(source => {
  source.links.forEach(link => {
    const pathname = url.parse(link).pathname
    const p = decodeURI(path.join(__dirname, '/public/', source.dir, pathname))
    const dir = path.dirname(p)
    if (fs.existsSync(p)) return
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    console.log(source.host + link)
    const ws = fs.createWriteStream(p)
    request.get(source.host + link).pipe(ws)
  })
})

// modify scripts using CDN
const scripts = [
  'assets/marketplace-website/_next/static/chunks/479c625f72e9b30b9f4b71ed6da66cace61904cd.467a4b3f3affca04585a.js',
  'assets/marketplace-website/_next/static/chunks/32bc7a815855e394a050f2c3c97da4ecfa7c1912.7d7937faed6392d09182.js',
  'assets/index.js',
  'assets/marketplace-website/_next/static/chunks/cc8e808e6f41b1e7c3286926c5952e09790d35d1.ae49863aa812e06d1bf3.js',
  'assets/marketplace-website/_next/static/chunks/f3d3238a95930e303e2071e705acc478e7066ec9.814b17737b5052eee43a.js',
  'assets/marketplace-website/_next/static/fuKy02qk4qVywpkwxCJcw/pages/land/[col]/[row].js',
  'assets/marketplace-website/_next/static/chunks/3baf77e28ca09454456257c9445bd335c0449ea7.2e9703cd4e9bbe8ecee9.js'
]
scripts.forEach(script => {
  const body = fs.readFileSync(path.join(__dirname, '/public/', script)).toString()
  const expression = /https:\/\/cdn.axieinfinity.com/g;
  const regex = new RegExp(expression)
  let newBody = body.replace(regex, '')
  fs.writeFileSync(path.join(__dirname, '/public/', script), newBody)
})