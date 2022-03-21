/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { magic } from "../lib/magic-client";

import {
  Box,
  Container,
  Link,
  Heading,
  Paragraph,
  Text,
  Button,
  IconButton,
  Input,
} from "theme-ui";

import { styles } from "../styles/loginstyles";

const login = () => {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    console.log("event", e);

    const email = e.target.value;
    setEmail(email);
  };

  const handleOnLoginWithEmail = async (e) => {
    console.log("login");
    e.preventDefault();

    if (email) {
      if (email === "svanidzeee@gmail.com") {
        try {
          setIsLoading(true);
          const didToken = await magic.auth.loginWithMagicLink({
            email,
          });
          console.log({ didToken });
          if (didToken) {
            router.push("/");
          }
        } catch (error) {
          console.log("something went wrong loggining in", error);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        setUserMsg("something went wrong loggining in");
      }
    } else {
      setIsLoading(false);
      setUserMsg("Enter a valid email address"); // show user message
    }
  };
  return (
    <Container sx={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
      <header sx={styles.header}>
        <Box sx={styles.headerWrapper}>
          <Link sx={styles.logoLink} href="/" ml={7}>
            <Box sx={styles.logoWrapper}>
              <Image
                src={"/static/netflix.svg"}
                alt="Netflix logo"
                width="128px"
                height="34px"
              />
            </Box>
          </Link>
        </Box>
      </header>

      <Box sx={styles.main} as="main">
        <Box sx={styles.mainWrapper}>
          <Heading sx={styles.signinHeader} as="h1">
            Sign In
          </Heading>

          <Input
            bg="white10"
            mb={5}
            // autofillBackgroundColor="white10"
            // BackgroundColor="white10"
            sx={styles.emailInput}
            type="text"
            placeholder="Email address"
            onChange={handleOnChangeEmail}
          />

          <Paragraph sx={styles.userMsg}>{userMsg}</Paragraph>
          <Button sx={styles.loginBtn} onClick={handleOnLoginWithEmail}>
            {isLoading ? "Loading..." : "Sign In"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default login;
