# Tailwind Theme Plugin

[@digital-go-jp/design-tokens](https://www.npmjs.com/package/@digital-go-jp/design-tokens) をベースにした Tailwind CSS のテーマプラグイン。

[![npm version](https://badge.fury.io/js/@digital-go-jp%2Ftailwind-theme-plugin.svg)](https://badge.fury.io/js/@digital-go-jp%2Ftailwind-theme-plugin)

## セットアップ

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

## バージョン対応表

| Figma のバージョン | npm のバージョン |
| ------------------ | ---------------- |
| 1.4.2              | 0.1.14           |
