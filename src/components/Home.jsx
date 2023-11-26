import React from "react";
import "./Home.css";
import Body from "./cuerpo/Body";
import Navbar from "./cuerpo/Navbar";
import Footer from "./cuerpo/Footer";
import { useAuthContext } from "../context/AuthContext";

function Home() {
  const { user } = useAuthContext();
  console.log("test ", user);

  
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default Home;

