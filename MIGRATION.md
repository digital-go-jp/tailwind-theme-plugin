# 次期メジャーバージョンへの移行ガイド

このガイドでは、`@digital-go-jp/tailwind-theme-plugin` の v1.x から次期メジャーバージョンへ移行する際に必要な対応をまとめています。

## 1. 旧形式の `lineHeight` トークンの削除（Tailwind CSS v3 / v4）

互換性のために残していた `leading-1-0`、`leading-1-2` などの旧形式のトークンを削除します。数値形式のトークンに置き換えてください。

| 削除するクラス | 代替クラス |
| --- | --- |
| `leading-1-0` | `leading-100` |
| `leading-1-2` | `leading-120` |
| `leading-1-3` | `leading-130` |
| `leading-1-4` | `leading-140` |
| `leading-1-5` | `leading-150` |
| `leading-1-6` | `leading-160` |
| `leading-1-7` | `leading-170` |
| `leading-1-75` | `leading-175` |

Tailwind CSS v4 で `--leading-1-0` などのカスタムプロパティを直接参照している場合も、`--leading-100` などに置き換えてください。

## 2. `screens` トークンの削除（Tailwind CSS v3）

`desktop`（`48em`）と `desktop-admin`（`62em`）のブレークポイントを削除します。引き続き同じブレークポイントを使用する場合は、プロジェクト側で設定してください。

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        desktop: '48em',
        'desktop-admin': '62em',
      },
    },
  },
};
```

Tailwind CSS v4 向けの CSS では、従来からこれらのブレークポイントを提供していません。v3 から v4 への移行時に同じ名前で設定する場合は、以下のように定義してください。

```css
@theme {
  --breakpoint-desktop: 48em;
  --breakpoint-desktop-admin: 62em;
}
```

## 3. `listStyleType` トークンの削除（Tailwind CSS v3 / v4）

`list-lower-latin`、`list-circle`、`list-square` を削除します。任意値（arbitrary values）を使って置き換えてください。

```html
<!-- 変更前 -->
<ol class="list-lower-latin"> ... </ol>
<ul class="list-circle"> ... </ul>
<ul class="list-square"> ... </ul>

<!-- 変更後（Tailwind CSS v3 / v4 共通） -->
<ol class="list-[lower-latin]"> ... </ol>
<ul class="list-[circle]"> ... </ul>
<ul class="list-[square]"> ... </ul>
```

Tailwind CSS v3 で既存のクラス名を維持する場合は、`tailwind.config.js` の `theme.extend.listStyleType` に以下の設定を追加してください。

```js
listStyleType: {
  'lower-latin': 'lower-latin',
  circle: 'circle',
  square: 'square',
},
```

## 4. `aspectRatio` トークンの削除（Tailwind CSS v3）

`aspect-1/1`、`aspect-3/2`、`aspect-16/9` を削除します。Tailwind CSS 標準のユーティリティまたは任意値に置き換えてください。

```html
<!-- 変更前 -->
<div class="aspect-1/1"> ... </div>
<div class="aspect-3/2"> ... </div>
<div class="aspect-16/9"> ... </div>

<!-- 変更後（Tailwind CSS v3） -->
<div class="aspect-square"> ... </div>
<div class="aspect-[3/2]"> ... </div>
<div class="aspect-video"> ... </div>
```

Tailwind CSS v4 向けの CSS では、従来からこれらのトークンを提供していません。v4 標準の `aspect-square`、`aspect-3/2`、`aspect-video` を使用できます。
