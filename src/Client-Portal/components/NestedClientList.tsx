import React, { useState } from 'react';
import { MenuItem } from '../../config/MenuConfig';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import splitPath from '../../utils/PathUtil';
import CustomIcon from '../../components/CustomIcon';

export interface NestedListItemProps {
  baseUrl: string;
  menu: MenuItem;
  hovered: boolean;
  expanded: boolean;
}

const NestedClientList: React.FC<NestedListItemProps> = ({ baseUrl, menu, hovered, expanded }) => {
  const [hover, setHover] = useState(false);
  const location = useLocation();
  const path = splitPath(location.pathname);
  const menuSelected = path[0] === baseUrl;
  const [open, setOpen] = React.useState(menuSelected);

  // Create an array to track hover state for each submenu item
  const [subMenuHover, setSubMenuHover] = useState<number | null>(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  return (
    <>
      <ListItemButton
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        key={baseUrl}
        sx={{
          display: 'flex',
          alignItems: 'left',
          gap: '10px',
          padding: '10px',
          '&:hover': {
            backgroundColor: '#75A428',
            color: 'white',
          },
          background: menuSelected ? '#75A428 !important' : '',
          borderRadius: '8px',
          height: '40px',
          color: menuSelected ? '#ffff' : '',
        }}
        onClick={() => {
          if (menu.subMenu !== undefined) {
            handleClick();
          } else {
            console.log('Condition not met');
            navigate(baseUrl);
          }
        }}
      >
        <ListItemIcon
          sx={{
            display: 'inline-block',
            minWidth: 'auto',
            '&:hover': {
              color: 'white',
            },
          }}
        >
          <CustomIcon iconPath={menu['icon']} color={hover || menuSelected ? 'white' : '#525866'} size={20} />
        </ListItemIcon>
        <ListItemText
          primary={menu['title']}
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontWeight: 500,
            lineHeight: '20px',
          }}
        />
        {menu.subMenu !== undefined ? open ? <ExpandLess /> : <ExpandMore /> : <></>}
      </ListItemButton>
      {menu.subMenu !== undefined ? (
        <Collapse in={expanded ? open : hovered && open} timeout="auto" unmountOnExit>
          <List
            component="div"
            sx={{
              gap: '4px',
              display: 'flex',
              flexDirection: 'column',
              padding: '0 0 0 8px',
            }}
            key={baseUrl}
          >
            {menu.subMenu.map((subMenu, subKey) => (
              <ListItemButton
                href={baseUrl + subMenu.url}
                onMouseEnter={() => setSubMenuHover(subKey)} // Set hover state to the index
                onMouseLeave={() => setSubMenuHover(null)} // Reset hover state
                sx={{
                  display: 'flex',
                  alignItems: 'left',
                  gap: '10px',
                  paddingLeft: '16px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#75A428',
                    color: 'white',
                  },
                  background: subMenu.url === path[1] ? '#75A428 !important' : '',
                  height: '40px',
                  color: subMenu.url === path[1] ? '#ffff' : '',
                }}
                key={subMenu.url}
              >
                <ListItemIcon
                  sx={{
                    display: 'inline-block',
                    minWidth: 'auto',
                  }}
                >
                  {/* Change icon color based on whether the specific submenu is hovered */}
                  <CustomIcon
                    iconPath={subMenu['icon']}
                    color={subMenuHover === subKey || subMenu.url === path[1] ? 'white' : '#525866'}
                    size={20}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={subMenu['title']}
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontWeight: 500,
                    lineHeight: '20px',
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      ) : (
        <></>
      )}
    </>
  );
};

export default NestedClientList;
