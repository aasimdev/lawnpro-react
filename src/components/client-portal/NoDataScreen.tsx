import { Box, Button, Divider } from '@mui/material';
import React from 'react';
import folder from '../../assets/icons/empty-folder.svg';
import { useNavigate } from 'react-router-dom';

interface NoDataScreenProps {
  title: string;
  Icon: any;
  desc: string;
  btnIcon: any;
  btnTitle: string;
  path: string;
  onClick?: any;
}

export const NoDataScreen: React.FC<NoDataScreenProps> = ({ title, Icon, desc, btnIcon, btnTitle, path, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="mt-4 bg-white p-4 rounded-2xl border border-faded-light shadow-sm ">
      <Box display={'flex'} gap={1} alignItems={'center'} pb={2}>
        {Icon}
        <span className="font-medium text-md text-text-dark">{title}</span>
      </Box>
      <Divider orientation="horizontal" />
      <div className="min-h-screen flex justify-center items-center flex-col gap-5">
        <img src={folder} alt="folder" />
        <span className="font-medium text-sm text-gray-600 w-2/4 text-center  ">{desc}</span>
        <Button
          sx={{
            borderRadius: '8px',
            border: 'none',
            color: '#ffff',
            background: '#75A428',
            '&:hover': { backgroundColor: '#a2c56a', color: '#fff' },
          }}
          startIcon={btnIcon}
          onClick={() => {
            path ? handleClick() : onClick();
          }}
        >
          {btnTitle}
        </Button>
      </div>
    </div>
  );
};
