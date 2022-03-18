/** @jsxImportSource theme-ui */
import Image from "next/image";
import styled from "@emotion/styled";

import {
  Box,
  Container,
  Heading,
  Paragraph,
  Text,
  Button,
  IconButton,
} from "theme-ui";

import { styles, BannerBox } from "./styles";

const banner = (props) => {
  const { title, subTitle, imgUrl, videoId } = props;

  const handleOnPlay = () => {
    console.log("play");
  };

  return (
    <Container sx={styles.container}>
      <Box sx={styles.leftWrapper}>
        <Box sx={styles.left}>
          <Box sx={styles.nseriesWrapper}>
            <Paragraph sx={styles.firstLetter}>N</Paragraph>
            <Paragraph sx={styles.series}>S E R I E S</Paragraph>
          </Box>

          <Heading sx={styles.title} color="red" as="h3">
            {title}
          </Heading>
          <Heading sx={styles.subTitle} as="h3">
            {subTitle}
          </Heading>

          <Box sx={styles.playBtnWrapper}>
            <IconButton
              sx={styles.btnWithIcon}
              onClick={handleOnPlay}
              aria-label="Play button"
            >
              <Image
                src="/static/play_arrow.svg"
                alt="Play icon"
                width="32px"
                height="32px"
              />
              <Button sx={styles.button}>Play</Button>
            </IconButton>
          </Box>
        </Box>
      </Box>

      <BannerBox>
        <Image
          alt="Mountains"
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </BannerBox>
    </Container>
  );
};

export default banner;
