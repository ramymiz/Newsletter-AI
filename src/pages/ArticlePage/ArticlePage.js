import { useEffect, useState } from "react";
import { Box, Typography, Modal, ButtonBase } from "@mui/material";
import { Grid } from "@mui/material";
import { RoundaboutLeftOutlined } from "@mui/icons-material";
import './ArticlePage.css';
import Article from './components/Article.js';
import { useOutletContext } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const image2 = require("./googleArticle.jpg");
const image3 = require("./nasdaq.jpg");
const image4 = require("./founder.jpg");
const image5 = require("./nerualink.jpg");
const image6 = require("./georgiatech.jpg");


//  const image3 = require('')
const articles = [
  {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    creator: "News source",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    bigSummary: "Google",
    image: image2,
    tags: ["Software Engineer", "Data Science"]
  },
  {
    title: "Article 2",
    creator: "News source",
    summary: "Summary for article 2...",
    bigSummary: "bigSummary for article 2",
    image: image2,
    tags: ["Software Engineer", "Environmental Law"]
  },
  {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    creator: "News source",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    bigSummary: "bigSummary for article 2",
    image: image2,
    tags: ["Climate Change Mitigation", "Natural Gas Distribution"]
  },
  {
    title: "Article 2",
    creator: "News source",
    summary: "Summary for article 2...",
    bigSummary: "bigSummary for article 2",
    image: image2,
    tags: ["Environmental Law", "Algorithm Design", "Web Dev"]
  }, {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    bigSummary: "bigSummary for article 2",
    image: image2,
    creator: "News source",
    tags: ["Environmental Policy", "Environmental Law"]
  },
  {
    title: "Article 2",
    creator: "News source",
    summary: "Summary for article 2...",
    bigSummary: "bigSummary for article 2",
    image: image2,
    tags: ["Software Engineer", "Computer Science"]
  }];


function ArticlePage() {
  const [loggedIn, setLoggedIn] = useOutletContext();
  const [loading, setLoading] = useState(true);

  setLoggedIn(true);

  useEffect(() => {
    const randomTime = Math.random() * 500 + 500;

    const timer = setTimeout(() => {
      setLoading(false);
    }, randomTime);

    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <div>
      {
        loading ? 
        <div style = {{ width: '100vw', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div >
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <CircularProgress />
            </div>
            <h3>Finding your articles...</h3>
          </div>
        </div>
        :
        <div>
          <Typography style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '25px' }} variant="h4" marginBottom="0rem">Your Daily Six:</Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="grid-container">
              {articles.map((article, index) => (
                <Article article={article} />
              ))}
            </div>
          </div>
        </div>

      }

    </div>
  );
}


export default ArticlePage;
