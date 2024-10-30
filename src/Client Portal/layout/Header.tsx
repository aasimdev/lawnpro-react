import React from 'react';
import LogoImage from '../../assets/icons/client-logo.svg';
import { IconUser } from '../../utils/SvgUtil';
import { Button } from '@mui/material';

export const Header = () => {
  return (
    <div className="bg-[#222530] px-[16px] py-[10px] fixed w-full  z-[22]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={LogoImage} className="w-full h-auto" alt="" />
          <span className="text-white font-medium text-[16px]">LawnProSoftware</span>
        </div>
        <div className="flex gap-5">
          <div className="md:flex  hidden items-center gap-2">
            <IconUser color="#FFFFFF" size={20} />
            <span className="text-white font-medium text-[14px]">My Profile</span>
          </div>
          <Button
            sx={{
              borderRadius: '8px',
              background: '#525866',
              color: 'white',
              border: 'none',
              '&:hover': {
                background: '#6c757d',
                color: '#f0f0f0',
              },
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};
