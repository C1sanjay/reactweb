import React from "react";
import Common from "./Common";
import aboutimg from "../src/images/ab.svg";
const About = () => {
  return (
    <>
      <Common name="Welcome to About page" btn="Contact Now" visit="/contact" imgrt={aboutimg} />
    </>
  );
};
export default About;
