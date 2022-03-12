/** @jsxImportSource theme-ui */

import { Box, Heading } from "theme-ui";

import Card from "../card/card";

const SectionCards = (props) => {
  const { title } = props;
  return (
    <Box as="section" sx={styles.container}>
      <Heading as="h2" sx={styles.title}>
        {title}
      </Heading>
      <Box sx={styles.cardWrapper}>
        <Card id={0} imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
      </Box>
    </Box>
  );
};

export default SectionCards;

const styles = {
  container: {
    color: "rgb(55, 65, 81)",
    backgroundColor: "rgb(20, 20, 20)",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  title: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: 700,
    fontSize: "2rem",
  },
  cardWrapper: {
    display: "flex",
    paddingTop: "1.7rem",
    paddingBottom: "1.5rem",
    marginTop: "1.5rem",
    marginRight: "0.75rem",
    overflowX: "scroll",
    overflowY: "hidden",
  },
};
