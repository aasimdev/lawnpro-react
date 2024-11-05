import { Box, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { IconCompact, IconDateCalendar, IconDownload, IconPreview } from '../../utils/SvgUtil';
import pic1 from '../../assets/images/pic-1.svg';
import pic2 from '../../assets/images/pic-2.svg';
import pic3 from '../../assets/images/pic-3.svg';
import pic4 from '../../assets/images/pic-4.svg';

const actions = [
  {
    id: 1,
    title: 'Download',
    icon: <IconDownload size={20} color="#525866" />,
  },
  {
    id: 2,
    title: 'Preview',
    icon: <IconPreview size={20} color="#525866" />,
  },
];

const picturesData = [
  {
    id: 1,
    date: 'Jun 13, 2023',
    images: [
      { src: pic1, label: 'Before', bgColor: 'bg-error-base' },
      { src: pic2, label: 'After', bgColor: 'bg-information-base' },
    ],
  },
  {
    id: 2,
    date: 'Feb 02, 2023',
    images: [
      { src: pic3, label: 'Before', bgColor: 'bg-error-base' },
      { src: pic4, label: 'After', bgColor: 'bg-information-base' },
    ],
  },
];

export const Pictures = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="px-8 pb-6 pt-20 bg-gray-week">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {picturesData.map((item) => (
          <div key={item.id} className="p-4 bg-white border border-faded-light rounded-2xl shadow-sm">
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} pb={2}>
              <Box display={'flex'} gap={1} alignItems={'center'}>
                <IconDateCalendar size={20} color="#525866" />
                <span className="text-gray-600 text-xs uppercase">{item.date}</span>
              </Box>
              <div className="cursor-pointer" onClick={handleClick}>
                <IconCompact size={24} color="#525866" />
              </div>
            </Box>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.images.map((img, index) => (
                <div key={index} className="relative rounded-xl shadow-sm">
                  <img src={img.src} className="max-w-full w-full h-auto" alt="" />
                  <div
                    className={`absolute py-0.5 px-2 text-white uppercase rounded-full ${img.bgColor} top-2 right-2 text-mini`}
                  >
                    {img.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          marginTop: '4px',
          '& .MuiMenu-paper': {
            borderRadius: '16px',
            boxShadow: '0px 16px 32px -12px rgba(14, 18, 27, 0.10)',
            border: '1px solid #E1E4EA',
          },
        }}
      >
        {actions.map((action) => (
          <MenuItem key={action.id} sx={{ display: 'flex', gap: 1 }}>
            {action.icon} {action.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
