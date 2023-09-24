import React, { useState } from 'react';
import './Article.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Article({ article }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const twoSentenceSummary = article.summary.split('. ').slice(0, 2).join('. ') + '...';

    return (
        <div>
            <div className="Article" onClick={handleOpen}>
                <h3>{article.title}</h3>
                <p>{twoSentenceSummary}</p>     

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
                    <img 
                        src={article.image} 
                        alt={article.title} 
                        style={{ 
                            width: '100%', 
                            maxHeight: '30vh', 
                            objectFit: 'contain', 
                            marginBottom: '20px' 
                        }} 
                    />

                    <Typography id="article-modal-title" variant="h4" component="h2">
                        {article.title}
                    </Typography>
                    <Typography id="article-modal-description" variant="body1">
                        {article.summary}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
