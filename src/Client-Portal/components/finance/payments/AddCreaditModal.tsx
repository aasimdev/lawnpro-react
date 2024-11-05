import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Divider } from '@mui/material';
import { IconAddCredit, IconClose } from '../../../../utils/SvgUtil';
import us from '../../../../assets/country/us.svg';

interface Props {
  open: boolean;
  handleClose: () => void;
  paymentModal: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '400px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '20px',
  //   height: '500px',
};

const AddCreaditModal: React.FC<Props> = ({ open, handleClose, paymentModal }) => {
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
            <div className="w-10 cursor-pointer h-10 rounded-full bg-white border border-main-gray flex justify-center items-center ">
              <IconAddCredit size={20} color={'#525866'} />
            </div>
            <Box display={'flex'} flexDirection={'column'} gap={0.4}>
              <span className="font-medium text-sm text-text-dark ">Add Credit</span>
              <span className="font-normal text-mini text-[#525866] ">Enter the amount to proceed to payment</span>
            </Box>
          </Box>
          <div onClick={handleClose} className="cursor-pointer">
            <IconClose size={24} color="#525866" />
          </div>
        </div>
        <Divider orientation="horizontal" />
        <div className="p-5">
          <Box display="flex" flexDirection="column" gap={1}>
            <Box display="flex">
              <span className="text-sm font-medium text-text-dark">Credit Amount</span>
              <span className="text-sm text-primary-base">*</span>
            </Box>
            <div className="flex justify-between border border-faded-light rounded-lg ">
              <div className="py-2.5 pl-3 pr-2.5 flex gap-2">
                <span className="text-gray-600">$</span>
                <input type="text" className="border-none outline-none" placeholder="00" />
              </div>
              <Box
                display="flex"
                gap={0.5}
                px={2}
                alignItems="center"
                sx={{
                  cursor: 'pointer',
                  borderLeft: '1px solid #E1E4EA',
                }}
              >
                <img src={us} alt="USA Flag" />
                USA
              </Box>
            </div>
          </Box>
        </div>
        <div className="py-4 px-5 flex justify-between">
          <Button
            variant="outlined"
            sx={{
              borderRadius: '8px',
              border: '1px solid #E1E4EA',
              color: '#525866',
              width: '174px',
              '&:hover': {
                backgroundColor: '#E1E4EA',
                color: '#000',
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '8px',
              background: '#75A428',
              color: '#fff',
              width: '174px',

              '&:hover': {
                backgroundColor: '#639922', // Darker green for hover effect
                color: '#fff',
              },
            }}
            onClick={() => {
              paymentModal();
              handleClose();
            }}
          >
            Proceed to Payment
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AddCreaditModal;
