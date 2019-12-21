export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Nunito, sans-serif",
    monospace: "Fira Code, monospace",
  },
  colors: {
    text: "#011627",
    background: "#fff",
    primary: "#07c",
    modes: {
      dark: {
        text: "#d6deeb",
        background: "#011627",
        primary: "#0cf",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: [0, 1],
    },
    h2: {
      fontFamily: "heading",
      fontSize: [3, 5],
      margin: 0,
    },
    a: {
      color: "text",
      margin: 3,
    },
  },
  text: {
    heading: {
      fontSize: [5, 7],
    },
  },
  buttons: {
    primary: {
      color: "text",
    },
    link: {
      color: "text",
      border: "none",
      bg: "transparent",
    },
  },
}
