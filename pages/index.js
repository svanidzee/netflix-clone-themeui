import dynamic from "next/dynamic";
const Banner = dynamic(import("../components/banner/banner"));
const Card = dynamic(import("../components/card/card"));
const Navbar = dynamic(import("../components/navbar/navbar"));
const SectionCards = dynamic(import("../components/card/section-cards"));

import { getVideos } from "../lib/videos";

import { Box } from "theme-ui";

import { ThemeProvider } from "theme-ui";
import theme from "../lib";

export async function getServerSideProps() {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("productivity");
  const travelVideos = await getVideos("travel");
  // const popularVideos = await getVideos("disney trailer");
  return { props: { disneyVideos, travelVideos, productivityVideos } };
}

export default function IndexPage({
  disneyVideos,
  travelVideos,
  productivityVideos,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar username="svanidzeee@gmail.com" />

      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <Box sx={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Travel" videos={travelVideos} size="small" />
        <SectionCards
          title="Productivity"
          videos={productivityVideos}
          size="medium"
        />
        <SectionCards title="Popular" videos={disneyVideos} size="small" />{" "}
      </Box>
    </ThemeProvider>
  );
}

const styles = {
  sectionWrapper: {
    marginTop: "1.5rem",
  },
};
