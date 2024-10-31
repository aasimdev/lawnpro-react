import { Box, Button, Divider, Grid, Link } from '@mui/material';
import React from 'react';
import {
  IconArrowLeftSingle,
  IconEstimates,
  IconInfo,
  IconPencilEdit,
  IconPrinter,
  IconThumbsDown,
  IconThumbsUp,
} from '../../../../utils/SvgUtil';
import logo from '../../../../assets/images/client_logo.svg';

const data = [
  { date: 'Nov 16, 2022', description: 'Mow and Trim', price: '$25.00', quantity: '1', total: '$25.00' },
  { date: 'Nov 16, 2022', description: 'Mow and Trim', price: '$25.00', quantity: '1', total: '$25.00' },
  { date: 'Nov 16, 2022', description: 'Fuel', price: '$5.00', quantity: '1', total: '$5.00' },
  { date: 'Nov 16, 2022', description: 'Fuel Surcharge', price: '$5.00', quantity: '1', total: '$25.00' },
];

export const ViewEstimate = () => {
  return (
    <div className="px-8 pb-6 pt-20 bg-gray-week">
      <div className="p-4 rounded-2xl border border-faded-light shadow-sm bg-white">
        <Link href="/finance/estimates" sx={{ textDecoration: 'none' }}>
          <Box display={'flex'} alignItems={'center'}>
            <IconArrowLeftSingle size={16} color="#75A428" />
            <span className="text-xs font-medium text-primary-base">Back to listing</span>
          </Box>
        </Link>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} py={2}>
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <IconEstimates size={24} color="#525866" />
            <span className="font-medium text-lg text-text-dark">Estimate - 201600156</span>
          </Box>
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <Button
              sx={{
                borderRadius: '8px',
                color: '#75A428',
                background: '#A2DC3F1A',
                border: 'none',
                '&:hover': { backgroundColor: '#A2DC3F1A', color: '#75A428' },
              }}
              startIcon={<IconThumbsUp size={20} color="#75A428" />}
            >
              Accept
            </Button>

            <Button
              sx={{
                borderRadius: '8px',
                color: '#FB3748',
                background: '#FB37481A',
                border: 'none',
                '&:hover': { backgroundColor: '#FB37481A', color: '#FB3748' },
              }}
              startIcon={<IconThumbsDown size={20} color="#FB3748" />}
            >
              Decline
            </Button>

            <Button
              sx={{
                borderRadius: '8px',
                border: 'none',
                color: '#525866',
                background: '#F5F7FA',
                '&:hover': { backgroundColor: '#F5F7FA', color: '#525866' },
              }}
              startIcon={<IconPencilEdit size={20} color="#525866" />}
            >
              Request Changes
            </Button>

            <Button
              sx={{
                borderRadius: '8px',
                border: 'none',
                color: '#ffff',
                background: '#75A428',
                '&:hover': { backgroundColor: '#a2c56a', color: '#fff' },
              }}
              startIcon={<IconPrinter size={20} color="#fff" />}
            >
              Print
            </Button>
          </Box>
        </Box>
        <Divider orientation="horizontal" />
        <div className="my-3 py-2 px-2.5 bg-information-light rounded-lg flex gap-2">
          <IconInfo size={20} color="#335CFF" />
          <span className="text-sm text-text-dark">Make a Deposit by adding credit to your account</span>
          <span className="text-sm text-primary-base underline cursor-pointer">Add Credit</span>
        </div>
        <div className="mt-3 p-8 rounded-2xl border border-faded-light shadow-sm bg-white ">
          <Grid container>
            <Grid item xs={12} lg={6}>
              <Box display={'flex'} flexDirection={'column'}>
                <span className="text-sm font-medium text-text-dark">Gadsden Lawn Care</span>
                <span className="text-sm font-normal text-gray-600">20 Montclair Drive</span>
                <span className="text-sm font-normal text-gray-600">gadsden AL 35901</span>
                <span className="text-sm font-normal text-gray-600">205-369-7052</span>
                <span className="text-sm font-normal text-gray-600">https://www.gadsdenlawncare.com</span>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className="flex lg:justify-end">
                <img src={logo} className="max-w-full h-auto" alt="logo" />
              </div>
            </Grid>
          </Grid>

          <Grid container pt={5} pb={3}>
            <Grid item xs={12} lg={6}>
              <Box display={'flex'} flexDirection={'column'}>
                <span className="text-sm font-medium text-text-dark">Ashlyn Carter</span>
                <span className="text-sm font-normal text-gray-600">1386 Church Cir</span>
                <span className="text-sm font-normal text-gray-600">Gadsden AL 35901</span>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display={'flex'} flexDirection={'column'} gap={2} maxWidth={'430px'} width={'100%'} ml={'auto'}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                  <span className="text-sm font-medium text-text-dark">Invoice#</span>
                  <span className="text-sm font-medium text-text-dark">100642</span>
                </Box>
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  py={0.5}
                  borderRadius={'8px'}
                  bgcolor={'#F5F7FA'}
                  px={1}
                >
                  <span className="text-sm font-medium text-text-dark">Invoice Date/Due Date</span>
                  <span className="text-sm font-medium text-text-dark">Nov 21, 2022 / Nov 24, 2022</span>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                  <span className="text-sm font-medium text-text-dark">Credit Available</span>
                  <span className="text-sm font-medium text-text-dark">$0.00</span>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Divider orientation="horizontal" />
          <Box pt={2}>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
              py={1}
              px={1.5}
              bgcolor={'#F5F7FA'}
              borderRadius={'8px'}
              flexWrap={'wrap'}
            >
              <span className="text-sm text-gray-600 font-medium">Description</span>
              <Box display={'flex'} gap={3}>
                <span className="text-sm w-32 uppercase text-center text-gray-600 font-medium">cost/rate</span>

                <span className="text-sm w-32 uppercase text-center  text-gray-600 font-medium">qty/hr</span>
                <span className="text-sm w-32 uppercase text-center text-gray-600 font-medium">Total</span>
              </Box>
            </Box>
            <span className="block text-sm py-5 px-3 text-text-dark font-normal">
              Property: Home: 1386 Church Cir Gadsden AL 35901
            </span>
            {data.map((item, index) => (
              <Box
                key={index}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                py={1}
                px={1.5}
                borderRadius={'8px'}
                flexWrap={'wrap'}
              >
                <span className="text-sm text-gray-600 font-normal">
                  {item.date} {item.description}
                </span>
                <Box display={'flex'} gap={3}>
                  <span className="text-sm w-32 uppercase text-center text-gray-600 font-normal">{item.price}</span>
                  <span className="text-sm w-32 uppercase text-center text-gray-600 font-normal">{item.quantity}</span>
                  <span className="text-sm w-32 uppercase text-center text-gray-600 font-normal">{item.total}</span>
                </Box>
              </Box>
            ))}
          </Box>
          <Grid container pt={5} pb={3} spacing={1}>
            <Grid item xs={12} lg={6}>
              <Box display={'flex'} flexDirection={'column'}>
                <span className="text-sm font-normal text-gray-600">
                  <span className="font-medium text-text-dark">Notes:</span>
                  To pay online or access our customer portal please visit us on our website.
                </span>
                <span className="text-sm font-normal text-gray-600">Instructions for first time portal users:</span>
                <span className="text-xs font-normal text-gray-600">
                  1.Click on “Client Login” Button on top of our homepage.
                </span>
                <span className="text-xs font-normal text-gray-600">
                  2.Select Register and enter the email address provided to us and then create a password. <br />
                  Once you have completed these steps you should be able to select an invoice under the “Invoices”{' '}
                  <br /> tab and see payment options at the top of the page. If you have any issues please email or call
                  me.
                </span>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display={'flex'} flexDirection={'column'} gap={2}>
                <Box display={'flex'} justifyContent={'center'} gap={30} alignItems={'center'}>
                  <span className="text-sm font-medium text-text-dark">Subtotal</span>
                  <span className="text-sm font-medium text-text-dark">$60.00</span>
                </Box>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  gap={32}
                  alignItems={'center'}
                  py={0.5}
                  borderRadius={'8px'}
                  bgcolor={'#F5F7FA'}
                  px={1}
                >
                  <span className="text-sm font-medium text-text-dark">Taxes</span>
                  <span className="text-sm font-medium text-text-dark">$0.00</span>
                </Box>
                <Box display={'flex'} justifyContent={'center'} gap={28} alignItems={'center'}>
                  <span className="text-sm font-medium text-text-dark">This Invoice</span>
                  <span className="text-sm font-medium text-text-dark">$60.00</span>
                </Box>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  gap={28}
                  alignItems={'center'}
                  py={0.5}
                  borderRadius={'8px'}
                  bgcolor={'#F5F7FA'}
                  px={1}
                >
                  <span className="text-sm font-medium text-text-dark">Amount Paid</span>
                  <span className="text-sm font-medium text-text-dark">$1.00</span>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
