import { Box, Button, Divider } from '@mui/material';
import React from 'react';
import folder from '../../assets/icons/empty-folder.svg';
import { IconLeftArrow } from '../../utils/SvgUtil';

// Define the props interface
interface NoDataScreenProps {
  title: string;
  Icon: any; // Type for the icon component
}

export const NoDataScreen: React.FC<NoDataScreenProps> = ({ title, Icon }) => {
  return (
    <div className="mt-4 bg-white p-4 rounded-2xl border border-faded-light shadow-sm ">
      <Box display={'flex'} gap={1} alignItems={'center'} pb={2}>
        {Icon}
        <span className="font-medium text-md text-text-dark">{title}</span>
      </Box>
      <Divider orientation="horizontal" />
      <div className="min-h-screen flex justify-center items-center flex-col">
        <img src={folder} alt="folder" />
        <span className="font-medium text-sm text-gray-600 w-2/4 text-center py-3 ">
          It looks like there are no records to show at the moment. Currently you don't have any estimates available.
        </span>
        <Button
          sx={{
            borderRadius: '8px',
            border: 'none',
            color: '#ffff',
            background: '#75A428',
            '&:hover': { backgroundColor: '#a2c56a', color: '#fff' },
          }}
          startIcon={<IconLeftArrow size={20} color="#fff" />}
        >
          Go back to Dashbaord
        </Button>
      </div>
    </div>
  );
};
