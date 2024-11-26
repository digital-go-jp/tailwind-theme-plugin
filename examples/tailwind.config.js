/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // NOTE: 実際に使用する際は @digital-go-jp/tailwind-theme-plugin パッケージをインストールしてお使いください
  // plugins: [require('@digital-go-jp/tailwind-theme-plugin')],
  plugins: [require("./tailwind-theme-plugin/index")],
  
}

