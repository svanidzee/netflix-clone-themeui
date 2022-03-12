import dynamic from "next/dynamic";
const Banner = dynamic(import("../components/banner/banner"));
const Card = dynamic(import("../components/card/card"));
const Navbar = dynamic(import("../components/navbar/navbar"));
const SectionCards = dynamic(import("../components/card/section-cards"));

import { Box } from "theme-ui";

import { ThemeProvider } from "theme-ui";
import theme from "../lib";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar username="svanidzeee@gmail.com" />

      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <Box sx={styles.sectionWrapper}>
        <SectionCards title="Disney" />
      </Box>
    </ThemeProvider>
  );
}

const styles = {
  sectionWrapper: {
    marginTop: "1.5rem",
  },
};
