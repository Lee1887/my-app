import React from "react";
import Button from "./components/Button";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <section
      className="h-screen bg-white bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h2 className="text-white text-2xl font-medium "></h2>
        <h1 className="md:text-5xl text-3xl text-white font-semibold py-5"></h1>
        <div className="text-xl">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default App;
