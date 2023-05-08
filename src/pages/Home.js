import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Box, Typography } from "@mui/material"; //npm install @mui/material @emotion/react @emotion/styled
import Typed from "react-typed"; //npm i react-typed
import { Link } from "react-scroll"; //$ npm install react-scroll
import Button from '@mui/material/Button';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Productivity Web Apps</h2>

      <Button
      variant = "contained"
      size = "large"
      margin = "10px"
      fontWeight = "700"
      sx={{background:"radial-gradient(#3e497a, #9198e5)"}}
      
                >
                <Link 
                to={`projects`}
                activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  
                >
                Click to see supported uses!
                </Link>
              </Button>

        <div className="prompt">
          <p>I built the following webapps using the OpenAI API to improve your productivity.</p>
          <a href="https://www.linkedin.com/in/alison-qiu/"> <LinkedInIcon /></a>
         
          <EmailIcon />
          <a href="https://github.com/alisonqiu "> <GithubIcon /></a>
        </div>
        <p>Contact me for support</p>
      </div>
      <div className="projects">
        <h1> functionalities</h1>
        <ol className="list">
          <li className="item">
            <h2> Email Generator</h2>
            <span>
            This email generator can help you craft professional and effective emails effortlessly.  Powered by GPT-3,  itcan generate emails for you in mere seconds. Simply input the recipient's name, a summary of the email, and the desired tone, and it will take care of the rest!
            </span>
          </li>
          <li className="item">
            <h2>Chatbot</h2>
            <span>
            Stuck on what to do next? This chatbot is here to provide you with helpful advice! Simply ask our intelligent chatbot for guidance, and it will provide you with general advice to help you move forward. 
            </span>
          </li>
          <li className="item" name = "test">
            <h2>Essay Proofreader</h2>
            <span>Proofread your essays with just a few clicks. Simply enter your essay and this proofreader can help you catch errors and suggest improvements to make your writing shine. </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
