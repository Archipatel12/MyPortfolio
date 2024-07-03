import React from 'react';
import './Home.css'// Import the CSS file
import image from '../images/me.jpg'


const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-text">
      <h1>Hi, I am Archi Patel</h1>
        <p>
          Hey everyone! I am a <strong>B.Tech CE</strong> forth-year student at PPSU,GUJARAT. I have also worked as a Web developer .
        </p>
        <p>
          I am well-versed in C, C++, Java, and Python. Currently, I am immersing myself in the exciting world of full-stack development,Machine Learning and Data Science. Join me on this journey as I combine technology, creativity, and problem-solving to create innovative solutions.
        </p>
      </div>
      <div className="profile-image">
        <img src={image} alt="Archi Patel" />
      </div>
    </div>
  );
}

export default Home;
