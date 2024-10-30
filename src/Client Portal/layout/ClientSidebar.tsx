import React, { useState } from 'react';
import clsx from 'clsx';
import { List, Link, IconButton, Divider } from '@mui/material';
import LogoImage from '../../assets/images/client_logo.svg';
import { generateRandomId } from '../../utils/MathUtil';
import NestedClientList from '../components/NestedClientList';
import clientMenuConfig from '../../config/ClientMenuCofig';

interface SideBarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClientSidebar: React.FC<SideBarProps> = ({ open, setOpen }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!open) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const renderMenuList = () => {
    return Object.entries(clientMenuConfig).map(([key, menu]) => {
      return (
        <NestedClientList
          baseUrl={key}
          menu={menu}
          hovered={hovered}
          expanded={open}
          key={generateRandomId()}
        ></NestedClientList>
      );
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        'h-screen bg-[#FFFFFF] pt-20 text-[#525866] transition-all duration-300 flex-col p-3 fixed  z-[21] min-h-full overflow-y-scroll sidebar',
        {
          'w-full sm:w-72': open || hovered,
          'w-0 left-[-40px] sm:w-16 sm:flex sm:left-0': !open && !hovered,
        },
      )}
    >
      <div className=" flex justify-center">
        <img src={LogoImage} className="max-w-full h-auto" alt="" />
      </div>
      <Divider orientation="horizontal" sx={{ padding: '10px 0px' }} />

      <div className="py-1">
        <List
          sx={{
            gap: '4px', // Spacing between ListItems
            display: 'flex',
            flexDirection: 'column', // To ensure vertical stacking
            component: 'nav',
          }}
        >
          {renderMenuList()}
        </List>
      </div>
    </div>
  );
};
export default ClientSidebar;
