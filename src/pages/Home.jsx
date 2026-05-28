import React from "react";
import Navbar from "../components/Navbar";
import NotepadEditor from "../components/NotepadEditor";
import RecentHistory from "../components/RecentHistory";
import Footer from "../components/Footer";

const Home = () => {
  const isDataPresent = false

  return (
    <div>
      <Navbar />
      <NotepadEditor />
      <RecentHistory isPresent={isDataPresent} />
      <Footer />
    </div>
  );
};

export default Home;
