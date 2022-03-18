/** @jsxImportSource theme-ui */

import { Box, Heading } from "theme-ui";

import Card from "../card/card";
import { styles } from "./section-styles";

const SectionCards = (props) => {
  const { title, videos = [], size } = props;
  console.log({ videos });

  return (
    <Box as="section" sx={styles.container}>
      <Heading as="h2" sx={styles.title}>
        {title}
      </Heading>
      <Box sx={styles.cardWrapper}>
        {videos.map((video, idx) => (
          <Card id={idx} imgUrl={video.imgUrl} size={size} />
        ))}
      </Box>
    </Box>
  );
};

export default SectionCards;
