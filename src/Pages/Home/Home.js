import React from "react";
import Footer from "../Shared/Footer";
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
      <Info></Info>
      <Services></Services>
      <Terms></Terms>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
};

export default Home;
