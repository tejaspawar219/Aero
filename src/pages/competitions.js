import React from "react";
import { Page, PageStyle } from "./styles";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Competitions from "../components/Competitions";
function Competition(props) {
  return (
    <PageStyle>
      <NavBar />
      <Page>
        <Competitions />
        <Footer />
      </Page>
    </PageStyle>
  );
}

export default Competition;
