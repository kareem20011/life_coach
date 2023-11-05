import React from "react";
import "./style/Home.css";
import FirstSection from "../components/FirstSection";
import HomeCards from "../components/HomeCards";
import Achievies from "../components/Achievies";
import Featured from '../components/Featured'
import YouTubeChannel from "../components/YouTubeChannel";
import GetStartedToday from "../components/GetStartedToday";

const Home = () => {
  return (
    <>
      <FirstSection/>
      <HomeCards/>
      <Achievies/>
      <YouTubeChannel/>
      <Featured/>
      <GetStartedToday/>
    </>
  );
};

export default Home;
