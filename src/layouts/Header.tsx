import React from 'react';
import LogoImage from '../assets/icons/client-logo.svg';
import { Button } from '@mui/material';
import { IconUser } from '../utils/SvgUtil';

export const Header = () => {
  return (
    <div className="bg-faded-dark px-4 py-3 fixed w-full  z-30">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={LogoImage} className="w-full h-auto" alt="" />
          <span className="text-white font-medium text-md">LawnProSoftware</span>
        </div>
        <div className="flex gap-5">
          <div className="md:flex  hidden items-center gap-2 cursor-pointer">
            <IconUser color="#FFFFFF" size={20} />
            <span className="text-white font-medium text-sm">My Profile</span>
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
