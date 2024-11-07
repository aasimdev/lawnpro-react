import React, { useState } from 'react';
import { IconAddCircle, IconFilter, IconSearch, IconSorting, IconWork } from '../../utils/SvgUtil';
import { Box, Button, Divider, TextField } from '@mui/material';
import DropdownMenu from '../../components/DropdownMenu';
import user from '../../assets/images/user-img.svg';
import { NoDataScreen } from '../../components/client-portal/NoDataScreen';
import { FilterDropdown } from '../../components/client-portal/FilterDropdown';
import us from '../../assets/country/us.svg';
import { WorkData } from '../../components/client-portal/WorkData';

const status = [
  {
    title: 'All',
  },
  {
    title: 'Partial Paid',
  },
  {
    title: 'Full Paid',
  },
];
const jobData = [
  {
    id: '#10343',
    title: 'Basic Landscaping',
    customer: 'Ashley Carter',
    email: 'heather_carter@gmail.com',
    phone: '(555) 000-0000',
    address: '106 Gaither Drive, Gadsden NJ 08054, US',
    createdAt: 'June 04, 2024',
    status: {
      label: 'Completed',
      color: 'bg-success-base',
    },
  },
  {
    id: '#10343',
    title: 'Garden Maintenance',
    customer: 'Ashley Carter',
    email: 'heather_carter@gmail.com',
    phone: '(555) 000-0000',
    address: '106 Gaither Drive, Gadsden NJ 08054, US',
    createdAt: 'June 04, 2024',
    status: {
      label: 'In Progress',
      color: 'bg-warning-base',
    },
    description:
      'Lawn aeration, regular mowing to maintain an even height, and seasonal fertilizers to promote growth.',
  },
];
const countries = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
];

const customerTitle = [
  {
    label: 'No Title',
    value: '',
  },
  {
    label: '+1.',
    value: '+1.',
    img: us,
  },
  {
    label: '+92',
    value: '+92',
    img: us,
  },
  {
    label: '+91',
    value: '+91',
    img: us,
  },
  {
    label: '+40',
    value: '+40',
    img: us,
  },
];

export const WorkRequest = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [opens, setOpens] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const [showContent, setShowContent] = useState(false);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const openFilter = Boolean(filterAnchorEl);
  const [selectedValue, setSelectedValue] = useState([]); // Stores selected values

  const handleChange = (key: string, value: React.SetStateAction<never[]>) => {
    if (key === 'customer_title') {
      setSelectedValue(value); // Updates selected values
    }
  };

  const handleClick = () => {
    setOpens(!opens);
  };
  const handleButtonClick = () => {
    setShowContent(true);
  };

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };
  const handleCountrySelect = (country: { code: string; name: string; flag: string }) => {
    setSelectedCountry(country);
    setOpens(false);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="px-8 pb-6 pt-20 bg-gray-week">
      {!showContent && (
        <NoDataScreen
          title="Work Request"
          Icon={<IconWork size={24} color="#525866" />}
          desc={`You haven’t created any work requests yet. Need help with your lawn? Start by creating a work request now!`}
          btnIcon={<IconAddCircle size={20} color="#fff" />}
          btnTitle={'Create New Request'}
          path={''}
          onClick={handleButtonClick}
        />
      )}
      {showContent && (
        <div className="mt-4 bg-white p-4 rounded-2xl border border-faded-light shadow-sm ">
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} pb={2}>
            <Box display={'flex'} gap={1} alignItems={'center'}>
              <IconWork size={24} color="#525866" />
              <span className="font-medium text-md text-text-dark">Work Request</span>
            </Box>
            <Button
              sx={{
                borderRadius: '8px',
                border: 'none',
                color: '#ffff',
                background: '#75A428',
                '&:hover': { backgroundColor: '#a2c56a', color: '#fff' },
              }}
              startIcon={<IconAddCircle size={20} color="#fff" />}
              onClick={handleOpen}
            >
              New Request
            </Button>
          </Box>
          <Divider orientation="horizontal" />
          <div className="flex items-center justify-between pt-4  ">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg shadow-sm w-72 border border-main-gray flex justify-between items-center">
                <Box display="flex" alignItems="center" gap={1}>
                  <IconSearch size={20} color="#99A0AE" />
                  <TextField
                    variant="standard"
                    placeholder="Search..."
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{
                      border: 'none',
                      outline: 'none',
                      '& .MuiInputBase-input': { padding: 0 },
                      '& .MuiInputBase-input::placeholder': { color: '#99A0AE' },
                    }}
                  />
                </Box>
                <div className="px-1.5 py-0.5 cursor-pointer text-soft-400 text-xs rounded-md border border-main-gray  ">
                  ⌘1
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3">
              <Button
                sx={{
                  borderRadius: '8px',
                  border: '1px solid #E1E4EA',
                  color: '#525866',
                  '&:hover': { backgroundColor: 'transparent', color: '#525866' },
                }}
                startIcon={<IconFilter size={20} color="#99A0AE" />}
                onClick={handleFilterClick}
              >
                Filter
              </Button>

              <FilterDropdown
                filterAnchorEl={filterAnchorEl}
                open={openFilter}
                handleFilterClose={handleFilterClose}
                status={status}
              />

              <DropdownMenu
                title="Sort by"
                className="bg-white text-gray-600 rounded-lg border-solid border-[1px] border-main-gray"
                items={[{ title: 'Ascending' }, { title: 'Descending' }]}
                icon={<IconSorting size={20} color="#99A0AE" />}
              />
            </div>
          </div>

          <WorkData
            data={jobData}
            img={user}
            handleClose={handleClose}
            open={open}
            customerTitle={customerTitle}
            selectedValue={selectedValue}
            handleChange={handleChange}
            handleClick={handleClick}
            selectedCountry={selectedCountry}
            opens={opens}
            countries={countries}
            handleCountrySelect={handleCountrySelect}
          />
        </div>
      )}
    </div>
  );
};
