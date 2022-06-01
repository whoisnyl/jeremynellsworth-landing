import * as React from "react";
import Head from "next/head";
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

  const handleNavigate = (ref) => {
    switch (ref) {
      case "services":
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "process":
        processRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "work":
        workRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "reviews":
        reviewsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "faq":
        faqRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <React.Fragment>
      <Header navigate={handleNavigate} />
      <Head>
        <title>Jeremy Ellsworth</title>
      </Head>
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
