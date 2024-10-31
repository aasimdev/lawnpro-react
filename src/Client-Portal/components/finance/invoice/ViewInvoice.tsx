import { Box, Button, Divider, Grid, Link } from '@mui/material';
import React from 'react';
import { IconArrowLeftSingle, IconInvoice, IconPrinter } from '../../../../utils/SvgUtil';
import DropdownMenu from '../../../../components/DropdownMenu';
import paypal from '../../../../assets/icons/PayPal.svg';
import Visa from '../../../../assets/icons/Visa.svg';
import Mastercard from '../../../../assets/icons/Mastercard.svg';
import Amex from '../../../../assets/icons/Amex.svg';
import logo from '../../../../assets/images/client_logo.svg';

const paypalCtx = [
  {
    id: 1,
    title: 'Pay Invoice',
  },
  {
    id: 2,
    title: 'Partial Pay Invoice',
  },
  {
    id: 3,
    title: 'Pay Account Balance ($59.00)',
  },
];

const data = [
  { date: 'Nov 16, 2022', description: 'Mow and Trim', price: '$25.00', quantity: '1', total: '$25.00' },
  { date: 'Nov 16, 2022', description: 'Mow and Trim', price: '$25.00', quantity: '1', total: '$25.00' },
  { date: 'Nov 16, 2022', description: 'Fuel', price: '$5.00', quantity: '1', total: '$5.00' },
  { date: 'Nov 16, 2022', description: 'Fuel Surcharge', price: '$5.00', quantity: '1', total: '$25.00' },
];

export const ViewInvoice = () => {
  return (
    <div className="px-8 pb-6 pt-20 bg-gray-week">
      <div className="p-4 rounded-2xl border border-faded-light shadow-sm bg-white">
        <Link href="/finance/invoices" sx={{ textDecoration: 'none' }}>
          <Box display={'flex'} alignItems={'center'}>
            <IconArrowLeftSingle size={16} color="#75A428" />
            <span className="text-xs font-medium text-primary-base">Back to listing</span>
          </Box>
        </Link>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} py={2}>
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <IconInvoice size={24} color="#525866" />
            <span className="font-medium text-lg text-text-dark">Invoice - 100624</span>
          </Box>
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <span className="text-xs text-text-dark font-medium">Pay Online:</span>
            <DropdownMenu
              title=""
              className="bg-white text-[#525866] rounded-lg border-solid border-[1px] border-main-gray"
              items={[]}
              icon={<img src={Visa} alt="Visa" />}
              icon2={<img src={Mastercard} alt="Mastercard" />}
              icon3={<img src={Amex} alt="Amex" />}
            />
            <DropdownMenu
              title=""
              className="bg-white text-[#525866] rounded-lg border-solid border-[1px] border-main-gray"
              items={paypalCtx}
              icon={<img src={paypal} alt="paypal" />}
            />
            <Button
              sx={{
                borderRadius: '8px',
                border: '1px solid #E1E4EA',
                color: '#525866',
                '&:hover': { backgroundColor: '#E1E4EA', color: '#000' },
              }}
              startIcon={<IconPrinter size={20} color="#99A0AE" />}
            >
              Print
            </Button>
          </Box>
        </Box>
        <Divider orientation="horizontal" />
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
