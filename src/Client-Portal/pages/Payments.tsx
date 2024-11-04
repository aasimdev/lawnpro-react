import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  InputAdornment,
  Link,
  Paper,
  Table,
  TableBody,
  TableRow,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import {
  IconAddCredit,
  IconBlankCard,
  IconCalendar,
  IconCalendarLine,
  IconCard,
  IconCash,
  IconClose,
  IconCoin,
  IconCreditCard,
  IconFolder,
  IconLocked,
  IconMail,
  IconMoneySend,
  IconOverView,
  IconPayments,
  IconSaveMoneyDollar,
  IconSecurePayment,
  IconUserSingle,
  IconWisestackLogo,
} from '../../utils/SvgUtil';
import { CheckCircle, OpenInNew } from '@mui/icons-material';
import { ReactComponent as WisestackPatternSVG } from '../../assets/icons/WisestackPattern.svg';
import GenricModal from '../components/GenericModal';
import placeholder from '../../assets/icons/Placeholder.svg';
import us from '../../assets/country/us.svg';
import GenericTable from '../components/GenericTable';

const balances = [
  {
    title: 'CREDIT Balance',
    amount: '$850.00',
    icon: <IconCreditCard size={20} color="#75A428" />,
    bgColor: 'bg-green-50',
    borderColor: 'border-success-light',
    textColor: 'text-success-base',
  },
  {
    title: 'Outstanding balance',
    amount: '$0.00',
    icon: <IconSaveMoneyDollar size={20} color="#6895FF" />,
    bgColor: 'bg-information-light',
    borderColor: 'border-blue-200',
    textColor: 'text-information-base',
  },
];

const columns = [
  {
    id: 1,
    method: 'Cash',
    tip: '$60.00',
    date: 'Oct 04, 2024',
    details: `$850 added to Customer's credit - Credit Added 05/28/24`,
    amount: '$850.00',
  },
  {
    id: 2,
    method: 'Card',
    tip: '$100.00',
    date: 'Oct 03, 2024',
    details: `$150 for Invoice # 815093 - Payment Added 05/28/24`,
    amount: '$850.00',
  },
  {
    id: 3,
    method: 'Cash',
    tip: '$60.00',
    date: 'Oct 04, 2024',
    details: `$850 added to Customer's credit - Credit Added 05/28/24`,
    amount: '$850.00',
  },
];

const tableHead = [
  {
    id: 1,
    title: 'Date',
  },
  {
    id: 2,
    title: 'Tip',
  },
  {
    id: 3,
    title: 'Method',
  },
  {
    id: 4,
    title: 'Details',
  },
  {
    id: 5,
    title: 'Notes',
  },
  {
    id: 6,
    title: 'Amount',
  },
];

export const Payments = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);
  const [openWisetakModal, setOpenWisetakModal] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenPaymentModal = () => setOpenPaymentModal(true);
  const handleClosePaymentModal = () => setOpenPaymentModal(false);

  const handleOpenWisetakModal = () => setOpenWisetakModal(true);
  const handleCloseWisetakModal = () => setOpenWisetakModal(false);

  return (
    <>
      {/* add credit modal  */}

      <GenricModal open={open} handleClose={handleClose} width={'400px'}>
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
              handleOpenPaymentModal();
              handleClose();
            }}
          >
            Proceed to Payment
          </Button>
        </div>
      </GenricModal>

      {/* payment modal  */}

      <GenricModal open={openPaymentModal} handleClose={handleClosePaymentModal} width={'400px'}>
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
          <div onClick={handleClosePaymentModal} className="cursor-pointer">
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
      </GenricModal>

      <GenricModal open={openWisetakModal} handleClose={handleCloseWisetakModal} width={'469px'}>
        <div className="py-4 pr-4 pl-5 flex justify-between ">
          <Box display={'flex'} gap={2} alignItems={'center'}>
            <IconWisestackLogo />
          </Box>
          <div onClick={handleCloseWisetakModal} className="cursor-pointer">
            <IconClose size={24} color="#525866" />
          </div>
        </div>
        <Divider orientation="horizontal" />
        <div className="p-5 flex flex-col">
          <span className="font-medium text-md text-text-dark">Check your financing options</span>
          <span className="text-sm text-gray-600 font-normal">Prequalify instantly!</span>
          <ul className="list-disc pl-6">
            <li className="text-sm text-gray-600 font-normal">Checking won’t impact your credit score</li>
            <li className="text-sm text-gray-600 font-normal">Takes less than 60 seconds</li>
            <li className="text-sm text-gray-600 font-normal">Rates from 0% APR*</li>
          </ul>
          <span className="text-sm text-gray-600  font-normal">
            Consumer-friendly financing makes it easy to afford the services you care about. Now you can invest in what
            matters most without surprises or unexpected late fees. Don’t worry – checking your options will not affect
            your credit score. Learn even more <span className="text-primary-base underline">here!</span> 
          </span>
          <Button
            sx={{
              borderRadius: '8px',
              border: 'none',
              color: 'white',
              background: '#07C0CA',
              margin: '10px 0px',
              width: '105px',
              '&:hover': { color: '#fff' },
            }}
          >
            Qualify Now
          </Button>
          <Divider orientation="horizontal" />
          <span className="text-sm pt-4 text-justify text-gray-600  font-normal">
            *All financing is subject to credit approval. Your terms may vary. Wisetack loans are issued by our lending
            partners. For example, a $1,000 purchase could cost $45.18 a month for 24 months, based on a 7.9% APR, or
            $333.33 a month for 3 months, based on a 0% APR. . Offers range from 0-35.9% APR based on creditworthiness.
            No other financing charges or participation fees. See additional terms at 
            <span className="text-primary-base underline">www.wisetack.com/faqs.</span> 
          </span>
        </div>
      </GenricModal>

      {/* content  */}

      <div className="px-8 pb-6 pt-20 bg-gray-week">
        <div className="p-4 rounded-2xl border border-faded-light bg-white">
          <Box display={'flex'} justifyContent={'space-between'} pb={1.5}>
            <Box display={'flex'} gap={1.4}>
              <IconOverView size={24} color="#525866" />
              <span className="font-medium text-md text-text-dark">Overview</span>
            </Box>
            <Button
              sx={{
                borderRadius: '8px',
                border: 'none',
                color: 'white',
                background: '#75A428',
                '&:hover': { backgroundColor: '#a2c56a', color: '#fff' },
              }}
              startIcon={<IconSecurePayment size={20} color="#fff" />}
              onClick={handleOpen}
            >
              Pay and Add Credit
            </Button>
          </Box>
          <Divider orientation="horizontal" />
          <Grid container spacing={2} pt={1.5}>
            <Grid xs={12} lg={6} item>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {balances.map((balance, index) => (
                  <div key={index} className={`p-4 rounded-xl ${balance.bgColor} border ${balance.borderColor}`}>
                    <div className="flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-full bg-white border flex justify-center items-center">
                        {balance.icon}
                      </div>
                      <span className={`font-medium text-mini ${balance.textColor} uppercase`}>{balance.title}</span>
                      <span className="text-xl font-medium text-text-dark">{balance.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid xs={12} lg={6} item>
              <div
                style={{
                  background: '#E7F9F9',
                  borderColor: '#07C0CA',
                  position: 'relative',
                }}
                className="rounded-xl p-4 border border-faded-light"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col gap-[18px]">
                    <div className="w-full py-[8px]">
                      <IconWisestackLogo />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <span className="text-[12px]">Application Status</span>
                      <div className="flex items-center justify-between">
                        <Chip
                          icon={<CheckCircle />}
                          label="Approved"
                          sx={{
                            background: '#75A428',
                            padding: '2px 0px',
                            height: 'auto',
                            '& .MuiChip-icon': {
                              width: '15px',
                              height: '15px',
                              fill: 'white',
                            },
                            '& .MuiChip-label': {
                              fontSize: '12px',
                              lineHeight: '16px',
                              color: 'white',
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" relative ">
                    <Button
                      sx={{
                        borderRadius: '8px',
                        border: 'none',
                        color: 'white',
                        background: '#07C0CA',
                        '&:hover': { color: '#fff' },
                      }}
                      onClick={handleOpenWisetakModal}
                    >
                      Qualify Now
                    </Button>
                    <div className="absolute bottom-0 right-0">
                      <Link
                        href="#"
                        underline="none"
                        sx={{
                          fontSize: '12px',
                        }}
                      >
                        Learn More
                        <OpenInNew fontSize="inherit" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-40 h-full">
                  <WisestackPatternSVG height="100%" />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="mt-5 rounded-2xl   bg-white ">
          <div className="p-4 rounded-2xl border border-faded-light">
            <Box display={'flex'} gap={1.4} pb={1.5}>
              <IconPayments size={24} color="#525866" />
              <span className="font-medium text-md text-text-dark">Payment</span>
            </Box>
            <Divider orientation="horizontal" />
            <Box pt={1.5}>
              <GenericTable head={tableHead} payment={'payment'}>
                {columns.map((property, index) => (
                  <tr key={property.id} className={`hover:bg-primary-alpha  `}>
                    <td  className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <div className="flex gap-2">
                        <IconCalendar size={20} color="#99A0AE" />
                        <span className="text-gray-600">{property.date}</span>
                      </div>
                    </td>
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <Box display={'flex'} gap={1}>
                        <IconCoin size={20} color="#99A0AE" />
                        <span className="text-gray-600">{property.tip}</span>
                      </Box>
                    </td>

                    <td className={`py-3 px-3 text-sm text-gray-600 font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <Box display={'flex'} gap={1} alignItems={'center'}>
                        {property.method === 'Cash' ? <IconCash size={20} color="#99A0AE" /> : <IconCard size={20} />}
                        {property.method}
                      </Box>
                    </td>

                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <div className="flex gap-2">
                        <IconFolder size={20} color="#99A0AE" />
                        <span className="text-gray-600 truncate" style={{ maxWidth: '250px' }} title={property.details}>
                          {property.details}
                        </span>
                      </div>
                    </td>

                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <div className="flex gap-2"></div>
                    </td>
                    <td className={`py-3 px-3 text-sm font-normal ${index === columns.length - 1 ? '' : 'border-b'}`}>
                      <Box display={'flex'} gap={2} alignItems={'center'}>
                        <IconMoneySend size={20} color="#99A0AE" />
                        <span className="text-gray-600 truncate" style={{ maxWidth: '250px' }}>
                          {property.amount}
                        </span>
                      </Box>
                    </td>
                  </tr>
                ))}
              </GenericTable>
            </Box>
          </div>

          <Table component={Paper} sx={{ boxShadow: 'none', pt: 2, px: 2 }}>
            <Table aria-label="grid-based table" sx={{ boxShadow: 'none' }}>
              <TableBody>
                <TableRow>
                  <Grid container>
                    <Grid item xs={2}>
                      <div className="py-3 px-7 text-sm font-normal w-40">
                        <span className="text-gray-600 text-sm">Total</span>
                      </div>
                    </Grid>
                    <Grid item xs={2}>
                      <div className="py-3 px-6 text-sm font-normal w-32">
                        <span className="text-gray-600 text-sm flex gap-2 items-center">
                          <IconCoin size={20} color="#99A0AE" />
                          $0.00
                        </span>
                      </div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}>
                      <Box display={'flex'} gap={2} py={1.5} pl={3.5} alignItems={'center'}>
                        <IconMoneySend size={20} color="#99A0AE" />
                        <span className="text-gray-600 text-sm font-normal ">$1010.00</span>
                      </Box>
                    </Grid>
                  </Grid>
                </TableRow>
              </TableBody>
            </Table>
          </Table>

          {/* <table className="min-w-full">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
              
                <td className="py-3 px-4 text-sm font-normal text-left">
                  <span className="text-gray-600 text-sm">Total</span>
                </td>

                
                <td colSpan={4} className="py-3 px-4 text-sm font-normal text-left">
                  <span className="text-gray-600 text-sm flex gap-3 items-center">
                    <IconCoin size={20} color="#99A0AE" />
                    $0.00
                  </span>
                </td>

              
                <td className="py-3 px-4 text-sm font-normal text-right">
                  <div className="flex gap-2 items-center pr-8 2xl:pr-20">
                    <IconMoneySend size={20} color="#99A0AE" />
                    <span className="text-gray-600 truncate">$1010.00</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </>
  );
};
