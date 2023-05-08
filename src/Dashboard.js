import React from "react";

import Header from "./Dashboard/Header";
import Sidebar from "./Dashboard/Sidebar";
import RightSidebar from "./Dashboard/RightSidebar";
import Footer from "./Dashboard/Footer";

export default function Dashboard() {
  
  return (
    <>
      <Header />
      <Sidebar />
      <RightSidebar/>
      <Footer/>
    </>

  );
}
