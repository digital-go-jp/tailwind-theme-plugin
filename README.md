# Tailwind Theme Plugin

[@digital-go-jp/design-tokens](https://www.npmjs.com/package/@digital-go-jp/design-tokens) をベースにした Tailwind CSS のテーマプラグイン。

[![npm version](https://badge.fury.io/js/@digital-go-jp%2Ftailwind-theme-plugin.svg)](https://badge.fury.io/js/@digital-go-jp%2Ftailwind-theme-plugin)

## インストール

```sh
npm install @digital-go-jp/tailwind-theme-plugin
```

`tailwind.config.js` の `plugins` 部分を以下のように設定してください。

```js
{
    content: [...],
    theme: {
       extend: {
           ...
       },
    },
    plugins: [require('@digital-go-jp/tailwind-theme-plugin')],
}
```

## 使用例

- [examples](./examples/) ディレクトリ
- [React サンプルコンポーネント集](https://github.com/digital-go-jp/design-system-example-components)

## バージョン対応表

| Figma のバージョン | パッケージのバージョン |
| ------------------ | ---------------- |
| 2.4.0              | 0.3.1            |
| 2.3.0              | 0.3.1            |
| 2.2.0              | 0.2.5            |
| 2.1.3              | 0.2.5            |
| 2.1.2              | 0.2.5            |
| 2.1.1              | 0.2.5            |
| 2.1.0              | 0.2.5            |
| 2.0.4              | 0.2.5            |
| 2.0.3              | 0.2.0            |
| 2.0.2              | 0.1.17           |
| 2.0.1              | 0.1.16           |
| 1.4.3              | 0.1.16           |

## 求人情報

デジタル庁デザインシステムのチームメンバーを募集しています。行政のデジタル環境を支える基盤づくりに、あなたのスキルや経験を活かしてみませんか？　求人ページからご応募ください。

- [プロダクトデザイナー（デザインシステム） - デジタル庁](https://herp.careers/v1/digitalsaiyo/IjQ4ovK9BFPl)
