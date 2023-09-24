import React, { useState } from "react";
import { Box, Typography, Modal, ButtonBase } from "@mui/material";
import { Grid } from "@mui/material";
import { RoundaboutLeftOutlined } from "@mui/icons-material";
import './ArticlePage.css';
import Article from './components/Article.js';

const image2 = require("./googleArticle.jpg");
const image3 = require("./nasdaq.jpg");
const image4 = require("./founder.jpg");
const image5 = require("./nerualink.jpg");
const image6 = require("./georgiatech.jpg");


//  const image3 = require('')
const articles = [
  {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    bigSummary: "Google",
    image: image2,
    tags: ["Software Engineering", "Finance"]
  },
  {
    title: "Article 2",
    summary: "Summary for article 2...",
    bigSummary: "bigSummary for article 2",
    image: image3,
    tags: ["Software Engineering", "Finance"]
  },
  {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    bigSummary: "bigSummary for article 2",
    image: image4,
    tags: ["Software Engineering", "Finance"]
  },
  {
    title: "Article 2",
    summary: "Summary for article 2...",
    bigSummary: "bigSummary for article 2",
    image: image5,
    tags: ["Software Engineering", "Finance"]
  }, {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    bigSummary: "bigSummary for article 2",
    image: image6,
    tags: ["Software Engineering", "Finance"]
  },
  {
    title: "Article 2",
    summary: "Summary for article 2...",
    bigSummary: "bigSummary for article 2",
    image: image2,
    tags: ["Software Engineering", "Finance"]
  }];


function ArticlePage() {
  return (
    <div>
      <div>
        <Typography style={{ textAlign: 'center',fontWeight:'bold' }}variant="h4"marginBottom="0rem">Your Daily Six:</Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" marginBottom="2rem">
    Based on your interests in <span style={{}}>Finance, Trading, and Marketing</span>, we've curated these articles to keep you updated with the latest trends and developments relevant to your career.
</Typography>
      <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="grid-container">
            {articles.map((article, index) => (
              <Article article={article}/>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}


export default ArticlePage;
