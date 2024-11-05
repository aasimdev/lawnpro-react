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
import { Link } from 'react-router-dom';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

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
        <Link to="/finance/estimates" style={{ textDecoration: 'none' }}>
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
                  <span className="text-sm font-medium text-text-dark">Estimate#</span>
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
                  <span className="text-sm font-medium text-text-dark">Estimate Date</span>
                  <span className="text-sm font-medium text-text-dark">Nov 21, 2024</span>
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
                          </ul>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <span className="text-text-dark block py-1 pl-16">Subtotal</span>
                        <span className="text-text-dark block py-1 bg-gray-week pl-16 rounded-l-lg">Taxes</span>
                        <span className="text-text-dark block  py-1 pl-16">This Estimate</span>
                      </Grid>
                      <Grid item xs={2}>
                        <span className="text-gray-600 block py-3.5"></span>
                        <span className="text-gray-600 block py-3.5 bg-gray-week"></span>
                        <span className="text-gray-600 block py-3.5"></span>
                      </Grid>
                      <Grid item xs={2}>
                        <span className="text-text-dark block  py-1 pl-16 ">$60.00</span>
                        <span className="text-text-dark block  py-1 bg-gray-week roundedr-md pl-16 rounded-r-lg">
                          $0.00
                        </span>
                        <span className="text-text-dark block  py-1 pl-16">$60.00</span>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
          <Box pt={4} textAlign={'center'}>
            <span className="font-medium text-sm text-center   text-error-base">
              The estimate expires in 39 days....
            </span>
          </Box>
        </div>
      </div>
      <Box pt={2}>
        <span className="  px-3 font-medium text-gray-600 text-sm flex gap-2 items-center">
          <DescriptionOutlinedIcon />
          Estimate History
        </span>
        <div className="p-4 mt-4 w-3/5 bg-white border border-faded-light shadow-sm rounded-2xl">
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <span className="text-sm font-normal text-gray-600">
              <span className="font-medium text-text-dark">Sent by Email</span> {''}
              by LawnProSoftware.com
            </span>
            <Box display={'flex'} gap={0.5}>
              <span className="text-sm text-text-dark">10/31/24</span>
              <span className="text-sm text-text-dark">1:44 pm</span>
            </Box>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <span className="text-sm font-normal text-gray-600">Sent to Email: patrickcash1@me.com</span>
          </Box>
        </div>
      </Box>
    </div>
  );
};
