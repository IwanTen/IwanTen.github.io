import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import Sketch from "../assets/p5/sketch";
import { Link } from "react-router-dom";

function About() {
  let text = useRef();
  let sketch = useRef();
  useEffect(() => {
    gsap.from(text.current, { y: 50, opacity: 0, duration: 1 });
  });
  return (
    <>
      <Sketch ref={sketch} boids={20} />
      <div className="overlay">
        <div className="about">
          <h1 className="aboutTitle">About</h1>
          <h2 className="aboutText" ref={text}>
            Iwan Traeger-Payne is a developer from Woodstock, NY. in May 2020,
            Iwan graduated from the New Media program at Purchase College where
            he took a focus on creative programming. There he studied a variety
            of web, game, and physical computing technologies. He created
            projects that explored topics including AI, procedural generation,
            and particle systems. Iwan’s senior thesis “Media, Math, and
            Murmurations” explores how emergence, collective animal behavior,
            and virtual ecosystems can be applied to enhance generative works of
            art. Iwan continues to expand his expertise in web development and
            object orienting programming, collaborating in multiple technical
            and creative projects.
          </h2>
          <Link className=" aboutButton" to="/">
            back to projects
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
