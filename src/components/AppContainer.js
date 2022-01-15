import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AppContainer(prop) {
  //will determine which tab the user is on

  const displayPage = prop;

  return (
    <div className="container-fluid">
      <Header />
      {displayPage()}
      <Footer />
    </div>
  );
}
