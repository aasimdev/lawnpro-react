import React, { useState } from 'react';
import {
  IconCreditCard,
  IconDolor,
  IconEmail,
  IconEmptyCalendar,
  IconLocation,
  IconMail,
  IconMap,
  IconPencilEdit,
  IconSaveMoneyDollar,
  IconStatement,
  IconWisestackLogo,
} from '../../utils/SvgUtil';
import { Box, Button, Chip, Divider, Grid, Link } from '@mui/material';
import avatar from '../../assets/images/avatar.svg';
import DashboardItem from '../../components/Dashboard/DashboardItem';
import { CheckCircle, OpenInNew } from '@mui/icons-material';

import { ReactComponent as WisestackPatternSVG } from '../../assets/icons/WisestackPattern.svg';
import { PropertyTable } from '../components/PropertyTable';
import EditModal from '../components/EditContactModal';

const statement = [
  {
    id: 1,
    icon: IconSaveMoneyDollar,
    value: '$232,228.22',
    desc: 'Outstanding Balance',
    IconColor: '#335CFF',
  },
  {
    id: 2,
    icon: IconDolor,
    value: '$150,998.32',
    desc: 'Paid',
    IconColor: '#75A428',
  },
  {
    id: 3,
    icon: IconCreditCard,
    value: '$9,920.66',
    desc: 'Credit',
    IconColor: '#525866',
  },
  {
    id: 4,
    icon: IconEmptyCalendar,
    value: '$232,053.30',
    desc: 'Past Due',
    IconColor: '#FB3748',
  },
];

export const ClientDashboard = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="px-8 pb-6 pt-20 bg-[#F5F7FA]">
      <EditModal open={open} handleClose={handleClose} />
      <Grid container spacing={2}>
        {/* Left Card */}
        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className="p-4 border border-faded-light rounded-xl bg-white shadow-sm">
                <div className="flex justify-between items-center pb-2">
                  <Box display={'flex'} gap={2} alignItems={'center'}>
                    <IconStatement size={24} color="#525866" />
                    <span className="font-medium text-md text-text-dark">Contact Info</span>
                  </Box>
                  <Button
                    sx={{
                      borderRadius: '8px',
                      background: '#fff',
                      color: '#525866',
                      marginLeft: '14px',
                      '&:hover': {
                        background: '#e0e0e0',
                        color: '#333',
                      },
                    }}
                    onClick={handleOpen}
                  >
                    <IconPencilEdit size={20} color="#525866" />
                    Edit
                  </Button>
                </div>
                <Divider />
                <div className="pb-2 pt-3 flex gap-2">
                  <img src={avatar} className="w-70 h-auto" alt="" />
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-lg text-text-dark">Ashlyn Carter</span>
                    <div className="flex gap-1 items-center">
                      <IconMail size={16} color="#525866" />
                      <span className="text-sm font-normal text-gray-600">heather_carter@gmail.com</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <IconLocation size={16} color="#525866" />
                      <span className="text-sm font-normal text-gray-600">106 Gaither Drive, Gadsden NJ 08054, US</span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div
                style={{
                  background: '#E7F9F9',
                  borderColor: '#07C0CA',
                  position: 'relative',
                }}
                className="rounded-xl p-4 border border-[#E1E4EA]"
              >
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
        </Grid>

        {/* Right Card */}
        <Grid item xs={12} lg={6}>
          <div className="bg-white p-4 shadow-sm border border-[#E1E4EA] rounded-xl">
            <Box display="flex" alignItems="center" gap={2}>
              <IconStatement size={24} color="#525866" />
              <span className="font-medium text-md text-text-dark">Statement</span>
            </Box>
            <Divider sx={{ padding: '10px 0px' }} />
            <Grid container spacing={2} pt={2}>
              {statement.map((item) => (
                <Grid item xs={6} key={item.id}>
                  <div className="bg-[#F5F7FA] py-2 px-3 rounded-md flex flex-col items-center gap-2">
                    <div className="w-10 h-10 bg-white rounded-full border border-[#E1E4EA] flex items-center justify-center">
                      <item.icon size={20} color={item.IconColor} />
                    </div>
                    <span className="text-md font-medium text-text-dark">{item.value}</span>
                    <span className="text-sm font-normal text-gray-600">{item.desc}</span>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>

      {/* table  */}

      <div className="p-4 bg-white border-[#E1E4EA] border shadow-sm  w-full rounded-xl mt-6 ">
        <Box display={'flex'} gap={2} alignItems={'center'} pb={3}>
          <IconMap size={24} color={'#525866'} />
          <span className="font-medium text-md   text-text-dark ">Property Details</span>
        </Box>
        <Divider orientation="horizontal" />
        <div className="pt-4">
          <PropertyTable />
        </div>
      </div>
    </div>
  );
};
