import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import Sketch from "../assets/p5/sketch";
import { Link } from "react-router-dom";
import Item from "./Item";

//load assets
import Voyr from "../assets/Voyr1.png";
import Transfer from "../assets/Transfer.png";
import fallFest from "../assets/fallFest.png";
import superMammal from "../assets/smGifCompressed.gif";
import Arrow from "../assets/Arrow.svg";

function Home() {
  let homeText = useRef();
  let sketch = useRef();

  useEffect(() => {
    gsap.from(homeText, { opacity: 0, y: 50, duration: 1 });
  });

  return (
    <>
      <Sketch boids={30} ref={sketch} />
      <div className="overlay">
        <header>
          <div className="headerWrapper">
            <h1
              className="headerText"
              ref={(txt) => {
                homeText = txt;
              }}
            >
              Hey I'm <span className="highlight1">Iwan</span>, a
              <span className="highlight2"> developer </span>
              and <span className="highlight2"> creative technologist </span>
              currently living in <span className="highlight1">Brooklyn</span>.
              My specialties include
              <span className="highlight2">
                {" "}
                Node, React, Sass, HTML Canvas, Web GL, and Unity
              </span>
            </h1>
            <a
              className="resumeButton"
              href="https://drive.google.com/drive/folders/1eDhzJ4D-ztNzJBb86AXhGKDSUxjNkvL8?usp=sharing"
            >
              View my resume
            </a>
            <div className="arrow">
              <p className="arrowText">Scroll to projects</p>
              <img className="arrowIcon" src={Arrow} alt="arrow to projects" />
            </div>
          </div>
        </header>
        <div className="projects">
          <Item
            title="SuperMammal"
            medium1="Unity C#"
            medium2="Blender"
            url={superMammal}
            alt="Screen cap of project"
            description="'Supermammal' (2021) is an online subversive gaming experience by artist Pinar Yoldas that triggers conversations around biological essentialism. Based on a retro mobile game called Snake popularized by Nokia in the 90's, the artwork invites players to collect body parts that are conventionally thought of as female as in vulva or male as in penis, as well as those that are regarded neutral such as lips or butts. As the game progresses, the creature amalgamates genitalia belonging to both sexes, complicating the recognition detection of gender. (project abstract)"
            to="https://controlthevirus.art/artists/pinar-yoldas/artwork#enter"
            toText="view project page"
          />
          <Item
            title="Fall Fest 2020"
            medium1="Javascript"
            medium2="LIKELIKE"
            url={fallFest}
            alt="Screen cap of project"
            description="I was hired by Purchase College to design a virtual implementation of their annual Fall Fest which could not be held in person due to the restrictions of COVID-19. As both an alumni and developer, I wanted to create an online experience that was interactive and personal to the Purchase community. Using javascript, I modified the LIKELIKE Online framework into a virtual music festival set in “the Stood,” Purchase’s notorious indoor music venue. Students were able to walk around, chat, watch video performances by artists, Bby Mutha and Dos Flakos, and discover easter eggs made special for the student body."
            to="http://fall-fest-2020.glitch.me/"
            toText="view project on glitch.com"
          />

          <Item
            title="VOYR"
            medium1="Figma"
            medium2="Illustrator"
            url={Voyr}
            alt="Screen cap of project"
            description="I was hired to co-design a mock mobile application for its use in a fellow student's senior thesis film. Together my partner and I used an iterative design process to curate a mobile UI experience that played a central role in our clients dystopian production. Her film was awarded the Purchase Senior Award for Outstanding Film."
            to="https://www.purchase.edu/live/news/4794-sasha-perez-20-awarded-senior-award-for"
            toText="view article"
          />
          <Item
            title="Transfer"
            medium1="Unity C#"
            medium2="Blender"
            url={Transfer}
            alt="Screen cap of project"
            description="In my explorational sandbox game “Transfer”, I invite the user to explore a surreal procedurally generated world through the eyes of protagonist Kyan. Named after Kyanite, a crystal known to enhance one’s telepathic and psychic abilities, Kyan’s powers to transfer his soul into the beings around him allows for a variety of outcomes to emerge. (This is an ongoing project but is currently playable in its stage)"
            to="https://iwanten.itch.io/transfer"
            toText="visit project on itch.io"
          />

          <Link className=" aboutButton" to="/about">
            More about me
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
