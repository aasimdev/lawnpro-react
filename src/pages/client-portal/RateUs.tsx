import React from 'react';
import { IconRate, IconRatingInfo, IconStar, IconStarHalf } from '../../utils/SvgUtil';
import { Box, Button, Divider } from '@mui/material';
import Select2 from '../../components/controllers/Select2';

const customerTitle = [
  {
    label: 'No Title',
    value: '',
  },
  {
    label: 'Aeration',
    value: 'Aeration',
  },
  {
    label: 'Basic Landscaping',
    value: 'Basic Landscaping',
  },
  {
    label: 'Garden Maintenance',
    value: 'Garden Maintenance',
  },
  {
    label: 'Lawn Treatment',
    value: 'Lawn Treatment',
  },
];

export const RateUs = () => {
  return (
    <div className="px-8 pb-6 pt-40 bg-gray-week">
      <div className="max-w-135 mx-auto">
        <div className=" p-4 bg-white rounded-2xl border border-main-gray">
          <Box display={'flex'} gap={1} pb={2}>
            <IconRate size={24} color="#525866" />
            <span className="text-md font-medium text-text-dark">Rate & Review</span>
          </Box>
          <Divider orientation="horizontal" />
          <div className="flex flex-col gap-4 py-4">
            <Box display={'flex'} gap={2}>
              <span className="text-4xl-plus font-medium text-text-dark">4.5</span>
              <div className="w-px bg-main-gray"></div>
              <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'56px'}>
                <Box display={'flex'} gap={0.5}>
                  <IconStar size={20} color="#F6B51E" />
                  <IconStar size={20} color="#F6B51E" />
                  <IconStar size={20} color="#F6B51E" />
                  <IconStar size={20} color="#F6B51E" />
                  <IconStarHalf size={20} color="#F6B51E" />
                </Box>
                <span className="text-sm font-normal text-text-dark">
                  4.5 ∙ 5.2K Ratings <span className="font-medium underline text-gray-600">18 reviews</span>
                </span>
              </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <Box display={'flex'} gap={0.5} alignItems={'center'}>
                <span className="text-sm text-text-dark font-medium">Your Rating</span>
                <IconRatingInfo size={13} color="#CACFD8" />
              </Box>
              <Box display={'flex'} gap={2} alignItems={'center'}>
                <div className="p-3 rounded-xl w-23 flex justify-center border border-faded-light bg-white shadow-sm">
                  <IconStar size={32} color="#F6B51E" />
                </div>
                <div className="p-3 rounded-xl w-23 flex justify-center border border-faded-light bg-white shadow-sm">
                  <IconStar size={32} color="#F6B51E" />
                </div>
                <div className="p-3 rounded-xl w-23 flex justify-center border border-faded-light bg-white shadow-sm">
                  <IconStar size={32} color="#F6B51E" />
                </div>
                <div className="p-3 rounded-xl w-23 flex justify-center border border-faded-light bg-white shadow-sm">
                  <IconStar size={32} color="#F6B51E" />
                </div>
                <div className="p-3 rounded-xl w-23 flex justify-center border border-faded-light bg-white shadow-sm">
                  <IconStar size={32} color="#CACFD8" />
                </div>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex">
                <span className="text-sm font-medium text-text-dark">Service Performed</span>
                <span className="text-sm text-primary-base">*</span>
              </Box>

              <Select2 options={customerTitle} placeholder="Select" buttonClass="border-faded-light" />
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex">
                <span className="text-sm font-medium text-text-dark">Write a Review</span>
                <span className="text-sm font-normal text-gray-600">(Optional)</span>
              </Box>
              <textarea
                placeholder="Placeholder text..."
                className="py-2.5 pl-3 pr-2.5 outline-none border border-faded-light rounded-xl"
              ></textarea>
            </Box>
            <div className=" pt-2 flex justify-end gap-2">
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '8px',
                  border: '1px solid #E1E4EA',
                  color: '#525866',
                  width: '120px',
                  '&:hover': {
                    backgroundColor: '#E1E4EA',
                    color: '#000',
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '8px',
                  background: '#75A428',
                  color: '#fff',
                  width: '120px',

                  '&:hover': {
                    backgroundColor: '#639922', // Darker green for hover effect
                    color: '#fff',
                  },
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-3.5 px-3.5 pb-4 rounded-xl bg-green-50 border border-green-200">
          <Box display={'flex'} gap={2}>
            <Box>
              <IconStar size={20} color="#75A428" />
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <span className="font-medium text-sm text-text-dark">Rate & Review LawnProSoftware.com</span>
              <span className="text-sm font-normal text-text-dark ">
                Please take a minute to rate and review LawnProSoftware.com If you can tell us how LawnProSoftware.com
                has saved you time, made your life easier, what you liked about our service, etc that would be awesome!
                If there is something we could do better, please tell us that too...
              </span>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};
