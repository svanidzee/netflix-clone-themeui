/** @jsxImportSource theme-ui */
import styled from "@emotion/styled";

export const styles = {
  container: {
    color: "rgba(255, 255, 255, 1)",
    position: "fixed",
    top: "0px",
    backgroundImage: "linear-gradient(to bottom, var(--gradient-stops))",

    "--gradient-from": "rgb(0, 0, 0)",
    "--gradient-stops":
      "var(--gradient-from), var(--gradient-to, rgba(0, 0, 0, 0))",

    width: "100%",
    zIndex: 50,
  },
  wrapper: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    display: "flex",
    padding: "1.25rem",
    // alignItems: "center",
  },
  logoLink: {
    display: "flex",
    fontWeight: 500,
    fontSize: "1rem",
    alignItems: "center",
    paddingX: "46px",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: "1rem,",
  },
  logoWrapper: {
    color: "rgb(220, 38, 38)",
    width: "8rem",
  },
  navItems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginLeft: "1.5rem",
    fontSize: "0.875rem",
    fontSize: "1rem",

    lineHeight: "1.25rem",
    listStyle: "none",
  },
  navItem: {
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    marginRight: "1.1rem",
  },
  navItem2: {
    cursor: "pointer",
  },

  navContainer: {
    display: "flex",
    alignItems: "flex-start",
    marginLeft: "auto",
  },
  usernameBtn: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    color: "white10",
  },
  username: {
    fontSize: "1rem",
    // marginRight: "33em",
  },
  navDropdown: {
    position: "absolute",
    marginLeft: "8em",
    marginTop: "0.2rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingRight: "0.5rem",
    backgroundColor: "rgb(20, 20, 20)",
    borderWidth: "1px",
    color: "rgba(255, 255, 255, 1)",
    borderRadius: "0.25rem",

    borderColor: "rgba(75, 85, 99, 1)",

    boxShadow:
      "var(0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 #0000), var(--ring-shadow, 0 0 #0000), 0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
  lineWrapper: {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  },
};

export const DropdownLink = styled.a`
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  display: block;
  padding-left: 0.5rem /* 8px */;
  padding-right: 0.5rem /* 8px */;

  font-size: 1rem /* 16px */;
  line-height: 1.25rem /* 20px */;
  border-radius: 0.25rem /* 4px */;
  cursor: pointer;
  text-decoration: none;
`;
