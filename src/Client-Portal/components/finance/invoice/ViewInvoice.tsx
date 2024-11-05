import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { IconArrowLeftSingle, IconInvoice, IconPrinter } from '../../../../utils/SvgUtil';
import DropdownMenu from '../../../../components/DropdownMenu';
import paypal from '../../../../assets/icons/PayPal.svg';
import Visa from '../../../../assets/icons/Visa.svg';
import Mastercard from '../../../../assets/icons/Mastercard.svg';
import Amex from '../../../../assets/icons/Amex.svg';
import logo from '../../../../assets/images/client_logo.svg';
import { Link } from 'react-router-dom';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

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
        <Link to="/finance/invoices" style={{ textDecoration: 'none' }}>
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
              <Box display={'flex'} flexDirection={'column'} gap={2} width={'100%'} pl={6}>
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  py={0.5}
                  borderRadius={'8px'}
                  bgcolor={'#F5F7FA'}
                  px={1}
                >
                  <span className="text-sm font-medium text-text-dark">Customer #</span>
                  <span className="text-sm font-medium text-text-dark">10</span>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} px={1}>
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
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} px={1}>
                  <span className="text-sm font-medium text-text-dark">Credit Available</span>
                  <span className="text-sm font-medium text-text-dark">$0.00</span>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Divider orientation="horizontal" />

          <TableContainer component={Paper} sx={{ boxShadow: 'none', pt: 2 }}>
            <Table aria-label="grid-based table" sx={{ boxShadow: 'none' }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ background: '#F5F7FA', padding: '8px 12px', border: 'none' }}>
                    <Grid container>
                      <Grid item xs={6}>
                        <span className="text-gray-600 uppercase">Description</span>
                      </Grid>
                      <Grid item xs={2} pl={8}>
                        <span className="text-gray-600 uppercase">cost/rate</span>
                      </Grid>
                      <Grid item xs={2} pl={8}>
                        <span className="text-gray-600 uppercase">qty/hr</span>
                      </Grid>
                      <Grid item xs={2} pl={8}>
                        <span className="text-gray-600 uppercase">Total</span>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ border: 'none', padding: '8px 12px' }}>
                    <Grid container>
                      <Grid item xs={12} py={1}>
                        <span className="text-text-dark text-sm">Property: Home: 1386 Church Cir Gadsden AL 35901</span>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
                {data.map((item) => (
                  <TableRow>
                    <TableCell sx={{ border: 'none', padding: '6px 12px' }}>
                      <Grid container>
                        <Grid item xs={6}>
                          <span className="text-gray-600 text-sm font-normal">
                            {item.date} {item.description}
                          </span>
                        </Grid>
                        <Grid item xs={2} pl={9}>
                          <span className="text-gray-600 uppercase">{item.price}</span>
                        </Grid>
                        <Grid item xs={2} pl={8}>
                          <span className="text-gray-600 uppercase">{item.quantity}</span>
                        </Grid>
                        <Grid item xs={2} pl={8}>
                          <span className="text-gray-600 uppercase">{item.total}</span>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell sx={{ border: 'none', pt: 3, px: '12px' }}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box pr={1}>
                          <span className="text-gray-600 text-sm font-normal block ">
                            <span className="text-text-dark">Notes:</span> To pay online or access our customer portal
                            please visit us on our website.
                          </span>
                          <span className="text-gray-600 text-sm font-normal block ">
                            Instructions for first time portal users:
                          </span>

                          <ul className="text-gray-600 text-sm font-normal list-decimal pl-5">
                            <li>Click on “Client Login” Button on top of our homepage.</li>
                            <li>
                              Select Register and enter the email address provided to us and then create a password.
                            </li>
                            <li>
                              To enable online bill pay go to “My Profile” and select “yes” next to create username and
                              password.
                            </li>
                            <span className="text-gray-600 text-sm font-normal block ">
                              Once you have completed these steps you should be able to select an invoice under the
                              “Invoices”
                            </span>
                            <span className="text-gray-600 text-sm font-normal block ">
                              tab and see payment options at the top of the page. If you have any issues please email or
                              call me.
                            </span>
                          </ul>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <span className="text-text-dark block py-1 pl-16 text-xs 2xl:text-sm">Subtotal</span>
                        <span className="text-text-dark block py-1 bg-gray-week pl-16 rounded-l-lg text-xs 2xl:text-sm">
                          Taxes
                        </span>
                        <span className="text-text-dark block  py-1 pl-16 text-xs 2xl:text-sm">This Invoice</span>
                        <span className="text-text-dark block py-1 bg-gray-week pl-16 rounded-l-lg text-xs 2xl:text-sm">
                          Amount Paid
                        </span>
                        <span className="text-text-dark block  py-1 pl-16 text-xs 2xl:text-sm">Total Due</span>
                      </Grid>
                      <Grid item xs={2}>
                        <span className="text-gray-600 block py-3 2xl:py-3.5"></span>
                        <span className="text-gray-600 block py-3 2xl:py-3.5 bg-gray-week"></span>
                        <span className="text-gray-600 block py-3 2xl:py-3.5"></span>
                        <span className="text-gray-600 block py-3 2xl:py-3.5 bg-gray-week"></span>
                        <span className="text-gray-600 block py-3 2xl:py-3.5"></span>
                      </Grid>
                      <Grid item xs={2}>
                        <span className="text-text-dark block  py-1 pl-16  text-xs 2xl:text-sm">$60.00</span>
                        <span className="text-text-dark block  py-1 bg-gray-week roundedr-md pl-16 rounded-r-lg text-xs 2xl:text-sm">
                          $0.00
                        </span>
                        <span className="text-text-dark block  py-1 pl-16 text-xs 2xl:text-sm">$60.00</span>
                        <span className="text-text-dark block  py-1 bg-gray-week roundedr-md pl-16 rounded-r-lg text-xs 2xl:text-sm">
                          $0.00
                        </span>
                        <span className="text-text-dark block  py-1 pl-16 text-xs 2xl:text-sm">$60.00</span>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>

          <Box pt={4} width={'300px'} textAlign={'center'} mx={'auto'}>
            <span className="font-medium text-sm text-center   text-error-base">
              Invoices past 15 days incur a 1% late charge. Testing edits
            </span>
          </Box>
        </div>
      </div>
      <Box pt={2}>
        <span className=" px-3 font-medium text-gray-600 text-sm flex gap-2 items-center">
          <DescriptionOutlinedIcon />
          Invoice History
        </span>
        <div className="p-4 mt-4 bg-white border border-faded-light shadow-sm rounded-2xl">
          <div className="px-1 py-1 transition-all hover:bg-gray-week bg-white cursor-pointer flex justify-between">
            <span className=" font-medium text-text-dark text-sm">
              <span className="text-yellow-500">Viewed</span> {''}
              by You
            </span>

            <Box display={'flex'} gap={0.5}>
              <span className="text-sm text-text-dark">11/04/24</span>
              <span className="text-sm text-text-dark">8:04 am</span>
            </Box>
          </div>
          <div className="px-1 py-1 transition-all hover:bg-gray-week bg-white cursor-pointer flex justify-between">
            <span className=" font-medium text-text-dark text-sm">
              <span className="text-yellow-500">Viewed</span> {''}
              by You
            </span>

            <Box display={'flex'} gap={0.5}>
              <span className="text-sm text-text-dark">11/01/24</span>
              <span className="text-sm text-text-dark">7:28 am</span>
            </Box>
          </div>
        </div>
      </Box>
    </div>
  );
};
