import dynamic from "next/dynamic";
const Banner = dynamic(import("../components/banner/banner"));
const Card = dynamic(import("../components/card/card"));
const Navbar = dynamic(import("../components/navbar/navbar"));
const SectionCards = dynamic(import("../components/card/section-cards"));

import { Box } from "theme-ui";

import { getVideos, getPopularVideos } from "../lib/videos";

export async function getServerSideProps() {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("Productivity");
  const travelVideos = await getVideos("travel");
  const popularVideos = await getPopularVideos();

  return {
    props: { disneyVideos, productivityVideos, travelVideos, popularVideos },
  };
}

export default function IndexPage({
  disneyVideos,
  productivityVideos,
  travelVideos,
  popularVideos,
}) {
  return (
    <Box>
      <Box paddingBottom="4rem">
        <Navbar username="svanidzeee@gmail.com" />
        <Banner
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />
        <Box sx={{ marginTop: "1.5rem" }}>
          <SectionCards title="Disney" videos={disneyVideos} size="large" />
          <SectionCards title="Travel" videos={travelVideos} size="small" />
          <SectionCards
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCards title="Popular" videos={popularVideos} size="small" />
        </Box>
      </Box>
    </Box>
  );
}
