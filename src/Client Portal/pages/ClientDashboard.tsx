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
import { Button, Chip, Divider, Link } from '@mui/material';
import avatar from '../../assets/images/avatar.svg';
import DashboardItem from '../../components/Dashboard/DashboardItem';
import { CheckCircle, OpenInNew } from '@mui/icons-material';

import { ReactComponent as WisestackPatternSVG } from '../../assets/icons/WisestackPattern.svg';
import { PropertyTable } from '../components/PropertyTable';
import EditModal from '../components/EditModal';

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* lefr card  */}
        <div className="grid grid-cols-1 gap-6">
          <div className="p-[16px] border-[#E1E4EA] border rounded-[16px] bg-white shadow-sm ">
            <div className="flex justify-between items-center pb-2">
              <div className="flex gap-2 items-center">
                <IconStatement size={24} color={'#525866'} />
                <span className="font-medium text-[16px] leading-[24px] text-[#0E121B] ">Contact Info</span>
              </div>
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
                <IconPencilEdit size={20} color={'#525866'} />
                Edit
              </Button>
            </div>
            <Divider orientation="horizontal" />
            <div className="pb-[6px] pt-[15px] flex gap-2">
              <img src={avatar} className="w-[72px] h-auto" alt="" />
              <div className="flex flex-col gap-1">
                <span className="font-medium text-[18px] text-[#0E121B] ">Ashlyn Carter</span>
                <div className="flex gap-1 items-center">
                  <IconMail size={16} color="#525866" />
                  <span className="text-[14px] font-normal text-[#525866]">heather_carter@gmail.com</span>
                </div>
                <div className="flex gap-1 items-center">
                  <IconLocation size={16} color="#525866" />
                  <span className="text-[14px] font-normal text-[#525866]">
                    106 Gaither Drive, Gadsden NJ 08054, US
                  </span>
                </div>
              </div>
            </div>
          </div>
          <DashboardItem
            sx={{
              background: '#E7F9F9',
              borderColor: '#07C0CA',
              position: 'relative',
            }}
            className="col-span-1"
          >
            <div className="flex flex-col gap-[18px]">
              <div className="w-full py-[8px]">
                <IconWisestackLogo></IconWisestackLogo>
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
                      '& .MuiChip-icon ': {
                        width: '15px',
                        height: '15px',
                        fill: 'white',
                      },
                      '& .MuiChip-label ': {
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
              <WisestackPatternSVG height="100%"></WisestackPatternSVG>
            </div>
          </DashboardItem>
        </div>

        {/* right card  */}
        <div className="bg-[#FFFFFF] p-[16px] shadow-sm border border-[#E1E4EA] rounded-[16px] ">
          <div className="flex gap-2 items-center">
            <IconStatement size={24} color={'#525866'} />
            <span className="font-medium text-[16px] leading-[24px] text-[#0E121B] ">Statement</span>
          </div>
          <Divider orientation="horizontal" sx={{ padding: '10px 0px' }} />
          <div className="grid grid-cols-2 gap-5 pt-4">
            {statement.map((item) => (
              <div
                key={item.id}
                className="bg-[#F5F7FA] py-[10px] px-[12px] rounded-[10px] flex justify-center items-center flex-col gap-2"
              >
                <div className="w-[40px] h-[40px] bg-white rounded-full border border-[#E1E4EA] flex justify-center items-center">
                  <item.icon size={20} color={item.IconColor} />
                </div>
                <span className="text-[16px] font-medium text-[#0E121B]">{item.value}</span>
                <span className="text-[14px] font-normal text-[#525866]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* table  */}

      <div className="p-[16px] bg-white border-[#E1E4EA] border shadow-sm  w-full rounded-[16px] mt-6 ">
        <div className="flex gap-2 items-center pb-3">
          <IconMap size={24} color={'#525866'} />
          <span className="font-medium text-[16px] leading-[24px] text-[#0E121B] ">Property Details</span>
        </div>
        <Divider orientation="horizontal" />
        <div className="pt-4">
          <PropertyTable />
        </div>
      </div>
    </div>
  );
};
