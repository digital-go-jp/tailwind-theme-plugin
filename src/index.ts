import tokens from '@digital-go-jp/design-tokens';
import plugin from 'tailwindcss/plugin';

const daPlugin = plugin(() => {}, {
  theme: {
    extend: {
      colors: {
        white: tokens.Color.Neutral.White.$value,
        black: tokens.Color.Neutral.Black.$value,
        blue: {
          50: tokens.Color.Primitive.Blue[50].$value,
          100: tokens.Color.Primitive.Blue[100].$value,
          200: tokens.Color.Primitive.Blue[200].$value,
          300: tokens.Color.Primitive.Blue[300].$value,
          400: tokens.Color.Primitive.Blue[400].$value,
          500: tokens.Color.Primitive.Blue[500].$value,
          600: tokens.Color.Primitive.Blue[600].$value,
          700: tokens.Color.Primitive.Blue[700].$value,
          800: tokens.Color.Primitive.Blue[800].$value,
          900: tokens.Color.Primitive.Blue[900].$value,
          1000: tokens.Color.Primitive.Blue[1000].$value,
          1100: tokens.Color.Primitive.Blue[1100].$value,
          1200: tokens.Color.Primitive.Blue[1200].$value,
        },
        'light-blue': {
          50: tokens.Color.Primitive.LightBlue[50].$value,
          100: tokens.Color.Primitive.LightBlue[100].$value,
          200: tokens.Color.Primitive.LightBlue[200].$value,
          300: tokens.Color.Primitive.LightBlue[300].$value,
          400: tokens.Color.Primitive.LightBlue[400].$value,
          500: tokens.Color.Primitive.LightBlue[500].$value,
          600: tokens.Color.Primitive.LightBlue[600].$value,
          700: tokens.Color.Primitive.LightBlue[700].$value,
          800: tokens.Color.Primitive.LightBlue[800].$value,
          900: tokens.Color.Primitive.LightBlue[900].$value,
          1000: tokens.Color.Primitive.LightBlue[1000].$value,
          1100: tokens.Color.Primitive.LightBlue[1100].$value,
          1200: tokens.Color.Primitive.LightBlue[1200].$value,
        },
        cyan: {
          50: tokens.Color.Primitive.Cyan[50].$value,
          100: tokens.Color.Primitive.Cyan[100].$value,
          200: tokens.Color.Primitive.Cyan[200].$value,
          300: tokens.Color.Primitive.Cyan[300].$value,
          400: tokens.Color.Primitive.Cyan[400].$value,
          500: tokens.Color.Primitive.Cyan[500].$value,
          600: tokens.Color.Primitive.Cyan[600].$value,
          700: tokens.Color.Primitive.Cyan[700].$value,
          800: tokens.Color.Primitive.Cyan[800].$value,
          900: tokens.Color.Primitive.Cyan[900].$value,
          1000: tokens.Color.Primitive.Cyan[1000].$value,
          1100: tokens.Color.Primitive.Cyan[1100].$value,
          1200: tokens.Color.Primitive.Cyan[1200].$value,
        },
        green: {
          50: tokens.Color.Primitive.Green[50].$value,
          100: tokens.Color.Primitive.Green[100].$value,
          200: tokens.Color.Primitive.Green[200].$value,
          300: tokens.Color.Primitive.Green[300].$value,
          400: tokens.Color.Primitive.Green[400].$value,
          500: tokens.Color.Primitive.Green[500].$value,
          600: tokens.Color.Primitive.Green[600].$value,
          700: tokens.Color.Primitive.Green[700].$value,
          800: tokens.Color.Primitive.Green[800].$value,
          900: tokens.Color.Primitive.Green[900].$value,
          1000: tokens.Color.Primitive.Green[1000].$value,
          1100: tokens.Color.Primitive.Green[1100].$value,
          1200: tokens.Color.Primitive.Green[1200].$value,
        },
        lime: {
          50: tokens.Color.Primitive.Lime[50].$value,
          100: tokens.Color.Primitive.Lime[100].$value,
          200: tokens.Color.Primitive.Lime[200].$value,
          300: tokens.Color.Primitive.Lime[300].$value,
          400: tokens.Color.Primitive.Lime[400].$value,
          500: tokens.Color.Primitive.Lime[500].$value,
          600: tokens.Color.Primitive.Lime[600].$value,
          700: tokens.Color.Primitive.Lime[700].$value,
          800: tokens.Color.Primitive.Lime[800].$value,
          900: tokens.Color.Primitive.Lime[900].$value,
          1000: tokens.Color.Primitive.Lime[1000].$value,
          1100: tokens.Color.Primitive.Lime[1100].$value,
          1200: tokens.Color.Primitive.Lime[1200].$value,
        },
        yellow: {
          50: tokens.Color.Primitive.Yellow[50].$value,
          100: tokens.Color.Primitive.Yellow[100].$value,
          200: tokens.Color.Primitive.Yellow[200].$value,
          300: tokens.Color.Primitive.Yellow[300].$value,
          400: tokens.Color.Primitive.Yellow[400].$value,
          500: tokens.Color.Primitive.Yellow[500].$value,
          600: tokens.Color.Primitive.Yellow[600].$value,
          700: tokens.Color.Primitive.Yellow[700].$value,
          800: tokens.Color.Primitive.Yellow[800].$value,
          900: tokens.Color.Primitive.Yellow[900].$value,
          1000: tokens.Color.Primitive.Yellow[1000].$value,
          1100: tokens.Color.Primitive.Yellow[1100].$value,
          1200: tokens.Color.Primitive.Yellow[1200].$value,
        },
        orange: {
          50: tokens.Color.Primitive.Orange[50].$value,
          100: tokens.Color.Primitive.Orange[100].$value,
          200: tokens.Color.Primitive.Orange[200].$value,
          300: tokens.Color.Primitive.Orange[300].$value,
          400: tokens.Color.Primitive.Orange[400].$value,
          500: tokens.Color.Primitive.Orange[500].$value,
          600: tokens.Color.Primitive.Orange[600].$value,
          700: tokens.Color.Primitive.Orange[700].$value,
          800: tokens.Color.Primitive.Orange[800].$value,
          900: tokens.Color.Primitive.Orange[900].$value,
          1000: tokens.Color.Primitive.Orange[1000].$value,
          1100: tokens.Color.Primitive.Orange[1100].$value,
          1200: tokens.Color.Primitive.Orange[1200].$value,
        },
        red: {
          50: tokens.Color.Primitive.Red[50].$value,
          100: tokens.Color.Primitive.Red[100].$value,
          200: tokens.Color.Primitive.Red[200].$value,
          300: tokens.Color.Primitive.Red[300].$value,
          400: tokens.Color.Primitive.Red[400].$value,
          500: tokens.Color.Primitive.Red[500].$value,
          600: tokens.Color.Primitive.Red[600].$value,
          700: tokens.Color.Primitive.Red[700].$value,
          800: tokens.Color.Primitive.Red[800].$value,
          900: tokens.Color.Primitive.Red[900].$value,
          1000: tokens.Color.Primitive.Red[1000].$value,
          1100: tokens.Color.Primitive.Red[1100].$value,
          1200: tokens.Color.Primitive.Red[1200].$value,
        },
        magenta: {
          50: tokens.Color.Primitive.Magenta[50].$value,
          100: tokens.Color.Primitive.Magenta[100].$value,
          200: tokens.Color.Primitive.Magenta[200].$value,
          300: tokens.Color.Primitive.Magenta[300].$value,
          400: tokens.Color.Primitive.Magenta[400].$value,
          500: tokens.Color.Primitive.Magenta[500].$value,
          600: tokens.Color.Primitive.Magenta[600].$value,
          700: tokens.Color.Primitive.Magenta[700].$value,
          800: tokens.Color.Primitive.Magenta[800].$value,
          900: tokens.Color.Primitive.Magenta[900].$value,
          1000: tokens.Color.Primitive.Magenta[1000].$value,
          1100: tokens.Color.Primitive.Magenta[1100].$value,
          1200: tokens.Color.Primitive.Magenta[1200].$value,
        },
        purple: {
          50: tokens.Color.Primitive.Purple[50].$value,
          100: tokens.Color.Primitive.Purple[100].$value,
          200: tokens.Color.Primitive.Purple[200].$value,
          300: tokens.Color.Primitive.Purple[300].$value,
          400: tokens.Color.Primitive.Purple[400].$value,
          500: tokens.Color.Primitive.Purple[500].$value,
          600: tokens.Color.Primitive.Purple[600].$value,
          700: tokens.Color.Primitive.Purple[700].$value,
          800: tokens.Color.Primitive.Purple[800].$value,
          900: tokens.Color.Primitive.Purple[900].$value,
          1000: tokens.Color.Primitive.Purple[1000].$value,
          1100: tokens.Color.Primitive.Purple[1100].$value,
          1200: tokens.Color.Primitive.Purple[1200].$value,
        },
        'solid-gray': {
          50: tokens.Color.Neutral.SolidGray[50].$value,
          100: tokens.Color.Neutral.SolidGray[100].$value,
          200: tokens.Color.Neutral.SolidGray[200].$value,
          300: tokens.Color.Neutral.SolidGray[300].$value,
          400: tokens.Color.Neutral.SolidGray[400].$value,
          420: tokens.Color.Neutral.SolidGray[420].$value,
          500: tokens.Color.Neutral.SolidGray[500].$value,
          536: tokens.Color.Neutral.SolidGray[536].$value,
          600: tokens.Color.Neutral.SolidGray[600].$value,
          700: tokens.Color.Neutral.SolidGray[700].$value,
          800: tokens.Color.Neutral.SolidGray[800].$value,
          900: tokens.Color.Neutral.SolidGray[900].$value,
        },
        'opacity-gray': {
          50: tokens.Color.Neutral.OpacityGray[50].$value,
          100: tokens.Color.Neutral.OpacityGray[100].$value,
          200: tokens.Color.Neutral.OpacityGray[200].$value,
          300: tokens.Color.Neutral.OpacityGray[300].$value,
          400: tokens.Color.Neutral.OpacityGray[400].$value,
          420: tokens.Color.Neutral.OpacityGray[420].$value,
          500: tokens.Color.Neutral.OpacityGray[500].$value,
          536: tokens.Color.Neutral.OpacityGray[536].$value,
          600: tokens.Color.Neutral.OpacityGray[600].$value,
          700: tokens.Color.Neutral.OpacityGray[700].$value,
          800: tokens.Color.Neutral.OpacityGray[800].$value,
          900: tokens.Color.Neutral.OpacityGray[900].$value,
        },
        'success-1': tokens.Color.Semantic.Success[1].$value,
        'success-2': tokens.Color.Semantic.Success[2].$value,
        'error-1': tokens.Color.Semantic.Error[1].$value,
        'error-2': tokens.Color.Semantic.Error[2].$value,
        'warning-yellow-1': tokens.Color.Semantic.Warning.Yellow[1].$value,
        'warning-yellow-2': tokens.Color.Semantic.Warning.Yellow[2].$value,
        'warning-orange-1': tokens.Color.Semantic.Warning.Orange[1].$value,
        'warning-orange-2': tokens.Color.Semantic.Warning.Orange[2].$value,
        'focus-yellow': tokens.Color.Primitive.Yellow[700].$value,
        'focus-blue': tokens.Color.Primitive.LightBlue[700].$value,
      },
      fontSize: {
        'dsp-64B-140': [
          tokens.FontSize[64].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[140].$value,
          },
        ],
        'dsp-57B-140': [
          tokens.FontSize[57].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[140].$value,
          },
        ],
        'dsp-48B-140': [
          tokens.FontSize[48].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[140].$value,
          },
        ],
        'dsp-64N-140': [
          tokens.FontSize[64].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[140].$value,
          },
        ],
        'dsp-57N-140': [
          tokens.FontSize[57].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[140].$value,
          },
        ],
        'dsp-48N-140': [
          tokens.FontSize[48].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[140].$value,
          },
        ],
        'std-45B-140': [
          tokens.FontSize[45].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[140].$value,
          },
        ],
        'std-36B-140': [
          tokens.FontSize[36].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[140].$value,
            letterSpacing: '0.01em',
          },
        ],
        'std-32B-150': [
          tokens.FontSize[32].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.01em',
          },
        ],
        'std-28B-150': [
          tokens.FontSize[28].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.01em',
          },
        ],
        'std-26B-150': [
          tokens.FontSize[26].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-24B-150': [
          tokens.FontSize[24].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-22B-150': [
          tokens.FontSize[22].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-20B-160': [
          tokens.FontSize[20].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[160].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-20B-150': [
          tokens.FontSize[20].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-18B-160': [
          tokens.FontSize[18].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[160].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-17B-170': [
          tokens.FontSize[17].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[170].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-16B-170': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[170].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-16B-175': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[175].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-45N-140': [
          tokens.FontSize[45].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[140].$value,
          },
        ],
        'std-36N-140': [
          tokens.FontSize[36].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[140].$value,
            letterSpacing: '0.01em',
          },
        ],
        'std-32N-150': [
          tokens.FontSize[32].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.01em',
          },
        ],
        'std-28N-150': [
          tokens.FontSize[28].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.01em',
          },
        ],
        'std-26N-150': [
          tokens.FontSize[26].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-24N-150': [
          tokens.FontSize[24].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-22N-150': [
          tokens.FontSize[22].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-20N-150': [
          tokens.FontSize[20].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[150].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-18N-160': [
          tokens.FontSize[18].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[160].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-17N-170': [
          tokens.FontSize[17].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[170].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-16N-170': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[170].$value,
            letterSpacing: '0.02em',
          },
        ],
        'std-16N-175': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[175].$value,
            letterSpacing: '0.02em',
          },
        ],
        'dns-17B-130': [
          tokens.FontSize[17].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[130].$value,
          },
        ],
        'dns-17B-120': [
          tokens.FontSize[17].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[120].$value,
          },
        ],
        'dns-16B-130': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[130].$value,
          },
        ],
        'dns-16B-120': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[120].$value,
          },
        ],
        'dns-14B-130': [
          tokens.FontSize[14].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[130].$value,
          },
        ],
        'dns-14B-120': [
          tokens.FontSize[14].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[120].$value,
          },
        ],
        'dns-17N-130': [
          tokens.FontSize[17].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[130].$value,
          },
        ],
        'dns-17N-120': [
          tokens.FontSize[17].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[120].$value,
          },
        ],
        'dns-16N-130': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[130].$value,
          },
        ],
        'dns-16N-120': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[120].$value,
          },
        ],
        'dns-14N-130': [
          tokens.FontSize[14].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[130].$value,
          },
        ],
        'dns-14N-120': [
          tokens.FontSize[14].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[120].$value,
          },
        ],
        'oln-17B-100': [
          tokens.FontSize[17].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[100].$value,
            letterSpacing: '0.02em',
          },
        ],
        'oln-16B-100': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[100].$value,
            letterSpacing: '0.02em',
          },
        ],
        'oln-14B-100': [
          tokens.FontSize[14].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[100].$value,
            letterSpacing: '0.02em',
          },
        ],
        'oln-17N-100': [
          tokens.FontSize[17].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[100].$value,
            letterSpacing: '0.02em',
          },
        ],
        'oln-16N-100': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[100].$value,
            letterSpacing: '0.02em',
          },
        ],
        'oln-14N-100': [
          tokens.FontSize[14].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[100].$value,
            letterSpacing: '0.02em',
          },
        ],
        'mono-17B-150': [
          tokens.FontSize[17].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[150].$value,
          },
        ],
        'mono-16B-150': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[150].$value,
          },
        ],
        'mono-14B-150': [
          tokens.FontSize[14].$value,
          {
            fontWeight: tokens.FontWeight[700].$value,
            lineHeight: tokens.LineHeight[150].$value,
          },
        ],
        'mono-17N-150': [
          tokens.FontSize[17].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[150].$value,
          },
        ],
        'mono-16N-150': [
          tokens.FontSize[16].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[150].$value,
          },
        ],
        'mono-14N-150': [
          tokens.FontSize[14].$value,
          {
            fontWeight: tokens.FontWeight[400].$value,
            lineHeight: tokens.LineHeight[150].$value,
          },
        ],
      },
      fontFamily: {
        sans: tokens.FontFamily.Sans.$value,
        mono: tokens.FontFamily.Mono.$value,
      },
      fontWeight: {
        '400': tokens.FontWeight[400].$value,
        '700': tokens.FontWeight[700].$value,
      },
      lineHeight: {
        '100': tokens.LineHeight[100].$value,
        '120': tokens.LineHeight[120].$value,
        '130': tokens.LineHeight[130].$value,
        '140': tokens.LineHeight[140].$value,
        '150': tokens.LineHeight[150].$value,
        '160': tokens.LineHeight[160].$value,
        '170': tokens.LineHeight[170].$value,
        '175': tokens.LineHeight[175].$value,
        // NOTE: Remove the old keys later
        '1-0': tokens.LineHeight[100].$value,
        '1-2': tokens.LineHeight[120].$value,
        '1-3': tokens.LineHeight[130].$value,
        '1-4': tokens.LineHeight[140].$value,
        '1-5': tokens.LineHeight[150].$value,
        '1-6': tokens.LineHeight[160].$value,
        '1-7': tokens.LineHeight[170].$value,
        '1-75': tokens.LineHeight[175].$value,
      },
      borderRadius: {
        '4': tokens.BorderRadius[4].$value,
        '6': tokens.BorderRadius[6].$value,
        '8': tokens.BorderRadius[8].$value,
        '12': tokens.BorderRadius[12].$value,
        '16': tokens.BorderRadius[16].$value,
        '24': tokens.BorderRadius[24].$value,
        '32': tokens.BorderRadius[32].$value,
        full: tokens.BorderRadius.Full.$value,
      },
      screens: {
        desktop: '48em',
        'desktop-admin': '62em',
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
        '1': tokens.Elevation[1].$value,
        '2': tokens.Elevation[2].$value,
        '3': tokens.Elevation[3].$value,
        '4': tokens.Elevation[4].$value,
        '5': tokens.Elevation[5].$value,
        '6': tokens.Elevation[6].$value,
        '7': tokens.Elevation[7].$value,
        '8': tokens.Elevation[8].$value,
      },
    },
  },
});

export default daPlugin;
