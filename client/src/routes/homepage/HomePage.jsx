import { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import "./HomePage.css";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("Human");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="orbital image" className="orbital" />
      <div className="left">
        <h1>Joyland</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          A universal interface for AI to interact with the digital world. Our
          mission is to ensure that artificial general intelligence benefits all
          of humanity.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="bot" className="bot" />
          <div className="chat">
            <img
              src={typingStatus === "Human" ? "/human1.jpeg" : "/bot.png"}
              alt="bot"
              className="bot"
            />

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human: Can you help me?",
                2000,
                () => {
                  setTypingStatus("Bot");
                },
                "Bot: Of course! Ask me anything.",
                2000,
                () => {
                  setTypingStatus("Human");
                },
                "Human: What makes you special?",
                2000,
                () => {
                  setTypingStatus("Bot");
                },
                "Bot: I'm quick, smart, and here for you!",
                2000,
                () => {
                  setTypingStatus("Human");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="logo" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
