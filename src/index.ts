import tokens from '@digital-go-jp/design-tokens';
import plugin from 'tailwindcss/plugin';

const daPlugin = plugin(() => {}, {
  theme: {
    extend: {
      colors: {
        white: tokens.Color.Neutral.White.value,
        black: tokens.Color.Neutral.Black.value,
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
        blue: {
          50: tokens.Color.Primitive.Blue[50].value,
          100: tokens.Color.Primitive.Blue[100].value,
          200: tokens.Color.Primitive.Blue[200].value,
          300: tokens.Color.Primitive.Blue[300].value,
          400: tokens.Color.Primitive.Blue[400].value,
          500: tokens.Color.Primitive.Blue[500].value,
          600: tokens.Color.Primitive.Blue[600].value,
          700: tokens.Color.Primitive.Blue[700].value,
          800: tokens.Color.Primitive.Blue[800].value,
          900: tokens.Color.Primitive.Blue[900].value,
          1000: tokens.Color.Primitive.Blue[1000].value,
          1100: tokens.Color.Primitive.Blue[1100].value,
          1200: tokens.Color.Primitive.Blue[1200].value,
        },
        'light-blue': {
          50: tokens.Color.Primitive.LightBlue[50].value,
          100: tokens.Color.Primitive.LightBlue[100].value,
          200: tokens.Color.Primitive.LightBlue[200].value,
          300: tokens.Color.Primitive.LightBlue[300].value,
          400: tokens.Color.Primitive.LightBlue[400].value,
          500: tokens.Color.Primitive.LightBlue[500].value,
          600: tokens.Color.Primitive.LightBlue[600].value,
          700: tokens.Color.Primitive.LightBlue[700].value,
          800: tokens.Color.Primitive.LightBlue[800].value,
          900: tokens.Color.Primitive.LightBlue[900].value,
          1000: tokens.Color.Primitive.LightBlue[1000].value,
          1100: tokens.Color.Primitive.LightBlue[1100].value,
          1200: tokens.Color.Primitive.LightBlue[1200].value,
        },
        cyan: {
          50: tokens.Color.Primitive.Cyan[50].value,
          100: tokens.Color.Primitive.Cyan[100].value,
          200: tokens.Color.Primitive.Cyan[200].value,
          300: tokens.Color.Primitive.Cyan[300].value,
          400: tokens.Color.Primitive.Cyan[400].value,
          500: tokens.Color.Primitive.Cyan[500].value,
          600: tokens.Color.Primitive.Cyan[600].value,
          700: tokens.Color.Primitive.Cyan[700].value,
          800: tokens.Color.Primitive.Cyan[800].value,
          900: tokens.Color.Primitive.Cyan[900].value,
          1000: tokens.Color.Primitive.Cyan[1000].value,
          1100: tokens.Color.Primitive.Cyan[1100].value,
          1200: tokens.Color.Primitive.Cyan[1200].value,
        },
        green: {
          50: tokens.Color.Primitive.Green[50].value,
          100: tokens.Color.Primitive.Green[100].value,
          200: tokens.Color.Primitive.Green[200].value,
          300: tokens.Color.Primitive.Green[300].value,
          400: tokens.Color.Primitive.Green[400].value,
          500: tokens.Color.Primitive.Green[500].value,
          600: tokens.Color.Primitive.Green[600].value,
          700: tokens.Color.Primitive.Green[700].value,
          800: tokens.Color.Primitive.Green[800].value,
          900: tokens.Color.Primitive.Green[900].value,
          1000: tokens.Color.Primitive.Green[1000].value,
          1100: tokens.Color.Primitive.Green[1100].value,
          1200: tokens.Color.Primitive.Green[1200].value,
        },
        lime: {
          50: tokens.Color.Primitive.Lime[50].value,
          100: tokens.Color.Primitive.Lime[100].value,
          200: tokens.Color.Primitive.Lime[200].value,
          300: tokens.Color.Primitive.Lime[300].value,
          400: tokens.Color.Primitive.Lime[400].value,
          500: tokens.Color.Primitive.Lime[500].value,
          600: tokens.Color.Primitive.Lime[600].value,
          700: tokens.Color.Primitive.Lime[700].value,
          800: tokens.Color.Primitive.Lime[800].value,
          900: tokens.Color.Primitive.Lime[900].value,
          1000: tokens.Color.Primitive.Lime[1000].value,
          1100: tokens.Color.Primitive.Lime[1100].value,
          1200: tokens.Color.Primitive.Lime[1200].value,
        },
        yellow: {
          50: tokens.Color.Primitive.Yellow[50].value,
          100: tokens.Color.Primitive.Yellow[100].value,
          200: tokens.Color.Primitive.Yellow[200].value,
          300: tokens.Color.Primitive.Yellow[300].value,
          400: tokens.Color.Primitive.Yellow[400].value,
          500: tokens.Color.Primitive.Yellow[500].value,
          600: tokens.Color.Primitive.Yellow[600].value,
          700: tokens.Color.Primitive.Yellow[700].value,
          800: tokens.Color.Primitive.Yellow[800].value,
          900: tokens.Color.Primitive.Yellow[900].value,
          1000: tokens.Color.Primitive.Yellow[1000].value,
          1100: tokens.Color.Primitive.Yellow[1100].value,
          1200: tokens.Color.Primitive.Yellow[1200].value,
        },
        orange: {
          50: tokens.Color.Primitive.Orange[50].value,
          100: tokens.Color.Primitive.Orange[100].value,
          200: tokens.Color.Primitive.Orange[200].value,
          300: tokens.Color.Primitive.Orange[300].value,
          400: tokens.Color.Primitive.Orange[400].value,
          500: tokens.Color.Primitive.Orange[500].value,
          600: tokens.Color.Primitive.Orange[600].value,
          700: tokens.Color.Primitive.Orange[700].value,
          800: tokens.Color.Primitive.Orange[800].value,
          900: tokens.Color.Primitive.Orange[900].value,
          1000: tokens.Color.Primitive.Orange[1000].value,
          1100: tokens.Color.Primitive.Orange[1100].value,
          1200: tokens.Color.Primitive.Orange[1200].value,
        },
        red: {
          50: tokens.Color.Primitive.Red[50].value,
          100: tokens.Color.Primitive.Red[100].value,
          200: tokens.Color.Primitive.Red[200].value,
          300: tokens.Color.Primitive.Red[300].value,
          400: tokens.Color.Primitive.Red[400].value,
          500: tokens.Color.Primitive.Red[500].value,
          600: tokens.Color.Primitive.Red[600].value,
          700: tokens.Color.Primitive.Red[700].value,
          800: tokens.Color.Primitive.Red[800].value,
          900: tokens.Color.Primitive.Red[900].value,
          1000: tokens.Color.Primitive.Red[1000].value,
          1100: tokens.Color.Primitive.Red[1100].value,
          1200: tokens.Color.Primitive.Red[1200].value,
        },
        magenta: {
          50: tokens.Color.Primitive.Magenta[50].value,
          100: tokens.Color.Primitive.Magenta[100].value,
          200: tokens.Color.Primitive.Magenta[200].value,
          300: tokens.Color.Primitive.Magenta[300].value,
          400: tokens.Color.Primitive.Magenta[400].value,
          500: tokens.Color.Primitive.Magenta[500].value,
          600: tokens.Color.Primitive.Magenta[600].value,
          700: tokens.Color.Primitive.Magenta[700].value,
          800: tokens.Color.Primitive.Magenta[800].value,
          900: tokens.Color.Primitive.Magenta[900].value,
          1000: tokens.Color.Primitive.Magenta[1000].value,
          1100: tokens.Color.Primitive.Magenta[1100].value,
          1200: tokens.Color.Primitive.Magenta[1200].value,
        },
        purple: {
          50: tokens.Color.Primitive.Purple[50].value,
          100: tokens.Color.Primitive.Purple[100].value,
          200: tokens.Color.Primitive.Purple[200].value,
          300: tokens.Color.Primitive.Purple[300].value,
          400: tokens.Color.Primitive.Purple[400].value,
          500: tokens.Color.Primitive.Purple[500].value,
          600: tokens.Color.Primitive.Purple[600].value,
          700: tokens.Color.Primitive.Purple[700].value,
          800: tokens.Color.Primitive.Purple[800].value,
          900: tokens.Color.Primitive.Purple[900].value,
          1000: tokens.Color.Primitive.Purple[1000].value,
          1100: tokens.Color.Primitive.Purple[1100].value,
          1200: tokens.Color.Primitive.Purple[1200].value,
        },
        'solid-grey': {
          50: tokens.Color.Neutral.SolidGrey[50].value,
          100: tokens.Color.Neutral.SolidGrey[100].value,
          200: tokens.Color.Neutral.SolidGrey[200].value,
          300: tokens.Color.Neutral.SolidGrey[300].value,
          400: tokens.Color.Neutral.SolidGrey[400].value,
          417: tokens.Color.Neutral.SolidGrey[420].value,
          500: tokens.Color.Neutral.SolidGrey[500].value,
          536: tokens.Color.Neutral.SolidGrey[536].value,
          600: tokens.Color.Neutral.SolidGrey[600].value,
          700: tokens.Color.Neutral.SolidGrey[700].value,
          800: tokens.Color.Neutral.SolidGrey[800].value,
          900: tokens.Color.Neutral.SolidGrey[900].value,
        },
        'success-1': tokens.Color.Success[1].value,
        'success-2': tokens.Color.Success[2].value,
        'error-1': tokens.Color.Error[1].value,
        'error-2': tokens.Color.Error[2].value,
        'warning-yellow-1': tokens.Color.Warning.Yellow[1].value,
        'warning-yellow-2': tokens.Color.Warning.Yellow[2].value,
        'warning-orange-1': tokens.Color.Warning.Orange[1].value,
        'warning-orange-2': tokens.Color.Warning.Orange[2].value,
        'focus-yellow': tokens.Color.Primitive.Yellow[700].value,
        'focus-blue': tokens.Color.Primitive.LightBlue[700].value,
      },
      textColor: {
        body: tokens.Color.Neutral.SolidGrey[900].value,
        description: tokens.Color.Neutral.SolidGrey[600].value,
        placeholder: tokens.Color.Light.Text.Placeholder.value,
        link: tokens.Color.Primitive.Blue[1000].value,
        visited: tokens.Color.Primitive.Magenta[900].value,
        hover: tokens.Color.Primitive.Blue[900].value,
        active: tokens.Color.Primitive.Blue[1100].value,
        error: tokens.Color.Error[1].value,
        disabled: tokens.Color.Neutral.SolidGrey[420].value,
        button: {
          primary: {
            normal: tokens.Color.Neutral.White.value,
            active: tokens.Color.Neutral.White.value,
            hover: tokens.Color.Neutral.White.value,
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
      },
      backgroundColor: {
        primary: tokens.Color.Light.Background.Primary.value,
        secondary: tokens.Color.Light.Background.Secondary.value,
        tertiary: tokens.Color.Light.Background.Tertiary.value,
        button: {
          primary: {
            normal: tokens.Color.Primitive.Blue[900].value,
            hover: tokens.Color.Primitive.Blue[1000].value,
            active: tokens.Color.Primitive.Blue[1100].value,
            disabled: tokens.Color.Neutral.White.value,
          },
          secondary: {
            normal: tokens.Color.Neutral.White.value,
            hover: tokens.Color.Primitive.Blue[200].value,
            active: tokens.Color.Primitive.Blue[300].value,
            disabled: tokens.Color.Neutral.White.value,
          },
          tertiary: {
            normal: 'transparent',
            hover: tokens.Color.Primitive.Blue[200].value,
            active: tokens.Color.Primitive.Blue[300].value,
            disabled: 'transparent',
          },
        },
      },
      borderColor: {
        error: tokens.Color.Error[1].value,
        selected: tokens.Color.Primitive.Blue[900].value,
        disabled: tokens.Color.Neutral.SolidGrey[420].value,
        field: tokens.Color.Neutral.SolidGrey[900].value,
        button: {
          secondary: {
            normal: tokens.Color.Primitive.Blue[900].value,
            hover: tokens.Color.Primitive.Blue[1000].value,
            active: tokens.Color.Primitive.Blue[1200].value,
            disabled: tokens.Color.Neutral.SolidGrey[420].value,
          },
        },
      },
      outlineColor: {
        error: tokens.Color.Error[1].value,
        selected: tokens.Color.Primitive.Blue[900].value,
        disabled: tokens.Color.Neutral.SolidGrey[420].value,
        field: tokens.Color.Neutral.SolidGrey[900].value,
      },
      fontSize: {
        'dsp-64N-4': [
          tokens.FontSize[64].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_4'].value,
          },
        ],
        'dsp-57N-4': [
          tokens.FontSize[57].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_4'].value,
          },
        ],
        'dsp-48N-4': [
          tokens.FontSize[48].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_4'].value,
          },
        ],
        'std-45B-4': [
          tokens.FontSize[45].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_4'].value,
            letterSpacing: tokens.LetterSpacing['0_1125'].value,
          },
        ],
        'std-36B-4': [
          tokens.FontSize[36].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_4'].value,
            letterSpacing: tokens.LetterSpacing['0_09'].value,
          },
        ],
        'std-32B-5': [
          tokens.FontSize[32].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_08'].value,
          },
        ],
        'std-28B-5': [
          tokens.FontSize[28].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_07'].value,
          },
        ],
        'std-24B-5': [
          tokens.FontSize[24].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_06'].value,
          },
        ],
        'std-22B-5': [
          tokens.FontSize[22].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_055'].value,
          },
        ],
        'std-20B-6': [
          tokens.FontSize[20].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_6'].value,
            letterSpacing: tokens.LetterSpacing['0_05'].value,
          },
        ],
        'std-20B-5': [
          tokens.FontSize[20].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_05'].value,
          },
        ],
        'std-18B-6': [
          tokens.FontSize[18].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_6'].value,
            letterSpacing: tokens.LetterSpacing['0_045'].value,
          },
        ],
        'std-17B-7': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_7'].value,
            letterSpacing: tokens.LetterSpacing['0_0425'].value,
          },
        ],
        'std-16B-7': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_7'].value,
            letterSpacing: tokens.LetterSpacing['0_04'].value,
          },
        ],
        'std-32M-5': [
          tokens.FontSize[32].value,
          {
            fontWeight: tokens.FontWeight[500].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_08'].value,
          },
        ],
        'std-28M-5': [
          tokens.FontSize[28].value,
          {
            fontWeight: tokens.FontWeight[500].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_07'].value,
          },
        ],
        'std-24M-5': [
          tokens.FontSize[24].value,
          {
            fontWeight: tokens.FontWeight[500].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_06'].value,
          },
        ],
        'std-20M-5': [
          tokens.FontSize[20].value,
          {
            fontWeight: tokens.FontWeight[500].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_05'].value,
          },
        ],
        'std-17M-7': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[500].value,
            lineHeight: tokens.LineHeight['1_7'].value,
            letterSpacing: tokens.LetterSpacing['0_0425'].value,
          },
        ],
        'std-16M-7': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[500].value,
            lineHeight: tokens.LineHeight['1_7'].value,
            letterSpacing: tokens.LetterSpacing['0_04'].value,
          },
        ],
        'std-45N-4': [
          tokens.FontSize[45].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_4'].value,
            letterSpacing: tokens.LetterSpacing['0_1125'].value,
          },
        ],
        'std-36N-4': [
          tokens.FontSize[36].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_4'].value,
            letterSpacing: tokens.LetterSpacing['0_09'].value,
          },
        ],
        'std-32N-5': [
          tokens.FontSize[32].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_08'].value,
          },
        ],
        'std-28N-5': [
          tokens.FontSize[28].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_07'].value,
          },
        ],
        'std-26N-5': [
          tokens.FontSize[26].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_065'].value,
          },
        ],
        'std-24N-5': [
          tokens.FontSize[24].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_06'].value,
          },
        ],
        'std-22N-5': [
          tokens.FontSize[22].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_055'].value,
          },
        ],
        'std-20N-6': [
          tokens.FontSize[20].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_6'].value,
            letterSpacing: tokens.LetterSpacing['0_05'].value,
          },
        ],
        'std-20N-5': [
          tokens.FontSize[20].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_5'].value,
            letterSpacing: tokens.LetterSpacing['0_05'].value,
          },
        ],
        'std-18N-6': [
          tokens.FontSize[18].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_6'].value,
            letterSpacing: tokens.LetterSpacing['0_045'].value,
          },
        ],
        'std-17N-7': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_7'].value,
            letterSpacing: tokens.LetterSpacing['0_0425'].value,
          },
        ],
        'std-16N-7': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_7'].value,
            letterSpacing: tokens.LetterSpacing['0_04'].value,
          },
        ],
        'dns-17B-3': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_3'].value,
          },
        ],
        'dns-17B-2': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_2'].value,
          },
        ],
        'dns-16B-3': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_3'].value,
          },
        ],
        'dns-16B-2': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_2'].value,
          },
        ],
        'dns-14B-3': [
          tokens.FontSize[14].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_3'].value,
          },
        ],
        'dns-14B-2': [
          tokens.FontSize[14].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_2'].value,
          },
        ],
        'dns-17N-3': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_3'].value,
          },
        ],
        'dns-17N-2': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_2'].value,
          },
        ],
        'dns-16N-3': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_3'].value,
          },
        ],
        'dns-16N-2': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_2'].value,
          },
        ],
        'dns-14N-3': [
          tokens.FontSize[14].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_3'].value,
          },
        ],
        'dns-14N-2': [
          tokens.FontSize[14].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_2'].value,
          },
        ],
        'oln-17B-1': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_0'].value,
            letterSpacing: tokens.LetterSpacing['0_04'].value,
          },
        ],
        'oln-16B-1': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_0'].value,
            letterSpacing: tokens.LetterSpacing['0_04'].value,
          },
        ],
        'oln-14B-1': [
          tokens.FontSize[14].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_0'].value,
            letterSpacing: tokens.LetterSpacing['0_035'].value,
          },
        ],
        'oln-17M-1': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[500].value,
            lineHeight: tokens.LineHeight['1_0'].value,
            letterSpacing: tokens.LetterSpacing['0_04'].value,
          },
        ],
        'oln-16M-1': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[500].value,
            lineHeight: tokens.LineHeight['1_0'].value,
            letterSpacing: tokens.LetterSpacing['0_04'].value,
          },
        ],
        'oln-14M-1': [
          tokens.FontSize[14].value,
          {
            fontWeight: tokens.FontWeight[500].value,
            lineHeight: tokens.LineHeight['1_0'].value,
            letterSpacing: tokens.LetterSpacing['0_035'].value,
          },
        ],
        'oln-17N-1': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_0'].value,
            letterSpacing: tokens.LetterSpacing['0_04'].value,
          },
        ],
        'oln-16N-1': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_0'].value,
            letterSpacing: tokens.LetterSpacing['0_04'].value,
          },
        ],
        'oln-14N-1': [
          tokens.FontSize[14].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_0'].value,
            letterSpacing: tokens.LetterSpacing['0_035'].value,
          },
        ],
        'mono-17B-5': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_5'].value,
          },
        ],
        'mono-16B-5': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_5'].value,
          },
        ],
        'mono-14B-5': [
          tokens.FontSize[14].value,
          {
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: tokens.LineHeight['1_5'].value,
          },
        ],
        'mono-17N-5': [
          tokens.FontSize[17].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_5'].value,
          },
        ],
        'mono-16N-5': [
          tokens.FontSize[16].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_5'].value,
          },
        ],
        'mono-14N-5': [
          tokens.FontSize[14].value,
          {
            fontWeight: tokens.FontWeight[400].value,
            lineHeight: tokens.LineHeight['1_5'].value,
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
            fontWeight: tokens.FontWeight[700].value,
            lineHeight: '100%',
            letterSpacing: '0.035em',
          },
        ],
        'button-xs-link': [
          '0.875rem',
          {
            fontWeight: tokens.FontWeight[700].value,
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
        '400': tokens.FontWeight[400].value,
        '500': tokens.FontWeight[500].value,
        '700': tokens.FontWeight[700].value,
      },
      lineHeight: {
        '1-0': tokens.LineHeight['1_0'].value,
        '1-2': tokens.LineHeight['1_2'].value,
        '1-3': tokens.LineHeight['1_3'].value,
        '1-4': tokens.LineHeight['1_4'].value,
        '1-5': tokens.LineHeight['1_5'].value,
        '1-6': tokens.LineHeight['1_6'].value,
        '1-7': tokens.LineHeight['1_7'].value,
      },
      letterSpacing: {
        '0-035': tokens.LetterSpacing['0_035'].value,
        '0-04': tokens.LetterSpacing['0_04'].value,
        '0-0425': tokens.LetterSpacing['0_0425'].value,
        '0-45': tokens.LetterSpacing['0_045'].value,
        '0-05': tokens.LetterSpacing['0_05'].value,
        '0-055': tokens.LetterSpacing['0_055'].value,
        '0-06': tokens.LetterSpacing['0_06'].value,
        '0-065': tokens.LetterSpacing['0_065'].value,
        '0-07': tokens.LetterSpacing['0_07'].value,
        '0-08': tokens.LetterSpacing['0_08'].value,
        '0-09': tokens.LetterSpacing['0_09'].value,
        '0-1125': tokens.LetterSpacing['0_1125'].value,
      },
      spacing: {
        'spacing-4': tokens.Spacing[4].value,
        'spacing-8': tokens.Spacing[8].value,
        'spacing-16': tokens.Spacing[16].value,
        'spacing-24': tokens.Spacing[24].value,
        'spacing-40': tokens.Spacing[40].value,
        'spacing-64': tokens.Spacing[64].value,
        'spacing-104': tokens.Spacing[104].value,
      },
      borderRadius: {
        '8': tokens.BorderRadius[8].value,
        '16': tokens.BorderRadius[16].value,
        '32': tokens.BorderRadius[32].value,
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
      boxShadow: {
        '1': tokens.Shadow[1].value,
        '2': tokens.Shadow[2].value,
        '3': tokens.Shadow[3].value,
        '4': tokens.Shadow[4].value,
        '5': tokens.Shadow[5].value,
        '6': tokens.Shadow[6].value,
        '7': tokens.Shadow[7].value,
        '8': tokens.Shadow[8].value,
      },
    },
  },
});

export default daPlugin;
