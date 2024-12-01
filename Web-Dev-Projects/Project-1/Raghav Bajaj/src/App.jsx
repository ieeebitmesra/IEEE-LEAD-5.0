import { useState } from "react";
import Top from "./components/Top";
import Main from "./components/main";
import About from "./components/about";
import Int from "./components/int";
import Works from "./components/works";
import Cont from "./components/cont";
import End from "./components/end";
import Edu from "./components/edu";
import Left from "./components/left";

function App() {
  return (
    <div className="text-teal-50 antialiased selection:bg-green-300">
      <Left />

      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-b from-lgbg to-dkbg"></div>
      </div>
      <div className="container mx-auto px-8">
        <div className="min-h-screen">
          <Main />
        </div>
        <section className="m-0 -mx-8 bg-[#0d2526]">
          <About />
        </section>
        <div className="overflow-x-hidden">
          <Int />
          <Edu />
          <Works />
          <Cont />
          <End />
        </div>
      </div>
    </div>
  );
}

export default App;
