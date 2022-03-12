/** @jsxImportSource theme-ui */
import Image from "next/image";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import {
  Box,
  Container,
  Heading,
  Paragraph,
  Text,
  Button,
  IconButton,
} from "theme-ui";

const BannerBox = styled.span`
position: "absolute";
width: 100%;
height: 100%;
bottom: "0px";
 --tw-gradient-stops: var(--tw-gradient-from);
 var(--tw-gradient-to, rgba(0, 0, 0, 0));
 background-image: linear-gradient(to top, var(--tw-gradient-stops));

 --tw-gradient-from: var(--black);

backgroundSize: "cover";
backgroundPosition: "50% 50%";
`;
const PlayButton = styled.span`
  color: rgb(31, 41, 55);
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  padding-left: 0.25rem;
  text-align: center;
`;

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

          {/* Button */}
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
              {/* <span
                style={{
                  color: "rgb(31, 41, 55)",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "28px",
                  paddingleft: "0.25rem",
                  textalign: "center",
                }}
              >
                Play
              </span> */}
              <PlayButton>Play</PlayButton>
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

const styles = {
  container: {
    width: "100%",
    height: "80vh",
    position: "relative",
  },
  leftWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  left: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    height: "100%",
    flexDirection: "column",
    marginTop: "6rem",
  },
  nseriesWrapper: {
    display: "flex",
  },
  firstLetter: {
    fontSize: "3.75rem",
    lineHeight: 1,
    color: "rgb(220, 38, 38)",
    fontWeight: 800,
  },
  series: {
    fontSize: "0.875rem",
    lineheight: "1.25rem",
    color: "rgb(156, 163, 175)",
    alignSelf: "center",
  },
  title: {
    fontSize: "60px",
    lineHeight: "60px",
    fontWeight: 800,
    maxWidth: "30rem",
    color: "rgba(255, 255, 255, 1)",
    "-webkit-text-stroke": "2px rgb(0, 0, 0)",
  },
  subTitle: {
    fontSize: "24px",
    lineHeight: "32px",
    color: "rgba(255, 255, 255, 1)",
    "-webkit-text-stroke": "1px gray",
  },
  playBtnWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  btnWithIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    marginTop: "1.25rem",
    borderRadius: "0.5rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "8rem",
  },
  // bannerImg: {
  //   position: "absolute",
  //   width: "100%",
  //   height: "100%",
  //   bottom: "0px",
  //   // --tw-gradient-stops: var(--tw-gradient-from),
  //   // var(--tw-gradient-to, rgba(0, 0, 0, 0));
  //   // background-image: linear-gradient(to top, var(--tw-gradient-stops));

  //   // --tw-gradient-from: var(--black);

  //   backgroundSize: "cover",
  //   backgroundPosition: "50% 50%",
  // },
};
