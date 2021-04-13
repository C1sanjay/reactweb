import React from "react";
import Common from "./Common";
import homeimg from "../src/images/un.svg";


const Home = () => {
  return (
    <>
      <Common
        name="Grows Your Ideas With"
        btn="Get Started"
        visit="/service"
        imgrt={homeimg}
      />
      
    </>
  );
};
export default Home;
