import React, { useState } from 'react';
import {
  IconAddCredit,
  IconBank,
  IconCalendar,
  IconCreditCard,
  IconDelete,
  IconHidePassword,
  IconInfo,
  IconLockPassword,
  IconLogin,
  IconMail,
  IconPaymentMethod,
  IconPencilEdit,
  IconShowPassword,
  IconSingleUserUnfilled,
} from '../../utils/SvgUtil';
import { Box, Button, Divider, InputAdornment, Switch, SwitchProps, TextField } from '@mui/material';

import { styled } from '@mui/material/styles';
import GenericTable from '../../components/client-portal/GenericTable';

const instructions = [
  'To add your credit card or add a bank account for ACH transfers, please follow these instructions:',
  '1. In the "Login Options" box below, please click to change "Login Required" to "yes".',
  '2. Enter your email address.',
  '3. Click the "Add Password" button and enter a password you want to use for logging into the client area.',
  '4. Click the blue "Add a Credit Card" button below to add your credit card information. If signing up to pay by ACH direct bank transfer, please click the blue "Add a Bank Account" button to enter your bank information.',
];

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 33,
  height: 16,
  padding: 0,
  marginLeft: '0px !important',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#75A428',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#2ECA45',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 12,
    height: 12,
  },
}));

const tableHead = [
  {
    id: 1,
    title: 'Date',
  },
  {
    id: 2,
    title: 'Description',
  },
];

const columns = [
  {
    id: 1,
    date: 'Oct 05, 2024',
    name: '(Visa) Card ending on 0539 added by Pat cash',
  },
  {
    id: 2,
    date: 'Oct 04, 2024',
    name: '(Visa) Card ending on 0539 added by Pat cash ',
  },
];

export const MyProfile = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="px-8 pb-6 pt-20 bg-gray-week">
      <Box display={'flex'} gap={1.2} alignItems={'center'}>
        <IconSingleUserUnfilled size={24} color="#525866" />
        <span className="font-medium text-md text-text-dark">My Profile</span>
      </Box>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <div className="p-4 border border-blue-200 rounded-2xl bg-information-light">
          <Box display={'flex'} gap={1.2} alignItems={'center'} pb={2}>
            <IconAddCredit size={24} color="#525866" />
            <span className="font-medium text-md text-text-dark">Adding Your Credit Card or Bank Account</span>
          </Box>
          <Divider sx={{ borderColor: '#C0D5FF' }} orientation="horizontal" />
          <Box pt={2} display={'flex'} flexDirection={'column'} gap={2}>
            {instructions.map((instruction, index) => (
              <span key={index} className={`text-sm ${index === 0 ? 'font-medium' : 'font-normal'} text-gray-600`}>
                {instruction}
              </span>
            ))}
          </Box>
        </div>
        <div className="p-4 border border-faded-light rounded-2xl bg-white">
          <Box display={'flex'} gap={1.2} alignItems={'center'} pb={2}>
            <IconLogin size={24} color="#525866" />
            <span className="font-medium text-md text-text-dark">Login Options</span>
          </Box>
          <Divider orientation="horizontal" />
          <Box pt={2} display={'flex'} flexDirection={'column'} gap={2}>
            <Box display={'flex'} alignItems={'center'}>
              <IOSSwitch sx={{ m: 1 }} defaultChecked />
              <span className="font-medium text-md text-text-dark">Login Required?</span>
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex">
                <span className="text-sm font-medium text-text-dark">Email Address</span>
                <span className="text-sm text-primary-base">*</span>
              </Box>
              <TextField
                id="input-with-icon-textfield-email"
                placeholder="hello@domain.com"
                variant="outlined"
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
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex">
                <span className="text-sm font-medium text-text-dark">New Password</span>
                <span className="text-sm text-primary-base">*</span>
              </Box>
              <TextField
                id="input-with-icon-textfield"
                placeholder="Password"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconLockPassword />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        {/* <div className="cursor-pointer" onMouseDown={() => setShowPassword(true)} onMouseUp={() => setShowPassword(false)}> */}
                        <div className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <IconHidePassword /> : <IconShowPassword />}
                        </div>
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
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
              />
              <Box display={'flex'} alignItems={'center'} gap={0.5}>
                <IconInfo color="#99A0AE" />
                <span className="text-xs text-gray-600 font-normal">
                  Must contain 1 uppercase letter, 1 number, min. 8 characters.
                </span>
              </Box>
            </Box>
            <div className=" pt-5 flex gap-2">
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '8px',
                  border: '1px solid #E1E4EA',
                  color: '#525866',
                  width: '50%',
                  '&:hover': {
                    backgroundColor: '#E1E4EA',
                    color: '#000',
                  },
                }}
              >
                Discard
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '8px',
                  background: '#75A428',
                  color: '#fff',
                  width: '50%',

                  '&:hover': {
                    backgroundColor: '#639922', // Darker green for hover effect
                    color: '#fff',
                  },
                }}
              >
                Submit Request
              </Button>
            </div>
          </Box>
        </div>
        <div className="p-4 border border-faded-light rounded-2xl bg-white relative">
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} pb={2}>
            <Box display={'flex'} gap={1.2} alignItems={'center'}>
              <IconCreditCard size={24} color="#525866" />
              <span className="font-medium text-md text-text-dark">Credit Card Added By You</span>
            </Box>
            <Box display={'flex'} gap={1}>
              <Button
                sx={{
                  borderRadius: '8px',
                  border: 'none',
                  color: '#525866',
                  background: '#F5F7FA',
                  '&:hover': { backgroundColor: '#F5F7FA', color: '#525866' },
                }}
                startIcon={<IconPencilEdit size={20} color="#CACFD8" />}
                disabled
              >
                Edit
              </Button>
              <Button
                sx={{
                  borderRadius: '8px',
                  border: 'none',
                  color: '#525866',
                  background: '#F5F7FA',
                  '&:hover': { backgroundColor: '#F5F7FA', color: '#525866' },
                }}
                startIcon={<IconDelete size={20} color="#CACFD8" />}
                disabled
              >
                Delete
              </Button>
            </Box>
          </Box>

          <Divider orientation="horizontal" />
          <Box py={5} display={'flex'} textAlign={'center'} flexDirection={'column'} gap={2} justifyContent={'center'}>
            <img src="/images/noData.svg" className=" w-20 h-20 mx-auto" alt="" />
            <span className="text-gray-600 font-medium">No Credit Card Information Found</span>
          </Box>
          <Box>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '8px',
                border: '1px solid #E1E4EA',
                color: '#525866',
                width: '100%',
                '&:hover': {
                  backgroundColor: '#E1E4EA',
                  color: '#000',
                },
              }}
            >
              Add Credit Card
            </Button>
          </Box>
        </div>
        <div className="p-4 border border-faded-light rounded-2xl bg-white relative">
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} pb={2}>
            <Box display={'flex'} gap={1.2} alignItems={'center'}>
              <IconBank size={24} color="#525866" />
              <span className="font-medium text-md text-text-dark">Bank Accounts Added By You</span>
            </Box>
            <Box display={'flex'} gap={1}>
              <Button
                sx={{
                  borderRadius: '8px',
                  border: 'none',
                  color: '#525866',
                  background: '#F5F7FA',
                  '&:hover': { backgroundColor: '#F5F7FA', color: '#525866' },
                }}
                startIcon={<IconPencilEdit size={20} color="#CACFD8" />}
                disabled
              >
                Edit
              </Button>
              <Button
                sx={{
                  borderRadius: '8px',
                  border: 'none',
                  color: '#525866',
                  background: '#F5F7FA',
                  '&:hover': { backgroundColor: '#F5F7FA', color: '#525866' },
                }}
                startIcon={<IconDelete size={20} color="#CACFD8" />}
                disabled
              >
                Delete
              </Button>
            </Box>
          </Box>
          <Divider orientation="horizontal" />
          <Box py={5} display={'flex'} textAlign={'center'} flexDirection={'column'} gap={2} justifyContent={'center'}>
            <img src="/images/noData.svg" className=" w-20 h-20 mx-auto" alt="" />
            <span className="text-gray-600 font-medium">No Bank Account Information Found</span>
          </Box>
          <Box>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '8px',
                border: '1px solid #E1E4EA',
                color: '#525866',
                width: '100%',
                '&:hover': {
                  backgroundColor: '#E1E4EA',
                  color: '#000',
                },
              }}
            >
              Connect Bank Account for ACH
            </Button>
          </Box>
        </div>
      </div>
      <div className="mt-4 p-4 border border-faded-light rounded-2xl bg-white">
        <Box display={'flex'} gap={1.2} alignItems={'center'} pb={2}>
          <IconPaymentMethod size={24} color="#525866" />
          <span className="font-medium text-md text-text-dark">Payment Method History</span>
        </Box>
        <Divider orientation="horizontal" />
        <div className="pt-3">
          <GenericTable head={tableHead} properties={columns} payment="payment">
            {columns.map((property, index) => (
              <tr key={property.id} className={`hover:bg-primary-alpha     `}>
                <td className={`py-4 px-3 w-60 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                  <Box display={'flex'} gap={1} alignItems={'center'}>
                    <IconCalendar size={20} color="#99A0AE" />

                    <span className="text-gray-600">{property.date}</span>
                  </Box>
                </td>
                <td className={`py-4 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                  <Box display={'flex'} gap={1}>
                    <IconPaymentMethod size={20} color="#99A0AE" />

                    <span className="text-gray-600">{property.name}</span>
                  </Box>
                </td>
              </tr>
            ))}
          </GenericTable>
        </div>
      </div>
    </div>
  );
};
