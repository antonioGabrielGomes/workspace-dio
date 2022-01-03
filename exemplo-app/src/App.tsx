import React from "react";
import Global from "./styles/global";
import Home from "./pages/Home/Home";

import {data} from "./data";

function App() {
  return (
    <>
      <Global />
      <Home boxData={data} />
    </>
  );
}

export default App;
