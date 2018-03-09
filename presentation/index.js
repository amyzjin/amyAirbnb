// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

//Import assets images
import amyIcon from "../assets/amyicon.svg";
import amyMap from "../assets/map.png";
import amyBow from "../assets/bow.png";
import munchr from "../assets/munchr.svg";
import munchrCode from "../assets/munchrCode.png";
import munchrCodeNav from "../assets/munchrCodeNav.png";
import whackLogo from "../assets/whackLogo.png";
import whackBig from "../assets/whackBig.jpg";
import whackWebGif from "../assets/whackWebGif.gif";
import whackWeb from "../assets/whackWeb.png";
import whackMobile from "../assets/whackMobile.png";
import whackStats from "../assets/whackStats.png";
import clearbrainLogo from "../assets/clearbrainLogo.svg";

{
  /*
  import munchrWhiteboard from "../assets/munchrWhiteboard.png";
  import munchrRedesign from "../assets/munchrRedesign.png";
  */
}

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#000000",
    tertiary: "#fd5c63",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["spin"]} bgColor="primary">
          <Image src={amyIcon} width="20%" height="20%" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            Me <span style={{ fontWeight: 400 }}>| Projects | Future</span>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={amyMap} fill />
          {/*Shenzhen, LA, BOS, SF*/}
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6}>How did I get into tech & design?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={amyBow} width="20%" height="20%" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            <span style={{ fontWeight: 400 }}>Me | </span> Projects
            <span style={{ fontWeight: 400 }}> | Future</span>
          </Heading>
        </Slide>
        <Slide transition={["spin"]} bgColor="primary">
          <Image src={munchr} width="30%" height="30%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>What</ListItem>
            <ListItem>Who</ListItem>
            <ListItem>When/Where</ListItem>
            <ListItem>What</ListItem>
            <ListItem>How</ListItem>
          </List>
        </Slide>
        {/*
          <Slide transition={["fade"]} bgColor="primary">
          <Image src={munchrWhiteboard} width="30%" height="30%" />
        </Slide>
      */}
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={munchrCodeNav} width="30%%" height="30%%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={munchrCode} width="50%" height="50%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <iframe
            width="1000"
            height="630"
            src="https://www.youtube.com/embed/gdPJrVlgbX0"
          />
        </Slide>
        {/*
          <Slide transition={["fade"]} bgColor="primary">
          <Image src={munchrRedesign} width="30%" height="30%" />
        </Slide>
      */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6}>Questions?</Heading>
        </Slide>

        <Slide transition={["spin"]} bgColor="primary">
          <Link href="http://wellesleyhacks.org/">
            <Image src={whackLogo} width="30%" height="30%" />
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={whackBig} width="100%" height="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={whackWeb} width="100%" height="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={whackMobile} width="100%" height="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={whackStats} fit />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6}>Questions?</Heading>
        </Slide>
        {/*
          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <List>
              <ListItem>Me</ListItem>
              <ListItem>Projects</ListItem>
              <ListItem>Overview</ListItem>
            </List>
          </Slide>
        */}
        <Slide transition={["spin"]} bgColor="primary">
          <Link
            href="http://amyzjin.com/projects/clearbrain/index.html"
            target="blank"
          >
            <Image src={clearbrainLogo} width="30%" height="30%" />
          </Link>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            <span style={{ fontWeight: 400 }}> Me | Projects | </span> Future
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6}>The Future of Design Tools</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6}>My Impact</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6}>Career Path</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Thank you!</Quote>
            <Image
              src={amyIcon}
              style={{ marginTop: "20px", textAlign: "left" }}
              width="20%"
              height="20%"
            />
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
