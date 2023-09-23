import React, { useState } from "react";
import { Box, Typography, Modal, ButtonBase } from "@mui/material";
import {Grid } from "@mui/material";
import { RoundaboutLeftOutlined } from "@mui/icons-material";

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
  },{
    title: "Google Tests A.I. Tool That Is Able to Write News Articles",
    summary: "Google is experimenting with an AI-powered product called Genesis for generating news articles. It has been demonstrated to media giants like The New York Times, The Washington Post, and News Corp (owner of The Wall Street Journal). While Google sees it as a tool to aid journalists by automating tasks, some executives are uneasy, feeling it may undermine quality journalism. Google insists that AI tools are meant to assist, not replace journalists, suggesting headlines and writing styles. Experts like journalism professor Jeff Jarvis see potential, but concerns exist about AI-generated content's nuances and its impact on trust in journalism. AI's use in newsrooms is a debated topic, with some outlets already using it for certain stories, raising concerns about misinformation and the perception of traditional journalism as AI continues to evolve.",
    image: image2,
  },
  {
    title: "Article 2",
    summary: "Summary for article 2...",
    image: image2
  }];

function Article({ title, summary, image }) {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <ButtonBase onClick={handleOpen}>
          <Box
            border={2}
            borderColor="grey.400"
            borderRadius="5px"
            p={2}
            mb={2}
            width="44vw"  // Set to 100% of its container
            height="26vw" // Set a minimum height
            display="flex"
            overflow="hidden"  // Hide overflow
          >
            {/* Image styling */}
            <img 
              src={image} 
              alt={title} 
              style={{ 
                maxWidth: '20vw',  // Set max-width instead of fixed width
                height: 'auto',     // Adjust height automatically
                objectFit: 'cover', 
                borderRadius: '6px', 
                marginRight: '16px'
              }} 
            />
            <Box flex={1}>
              <Typography style={{ color: '#673ab7', fontFamily:"sans-serif" }}  variant="h6">{title}</Typography>
              <Typography variant="body2">{summary}</Typography>
            </Box>
          </Box>
        </ButtonBase>
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80vw',  // Adjusted to 80% of viewport width
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      overflow: 'auto',  // Scroll if content is larger than the screen
    }}
  >
    <Typography style={{ color: '#673ab7' }} variant="h6" id="modal-modal-title">{title}</Typography>
    <Typography variant="body2" id="modal-modal-description">{summary}</Typography>
    <img 
      src={image} 
      alt={title} 
      style={{ 
        width: '100%', 
        height: 'auto',
        objectFit: 'contain',  // Adjusts to fit the image without cropping
        marginTop: '8px' 
      }} 
    />
  </Box>
</Modal>

        </div>
      );
    }
    function ArticlePage() {
      return (
        <Box p={4}>
          <Grid container spacing={4} justifyContent="center">
            {articles.map((article, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}> {/* Makes it responsive */}
                <Article {...article} />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }
    

export default ArticlePage;
