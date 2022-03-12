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
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
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
    body: "normal",
    heading: 600,
    bold: 700,
    bolder: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  letterSpacings: {
    body: "normal",
    heading: "0.3px",
    caps: "-0.5px",
  },
  // variants
  images: {
    home: {
      mt: ["20px", null, null, 0, null, null, null],
      mb: ["50px", null, null, null, null, null, null],
      pl: [0, null, null, null, 0, null, null, null],
      display: "flex",
      justifyContent: "flex-end",
      position: "relative",
      right: ["-50px", "-20px", "-50px", "-40px", "-50px", "-60px", "-15px"],
      order: ["1", null, null, null, null],
      width: [
        "calc(100% - 110px)",
        "calc(100% - 146px)",
        "calc(100% - 290px)",
        "calc(70% - 120px)",
        "calc(100% - 420px)",
        "calc(100% - 600px)",
        "calc(100% - 610px)",
      ],
      textAlign: ["center", null],
    },
    about: {
      mt: ["43px", null, null, 0],
      mb: [0, null, null, 0],
      pl: [0, null, null, null, 0],
      display: "flex",
      justifyContent: "flex-end",
      position: "relative",
      right: ["-40px", "2px", "30px", "27px", "40px", "-10px", "40px"],
      order: ["2", "1", null, null, null],
      maxWidth: [
        "calc(100% - 110px)",
        "calc(100% - 155px)",
        "calc(100% - 310px)",
        "calc(100% - 350px)",
        "calc(100% - 420px)",
        "calc(100% - 600px)",
        "calc(100% - 600px)",
      ],
      textAlign: ["left", null],
    },
    safety: {
      mt: ["55px", "37px", 0, 0, 0, null, null],
      mb: ["20px", null, null, null, "10px", null, null],
      pl: [0, null, null, null, 0, null, null, null],
      display: "flex",
      justifyContent: "flex-end",
      position: "relative",
      right: ["-45px", "-82px", "-40px", "-20px", "-30px", "-120px", "-55px"],
      width: [
        "calc(100% - 110px)",
        "calc(100% - 146px)",
        "calc(100% - 300px)",
        "calc(100% - 360px)",
        "calc(100% - 420px)",
        "calc(100% - 600px)",
        "calc(100% - 610px)",
      ],
      textAlign: ["center", null],
    },
    services: {
      display: "flex",
      minHeight: ["auto", "113px"],
      alignItems: "center",
      justifyContent: "center",
      img: {
        width: ["175px", "140px", null, null, null, "140px", "140px"],
      },
    },
    delivery: {
      mt: ["70px", null, null, 0],
      mb: ["15px", null, null, 0],
      pl: [0, null, null, null, 0],
      display: "flex",
      justifyContent: "flex-end",
      position: "relative",
      right: ["-55px", "-5px", "44px", "40px", "55px", "14px", "50px"],
      order: ["2", "1", null, null, null],
      maxWidth: [
        "calc(100% - 110px)",
        "calc(100% - 155px)",
        "calc(100% - 310px)",
        "calc(100% - 350px)",
        "calc(100% - 420px)",
        "calc(100% - 600px)",
        "calc(100% - 600px)",
      ],
      minWidth: "",
      textAlign: ["left", null],
    },
  },
  buttons: {
    primary: {
      backgroundColor: "primary",
      borderRadius: "3rem",
      lineHeight: "heading",
      fontSize: 15,
      padding: ["14px 20px 13px", "14px 25px 13px", "15px 21px 15px"],
      fontWeight: "heading",
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      color: "secondary",
      transition: "0.3s",
      "&:hover": {
        opacity: 0.8,
      },
    },
    cardButton: {
      backgroundColor: "transparent",
      fontFamily: "heading",
      color: "heading",
      fontSize: 16,
      fontWeight: "heading",
      pl: 0,
      cursor: "pointer",
    },
  },

  // root styles
  styles: {
    root: {
      padding: 0,
      margin: 0,
      fontFamily: "heading",
      WebkitFontSmoothing: "antialiased",
      backgroundColor: "black40",
      color: "white10",
      overflowX: "hidden",
      a: {
        color: "inherit",
        textDecoration: "none",
        outline: "0px",
      },
      button: {
        backgroundImage: "none",
        fontWeight: 600,
        cursor: "pointer",
        backgroundColor: "transparent",
        textTransform: "none",
        margin: 0,
        border: "0px",
        outline: "0px",
        color: "white",
      },
    },
    "*": {
      boxSizing: "border-box",
    },
    // "::-webkitScrollbar": {
    //   width: "0px",
    //   background: "transparent",
    // },

    h1: {
      margin: 0,
    },
    h2: {
      margin: 0,
    },
    h3: {
      margin: 0,
    },
    h4: {
      margin: 0,
    },
    h5: {
      margin: 0,
    },
    h6: {
      margin: 0,
    },
    p: {
      margin: 0,
    },
    pre: {
      margin: 0,
    },
    ul: {
      margin: 0,
    },
    li: {
      margin: 0,
    },
    h1: {
      fontWeight: "800",
    },

    h2: {
      fontWeight: "700",
    },

    h3: {
      fontWeight: "600",
    },
  },
};
