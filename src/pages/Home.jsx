import React from "react";
import Navbar from "../components/Navbar";
import NotepadEditor from "../components/NotepadEditor";
import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <NotepadEditor />
      <Footer />
    </div>
  );
};

export default Home;
