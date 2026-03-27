# v1 移行ガイド

このガイドでは、`@digital-go-jp/tailwind-theme-plugin` を v1 へアップグレードする際に必要な対応をまとめています。

## 破壊的変更一覧

### 1. `lineHeight` トークンの削除（deprecated トークンの最終削除）

ドット記法による `lineHeight` トークン（`leading-1-0`、`leading-1-2` など）は以前より deprecated となっていましたが、v1 で完全に削除されました。

アンダースコア記法のトークンに置き換えてください。

| 削除されたトークン | 代替トークン |
| ------------------ | ------------ |
| `leading-1-0`      | `leading-100` |
| `leading-1-2`      | `leading-120` |
| `leading-1-3`      | `leading-130` |
| `leading-1-4`      | `leading-140` |
| `leading-1-5`      | `leading-150` |
| `leading-1-6`      | `leading-160` |
| `leading-1-7`      | `leading-170` |
| `leading-1-75`     | `leading-175` |

---

### 2. `screens` トークンの削除

`screens` トークン（`desktop`、`desktop-admin`）はプラグインから削除されました。プロジェクト側で設定してください。

#### Tailwind CSS v3

`tailwind.config.js` の `theme.extend.screens` で設定してください。

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        desktop: "48em",
        "desktop-admin": "62em",
      },
    },
  },
}
```

#### Tailwind CSS v4

CSS ファイルの `@theme` で `--breakpoint-*` カスタムプロパティを使って設定してください。

```css
@theme {
  --breakpoint-desktop: 48em;
  --breakpoint-desktop-admin: 62em;
}
```

---

### 3. `listStyleType` トークンの削除

`listStyleType` トークン（`list-lower-latin`、`list-circle`、`list-square`）はプラグインから削除されました。Tailwind CSS の arbitrary values を使って代替してください。

#### Tailwind CSS v3

`tailwind.config.js` の `theme.extend.listStyleType` で設定するか、arbitrary values を使ってください。

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      listStyleType: {
        'lower-latin': 'lower-latin',
        circle: 'circle',
        square: 'square',
      },
    },
  },
}
```

または arbitrary values を使う場合：

```html
<!-- 変更前 -->
<ul class="list-lower-latin"> ... </ul>
<ul class="list-circle"> ... </ul>
<ul class="list-square"> ... </ul>

<!-- 変更後 -->
<ul class="list-[lower-latin]"> ... </ul>
<ul class="list-[circle]"> ... </ul>
<ul class="list-[square]"> ... </ul>
```

#### Tailwind CSS v4

Arbitrary values を使ってください。

```html
<!-- 変更前 -->
<ul class="list-lower-latin"> ... </ul>
<ul class="list-circle"> ... </ul>
<ul class="list-square"> ... </ul>

<!-- 変更後 -->
<ul class="list-[lower-latin]"> ... </ul>
<ul class="list-[circle]"> ... </ul>
<ul class="list-[square]"> ... </ul>
```

---

### 4. `aspectRatio` トークンの削除

`aspectRatio` トークン（`aspect-1/1`、`aspect-3/2`、`aspect-16/9`）はプラグインから削除されました。Tailwind CSS の arbitrary values を使って代替してください。

```html
<!-- 変更前 -->
<div class="aspect-1/1"> ... </div>
<div class="aspect-3/2"> ... </div>
<div class="aspect-16/9"> ... </div>

<!-- Tailwind CSS v3 の場合 -->
<div class="aspect-square"> ... </div>
<div class="aspect-[3/2]"> ... </div>
<div class="aspect-video"> ... </div>

<!-- Tailwind CSS v4 の場合 -->
<div class="aspect-square"> ... </div>
<div class="aspect-3/2"> ... </div>
<div class="aspect-video"> ... </div>
```
