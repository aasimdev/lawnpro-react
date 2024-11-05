import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Divider } from '@mui/material';
import { IconClose, IconWisestackLogo } from '../../../../utils/SvgUtil';

interface Props {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '469px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '20px',
  //   height: '500px',
};

const WisetakModal: React.FC<Props> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="py-4 pr-4 pl-5 flex justify-between ">
          <Box display={'flex'} gap={2} alignItems={'center'}>
            <IconWisestackLogo />
          </Box>
          <div onClick={handleClose} className="cursor-pointer">
            <IconClose size={24} color="#525866" />
          </div>
        </div>
        <Divider orientation="horizontal" />
        <div className="p-5 flex flex-col">
          <span className="font-medium text-md text-text-dark">Check your financing options</span>
          <span className="text-sm text-gray-600 font-normal">Prequalify instantly!</span>
          <ul className="list-disc pl-6">
            <li className="text-sm text-gray-600 font-normal">Checking won’t impact your credit score</li>
            <li className="text-sm text-gray-600 font-normal">Takes less than 60 seconds</li>
            <li className="text-sm text-gray-600 font-normal">Rates from 0% APR*</li>
          </ul>
          <span className="text-sm text-gray-600  font-normal">
            Consumer-friendly financing makes it easy to afford the services you care about. Now you can invest in what
            matters most without surprises or unexpected late fees. Don’t worry – checking your options will not affect
            your credit score. Learn even more <span className="text-primary-base underline">here!</span> 
          </span>
          <Button
            sx={{
              borderRadius: '8px',
              border: 'none',
              color: 'white',
              background: '#07C0CA',
              margin: '10px 0px',
              width: '105px',
              '&:hover': { color: '#fff' },
            }}
          >
            Qualify Now
          </Button>
          <Divider orientation="horizontal" />
          <span className="text-sm pt-4 text-justify text-gray-600  font-normal">
            *All financing is subject to credit approval. Your terms may vary. Wisetack loans are issued by our lending
            partners. For example, a $1,000 purchase could cost $45.18 a month for 24 months, based on a 7.9% APR, or
            $333.33 a month for 3 months, based on a 0% APR. . Offers range from 0-35.9% APR based on creditworthiness.
            No other financing charges or participation fees. See additional terms at 
            <span className="text-primary-base underline">www.wisetack.com/faqs.</span> 
          </span>
        </div>
      </Box>
    </Modal>
  );
};

export default WisetakModal;