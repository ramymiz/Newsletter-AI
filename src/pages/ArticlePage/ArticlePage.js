import React, { useState } from "react";
import { Box, Typography, Modal, ButtonBase } from "@mui/material";
import { Grid } from "@mui/material";
import { RoundaboutLeftOutlined } from "@mui/icons-material";
import './ArticlePage.css';

const image2 = require("./googleArticle.jpg");
//  const image3 = require('')
const articles = [
  {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    image: image2,
  },
  {
    title: "Article 2",
    summary: "Summary for article 2...",
    image: image2
  },
  {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    image: image2,
  },
  {
    title: "Article 2",
    summary: "Summary for article 2...",
    image: image2
  }, {
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    image: image2,
  },
  {
    title: "Article 2",
    summary: "Summary for article 2...",
    image: image2
  }];


function ArticlePage() {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Your tailored six articles:</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="grid-container">
            {articles.map((article, index) => (
              <div className="grid-item">
                <h3>Google makes AI</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}


export default ArticlePage;
