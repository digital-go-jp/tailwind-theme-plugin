# Tailwind Theme Plugin

[@digital-go-jp/design-tokens](https://www.npmjs.com/package/@digital-go-jp/design-tokens) を使った Tailwind CSS の Theme Plugin。

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

## Figma（デザインシステム）とのバージョン対応表

| Figmaのバージョン | npmのバージョン |
| ----------------- | --------------- |
| 1.3.4             | 0.0.17          |
| 1.3.3             | 0.0.13          |

## 拡張内容

このテーマを使うと以下の内容が設定された状態になります。  
テーマを使わずデザイントークンのみを使いたい方は、[@digital-go-jp/design-tokens](https://www.npmjs.com/package/@digital-go-jp/design-tokens) を使ってください。

```
theme: {
  extend: {
    colors: {
      white: tokens.Color.Primitive.White[1000].value,
      sea: {
        50: tokens.Color.Primitive.Sea[50].value,
        100: tokens.Color.Primitive.Sea[100].value,
        200: tokens.Color.Primitive.Sea[200].value,
        300: tokens.Color.Primitive.Sea[300].value,
        400: tokens.Color.Primitive.Sea[400].value,
        500: tokens.Color.Primitive.Sea[500].value,
        600: tokens.Color.Primitive.Sea[600].value,
        700: tokens.Color.Primitive.Sea[700].value,
        800: tokens.Color.Primitive.Sea[800].value,
        900: tokens.Color.Primitive.Sea[900].value,
        1000: tokens.Color.Primitive.Sea[1000].value,
        1100: tokens.Color.Primitive.Sea[1100].value,
        1200: tokens.Color.Primitive.Sea[1200].value,
      },
      sumi: {
        50: tokens.Color.Primitive.Sumi[50].value,
        100: tokens.Color.Primitive.Sumi[100].value,
        200: tokens.Color.Primitive.Sumi[200].value,
        300: tokens.Color.Primitive.Sumi[300].value,
        400: tokens.Color.Primitive.Sumi[400].value,
        500: tokens.Color.Primitive.Sumi[500].value,
        600: tokens.Color.Primitive.Sumi[600].value,
        700: tokens.Color.Primitive.Sumi[700].value,
        800: tokens.Color.Primitive.Sumi[800].value,
        900: tokens.Color.Primitive.Sumi[900].value,
        1000: tokens.Color.Primitive.Sumi[1000].value,
        1100: tokens.Color.Primitive.Sumi[1100].value,
        1200: tokens.Color.Primitive.Sumi[1200].value,
      },
      forest: {
        50: tokens.Color.Primitive.Forest[50].value,
        100: tokens.Color.Primitive.Forest[100].value,
        200: tokens.Color.Primitive.Forest[200].value,
        300: tokens.Color.Primitive.Forest[300].value,
        400: tokens.Color.Primitive.Forest[400].value,
        500: tokens.Color.Primitive.Forest[500].value,
        600: tokens.Color.Primitive.Forest[600].value,
        700: tokens.Color.Primitive.Forest[700].value,
        800: tokens.Color.Primitive.Forest[800].value,
        900: tokens.Color.Primitive.Forest[900].value,
        1000: tokens.Color.Primitive.Forest[1000].value,
        1100: tokens.Color.Primitive.Forest[1100].value,
        1200: tokens.Color.Primitive.Forest[1200].value,
      },
      wood: {
        50: tokens.Color.Primitive.Wood[50].value,
        100: tokens.Color.Primitive.Wood[100].value,
        200: tokens.Color.Primitive.Wood[200].value,
        300: tokens.Color.Primitive.Wood[300].value,
        400: tokens.Color.Primitive.Wood[400].value,
        500: tokens.Color.Primitive.Wood[500].value,
        600: tokens.Color.Primitive.Wood[600].value,
        700: tokens.Color.Primitive.Wood[700].value,
        800: tokens.Color.Primitive.Wood[800].value,
        900: tokens.Color.Primitive.Wood[900].value,
        1000: tokens.Color.Primitive.Wood[1000].value,
        1100: tokens.Color.Primitive.Wood[1100].value,
        1200: tokens.Color.Primitive.Wood[1200].value,
      },
      sun: {
        50: tokens.Color.Primitive.Sun[50].value,
        100: tokens.Color.Primitive.Sun[100].value,
        200: tokens.Color.Primitive.Sun[200].value,
        300: tokens.Color.Primitive.Sun[300].value,
        400: tokens.Color.Primitive.Sun[400].value,
        500: tokens.Color.Primitive.Sun[500].value,
        600: tokens.Color.Primitive.Sun[600].value,
        700: tokens.Color.Primitive.Sun[700].value,
        800: tokens.Color.Primitive.Sun[800].value,
        900: tokens.Color.Primitive.Sun[900].value,
        1000: tokens.Color.Primitive.Sun[1000].value,
        1100: tokens.Color.Primitive.Sun[1100].value,
        1200: tokens.Color.Primitive.Sun[1200].value,
      },
      icon: {
        label: tokens.Color.Light.Icon.Label.value,
        active: tokens.Color.Light.Icon.Active.value,
        alert: tokens.Color.Light.Icon.Alert.value,
        disabled: tokens.Color.Light.Icon.Disabled.value,
      },
      status: {
        success: tokens.Color.Light.Status.Success.value,
        warning: tokens.Color.Light.Status.Warning.value,
        alert: tokens.Color.Light.Status.Alert.value,
      },
      chart: {
        primary: tokens.Color.Light.Chart.Primary.value,
        secondary: tokens.Color.Light.Chart.Secondary.value,
      },
      border: {
        alert: tokens.Color.Light.Border.Alert.value,
        selected: tokens.Color.Light.Border.Selected.value,
        focused: tokens.Color.Light.Border.Focused.value,
        disabled: tokens.Color.Light.Border.Disabled.value,
        divider: tokens.Color.Light.Border.Divider.value,
        field: tokens.Color.Light.Border.Field.value,
      },
      dark: {
        icon: {
          label: tokens.Color.Dark.Icon.Label.value,
          active: tokens.Color.Dark.Icon.Active.value,
          alert: tokens.Color.Dark.Icon.Alert.value,
          disabled: tokens.Color.Dark.Icon.Disabled.value,
        },
        status: {
          success: tokens.Color.Dark.Status.Success.value,
          warning: tokens.Color.Dark.Status.Warning.value,
          alert: tokens.Color.Dark.Status.Alert.value,
        },
        chart: {
          primary: tokens.Color.Dark.Chart.Primary.value,
          secondary: tokens.Color.Dark.Chart.Secondary.value,
        },
      },
    },
    textColor: {
      body: tokens.Color.Light.Text.Body.value,
      description: tokens.Color.Light.Text.Description.value,
      placeholder: tokens.Color.Light.Text.Placeholder.value,
      'on-fill': tokens.Color.Light.Text['On Fill'].value,
      link: tokens.Color.Light.Text.Link.value,
      visited: tokens.Color.Light.Text.Visited.value,
      alert: tokens.Color.Light.Text.Alert.value,
      disabled: tokens.Color.Light.Text.Disabled.value,
      button: {
        primary: {
          normal: tokens.Color.Light.Text['On Fill'].value,
          disabled: tokens.Color.Light.Button.Disabled.value,
        },
        secondary: {
          normal: tokens.Color.Light.Button.Normal.value,
          active: tokens.Color.Light.Button.Active.value,
          hover: tokens.Color.Light.Button.Hover.value,
          disabled: tokens.Color.Light.Button.Disabled.value,
        },
        tertiary: {
          normal: tokens.Color.Light.Button.Normal.value,
          active: tokens.Color.Light.Button.Active.value,
          hover: tokens.Color.Light.Button.Hover.value,
          disabled: tokens.Color.Light.Button.Disabled.value,
        },
      },
      dark: {
        body: tokens.Color.Dark.Text.Body.value,
        description: tokens.Color.Dark.Text.Description.value,
        placeholder: tokens.Color.Dark.Text.Placeholder.value,
        'on-fill': tokens.Color.Dark.Text['On Fill'].value,
        link: tokens.Color.Dark.Text.Link.value,
        visited: tokens.Color.Dark.Text.Visited.value,
        alert: tokens.Color.Dark.Text.Alert.value,
        disabled: tokens.Color.Dark.Text.Disabled.value,
      },
    },
    backgroundColor: {
      primary: tokens.Color.Light.Background.Primary.value,
      secondary: tokens.Color.Light.Background.Secondary.value,
      tertiary: tokens.Color.Light.Background.Tertiary.value,
      button: {
        primary: {
          normal: tokens.Color.Light.Button.Normal.value,
          active: tokens.Color.Light.Button.Active.value,
          hover: tokens.Color.Light.Button.Hover.value,
          disabled: tokens.Color.Light.Button.Disabled.value,
        },
        secondary: {
          normal: tokens.Color.Primitive.White[1000].value,
          active: tokens.Color.Primitive.Sea[200].value,
          hover: tokens.Color.Primitive.Sea[100].value,
          disabled: tokens.Color.Primitive.White[1000].value,
        },
        tertiary: {
          normal: 'transparent',
          active: tokens.Color.Primitive.Sea[200].value,
          hover: tokens.Color.Primitive.Sea[100].value,
          disabled: 'transparent',
        },
      },
      dark: {
        primary: tokens.Color.Dark.Background.Primary.value,
        secondary: tokens.Color.Dark.Background.Secondary.value,
        tertiary: tokens.Color.Dark.Background.Tertiary.value,
        button: {
          primary: {
            normal: tokens.Color.Dark.Button.Normal.value,
            active: tokens.Color.Dark.Button.Active.value,
            hover: tokens.Color.Dark.Button.Hover.value,
            disabled: tokens.Color.Dark.Button.Disabled.value,
          },
        },
      },
    },
    borderColor: {
      alert: tokens.Color.Light.Border.Alert.value,
      selected: tokens.Color.Light.Border.Selected.value,
      focused: tokens.Color.Light.Border.Focused.value,
      disabled: tokens.Color.Light.Border.Disabled.value,
      divider: tokens.Color.Light.Border.Divider.value,
      field: tokens.Color.Light.Border.Field.value,
      button: {
        secondary: {
          normal: tokens.Color.Light.Button.Normal.value,
          active: tokens.Color.Light.Button.Active.value,
          hover: tokens.Color.Light.Button.Hover.value,
          disabled: tokens.Color.Light.Button.Disabled.value,
        },
      },
      dark: {
        alert: tokens.Color.Dark.Border.Alert.value,
        selected: tokens.Color.Dark.Border.Selected.value,
        focused: tokens.Color.Dark.Border.Focused.value,
        disabled: tokens.Color.Dark.Border.Disabled.value,
        divider: tokens.Color.Dark.Border.Divider.value,
        field: tokens.Color.Dark.Border.Field.value,
      },
    },
    outlineColor: {
      focused: tokens.Color.Light.Border.Focused.value,
      button: tokens.Color.Light.Border.Focused.value,
      input: tokens.Color.Light.Border.Focused.value,
    },
    fontSize: {
      'heading-2xl': [
        tokens.Text.Heading['2xl'].FontSize.value,
        {
          fontWeight: tokens.Text.Heading['2xl'].FontWeight.value,
          lineHeight: tokens.Text.Heading['2xl'].LineHeight.value,
          letterSpacing: tokens.Text.Heading['2xl'].LetterSpacing.value,
        },
      ],
      'heading-xl': [
        tokens.Text.Heading.xl.FontSize.value,
        {
          fontWeight: tokens.Text.Heading.xl.FontWeight.value,
          lineHeight: tokens.Text.Heading.xl.LineHeight.value,
          letterSpacing: tokens.Text.Heading.xl.LetterSpacing.value,
        },
      ],
      'heading-lg': [
        tokens.Text.Heading.lg.FontSize.value,
        {
          fontWeight: tokens.Text.Heading.lg.FontWeight.value,
          lineHeight: tokens.Text.Heading.lg.LineHeight.value,
          letterSpacing: tokens.Text.Heading.lg.LetterSpacing.value,
        },
      ],
      'heading-md': [
        tokens.Text.Heading.md.FontSize.value,
        {
          fontWeight: tokens.Text.Heading.md.FontWeight.value,
          lineHeight: tokens.Text.Heading.md.LineHeight.value,
          letterSpacing: tokens.Text.Heading.md.LetterSpacing.value,
        },
      ],
      'heading-sm': [
        tokens.Text.Heading.sm.FontSize.value,
        {
          fontWeight: tokens.Text.Heading.sm.FontWeight.value,
          lineHeight: tokens.Text.Heading.sm.LineHeight.value,
          letterSpacing: tokens.Text.Heading.sm.LetterSpacing.value,
        },
      ],
      'heading-xs': [
        tokens.Text.Heading.xs.FontSize.value,
        {
          fontWeight: tokens.Text.Heading.xs.FontWeight.value,
          lineHeight: tokens.Text.Heading.xs.LineHeight.value,
          letterSpacing: tokens.Text.Heading.xs.LetterSpacing.value,
        },
      ],
      'heading-2xs': [
        tokens.Text.Heading['2xs'].FontSize.value,
        {
          fontWeight: tokens.Text.Heading['2xs'].FontWeight.value,
          lineHeight: tokens.Text.Heading['2xs'].LineHeight.value,
          letterSpacing: tokens.Text.Heading['2xs'].LetterSpacing.value,
        },
      ],
      'heading-mobile-lg': [
        tokens.Text.Mobile.Heading.lg.FontSize.value,
        {
          fontWeight: tokens.Text.Mobile.Heading.lg.FontWeight.value,
          lineHeight: tokens.Text.Mobile.Heading.lg.LineHeight.value,
          letterSpacing: tokens.Text.Mobile.Heading.lg.LetterSpacing.value,
        },
      ],
      'heading-mobile-md': [
        tokens.Text.Mobile.Heading.md.FontSize.value,
        {
          fontWeight: tokens.Text.Mobile.Heading.md.FontWeight.value,
          lineHeight: tokens.Text.Mobile.Heading.md.LineHeight.value,
          letterSpacing: tokens.Text.Mobile.Heading.md.LetterSpacing.value,
        },
      ],
      'heading-mobile-sm': [
        tokens.Text.Mobile.Heading.sm.FontSize.value,
        {
          fontWeight: tokens.Text.Mobile.Heading.sm.FontWeight.value,
          lineHeight: tokens.Text.Mobile.Heading.sm.LineHeight.value,
          letterSpacing: tokens.Text.Mobile.Heading.sm.LetterSpacing.value,
        },
      ],
      'heading-mobile-xs': [
        tokens.Text.Mobile.Heading.xs.FontSize.value,
        {
          fontWeight: tokens.Text.Mobile.Heading.xs.FontWeight.value,
          lineHeight: tokens.Text.Mobile.Heading.xs.LineHeight.value,
          letterSpacing: tokens.Text.Mobile.Heading.xs.LetterSpacing.value,
        },
      ],
      'heading-mobile-2xs': [
        tokens.Text.Mobile.Heading['2xs'].FontSize.value,
        {
          fontWeight: tokens.Text.Mobile.Heading['2xs'].FontWeight.value,
          lineHeight: tokens.Text.Mobile.Heading['2xs'].LineHeight.value,
          letterSpacing: tokens.Text.Mobile.Heading['2xs'].LetterSpacing.value,
        },
      ],
      button: [
        tokens.Text.Button.FontSize.value,
        {
          fontWeight: tokens.Text.Button.FontWeight.value,
          lineHeight: tokens.Text.Button.LineHeight.value,
          letterSpacing: tokens.Text.Button.LetterSpacing.value,
        },
      ],
      'button-link': [
        tokens.Text.ButtonLink.FontSize.value,
        {
          fontWeight: tokens.Text.ButtonLink.FontWeight.value,
          lineHeight: tokens.Text.ButtonLink.LineHeight.value,
          letterSpacing: tokens.Text.ButtonLink.LetterSpacing.value,
        },
      ],
      'button-xs': [
        '0.875rem',
        {
          fontWeight: tokens.FontWeight.Bold.value,
          lineHeight: '100%',
          letterSpacing: '0.035em',
        },
      ],
      'button-xs-link': [
        '0.875rem',
        {
          fontWeight: tokens.FontWeight.Bold.value,
          lineHeight: '100%',
          letterSpacing: '0.035em',
        },
      ],
      'body-md': [
        tokens.Text.Body.md.FontSize.value,
        {
          fontWeight: tokens.Text.Body.md.FontWeight.value,
          lineHeight: tokens.Text.Body.md.LineHeight.value,
          letterSpacing: tokens.Text.Body.md.LetterSpacing.value,
        },
      ],
      'body-lg': [
        tokens.Text.Body.lg.FontSize.value,
        {
          fontWeight: tokens.Text.Body.lg.FontWeight.value,
          lineHeight: tokens.Text.Body.lg.LineHeight.value,
          letterSpacing: tokens.Text.Body.lg.LetterSpacing.value,
        },
      ],
      'body-link-md': [
        tokens.Text.BodyLink.md.FontSize.value,
        {
          fontWeight: tokens.Text.BodyLink.md.FontWeight.value,
          lineHeight: tokens.Text.BodyLink.md.LineHeight.value,
          letterSpacing: tokens.Text.BodyLink.md.LetterSpacing.value,
        },
      ],
      'body-link-lg': [
        tokens.Text.BodyLink.lg.FontSize.value,
        {
          fontWeight: tokens.Text.BodyLink.lg.FontWeight.value,
          lineHeight: tokens.Text.BodyLink.lg.LineHeight.value,
          letterSpacing: tokens.Text.BodyLink.lg.LetterSpacing.value,
        },
      ],
      'label-md': [
        tokens.Text.Label.md.FontSize.value,
        {
          fontWeight: tokens.Text.Label.md.FontWeight.value,
          lineHeight: tokens.Text.Label.md.LineHeight.value,
          letterSpacing: tokens.Text.Label.md.LetterSpacing.value,
        },
      ],
      'label-lg': [
        tokens.Text.Label.lg.FontSize.value,
        {
          fontWeight: tokens.Text.Label.lg.FontWeight.value,
          lineHeight: tokens.Text.Label.lg.LineHeight.value,
          letterSpacing: tokens.Text.Label.lg.LetterSpacing.value,
        },
      ],
      'label-link-md': [
        tokens.Text.LabelLink.md.FontSize.value,
        {
          fontWeight: tokens.Text.LabelLink.md.FontWeight.value,
          lineHeight: tokens.Text.LabelLink.md.LineHeight.value,
          letterSpacing: tokens.Text.LabelLink.md.LetterSpacing.value,
        },
      ],
      'label-link-lg': [
        tokens.Text.LabelLink.lg.FontSize.value,
        {
          fontWeight: tokens.Text.LabelLink.lg.FontWeight.value,
          lineHeight: tokens.Text.LabelLink.lg.LineHeight.value,
          letterSpacing: tokens.Text.LabelLink.lg.LetterSpacing.value,
        },
      ],
      'caption-md': [
        tokens.Text.Caption.md.FontSize.value,
        {
          fontWeight: tokens.Text.Caption.md.FontWeight.value,
          lineHeight: tokens.Text.Caption.md.LineHeight.value,
          letterSpacing: tokens.Text.Caption.md.LetterSpacing.value,
        },
      ],
      'caption-lg': [
        tokens.Text.Caption.lg.FontSize.value,
        {
          fontWeight: tokens.Text.Caption.lg.FontWeight.value,
          lineHeight: tokens.Text.Caption.lg.LineHeight.value,
          letterSpacing: tokens.Text.Caption.lg.LetterSpacing.value,
        },
      ],
      'caption-link-md': [
        tokens.Text.CaptionLink.md.FontSize.value,
        {
          fontWeight: tokens.Text.CaptionLink.md.FontWeight.value,
          lineHeight: tokens.Text.CaptionLink.md.LineHeight.value,
          letterSpacing: tokens.Text.CaptionLink.md.LetterSpacing.value,
        },
      ],
      'caption-link-lg': [
        tokens.Text.CaptionLink.lg.FontSize.value,
        {
          fontWeight: tokens.Text.CaptionLink.lg.FontWeight.value,
          lineHeight: tokens.Text.CaptionLink.lg.LineHeight.value,
          letterSpacing: tokens.Text.CaptionLink.lg.LetterSpacing.value,
        },
      ],
    },
    fontWeight: {
      regular: tokens.FontWeight.Regular.value,
      medium: tokens.FontWeight.Medium.value,
      bold: tokens.FontWeight.Bold.value,
    },
    lineHeight: {
      sm: tokens.LineHeight.sm.value,
      md: tokens.LineHeight.md.value,
      lg: tokens.LineHeight.lg.value,
    },
    letterSpacing: {
      sm: tokens.LetterSpacing.sm.value,
      md: tokens.LetterSpacing.md.value,
    },
    spacing: {
      xs: tokens.Spacing.xs.value,
      sm: tokens.Spacing.sm.value,
      md: tokens.Spacing.md.value,
      lg: tokens.Spacing.lg.value,
      xl: tokens.Spacing.xl.value,
      '2xl': tokens.Spacing['2xl'].value,
      '3xl': tokens.Spacing['3xl'].value,
    },
    borderRadius: {
      sm: tokens.BorderRadius.sm.value,
      md: tokens.BorderRadius.md.value,
      lg: tokens.BorderRadius.lg.value,
    },
    screens: {
      desktop: '768px',
      'desktop-admin': '992px',
    },
    listStyleType: {
      'lower-latin': 'lower-latin',
      circle: 'circle',
      square: 'square',
    },
    aspectRatio: {
      '1/1': '1 / 1',
      '3/2': '3 / 2',
      '16/9': '16 / 9',
    },
  },
},

```
