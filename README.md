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