// import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import theme from "../lib/index";
import Style from "../components/style";

export default function CustomApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Style />
    </ThemeProvider>
  );
}
