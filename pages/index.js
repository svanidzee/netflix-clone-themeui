import dynamic from "next/dynamic";
// const Seo = dynamic(import("components/seo"));
const Banner = dynamic(import("../components/banner/banner"));
const Card = dynamic(import("../components/card/card"));
const Navbar = dynamic(import("../components/navbar/navbar"));
const Layout = dynamic(import("../components/layout"));

import { ThemeProvider } from "theme-ui";
import theme from "../lib";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Layout> */}
      {/* <Seo
            title="Startup Crypto Classic Landing"
            description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
          /> */}

      <h1>Netflix</h1>

      <Navbar />

      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
      <Card />
      {/* </Layout> */}
    </ThemeProvider>
  );
}
