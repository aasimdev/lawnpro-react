import { Popover } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { IconArrowDown } from '../../utils/SvgUtil';

interface FilterDropdownProps {
  filterAnchorEl: null | HTMLElement;
  open: boolean;
  handleFilterClose: () => void;
  status: any;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({ filterAnchorEl, open, handleFilterClose, status }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('All');

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option.title);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (!open) {
      setIsDropdownOpen(false); // Close dropdown when popover is closed
    }
  }, [open]);

  return (
    <Popover
      open={open}
      anchorEl={filterAnchorEl}
      onClose={handleFilterClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      sx={{
        '& .MuiPopover-paper': {
          borderRadius: '16px',
          boxShadow: '0px 16px 32px -12px rgba(14, 18, 27, 0.10)',
          border: '1px solid #E1E4EA',
          overflow: 'visible',
        },
      }}
    >
      <div className="grid items-center p-5 grid-cols-12 h-max gap-5">
        <div className="flex flex-col col-span-12 w-full text-sm font-medium gap-1">
          <span>Status</span>
          <div className="relative w-30">
            <button
              onClick={toggleDropdown}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-left flex items-center justify-between"
            >
              <span className="text-gray-600 text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                {selectedOption}
              </span>
              <IconArrowDown color="#525866" />
            </button>

            {isDropdownOpen && (
              <ul
                className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-[9999]"
                style={{
                  position: 'absolute',
                  marginTop: '0',
                }}
              >
                {status.map((option: any) => (
                  <li
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    className="px-4 py-2 cursor-pointer hover:bg-primary-base hover:text-white text-sm font-medium text-gray-600"
                  >
                    {option.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Popover>
  );
};
