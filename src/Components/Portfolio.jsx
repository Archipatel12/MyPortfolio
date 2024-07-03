/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/me1.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "E-Comnece Website",
    description:
      "An e-commerce website built with React, Node.js, and MongoDB, specializing in clothing for kids, men, and women.",
    url: "https://github.com/Archipatel12/Ecommerce",
  },
  {
    title: "Blog Website",
    description:
      "A blog website built with Next.js, featuring a home page with a list of blogs and 'Read More' links to view the full content of each post.",
    url: "https://github.com/Archipatel12/Blog",
  },
  {
    title: "MAKEYOURTRIP",
    description:
      "A travel website built with MySQL and PHP, featuring API integration for hotel and flight search, and a database for packages and user authentication.",
    url: "https://github.com/Archipatel12/MAKEYOURTRIP",
  },
  {
    title: "Event Registration Form",
    description:
      "An event registration form built with React, utilizing useState and useEffect hooks.",
    url: "https://github.com/Archipatel12/Event-Registration-From",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
