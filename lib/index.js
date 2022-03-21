export default {
  breakpoints: [
    "480px",
    "640px",
    "768px",
    "1024px",
    "1220px",
    "1366px",
    "1620px",
  ],
  space: [0, 5, 10, 15, 20, 25, 30, 46, 50, 60, 80, 100, 120, 150],
  colors: {
    black: "rgb(0, 0, 0)",
    black10: "#181818",
    black20: "rgba(0, 0, 0, 0.6)",
    black30: "rgb(17, 24, 39)",
    black40: "#141414",
    black50: "rgb(20, 20, 20)",

    // gray
    gray10: "rgb(119, 119, 119)",
    gray20: "rgb(156, 163, 175)",
    gray40: "rgba(42, 42, 42, 0.6)",

    // white
    white10: "rgba(255, 255, 255, 1)",
    white20: "rgba(243, 244, 246, 1)",
    white30: "rgb(209, 213, 219)",

    green10: "rgba(110, 231, 183, 1)",

    // shadow
    shadow10: "rgba(0, 0, 0, 0.3)",
    shadow20: "rgba(158, 155, 155, 0.3)",
    shadow30:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",

    // red
    red: "rgb(220, 38, 38)",
    red10: "rgba(185, 28, 28, 1)",

    blue: "rgba(75, 85, 99, 1)",
    blue20: "rgb(55, 65, 81)",
  },
  fonts: {
    body: "Roboto Slab, serif",
    heading: "Roboto Slab, serif",
    monospace: "Roboto Slab, serif",
  },
  fontSizes: [12, 14, 16, 18, 19, 20, 21, 24, 32, 34, 48, 50, 64],
  fontWeights: {
    body: 500,
    heading: 600,
    bold: 700,
    bolder: 800,
  },
  letterSpacings: {
    body: "normal",
    heading: "0.3px",
    caps: "-0.5px",
  },
  // variants
  container: {
    home: {},
    card: {},
    sectionCard: {},
    navbar: {},
    banner: {},
  },

  // root styles
  styles: {
    root: {},
  },
};
