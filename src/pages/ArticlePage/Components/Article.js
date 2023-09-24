import React, { useState } from 'react';
import './Article.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FeedbackButtons from './ThumbsUpDown'; // Update with the actual path to the file

export default function Article({ article }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const twoSentenceSummary = article.summary.split('. ').slice(0, 2).join('. ') + '...';

    return (
        <div>
            <div className="Article" onClick={handleOpen}>
            <div 
    style={{ 
        width: '100%', 
        height: '13vh',
        backgroundImage: `url(${article.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginBottom: '20px' 
    }}
></div>
                <h3 style={{marginTop: '10px', marginBottom: '-5px'}}>{article.title}</h3>
                <p style={{fontSize: '0.9rem', color: '#BCBCBC'}}>{twoSentenceSummary}</p>  
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="article-modal-title"
                aria-describedby="article-modal-description"
                sx={{outline:'none'}}
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
                        borderRadius:'5px'
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
        width: '100%', 
        height: '40vh',
        backgroundImage: `url(${article.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginBottom: '20px' 
    }}
></div>

                    <Typography id="article-modal-title" variant="h4" component="h2"gutterBottom    >
                        {article.title}
                    </Typography>
                    <Typography id="article-modal-description" variant="body1">
                        {article.summary}
                    </Typography>
                    <Box mt={2}> 
            <FeedbackButtons />
        </Box>
                </Box>
            </Modal>
        </div>
    )
}
