/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#36bb91",
        primaryLinksHoverColor: "#36bb91",
        primaryBgColor: "#1c222b",
        headerBgColor: "#1c222b",
        footerBgColor: "#f8f8f8",
        primaryDarkColor: "#b6bdc5",
        titleColor: "#ffffff",
        fwTitleColor: "#1a1a1a",
        btnBgColor: "#36bb91",
        btnHoverColor: "#1a5e49",
        txtSelectBgColor: "#f3d7f463",
      },
    },
  },
  plugins: [],
}

