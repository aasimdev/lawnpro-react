import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconClose, IconPencilEdit, IconSingleUser, IconSingleUserUnfilled } from '../../utils/SvgUtil';
import { Button, Divider, InputAdornment, TextField } from '@mui/material';
import user from '../../assets/images/user-img.svg';

interface EditModalProps {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '632px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '20px',
  height: '500px',
  overflow: 'scroll',
};

const EditModal: React.FC<EditModalProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="py-[16px] pr-[16px] pl-[20px] flex justify-between ">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] cursor-pointer h-[40px] rounded-full bg-white border border-[#E1E4EA] flex justify-center items-center ">
              <IconPencilEdit size={20} color={'#525866'} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[14px] text-[#0E121B] ">Edit Contact Info</span>
              <span className="font-normal text-[12px] text-[#525866] ">
                Update contact details for accurate communication.
              </span>
            </div>
          </div>
          <div onClick={handleClose} className="cursor-pointer">
            <IconClose size={24} color="#525866" />
          </div>
        </div>
        <Divider orientation="horizontal" />
        <div className="p-[20px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-4">
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-[14px] font-medium text-[#0E121B]">Full Name</span>
                <span className="text-[14px]  text-[#75A428] ">*</span>
              </div>
              <TextField
                id="input-with-icon-textfield"
                placeholder="Ashlyn Carter"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconSingleUserUnfilled size={20} />
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
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray', // Change to your desired color
                    opacity: 1, // Ensures the color is fully opaque
                  },
                }}
              />
            </div>
            <div className="flex gap-2 items-center">
              <img src={user} className="w-[64px] h-auto" alt="" />
              <div className="flex gap-2 flex-col">
                <span className="text-[14px] font-medium text-[#0E121B]">Upload Profile Image</span>
                <div className="flex gap-2">
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: '8px',
                      border: '1px solid #FB3748',
                      color: '#FB3748',
                      '&:hover': {
                        backgroundColor: '#FB3748',
                        color: '#fff',
                      },
                    }}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: '8px',
                      border: '1px solid #E1E4EA',
                      color: '#525866',
                      '&:hover': {
                        backgroundColor: '#E1E4EA',
                        color: '#000',
                      },
                    }}
                  >
                    Upload
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Divider orientation="horizontal" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-4">
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-[14px] font-medium text-[#0E121B]">Country</span>
                <span className="text-[14px]  text-[#75A428] ">*</span>
              </div>
              <TextField
                id="input-with-icon-textfield"
                placeholder="heather_carter@gmail.com"
                slotProps={{
                  htmlInput: {
                    style: {
                      padding: '8px',
                    },
                  },
                }}
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray', // Change to your desired color
                    opacity: 1, // Ensures the color is fully opaque
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-[14px] font-medium text-[#0E121B]">Street Address</span>
                <span className="text-[14px]  text-[#75A428] ">*</span>
              </div>
              <TextField
                id="input-with-icon-textfield"
                placeholder="106 Gaither Drive"
                slotProps={{
                  htmlInput: {
                    style: {
                      padding: '8px',
                    },
                  },
                }}
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray', // Change to your desired color
                    opacity: 1, // Ensures the color is fully opaque
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-[14px] font-medium text-[#0E121B]">State</span>
                <span className="text-[14px]  text-[#75A428] ">*</span>
              </div>
              <TextField
                id="input-with-icon-textfield"
                placeholder="New Jersey"
                slotProps={{
                  htmlInput: {
                    style: {
                      padding: '8px',
                    },
                  },
                }}
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray', // Change to your desired color
                    opacity: 1, // Ensures the color is fully opaque
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-[14px] font-medium text-[#0E121B]">Street Address 2</span>
              </div>
              <TextField
                id="input-with-icon-textfield"
                slotProps={{
                  htmlInput: {
                    style: {
                      padding: '8px',
                    },
                  },
                }}
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray', // Change to your desired color
                    opacity: 1, // Ensures the color is fully opaque
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-[14px] font-medium text-[#0E121B]">City</span>
                <span className="text-[14px]  text-[#75A428] ">*</span>
              </div>
              <TextField
                id="input-with-icon-textfield"
                placeholder="Ashlyn Carter"
                slotProps={{
                  htmlInput: {
                    style: {
                      padding: '8px',
                    },
                  },
                }}
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray', // Change to your desired color
                    opacity: 1, // Ensures the color is fully opaque
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-[14px] font-medium text-[#0E121B]">Postal Code</span>
                <span className="text-[14px]  text-[#75A428] ">*</span>
              </div>
              <TextField
                id="input-with-icon-textfield"
                placeholder="08054"
                slotProps={{
                  htmlInput: {
                    style: {
                      padding: '8px',
                    },
                  },
                }}
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray', // Change to your desired color
                    opacity: 1, // Ensures the color is fully opaque
                  },
                }}
              />
            </div>
          </div>
          <Divider orientation="horizontal" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-4">
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-[14px] font-medium text-[#0E121B]">Email Address</span>
                <span className="text-[14px]  text-[#75A428] ">*</span>
              </div>
              <TextField
                id="input-with-icon-textfield"
                placeholder="heather_carter@gmail.com"
                slotProps={{
                  htmlInput: {
                    style: {
                      padding: '8px',
                    },
                  },
                }}
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray', // Change to your desired color
                    opacity: 1, // Ensures the color is fully opaque
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-[14px] font-medium text-[#0E121B]">Fax</span>
              </div>
              <TextField
                id="input-with-icon-textfield"
                slotProps={{
                  htmlInput: {
                    style: {
                      padding: '8px',
                    },
                  },
                }}
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray', // Change to your desired color
                    opacity: 1, // Ensures the color is fully opaque
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-[14px] font-medium text-[#0E121B]">Business Phone</span>
              </div>
              <TextField
                id="input-with-icon-textfield"
                slotProps={{
                  htmlInput: {
                    style: {
                      padding: '8px',
                    },
                  },
                }}
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray', // Change to your desired color
                    opacity: 1, // Ensures the color is fully opaque
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex">
                <span className="text-[14px] font-medium text-[#0E121B]">Cell Phone</span>
              </div>
              <TextField
                id="input-with-icon-textfield"
                slotProps={{
                  htmlInput: {
                    style: {
                      padding: '8px',
                    },
                  },
                }}
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray', // Change to your desired color
                    opacity: 1, // Ensures the color is fully opaque
                  },
                }}
              />
            </div>
          </div>
          <Divider orientation="horizontal" />
          <div className="flex gap-2 pt-4 justify-end">
            <Button
              variant="outlined"
              sx={{
                borderRadius: '8px',
                border: '1px solid #E1E4EA',
                color: '#525866',
                '&:hover': {
                  backgroundColor: '#E1E4EA',
                  color: '#000',
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '8px',
                background: '#75A428',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#639922', // Darker green for hover effect
                  color: '#fff',
                },
              }}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default EditModal;
