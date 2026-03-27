function m(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var a = {}, l = {}, d;
function p() {
  return d || (d = 1, (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    function i(n, t) {
      return {
        handler: n,
        config: t
      };
    }
    i.withOptions = function(n, t = () => ({})) {
      const f = function(g) {
        return {
          __options: g,
          handler: n(g),
          config: t(g)
        };
      };
      return f.__isOptionsFunction = !0, f.__pluginFunction = n, f.__configFunction = t, f;
    };
    const r = i;
  })(l)), l;
}
var h;
function b() {
  return h || (h = 1, (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const i = /* @__PURE__ */ r(p());
    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    const n = i.default;
  })(a)), a;
}
var o, c;
function u() {
  if (c) return o;
  c = 1;
  let e = b();
  return o = (e.__esModule ? e : { default: e }).default, o;
}
var s = u();
const H = /* @__PURE__ */ m(s), W = H(() => {
}, {
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        blue: {
          50: "#e8f1fe",
          100: "#d9e6ff",
          200: "#c5d7fb",
          300: "#9db7f9",
          400: "#7096f8",
          500: "#4979f5",
          600: "#3460fb",
          700: "#264af4",
          800: "#0031d8",
          900: "#0017c1",
          1e3: "#00118f",
          1100: "#000071",
          1200: "#000060"
        },
        "light-blue": {
          50: "#f0f9ff",
          100: "#dcf0ff",
          200: "#c0e4ff",
          300: "#97d3ff",
          400: "#57b8ff",
          500: "#39abff",
          600: "#008bf2",
          700: "#0877d7",
          800: "#0066be",
          900: "#0055ad",
          1e3: "#00428c",
          1100: "#00316a",
          1200: "#00234b"
        },
        cyan: {
          50: "#e9f7f9",
          100: "#c8f8ff",
          200: "#99f2ff",
          300: "#79e2f2",
          400: "#2bc8e4",
          500: "#01b7d6",
          600: "#00a3bf",
          700: "#008da6",
          800: "#008299",
          900: "#006f83",
          1e3: "#006173",
          1100: "#004c59",
          1200: "#003741"
        },
        green: {
          50: "#e6f5ec",
          100: "#c2e5d1",
          200: "#9bd4b5",
          300: "#71c598",
          400: "#51b883",
          500: "#2cac6e",
          600: "#259d63",
          700: "#1d8b56",
          800: "#197a4b",
          900: "#115a36",
          1e3: "#0c472a",
          1100: "#08351f",
          1200: "#032213"
        },
        lime: {
          50: "#ebfad9",
          100: "#d0f5a2",
          200: "#c0f354",
          300: "#ade830",
          400: "#9ddd15",
          500: "#8cc80c",
          600: "#7eb40d",
          700: "#6fa104",
          800: "#618e00",
          900: "#507500",
          1e3: "#3e5a00",
          1100: "#2c4100",
          1200: "#1e2d00"
        },
        yellow: {
          50: "#fbf5e0",
          100: "#fff0b3",
          200: "#ffe380",
          300: "#ffd43d",
          400: "#ffc700",
          500: "#ebb700",
          600: "#d2a400",
          700: "#b78f00",
          800: "#a58000",
          900: "#927200",
          1e3: "#806300",
          1100: "#6e5600",
          1200: "#604b00"
        },
        orange: {
          50: "#ffeee2",
          100: "#ffdfca",
          200: "#ffc199",
          300: "#ffa66d",
          400: "#ff8d44",
          500: "#ff7628",
          600: "#fb5b01",
          700: "#e25100",
          800: "#c74700",
          900: "#ac3e00",
          1e3: "#8b3200",
          1100: "#6d2700",
          1200: "#541e00"
        },
        red: {
          50: "#fdeeee",
          100: "#ffdada",
          200: "#ffbbbb",
          300: "#ff9696",
          400: "#ff7171",
          500: "#ff5454",
          600: "#fe3939",
          700: "#fa0000",
          800: "#ec0000",
          900: "#ce0000",
          1e3: "#a90000",
          1100: "#850000",
          1200: "#620000"
        },
        magenta: {
          50: "#f3e5f4",
          100: "#ffd0ff",
          200: "#ffaeff",
          300: "#ff8eff",
          400: "#f661f6",
          500: "#f137f1",
          600: "#db00db",
          700: "#c000c0",
          800: "#aa00aa",
          900: "#8b008b",
          1e3: "#6c006c",
          1100: "#500050",
          1200: "#3b003b"
        },
        purple: {
          50: "#f1eafa",
          100: "#ecddff",
          200: "#ddc2ff",
          300: "#cda6ff",
          400: "#bb87ff",
          500: "#a565f8",
          600: "#8843e1",
          700: "#6f23d0",
          800: "#5c10be",
          900: "#5109ad",
          1e3: "#41048e",
          1100: "#30016c",
          1200: "#21004b"
        },
        "solid-gray": {
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          420: "#949494",
          500: "#7f7f7f",
          536: "#767676",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a"
        },
        "opacity-gray": {
          50: "rgba(0, 0, 0, 0.05)",
          100: "rgba(0, 0, 0, 0.1)",
          200: "rgba(0, 0, 0, 0.2)",
          300: "rgba(0, 0, 0, 0.3)",
          400: "rgba(0, 0, 0, 0.4)",
          420: "rgba(0, 0, 0, 0.42)",
          500: "rgba(0, 0, 0, 0.5)",
          536: "rgba(0, 0, 0, 0.54)",
          600: "rgba(0, 0, 0, 0.6)",
          700: "rgba(0, 0, 0, 0.7)",
          800: "rgba(0, 0, 0, 0.8)",
          900: "rgba(0, 0, 0, 0.9)"
        },
        "success-1": "#259d63",
        "success-2": "#197a4b",
        "error-1": "#ec0000",
        "error-2": "#ce0000",
        "warning-yellow-1": "#b78f00",
        "warning-yellow-2": "#927200",
        "warning-orange-1": "#fb5b01",
        "warning-orange-2": "#c74700",
        "focus-yellow": "#b78f00",
        "focus-blue": "#0877d7"
      },
      fontSize: {
        "dsp-64B-140": [
          "4rem",
          {
            fontWeight: "700",
            lineHeight: "1.4"
          }
        ],
        "dsp-57B-140": [
          "3.5625rem",
          {
            fontWeight: "700",
            lineHeight: "1.4"
          }
        ],
        "dsp-48B-140": [
          "3rem",
          {
            fontWeight: "700",
            lineHeight: "1.4"
          }
        ],
        "dsp-64N-140": [
          "4rem",
          {
            fontWeight: "400",
            lineHeight: "1.4"
          }
        ],
        "dsp-57N-140": [
          "3.5625rem",
          {
            fontWeight: "400",
            lineHeight: "1.4"
          }
        ],
        "dsp-48N-140": [
          "3rem",
          {
            fontWeight: "400",
            lineHeight: "1.4"
          }
        ],
        "std-45B-140": [
          "2.8125rem",
          {
            fontWeight: "700",
            lineHeight: "1.4"
          }
        ],
        "std-36B-140": [
          "2.25rem",
          {
            fontWeight: "700",
            lineHeight: "1.4",
            letterSpacing: "0.01em"
          }
        ],
        "std-32B-150": [
          "2rem",
          {
            fontWeight: "700",
            lineHeight: "1.5",
            letterSpacing: "0.01em"
          }
        ],
        "std-28B-150": [
          "1.75rem",
          {
            fontWeight: "700",
            lineHeight: "1.5",
            letterSpacing: "0.01em"
          }
        ],
        "std-26B-150": [
          "1.625rem",
          {
            fontWeight: "700",
            lineHeight: "1.5",
            letterSpacing: "0.02em"
          }
        ],
        "std-24B-150": [
          "1.5rem",
          {
            fontWeight: "700",
            lineHeight: "1.5",
            letterSpacing: "0.02em"
          }
        ],
        "std-22B-150": [
          "1.375rem",
          {
            fontWeight: "700",
            lineHeight: "1.5",
            letterSpacing: "0.02em"
          }
        ],
        "std-20B-160": [
          "1.25rem",
          {
            fontWeight: "700",
            lineHeight: "1.6",
            letterSpacing: "0.02em"
          }
        ],
        "std-20B-150": [
          "1.25rem",
          {
            fontWeight: "700",
            lineHeight: "1.5",
            letterSpacing: "0.02em"
          }
        ],
        "std-18B-160": [
          "1.125rem",
          {
            fontWeight: "700",
            lineHeight: "1.6",
            letterSpacing: "0.02em"
          }
        ],
        "std-17B-170": [
          "1.0625rem",
          {
            fontWeight: "700",
            lineHeight: "1.7",
            letterSpacing: "0.02em"
          }
        ],
        "std-16B-170": [
          "1rem",
          {
            fontWeight: "700",
            lineHeight: "1.7",
            letterSpacing: "0.02em"
          }
        ],
        "std-16B-175": [
          "1rem",
          {
            fontWeight: "700",
            lineHeight: "1.75",
            letterSpacing: "0.02em"
          }
        ],
        "std-45N-140": [
          "2.8125rem",
          {
            fontWeight: "400",
            lineHeight: "1.4"
          }
        ],
        "std-36N-140": [
          "2.25rem",
          {
            fontWeight: "400",
            lineHeight: "1.4",
            letterSpacing: "0.01em"
          }
        ],
        "std-32N-150": [
          "2rem",
          {
            fontWeight: "400",
            lineHeight: "1.5",
            letterSpacing: "0.01em"
          }
        ],
        "std-28N-150": [
          "1.75rem",
          {
            fontWeight: "400",
            lineHeight: "1.5",
            letterSpacing: "0.01em"
          }
        ],
        "std-26N-150": [
          "1.625rem",
          {
            fontWeight: "400",
            lineHeight: "1.5",
            letterSpacing: "0.02em"
          }
        ],
        "std-24N-150": [
          "1.5rem",
          {
            fontWeight: "400",
            lineHeight: "1.5",
            letterSpacing: "0.02em"
          }
        ],
        "std-22N-150": [
          "1.375rem",
          {
            fontWeight: "400",
            lineHeight: "1.5",
            letterSpacing: "0.02em"
          }
        ],
        "std-20N-150": [
          "1.25rem",
          {
            fontWeight: "400",
            lineHeight: "1.5",
            letterSpacing: "0.02em"
          }
        ],
        "std-18N-160": [
          "1.125rem",
          {
            fontWeight: "400",
            lineHeight: "1.6",
            letterSpacing: "0.02em"
          }
        ],
        "std-17N-170": [
          "1.0625rem",
          {
            fontWeight: "400",
            lineHeight: "1.7",
            letterSpacing: "0.02em"
          }
        ],
        "std-16N-170": [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "1.7",
            letterSpacing: "0.02em"
          }
        ],
        "std-16N-175": [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "1.75",
            letterSpacing: "0.02em"
          }
        ],
        "dns-17B-130": [
          "1.0625rem",
          {
            fontWeight: "700",
            lineHeight: "1.3"
          }
        ],
        "dns-17B-120": [
          "1.0625rem",
          {
            fontWeight: "700",
            lineHeight: "1.2"
          }
        ],
        "dns-16B-130": [
          "1rem",
          {
            fontWeight: "700",
            lineHeight: "1.3"
          }
        ],
        "dns-16B-120": [
          "1rem",
          {
            fontWeight: "700",
            lineHeight: "1.2"
          }
        ],
        "dns-14B-130": [
          "0.875rem",
          {
            fontWeight: "700",
            lineHeight: "1.3"
          }
        ],
        "dns-14B-120": [
          "0.875rem",
          {
            fontWeight: "700",
            lineHeight: "1.2"
          }
        ],
        "dns-17N-130": [
          "1.0625rem",
          {
            fontWeight: "400",
            lineHeight: "1.3"
          }
        ],
        "dns-17N-120": [
          "1.0625rem",
          {
            fontWeight: "400",
            lineHeight: "1.2"
          }
        ],
        "dns-16N-130": [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "1.3"
          }
        ],
        "dns-16N-120": [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "1.2"
          }
        ],
        "dns-14N-130": [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "1.3"
          }
        ],
        "dns-14N-120": [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "1.2"
          }
        ],
        "oln-17B-100": [
          "1.0625rem",
          {
            fontWeight: "700",
            lineHeight: "1",
            letterSpacing: "0.02em"
          }
        ],
        "oln-16B-100": [
          "1rem",
          {
            fontWeight: "700",
            lineHeight: "1",
            letterSpacing: "0.02em"
          }
        ],
        "oln-14B-100": [
          "0.875rem",
          {
            fontWeight: "700",
            lineHeight: "1",
            letterSpacing: "0.02em"
          }
        ],
        "oln-17N-100": [
          "1.0625rem",
          {
            fontWeight: "400",
            lineHeight: "1",
            letterSpacing: "0.02em"
          }
        ],
        "oln-16N-100": [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "1",
            letterSpacing: "0.02em"
          }
        ],
        "oln-14N-100": [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "1",
            letterSpacing: "0.02em"
          }
        ],
        "mono-17B-150": [
          "1.0625rem",
          {
            fontWeight: "700",
            lineHeight: "1.5"
          }
        ],
        "mono-16B-150": [
          "1rem",
          {
            fontWeight: "700",
            lineHeight: "1.5"
          }
        ],
        "mono-14B-150": [
          "0.875rem",
          {
            fontWeight: "700",
            lineHeight: "1.5"
          }
        ],
        "mono-17N-150": [
          "1.0625rem",
          {
            fontWeight: "400",
            lineHeight: "1.5"
          }
        ],
        "mono-16N-150": [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "1.5"
          }
        ],
        "mono-14N-150": [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "1.5"
          }
        ]
      },
      fontFamily: {
        sans: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif",
        mono: "'Noto Sans Mono', monospace"
      },
      fontWeight: {
        400: "400",
        700: "700"
      },
      lineHeight: {
        100: "1",
        120: "1.2",
        130: "1.3",
        140: "1.4",
        150: "1.5",
        160: "1.6",
        170: "1.7",
        175: "1.75"
      },
      borderRadius: {
        4: "0.25rem",
        6: "0.375rem",
        8: "0.5rem",
        12: "0.75rem",
        16: "1rem",
        24: "1.5rem",
        32: "2rem",
        full: "624.9375rem"
      },
      boxShadow: {
        1: "0 2px 8px 1px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.3)",
        2: "0 2px 12px 2px rgba(0,0,0,0.1), 0 1px 6px 0 rgba(0,0,0,0.3)",
        3: "0 4px 16px 3px rgba(0,0,0,0.1), 0 1px 6px 0 rgba(0,0,0,0.3)",
        4: "0 6px 20px 4px rgba(0,0,0,0.1), 0 2px 6px 0 rgba(0,0,0,0.3)",
        5: "0 8px 24px 5px rgba(0,0,0,0.1), 0 2px 10px 0 rgba(0,0,0,0.3)",
        6: "0 10px 30px 6px rgba(0,0,0,0.1), 0 3px 12px 0 rgba(0,0,0,0.3)",
        7: "0 12px 36px 7px rgba(0,0,0,0.1), 0 3px 14px 0 rgba(0,0,0,0.3)",
        8: "0 14px 40px 7px rgba(0,0,0,0.1), 0 3px 16px 0 rgba(0,0,0,0.3)"
      }
    }
  }
});
export {
  W as default
};
