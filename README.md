# About

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Installation

After cloning the repo, install all the dependencies using `yarn install` or `npm i`

Once Installation is complete, run all the node commands using [ni](https://github.com/antfu/ni)

### Run the server

Execute `nr dev` in any shell and goto

> [http://localhost:3000](http://localhost:3000)

### Manually steps for setting up VS code

#### Extensions

Install the following extensions to get the best development experience in [VSCode](https://code.visualstudio.com):

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

Paste the following in settings.json[^1]:
[^1]: Open command pallette _(cmd+shift+p)_
Type/Paste: `Preferences: Open User Settings (JSON)`

```json
"typescript.updateImportsOnFileMove.enabled": "always",
"javascript.updateImportsOnFileMove.enabled": "always",
"[javascriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
"[scss]": {
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[jsonc]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"editor.codeActionsOnSave": {
  "source.fixAll": true,
  "source.fixAll.eslint": true
},
"eslint.validate": ["javascript", "typescript"],
"editor.tabSize": 2,
"editor.formatOnSave": true,
"files.associations": {
  "*.tsx": "typescriptreact",
  "*.jsx": "javascriptreact",
  "*.scss": "postcss"
},
"[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"emmet.includeLanguages": {
  "postcss": "css"
},
"editor.quickSuggestions": {
  "strings": "on"
},
"tailwindCSS.includeLanguages": {
  "plaintext": "html"
},
"tailwindCSS.experimental.classRegex": [
  ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
]
```
