import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconClose, IconPencilEdit, IconSingleUserUnfilled } from '../../utils/SvgUtil';
import {
  Button,
  Collapse,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import user from '../../assets/images/user-img.svg';
import us from '../../assets/country/us.svg';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

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

const countries = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
];

const states = [
  { code: 'CA', name: 'California' },
  { code: 'TX', name: 'Texas' },
  { code: 'NY', name: 'New York' },
  { code: 'FL', name: 'Florida' },
  // Add more states as needed
];

const EditModal: React.FC<EditModalProps> = ({ open, handleClose }) => {
  const [opens, setOpen] = useState(false);
  const [opensState, setOpenState] = useState(false);

  const handleClick = () => {
    setOpen(!opens);
  };
  const handleStateClick = () => {
    setOpenState(!opensState);
  };

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedState, setSelectedState] = useState(states[0]);

  const handleCountrySelect = (country: { code: string; name: string; flag: string }) => {
    setSelectedCountry(country);
    setOpen(false);
  };

  const handleStateSelect = (state: React.SetStateAction<{ code: string; name: string }>) => {
    setSelectedState(state);
  };
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
              <IconPencilEdit size={20} color={'#525866'} />
            </div>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <span className="font-medium text-sm text-text-dark ">Edit Contact Info</span>
              <span className="font-normal text-mini text-[#525866] ">
                Update contact details for accurate communication.
              </span>
            </Box>
          </Box>
          <div onClick={handleClose} className="cursor-pointer">
            <IconClose size={24} color="#525866" />
          </div>
        </div>
        <Divider orientation="horizontal" />
        <div className="p-5">
          <Grid container spacing={2} pb={2}>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">Full Name</span>
                  <span className="text-sm text-primary-base">*</span>
                </Box>
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
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" gap={2} alignItems="center">
                <img src={user} className="w-20 h-auto" alt="" />
                <Box display="flex" flexDirection="column" gap={2}>
                  <span className="text-sm font-medium text-text-dark">Upload Profile Image</span>
                  <Box display="flex" gap={2}>
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
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Divider orientation="horizontal" />

          {/* address  */}

          <Grid container spacing={2} py={2}>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1} position="relative">
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">Country</span>
                  <span className="text-sm text-primary-base">*</span>
                </Box>
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  sx={{
                    width: '100%',
                    padding: '8px',
                    height: '39px',
                    borderRadius: '8px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    border: '1px solid #0000003b',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <ListItemButton
                    sx={{
                      padding: '0px',
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                    onClick={handleClick}
                  >
                    <ListItemIcon>
                      <img src={us} alt={selectedCountry.name} className="w-5 h-auto" />
                    </ListItemIcon>
                    <ListItemText primary={selectedCountry.name} />
                    {opens ? (
                      <ExpandLess sx={{ color: '#525866', width: '20px' }} />
                    ) : (
                      <ExpandMore sx={{ color: '#525866', width: '20px' }} />
                    )}
                  </ListItemButton>
                </List>
                <Collapse in={opens} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    disablePadding
                    // sx={{ position: 'absolute', width: '100%', top: '50px', zIndex: 10 }}
                  >
                    {countries.map((country) => (
                      <ListItemButton
                        key={country.code}
                        sx={{
                          '&:hover': {
                            backgroundColor: '#f0f0f0',
                          },
                        }}
                        onClick={() => handleCountrySelect(country)}
                      >
                        <ListItemText primary={country.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">Street Address</span>
                  <span className="text-sm text-primary-base">*</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-street"
                  placeholder="106 Gaither Drive"
                  variant="outlined"
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      color: 'gray',
                      opacity: 1,
                    },
                  }}
                  inputProps={{
                    style: {
                      padding: '8px',
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1} position="relative">
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">State</span>
                  <span className="text-sm text-primary-base">*</span>
                </Box>
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  sx={{
                    width: '100%',
                    padding: '8px',
                    height: '39px',
                    borderRadius: '8px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    border: '1px solid #0000003b',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <ListItemButton
                    sx={{
                      padding: '0px',
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                    onClick={handleStateClick}
                  >
                    <ListItemText primary={selectedState.name} />
                    {opensState ? (
                      <ExpandLess sx={{ color: '#525866', width: '20px' }} />
                    ) : (
                      <ExpandMore sx={{ color: '#525866', width: '20px' }} />
                    )}
                  </ListItemButton>
                </List>
                <Collapse in={opensState} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    disablePadding
                    // sx={{ position: 'absolute', width: '100%', top: '50px', zIndex: 10 }}
                  >
                    {states.map((states) => (
                      <ListItemButton
                        key={states.code}
                        sx={{
                          '&:hover': {
                            backgroundColor: '#f0f0f0',
                          },
                        }}
                        onClick={() => handleStateSelect(states)}
                      >
                        <ListItemText primary={states.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">Street Address 2</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-street2"
                  variant="outlined"
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      color: 'gray',
                      opacity: 1,
                    },
                  }}
                  inputProps={{
                    style: {
                      padding: '8px',
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">City</span>
                  <span className="text-sm text-primary-base">*</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-city"
                  placeholder="Ashlyn Carter"
                  variant="outlined"
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      color: 'gray',
                      opacity: 1,
                    },
                  }}
                  inputProps={{
                    style: {
                      padding: '8px',
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">Postal Code</span>
                  <span className="text-sm text-primary-base">*</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-postal"
                  placeholder="08054"
                  variant="outlined"
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      color: 'gray',
                      opacity: 1,
                    },
                  }}
                  inputProps={{
                    style: {
                      padding: '8px',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Divider orientation="horizontal" />

          {/* info  */}

          <Grid container spacing={2} py={2}>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">Email Address</span>
                  <span className="text-sm text-primary-base">*</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-email"
                  placeholder="heather_carter@gmail.com"
                  variant="outlined"
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      color: 'gray',
                      opacity: 1,
                    },
                  }}
                  inputProps={{
                    style: {
                      padding: '8px',
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">Fax</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-fax"
                  variant="outlined"
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      color: 'gray',
                      opacity: 1,
                    },
                  }}
                  inputProps={{
                    style: {
                      padding: '8px',
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">Business Phone</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-business-phone"
                  variant="outlined"
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      color: 'gray',
                      opacity: 1,
                    },
                  }}
                  inputProps={{
                    style: {
                      padding: '8px',
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex">
                  <span className="text-sm font-medium text-text-dark">Cell Phone</span>
                </Box>
                <TextField
                  id="input-with-icon-textfield-cell-phone"
                  variant="outlined"
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      color: 'gray',
                      opacity: 1,
                    },
                  }}
                  inputProps={{
                    style: {
                      padding: '8px',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
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
