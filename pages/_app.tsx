import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextGA } from "next-ga4";
import { AppProps } from "next/app";
// ReactGA.initialize("G-5XP46M5HNL");

export default function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  // useEffect(() => {
  //   console.log(router.pathname);
  //   ReactGA.send({ hitType: "pageview", page: router.pathname });
  //   const handleRouteChange = (
  //     pathname: string,
  //     { shallow }: { shallow: boolean }
  //   ) => {
  //     // REACTGA
  //     // Send pageview with a custom path
  //     ReactGA.send({ hitType: "pageview", page: pathname });

  //     console.log(
  //       `App is changing to ${pathname} ${
  //         shallow ? "with" : "without"
  //       } shallow routing`
  //     );
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events, router.pathname]);

  return (
    <>
      <NextGA measurementId="G-5XP46M5HNL" />
      <Component {...pageProps} />
    </>
  );
}
