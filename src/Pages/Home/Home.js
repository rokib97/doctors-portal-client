import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";
import Terms from "./Terms";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="lg:p-12">
        <Info></Info>
        <Services></Services>
        <Terms></Terms>
      </div>
      <MakeAppoinment></MakeAppoinment>
      <div className="lg:p-12 p-8">
        <Testimonials></Testimonials>
      </div>
    </>
  );
};

export default Home;
