import HeaderBanner from "./components/HeaderBanner/HeaderBanner";
import Score from "./components/Score/Score";

import "./App.css";
import { useState } from "react";

function App(props) {
  return (
    <>
      <HeaderBanner />
      <Score />
    </>
  );
}

export default App;
