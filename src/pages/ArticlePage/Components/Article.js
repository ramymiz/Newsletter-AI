import React, { useState } from 'react';
import './Article.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FeedbackButtons from './ThumbsUpDown'; // Update with the actual path to the file
import ArticleTags from './ArticleTags';


export default function Article({ article }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const twoSentenceSummary = article.summary.split('. ').slice(0, 2).join('. ') + '...';

    return (
        <div>
            <div className="Article" onClick={handleOpen}>
                <h3 style={{ marginTop: '10px', marginBottom: '-5px' }}>{article.title}</h3>
                <p style={{ color: '#CCCCCC', marginTop: "5px", marginBottom: "-5px" }}>{article.creator}</p>
                <p style={{ fontSize: '0.9rem', color: '#BCBCBC' }}>{twoSentenceSummary}</p>
                <div style={{ position: 'absolute', bottom: '10px' }}>
                    <ArticleTags tags={article.tags} maxTagLength={40}/>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="article-modal-title"
                aria-describedby="article-modal-description"
                sx={{ outline: 'none' }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '50vw', // Adjusted to 50% of viewport width
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '5px'
                    }}
                >
                    {/* Close button */}
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Displaying the image */}
                    <div
                        style={{
                            marginTop: '15px',
                            width: '100%',
                            height: '35vh',
                            backgroundImage: `url(${article.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            marginBottom: '20px'
                        }}
                    ></div>
                    <h2 >
                        {article.title}
                    </h2>
                    <p style={{ color: '#BCBCBC', marginTop: '-15px' }}>{article.creator}</p>
                    <ArticleTags tags={article.tags} maxTagLength={70}/>
                    <p>
                        {article.summary}
                    </p>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p><a className="modal-anchor" href={article.url} target="_blank">View original article</a></p>
                        <FeedbackButtons />
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
