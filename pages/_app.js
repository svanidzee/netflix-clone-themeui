// import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ThemeProvider } from "theme-ui";
import theme from "../lib/index";
import { magic } from "../lib/magic-client";

import Loading from "../components/loading/loading";
import Style from "../components/style";

export default function CustomApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(async () => {
    const isLoggedIn = await magic.user.isLoggedIn();

    if (isLoggedIn) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, []);

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

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? <Loading /> : <Component {...pageProps} />}
      <Style />
    </ThemeProvider>
  );
}
