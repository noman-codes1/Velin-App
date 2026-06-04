import React from "react";
import Navbar from "../components/Navbar"
import NotepadEditor from "../components/NotepadEditor";
import Footer from "../components/Footer";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar/>
      <NotepadEditor />
      <Footer />
    </div>
  );
};

export default Home;
