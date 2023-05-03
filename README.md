# Tailwind Theme Plugin

[@digital-go-jp/design-tokens](https://www.npmjs.com/package/@digital-go-jp/design-tokens) を使った Tailwind CSS の Theme Plugin。

[![npm version](https://badge.fury.io/js/@digital-go-jp%2Ftailwind-theme-plugin.svg)](https://badge.fury.io/js/@digital-go-jp%2Ftailwind-theme-plugin)

### インストール

```
$ npm install @digital-go-jp/tailwind-theme-plugin
```

### tailwind.config.js の設定

```
{
    content: [...],
    theme: {
       exnted: {
           ...
       },
    },
    plugins: [require('@digital-go-jp/tailwind-theme-plugin')],
}
```

## 以下開発者向け

### Setup

```
$ npm install
```

### Build

```
$ npm run build
```

### Publish

```
$ npm publish --access=public
```
