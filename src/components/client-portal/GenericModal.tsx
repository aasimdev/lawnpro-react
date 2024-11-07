import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

interface Props {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  width: string;
  radius: string;
}

const GenricModal: React.FC<Props> = ({ open, handleClose, children, width, radius }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: width, // Use the `width` prop here for maxWidth
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: radius,
    overflowX: 'scroll',
    height: '600px',
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default GenricModal;
