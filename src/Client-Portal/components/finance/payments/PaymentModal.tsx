import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Divider, Grid, InputAdornment, TextField } from '@mui/material';
import {
  IconAddCredit,
  IconBlankCard,
  IconCalendarLine,
  IconClose,
  IconLocked,
  IconMail,
  IconUserSingle,
} from '../../../../utils/SvgUtil';
import placeholder from '../../../../assets/icons/Placeholder.svg';

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
  maxWidth: '400px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '20px',
  //   height: '500px',
};

const PaymentModal: React.FC<Props> = ({ open, handleClose }) => {
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
        <div className="p-5 flex flex-col gap-5">
          <span className="text-sm text-gray-600 font-medium">
            Credit Amount: <span className="text-text-dark"> $40</span>
          </span>
          <Box display={'flex'} gap={0.5} flexDirection={'column'}>
            <Box display={'flex'}>
              <span className="text-xs font-medium">Email Address</span>
              <span className="text-sm text-primary-base">*</span>
            </Box>
            <TextField
              id="input-with-icon-textfield"
              placeholder="hello@domain.com"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconMail />
                    </InputAdornment>
                  ),
                },
                htmlInput: {
                  style: {
                    padding: '8px',
                    paddingLeft: 0,
                  },
                },
              }}
              variant="outlined"
            />
          </Box>
          <div className="py-1 px-2 bg-gray-week rounded-md text-soft-400 font-medium text-xs">Card Details</div>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">First Name</span>
                  <span className="text-sm text-primary-base">*</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-email"
                  placeholder="Enter first name"
                  variant="outlined"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconUserSingle size={20} color="#99A0AE" />
                        </InputAdornment>
                      ),
                    },
                    htmlInput: {
                      style: {
                        padding: '8px',
                        paddingLeft: 0,
                      },
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">Last Name</span>
                  <span className="text-sm text-primary-base">*</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-fax"
                  variant="outlined"
                  placeholder="Enter last name"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconUserSingle size={20} color="#99A0AE" />
                        </InputAdornment>
                      ),
                    },
                    htmlInput: {
                      style: {
                        padding: '8px',
                        paddingLeft: 0,
                      },
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Box display={'flex'} gap={0.5} flexDirection={'column'}>
            <Box display={'flex'}>
              <span className="text-xs font-medium">Card Number</span>
              <span className="text-sm text-primary-base">*</span>
            </Box>
            <TextField
              id="input-with-icon-textfield"
              placeholder="0000 0000 0000 0000"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconBlankCard size={20} color="#99A0AE" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={placeholder} alt="placeholder" />
                    </InputAdornment>
                  ),
                },
                htmlInput: {
                  style: {
                    padding: '8px',
                    paddingLeft: 0,
                  },
                },
              }}
              variant="outlined"
            />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">Expiration Date</span>
                  <span className="text-sm text-primary-base">*</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-email"
                  placeholder="DD / MM / YYYY"
                  variant="outlined"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconCalendarLine size={20} color="#99A0AE" />
                        </InputAdornment>
                      ),
                    },
                    htmlInput: {
                      style: {
                        padding: '8px',
                        paddingLeft: 0,
                      },
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">CVC</span>
                  <span className="text-sm text-primary-base">*</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-fax"
                  variant="outlined"
                  placeholder="CVC"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconLocked size={20} />
                        </InputAdornment>
                      ),
                    },
                    htmlInput: {
                      style: {
                        padding: '8px',
                        paddingLeft: 0,
                      },
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </div>
        <Divider orientation="horizontal" />

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
          >
            Confirm Payment
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default PaymentModal;
