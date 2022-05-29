import * as React from "react";
import Head from "next/head";
// mui
import Box from "@mui/material/Box";
// components
import Header from "../src/header/AppBar";
import TopContent from "../src/section/TopContent";
import Services from "../src/section/Services";
import Steps from "../src/section/Steps";
import Catalog from "../src/section/Catalog";
import Reviews from "../src/section/Reviews";
import Faqs from "../src/section/Faqs";
import Newsletter from "../src/footer/Newsletter";
import Footer from "../src/footer";

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <Head>
        <title>Jeremy Ellsworth</title>
      </Head>
      <Box component="main">
        <TopContent />
        <Services />
        <Steps />
        <Catalog />
        <Reviews />
        <Faqs />
      </Box>
      <Footer />
    </React.Fragment>
  );
}
