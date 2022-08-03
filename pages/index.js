import * as React from "react";
import Head from "next/head";
import Script from 'next/script'
// mui
import Box from "@mui/material/Box";
// components
import Header from "../src/header/AppBar";
import TopContent from "../src/section/TopContent";
import Services from "../src/section/Services";
import Process from "../src/section/Process";
import Work from "../src/section/Work";
import Reviews from "../src/section/Reviews";
import Faqs from "../src/section/Faqs";
import Footer from "../src/footer";

export default function Index() {
  const servicesRef = React.useRef();
  const processRef = React.useRef();
  const workRef = React.useRef();
  const reviewsRef = React.useRef();
  const faqRef = React.useRef();
  const headerRef = React.useRef();

  const handleNavigate = (ref) => {
    const headerHeight = headerRef.current.offsetHeight;
    switch (ref) {
      case "services":
        window.scroll({
          top: servicesRef.current.offsetTop - headerHeight,
          behavior: "smooth",
        });
        break;
      case "process":
        window.scroll({
          top: processRef.current.offsetTop - headerHeight,
          behavior: "smooth",
        });
        break;
      case "work":
        window.scroll({
          top: workRef.current.offsetTop - headerHeight,
          behavior: "smooth",
        });
        break;
      case "reviews":
        window.scroll({
          top: reviewsRef.current.offsetTop - headerHeight,
          behavior: "smooth",
        });
        break;
      case "faq":
        window.scroll({
          top: faqRef.current.offsetTop - headerHeight,
          behavior: "smooth",
        });
        break;
    }
  };

  return (
    <React.Fragment>
      <Header elemRef={headerRef} navigate={handleNavigate} />
      <Head>
        <title>Jeremy Ellsworth</title>
      </Head>
      <Script id="gtag" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M82FF5P');`}
      </Script>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M82FF5P" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>
      <Box component="main">
        <TopContent />
        <Services elemRef={servicesRef} />
        <Process elemRef={processRef} />
        <Work elemRef={workRef} />
        <Reviews elemRef={reviewsRef} />
        <Faqs elemRef={faqRef} />
      </Box>
      <Footer />
    </React.Fragment>
  );
}
