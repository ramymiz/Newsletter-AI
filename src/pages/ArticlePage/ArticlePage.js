import React, { useState } from "react";
import { Box, Typography, Modal, ButtonBase } from "@mui/material";
import { Grid } from "@mui/material";
import { RoundaboutLeftOutlined } from "@mui/icons-material";
import './ArticlePage.css';
import Article from './components/Article.js';

const image2 = require("./googleArticle.jpg");
//  const image3 = require('')
const articles = [
  {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    bigSummary: "Google",
    image: image2,
    tags: ["Software Engineering", "Data Science"]
  },
  {
    title: "Article 2",
    summary: "Summary for article 2...",
    bigSummary: "bigSummary for article 2",
    image: image2,
    tags: ["Software Engineering", "Environmental Law"]
  },
  {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    bigSummary: "bigSummary for article 2",
    image: image2,
    tags: ["Climate Change Mitigation", "Natural Gas Distribution"]
  },
  {
    title: "Article 2",
    summary: "Summary for article 2...",
    bigSummary: "bigSummary for article 2",
    image: image2,
    tags: ["Environmental Law", "Algorithm Design", "Web Dev"]
  }, {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    bigSummary: "bigSummary for article 2",
    image: image2,
    tags: ["Environmental Policy", "Environmental Law"]
  },
  {
    title: "Article 2",
    summary: "Summary for article 2...",
    bigSummary: "bigSummary for article 2",
    image: image2,
    tags: ["Software Engineering", "Computer Science"]
  }];


function ArticlePage() {
  return (
    <div>
      <div>
        <Typography style={{ textAlign: 'center' }}variant="h4"marginBottom="0rem">Your tailored six articles:</Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" marginBottom="2rem">
          Each day, we curate six articles based on your career and professional interests. Dive in and stay updated with the latest trends and developments relevant to you.
        </Typography>        <div style={{display: 'flex', justifyContent: 'center'}}>
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
