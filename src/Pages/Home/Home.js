import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";
import Terms from "./Terms";

const Home = () => {
  return (
    <>
      <div className="p-12">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Terms></Terms>
      </div>
      <MakeAppoinment></MakeAppoinment>
    </>
  );
};

export default Home;
