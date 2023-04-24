//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import "./App.css";
import Title from "./assets/composants/Title";
import Description from "./assets/composants/Description";
import "./assets/composants/Content";

const App = () => {
  return (
    <>
      <Title name="Lorem Ipsum" />
      <Description text={"lorem*10"} />;
    </>
  );
};

export default App;
