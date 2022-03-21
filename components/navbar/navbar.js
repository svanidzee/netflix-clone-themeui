/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { magic } from "../../lib/magic-client";

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
  const [username, setUsername] = useState();

  const router = useRouter();

  useEffect(async () => {
    try {
      const { email } = await magic.user.getMetadata();
      if (email) {
        setUsername(email);
      }
    } catch (error) {
      console.log({ error });
    }
  }, []);

  const handleSignout = async (e) => {
    e.preventDefault();

    try {
      await magic.user.logout();
      console.log(await magic.user.isLoggedIn());
      router.push("/login");
    } catch (error) {
      console.log({ error });
      router.push("/login");
    }
  };

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
    setShowDropdown((prev) => !prev);
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
                  <DropdownLink onClick={handleSignout}>Sign out</DropdownLink>
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
