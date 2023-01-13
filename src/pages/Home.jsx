import React from "react";
import { Collections, Footer, Hero, Subscriptions } from "./components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Collections />
      <Subscriptions />
      <Footer />
    </div>
  );
};

export default Home;
