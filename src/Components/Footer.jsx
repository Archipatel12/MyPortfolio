import React from "react";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = () => {
  const contactInfo = {
    devDotTo: "yourDevDotToUsername",
    email: "archipatel9954@gamil.com",
    gitHub: "Archipatel12",
    instagram: "__.archi.__12",
    linkedIn: "archipatel12",
    medium: "yourMediumUsername",
    name: "Archi Patel",
    primaryColor: "#333",
    twitter: "yourTwitterUsername",
    youTube: "yourYouTubeUsername",
  };

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: contactInfo.primaryColor,
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        {contactInfo.email && (
          <a href={`mailto:${contactInfo.email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {contactInfo.devDotTo && (
          <a href={`https://dev.to/${contactInfo.devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
          </a>
        )}
        {contactInfo.gitHub && (
          <a href={`https://github.com/${contactInfo.gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {contactInfo.instagram && (
          <a
            href={`https://www.instagram.com/${contactInfo.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {contactInfo.linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${contactInfo.linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {contactInfo.medium && (
          <a href={`https://medium.com/@${contactInfo.medium}`} target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" className="socialIcon" />
          </a>
        )}
        {contactInfo.twitter && (
          <a href={`https://twitter.com/${contactInfo.twitter}`} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {contactInfo.youTube && (
          <a
            href={`https://www.youtube.com/c/${contactInfo.youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Created by {contactInfo.name}
      </p>
    </div>
  );
};

export default Footer;
