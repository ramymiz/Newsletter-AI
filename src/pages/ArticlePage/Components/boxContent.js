export default function Article({ title, summary, image }) {
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
              <Typography style={{ color: '#673ab7', fontFamily: "sans-serif" }} variant="h6">{title}</Typography>
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