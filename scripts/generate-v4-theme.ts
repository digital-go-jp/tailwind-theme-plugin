import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import tokens from '@digital-go-jp/design-tokens';

const colors = {
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
};

type FontSizeConfig = {
  size: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
};

const fontSize: Record<string, FontSizeConfig> = {
  'dsp-64B-140': {
    size: tokens.FontSize[64].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[140].$value),
  },
  'dsp-57B-140': {
    size: tokens.FontSize[57].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[140].$value),
  },
  'dsp-48B-140': {
    size: tokens.FontSize[48].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[140].$value),
  },
  'dsp-64N-140': {
    size: tokens.FontSize[64].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[140].$value),
  },
  'dsp-57N-140': {
    size: tokens.FontSize[57].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[140].$value),
  },
  'dsp-48N-140': {
    size: tokens.FontSize[48].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[140].$value),
  },
  'std-45B-140': {
    size: tokens.FontSize[45].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[140].$value),
  },
  'std-36B-140': {
    size: tokens.FontSize[36].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[140].$value),
    letterSpacing: '0.01em',
  },
  'std-32B-150': {
    size: tokens.FontSize[32].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.01em',
  },
  'std-28B-150': {
    size: tokens.FontSize[28].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.01em',
  },
  'std-26B-150': {
    size: tokens.FontSize[26].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.02em',
  },
  'std-24B-150': {
    size: tokens.FontSize[24].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.02em',
  },
  'std-22B-150': {
    size: tokens.FontSize[22].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.02em',
  },
  'std-20B-160': {
    size: tokens.FontSize[20].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[160].$value),
    letterSpacing: '0.02em',
  },
  'std-20B-150': {
    size: tokens.FontSize[20].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.02em',
  },
  'std-18B-160': {
    size: tokens.FontSize[18].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[160].$value),
    letterSpacing: '0.02em',
  },
  'std-17B-170': {
    size: tokens.FontSize[17].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[170].$value),
    letterSpacing: '0.02em',
  },
  'std-16B-170': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[170].$value),
    letterSpacing: '0.02em',
  },
  'std-16B-175': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[175].$value),
    letterSpacing: '0.02em',
  },
  'std-45N-140': {
    size: tokens.FontSize[45].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[140].$value),
  },
  'std-36N-140': {
    size: tokens.FontSize[36].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[140].$value),
    letterSpacing: '0.01em',
  },
  'std-32N-150': {
    size: tokens.FontSize[32].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.01em',
  },
  'std-28N-150': {
    size: tokens.FontSize[28].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.01em',
  },
  'std-26N-150': {
    size: tokens.FontSize[26].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.02em',
  },
  'std-24N-150': {
    size: tokens.FontSize[24].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.02em',
  },
  'std-22N-150': {
    size: tokens.FontSize[22].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.02em',
  },
  'std-20N-150': {
    size: tokens.FontSize[20].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
    letterSpacing: '0.02em',
  },
  'std-18N-160': {
    size: tokens.FontSize[18].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[160].$value),
    letterSpacing: '0.02em',
  },
  'std-17N-170': {
    size: tokens.FontSize[17].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[170].$value),
    letterSpacing: '0.02em',
  },
  'std-16N-170': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[170].$value),
    letterSpacing: '0.02em',
  },
  'std-16N-175': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[175].$value),
    letterSpacing: '0.02em',
  },
  'dns-17B-130': {
    size: tokens.FontSize[17].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[130].$value),
  },
  'dns-17B-120': {
    size: tokens.FontSize[17].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[120].$value),
  },
  'dns-16B-130': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[130].$value),
  },
  'dns-16B-120': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[120].$value),
  },
  'dns-14B-130': {
    size: tokens.FontSize[14].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[130].$value),
  },
  'dns-14B-120': {
    size: tokens.FontSize[14].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[120].$value),
  },
  'dns-17N-130': {
    size: tokens.FontSize[17].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[130].$value),
  },
  'dns-17N-120': {
    size: tokens.FontSize[17].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[120].$value),
  },
  'dns-16N-130': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[130].$value),
  },
  'dns-16N-120': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[120].$value),
  },
  'dns-14N-130': {
    size: tokens.FontSize[14].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[130].$value),
  },
  'dns-14N-120': {
    size: tokens.FontSize[14].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[120].$value),
  },
  'oln-17B-100': {
    size: tokens.FontSize[17].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[100].$value),
    letterSpacing: '0.02em',
  },
  'oln-16B-100': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[100].$value),
    letterSpacing: '0.02em',
  },
  'oln-14B-100': {
    size: tokens.FontSize[14].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[100].$value),
    letterSpacing: '0.02em',
  },
  'oln-17N-100': {
    size: tokens.FontSize[17].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[100].$value),
    letterSpacing: '0.02em',
  },
  'oln-16N-100': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[100].$value),
    letterSpacing: '0.02em',
  },
  'oln-14N-100': {
    size: tokens.FontSize[14].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[100].$value),
    letterSpacing: '0.02em',
  },
  'mono-17B-150': {
    size: tokens.FontSize[17].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
  },
  'mono-16B-150': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
  },
  'mono-14B-150': {
    size: tokens.FontSize[14].$value,
    fontWeight: tokens.FontWeight[700].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
  },
  'mono-17N-150': {
    size: tokens.FontSize[17].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
  },
  'mono-16N-150': {
    size: tokens.FontSize[16].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
  },
  'mono-14N-150': {
    size: tokens.FontSize[14].$value,
    fontWeight: tokens.FontWeight[400].$value,
    lineHeight: String(tokens.LineHeight[150].$value),
  },
};

const fontFamily = {
  sans: tokens.FontFamily.Sans.$value,
  mono: tokens.FontFamily.Mono.$value,
};

const fontWeight = {
  400: tokens.FontWeight[400].$value,
  700: tokens.FontWeight[700].$value,
};

const lineHeight = {
  100: String(tokens.LineHeight[100].$value),
  120: String(tokens.LineHeight[120].$value),
  130: String(tokens.LineHeight[130].$value),
  140: String(tokens.LineHeight[140].$value),
  150: String(tokens.LineHeight[150].$value),
  160: String(tokens.LineHeight[160].$value),
  170: String(tokens.LineHeight[170].$value),
  175: String(tokens.LineHeight[175].$value),
  '1-0': String(tokens.LineHeight[100].$value),
  '1-2': String(tokens.LineHeight[120].$value),
  '1-3': String(tokens.LineHeight[130].$value),
  '1-4': String(tokens.LineHeight[140].$value),
  '1-5': String(tokens.LineHeight[150].$value),
  '1-6': String(tokens.LineHeight[160].$value),
  '1-7': String(tokens.LineHeight[170].$value),
  '1-75': String(tokens.LineHeight[175].$value),
};

const borderRadius = {
  4: tokens.BorderRadius[4].$value,
  6: tokens.BorderRadius[6].$value,
  8: tokens.BorderRadius[8].$value,
  12: tokens.BorderRadius[12].$value,
  16: tokens.BorderRadius[16].$value,
  24: tokens.BorderRadius[24].$value,
  32: tokens.BorderRadius[32].$value,
  full: tokens.BorderRadius.Full.$value,
};

const boxShadow = {
  1: tokens.Elevation[1].$value,
  2: tokens.Elevation[2].$value,
  3: tokens.Elevation[3].$value,
  4: tokens.Elevation[4].$value,
  5: tokens.Elevation[5].$value,
  6: tokens.Elevation[6].$value,
  7: tokens.Elevation[7].$value,
  8: tokens.Elevation[8].$value,
};

const listStyleType = {
  'lower-latin': 'lower-latin',
  circle: 'circle',
  square: 'square',
};

function generateColorVariables(): string {
  const lines: string[] = [];

  for (const [name, value] of Object.entries(colors)) {
    if (typeof value === 'string') {
      lines.push(`  --color-${name}: ${value};`);
    } else {
      for (const [shade, color] of Object.entries(value)) {
        lines.push(`  --color-${name}-${shade}: ${color};`);
      }
    }
  }

  return lines.join('\n');
}

function generateFontFamilyVariables(): string {
  const lines: string[] = [];

  for (const [name, value] of Object.entries(fontFamily)) {
    lines.push(`  --font-${name}: ${value};`);
  }

  return lines.join('\n');
}

function generateFontWeightVariables(): string {
  const lines: string[] = [];

  for (const [name, value] of Object.entries(fontWeight)) {
    lines.push(`  --font-weight-${name}: ${value};`);
  }

  return lines.join('\n');
}

function generateLineHeightVariables(): string {
  const lines: string[] = [];

  for (const [name, value] of Object.entries(lineHeight)) {
    lines.push(`  --leading-${name}: ${value};`);
  }

  return lines.join('\n');
}

function generateBorderRadiusVariables(): string {
  const lines: string[] = [];

  for (const [name, value] of Object.entries(borderRadius)) {
    lines.push(`  --radius-${name}: ${value};`);
  }

  return lines.join('\n');
}

function generateShadowVariables(): string {
  const lines: string[] = [];

  for (const [name, value] of Object.entries(boxShadow)) {
    lines.push(`  --shadow-${name}: ${value};`);
  }

  return lines.join('\n');
}

function generateFontSizeUtilities(): string {
  const lines: string[] = [];

  for (const [name, config] of Object.entries(fontSize)) {
    lines.push(`@utility text-${name} {`);
    lines.push(`  font-size: ${config.size};`);
    lines.push(`  font-weight: ${config.fontWeight};`);
    lines.push(`  line-height: ${config.lineHeight};`);
    if (config.letterSpacing) {
      lines.push(`  letter-spacing: ${config.letterSpacing};`);
    }
    lines.push(`}`);
    lines.push(``);
  }

  return lines.join('\n');
}

function generateListStyleTypeUtilities(): string {
  const lines: string[] = [];

  for (const [name, value] of Object.entries(listStyleType)) {
    lines.push(`@utility list-${name} {`);
    lines.push(`  list-style-type: ${value};`);
    lines.push(`}`);
    lines.push(``);
  }

  return lines.join('\n');
}

function generateV4CSS(): string {
  return `@theme {
  /* Colors */
${generateColorVariables()}

  /* Font families */
${generateFontFamilyVariables()}

  /* Font weights */
${generateFontWeightVariables()}

  /* Line heights (Leading) */
${generateLineHeightVariables()}

  /* Border radius */
${generateBorderRadiusVariables()}

  /* Shadows */
${generateShadowVariables()}
}

/* Font size utilities */
${generateFontSizeUtilities()}
/* List style type utilities */
${generateListStyleTypeUtilities()}`;
}

const output = generateV4CSS();
const outputPath = join(process.cwd(), 'dist/v4.css');
const outputDir = dirname(outputPath);

mkdirSync(outputDir, { recursive: true });

writeFileSync(outputPath, output);
console.log(`Generated ${outputPath}`);
