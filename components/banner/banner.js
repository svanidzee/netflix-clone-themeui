/** @jsxImportSource theme-ui */
import Image from "next/image";

import {
  Box,
  Container,
  Heading,
  Paragraph,
  Text,
  Button,
  IconButton,
} from "theme-ui";

const banner = (props) => {
  const { title, subTitle, imgUrl, videoId } = props;
  console.log(props);

  return (
    <Container sx={styles.contentWrapper}>
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
            <IconButton sx={styles.btnWithIcon} aria-label="Play button">
              <Image
                src="/static/play_arrow.svg"
                alt="Play icon"
                width="32px"
                height="32px"
              />
              <span>Play</span>
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box
        style={{ backgroundImage: `url(${imgUrl}` }}
        sx={{ variant: "images.banner" }}
      ></Box>
    </Container>
  );
};

export default banner;

const styles = {
  contentWrapper: {
    width: "100%",
    height: "80vh",
    position: "relative",
  },
  leftWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "10",
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
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 800,
    color: "rgba(255, 255, 255, 1)",
    // -webkit-text-stroke: 2px var(--black);
  },
  subTitle: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    color: "green",
    // -webkit-text-stroke: 1px gray,
  },
  playBtnWrapper: {
    display: "lex",
    flexDirection: "row",
    width: "00%",
  },
  btnWithIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    marginTop: "1.25rem",
    borderRadius: "0.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
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
