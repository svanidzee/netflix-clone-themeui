/** @jsxImportSource theme-ui */
import styled from "@emotion/styled";

export const styles = {
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
  button: {
    color: "rgb(31, 41, 55)",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "28px",
    paddingLeft: "0.25rem",
    textAlign: "center",
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

export const BannerBox = styled.span`
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
