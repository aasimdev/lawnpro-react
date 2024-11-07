import {
  Box,
  Button,
  Collapse,
  Divider,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import React from 'react';
import {
  IconClose,
  IconDateCalendar,
  IconFolder,
  IconLocation,
  IconMail,
  IconPhone,
  IconSingleUserUnfilled,
  IconWork,
} from '../../utils/SvgUtil';
import Select2 from '../controllers/Select2';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import GenricModal from './GenericModal';
import us from '../../assets/country/us.svg';

interface Props {
  data?: any;
  img?: any;
  handleClose?: any;
  open?: any;
  customerTitle?: any;
  selectedValue?: any;
  handleChange?: any;
  handleClick?: any;
  selectedCountry?: any;
  opens?: any;
  countries?: any;
  handleCountrySelect?: any;
}

export const WorkData: React.FC<Props> = ({
  data,
  img,
  handleClose,
  open,
  customerTitle,
  selectedValue,
  handleChange,
  handleClick,
  selectedCountry,
  opens,
  countries,
  handleCountrySelect,
}) => {
  return (
    <div>
      <GenricModal open={open} handleClose={handleClose} width={'420px'} radius={'0'}>
        <div className="p-5 flex justify-between border-b border-faded-light ">
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <IconWork size={20} color={'#0E121B'} />

            <span className="font-medium text-lg text-text-dark ">New Work Request</span>
          </Box>
          <div onClick={handleClose} className="cursor-pointer">
            <IconClose size={24} color="#525866" />
          </div>
        </div>
        <div className="py-1.5 px-5 bg-gray-week text-soft-400 text-xs">
          <span>contact details</span>
        </div>
        <div className="p-5 flex flex-col gap-2">
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
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#E1E4EA',
                },
              }}
            />
          </Box>
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
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#E1E4EA',
                },
              }}
              inputProps={{}}
            />
          </Box>
          <Box display="flex" flexDirection="column" gap={1}>
            <Box display="flex">
              <span className="text-sm font-medium text-text-dark">Phone</span>
              <span className="text-sm text-primary-base">*</span>
            </Box>
            <div className="grid grid-cols-12">
              <div className="col-span-3 h-full">
                <Select2
                  options={customerTitle}
                  accessor="customer_title"
                  value={selectedValue}
                  onChange={handleChange}
                  buttonClass="rounded-r-none !py-2 h-full border-main-gray"
                  className="h-full"
                />
              </div>
              <div className="col-span-9">
                <TextField
                  placeholder="(555) 000-0000"
                  variant="outlined"
                  sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '0px 10px 10px 0px', // Set the desired border radius here
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderLeft: 0,
                      borderColor: '#E1E4EA',
                    },
                  }}
                />
              </div>
            </div>
          </Box>
        </div>
        <div className="py-1.5 px-5 bg-gray-week text-soft-400 text-xs">
          <span>Address</span>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <Box display="flex" flexDirection="column" gap={1} position="relative">
            <Box display="flex">
              <span className="text-sm font-medium text-text-dark">Country</span>
              <span className="text-sm text-primary-base">*</span>
            </Box>
            <Box position={'relative'}>
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
                  border: '1px solid #E1E4EA',
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
                  <ListItemIcon sx={{ minWidth: '30px' }}>
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
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    top: '45px',
                    zIndex: 10,
                    background: 'white',
                    border: '1px solid #0000003b',
                    borderRadius: '8px',
                  }}
                >
                  {countries.map((country: any) => (
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
          </Box>
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
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#E1E4EA',
                },
              }}
            />
          </Box>
          <div className="grid-cols-1 grid lg:grid-cols-2 gap-2">
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
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E1E4EA',
                  },
                }}
                inputProps={{
                  style: {
                    padding: '8px',
                  },
                }}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex">
                <span className="text-sm font-medium text-text-dark">Postal Code</span>
                <span className="text-sm text-primary-base">*</span>
              </Box>
              <TextField
                id="input-with-icon-textfield-city"
                placeholder="08054"
                variant="outlined"
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'gray',
                    opacity: 1,
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E1E4EA',
                  },
                }}
                inputProps={{
                  style: {
                    padding: '8px',
                  },
                }}
              />
            </Box>
          </div>
        </div>
        <div className="py-1.5 px-5 bg-gray-week text-soft-400 text-xs">
          <span>Service Detail</span>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <Box display="flex" flexDirection="column" gap={1}>
            <Box display="flex">
              <span className="text-sm font-medium text-text-dark">Work Request</span>
              <span className="text-sm text-primary-base">*</span>
            </Box>

            <Select2 buttonClass="border-main-gray" />
          </Box>
          <Box display="flex" flexDirection="column" gap={1}>
            <Box display="flex">
              <span className="text-sm font-medium text-text-dark">Please provide detailed information</span>
              <span className="text-sm font-normal text-gray-600">(Optional)</span>
            </Box>
          </Box>
          <div className=" pt-2 flex justify-between">
            <Button
              variant="outlined"
              sx={{
                borderRadius: '8px',
                border: '1px solid #E1E4EA',
                color: '#525866',
                width: '182px',
                '&:hover': {
                  backgroundColor: '#E1E4EA',
                  color: '#000',
                },
              }}
              onClick={handleClose}
            >
              Discard
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '8px',
                background: '#75A428',
                color: '#fff',
                width: '182px',

                '&:hover': {
                  backgroundColor: '#639922', // Darker green for hover effect
                  color: '#fff',
                },
              }}
            >
              Submit Request
            </Button>
          </div>
        </div>
      </GenricModal>

      {data.map((job: any, index: any) => (
        <div key={index}>
          <div className="grid grid-cols-12 gap-2 py-7">
            {/* Job Details */}
            <div className="col-span-12 lg:col-span-6">
              <Box display="flex" flexDirection="column" gap={2}>
                <Box display="flex" flexDirection="column">
                  <span className="text-text-dark font-bold text-sm">{job.id}</span>
                  <span className="text-text-dark font-medium text-sm">{job.title}</span>
                </Box>
                <Box display="flex" flexDirection="column" gap={0.4}>
                  <span className="text-gray-600 font-normal text-xs">Customer</span>
                  <Box display="flex" gap={0.5} alignItems="center">
                    <img src={img} className="w-6 h-6 rounded-full" alt="" />
                    <span className="text-gray-600 font-normal text-sm">{job.customer}</span>
                  </Box>
                </Box>
              </Box>
            </div>

            {/* Status, Email, Created At, Phone */}
            <div className="col-span-12 lg:col-span-6 ">
              <div className="grid grid-cols-2 gap-2 ">
                <Box display="flex" flexDirection="column" gap={1}>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <span className="text-gray-600 font-normal text-xs">Status</span>
                    <div
                      className={`py-1 px-2 w-24 rounded-lg text-gray-600 items-center font-normal text-xs bg-white border border-faded-light flex gap-1`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${job.status.color}`}></div>
                      {job.status.label}
                    </div>
                  </Box>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <span className="text-gray-600 font-normal text-xs">Email</span>
                    <Box display="flex" gap={0.5} alignItems="center">
                      <IconMail size={20} color="#525866" />
                      <span className="text-gray-600 font-normal text-sm">{job.email}</span>
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <span className="text-gray-600 font-normal text-xs">Created At</span>
                    <Box display="flex" gap={0.5} alignItems="center">
                      <IconDateCalendar size={20} color="#525866" />
                      <span className="text-gray-600 font-normal text-sm">{job.createdAt}</span>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <span className="text-gray-600 font-normal text-xs mt-1">Cell Phone</span>
                    <Box display="flex" gap={0.5} alignItems="center">
                      <IconPhone size={20} color="#525866" />
                      <span className="text-gray-600 font-normal text-sm">{job.phone}</span>
                    </Box>
                  </Box>
                </Box>
              </div>
            </div>
            {job.description && (
              <div className="col-span-12">
                <Box display="flex" flexDirection="column" gap={1}>
                  <span className="text-gray-600 font-normal text-xs">Description</span>
                  <Box display="flex" gap={0.5} alignItems="center">
                    <IconFolder size={20} color="#525866" />
                    <span className="text-gray-600 font-normal text-sm">{job.description}</span>
                  </Box>
                </Box>
              </div>
            )}
            {/* Address and Description (if available) */}
            <div className="col-span-12">
              <Box display="flex" flexDirection="column" gap={1}>
                <span className="text-gray-600 font-normal text-xs">Address</span>
                <Box display="flex" gap={0.5} alignItems="center">
                  <IconLocation size={20} color="#525866" />
                  <span className="text-gray-600 font-normal text-sm">{job.address}</span>
                </Box>
              </Box>
            </div>
          </div>
          <Divider orientation="horizontal" />
        </div>
      ))}
    </div>
  );
};
