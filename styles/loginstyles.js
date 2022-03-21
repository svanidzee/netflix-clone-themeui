/** @jsxImportSource theme-ui */
import styled from "@emotion/styled";

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    backgroundColor: "black",

    backgroundImage:
      "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/static/signin-bg.jpg)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",

    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  headerWrapper: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    flexDirection: "row",
    display: "flex",
  },
  logoLink: {
    color: "red",
    width: "8rem",
  },
  logoWrapper: {
    display: "flex",
    fontWeight: "body",
    alignItems: "center",
    color: "white10",
    marginBottom: "1rem",
  },
  main: {
    width: "100%",
    height: "100vh",
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    zIndex: 10,
    justifyContent: "center",
  },
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "6rem",
    paddingTop: "2rem",
    backgroundColor: "black20",
    height: "33.333333%",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    borderRadius: "0.375rem",
    minWidth: "240px",
  },
  signinHeader: {
    color: "white10",
    fontWeight: "bold",
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  emailInput: {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    color: "black30",
    width: "100%",
    paddingBottom: "1rem",
    height: "3rem",
    minWidth: "240px",
    fontSize: "1.2rem",
  },
  userMsg: {
    marginTop: "0.25rem",
    marginBottom: "0.25rem",
    color: "white20",
  },
  loginBtn: {
    backgroundColor: "red10",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    color: "white10",
    width: "100%",
    borderRadius: "0.375rem",
    margintop: "1.5rem",
  },
};
