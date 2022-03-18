/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import theme from "../lib/index";

const Style = (props) => (
  <style jsx global>{`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: ${theme.fonts.heading};

      background-color: ${theme.colors.black40};
      color: white;
      overflow-x: hidden;
    }
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    a {
      color: inherit;
      text-decoration: none;
      outline: 0px;
    }
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-rendering: optimizelegibility;
      margin: 0;
    }
    h1 {
      font-weight: ${theme.fontWeights.bolder};
    }
    h2 {
      font-weight: ${theme.fontWeights.bold};
    }
    h3 {
      font-weight: ${theme.fontWeights.heading};
    }
    button {
      background-image: none;
      font-weight: ${theme.fontWeights.heading};
      cursor: pointer;
      background-color: transparent;
      text-transform: none;
      margin: 0;
      border: 0px;
      outline: 0px;
    }
  `}</style>
);

export default Style;
