import HeaderBanner from "./components/HeaderBanner/HeaderBanner";
import Score from "./components/Score/Score";
import Body from "./components/Body/Body";

import "./App.css";
import { useState } from "react";

function App(props) {
  return (
    <>
      <HeaderBanner />
      <Score />
      <Body />
    </>
  );
}

export default App;
