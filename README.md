# arweave-axie

This repo is an attempt to archive the DApp game "Axie Infinite" onto the Arweave permaweb. It includes scripts to automate (mostly) archival and packaging of DApps.

This project failed due to the file size and file number limits imposed by Arweave. The public Marketplace (except for the Bundle Marketplace) and the Dashboard have been archived here:
https://arweave.net/M6XLlkB59WnphUArmAUG0CccmNYJsU18U3QX6zFExsk

Arweave also does not support multi-page applications, so a server-based router is required to map application routes to their permaweb addresses.

## Usage
```
npm run archive
npm run package
npm run minify
npm run deploy
```

## Manual Links in Archiver
Not all links can be automatically detected through static analysis. `autoArchive.js` contains an array of manual links that you'll need to populate for any different app.

## Dynamic Router
`public/newRouter.js` is a monkeypatch to the `Next.js` router that will intercept routers and redirect you to the correct permaweb address. Since the address isn't known until after deploying, it fetches these mappings from a server (in this case JSONbin.io). You will need to write your own router for different frameworks.

Axie used a no-javascript routing fallback with normal HTML a tags. These tags were removed due to bypassing the dynamic router.
