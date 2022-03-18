/** @jsxImportSource theme-ui */
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import {
  Container,
  Link as ThemeLink,
  Box,
  NavLink,
  Flex,
  Text,
  Button,
} from "theme-ui";

import { styles, DropdownLink } from "./styles";

const navbar = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { username } = props;
  const router = useRouter();

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/my-list");
  };

  const handleShopDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <Container sx={styles.container}>
      <Box sx={styles.wrapper}>
        <ThemeLink sx={styles.logoLink} href="/">
          <Box sx={styles.logoWrapper}>
            <Image
              src={"/static/netflix.svg"}
              alt="Netflix logo"
              width="128px"
              height="34px"
            />
          </Box>
        </ThemeLink>

        <Flex as="ul" sx={styles.navItems}>
          <NavLink as="li" onClick={handleOnClickHome} sx={styles.navItem}>
            Home
          </NavLink>
          <NavLink as="ll" onClick={handleOnClickMyList} sx={styles.navItem2}>
            My List
          </NavLink>
        </Flex>

        <Flex sx={styles.navContainer}>
          <Box>
            <Button
              sx={styles.usernameBtn}
              onClick={handleShopDropdown}
              aria-label="toggle sign out"
            >
              <Text sx={styles.username}>{username}</Text>
              <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width="24px"
                height="24px"
              />
            </Button>

            {showDropdown && (
              <Box sx={styles.navDropdown}>
                <Box>
                  <Link href="/login">
                    <DropdownLink>Sign out</DropdownLink>
                  </Link>
                  <Box sx={styles.lineWrapper}></Box>
                </Box>
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default navbar;
