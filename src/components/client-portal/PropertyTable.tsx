import React from 'react';
import { IconCalendar, IconCalendarCheckOut, IconCoordinate, IconHome, IconOffice } from '../../utils/SvgUtil';
import { Box } from '@mui/material';

type SubItem = {
  name: string;
  color: string;
  bgColor: string;
};

type Property = {
  id: number;
  name: string;
  location: string;
  icon: any;
  subItems: SubItem[];
  lwnIcon: any;
  sq: string;
  calendar: any;
  lastDate: string;
  checkInCalendar: any;
  nextDate: string;
};

const properties: Property[] = [
  {
    id: 1,
    icon: IconHome,
    name: 'Home',
    location: 'Miami, FL',
    subItems: [
      {
        name: 'Garden',
        color: '#335CFF',
        bgColor: '#EBF1FF',
      },
      {
        name: 'Home',
        color: '#7D52F4',
        bgColor: '#EFEBFF',
      },
    ],
    lwnIcon: IconCoordinate,
    sq: '320 Sq. Feet',
    calendar: IconCalendar,
    lastDate: 'Oct 02, 2024',
    nextDate: 'Oct 11, 2024',
    checkInCalendar: IconCalendarCheckOut,
  },

  {
    id: 2,
    icon: IconOffice,
    name: 'Office',
    location: 'Miami, FL',
    subItems: [
      {
        name: 'Office',
        color: '#FF8447',
        bgColor: '#FFF1EB',
      },
      {
        name: 'Backyard',
        color: '#FB4BA3',
        bgColor: '#FFEBF4',
      },
    ],
    lwnIcon: IconCoordinate,
    sq: '560 Sq. Feet',
    calendar: IconCalendar,
    lastDate: 'Oct 05, 2024',
    nextDate: 'Oct 18, 2024',
    checkInCalendar: IconCalendarCheckOut,
  },
];

export const PropertyTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-week text-sm font-normal text-gray-600">
            <th className="py-2 px-4 text-start">Property Name</th>
            <th className="py-2 px-4 text-start">Tags</th>
            <th className="py-2 px-4 text-start">Lawn Size</th>
            <th className="py-2 px-4 text-start">Last Serviced</th>
            <th className="py-2 px-4 text-start">Next Service</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id} className="hover:bg-primary-alpha">
              <td className="py-2 text-sm font-normal px-4 border-b">
                <Box display={'flex'} gap={2} alignItems={'center'}>
                  <div className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E1E4EA]">
                    <property.icon size={20} color="#525866" />
                  </div>
                  {property.name}
                </Box>
              </td>
              <td className="py-2 px-4 text-sm font-normal border-b">
                <div className="flex gap-2">
                  {property.subItems.map((item) => (
                    <div
                      key={item.name}
                      className="py-0.5 px-2 rounded-full"
                      style={{ backgroundColor: item.bgColor, color: item.color }}
                    >
                      {item.name}
                    </div>
                  ))}
                  <div className="py-0.5 px-2 rounded-full text-gray-800 text-xs bg-gray-700">+4</div>
                </div>
              </td>
              <td className="py-2 px-4 text-sm font-normal border-b">
                <Box display={'flex'} gap={2} alignItems={'center'}>
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <property.lwnIcon size={20} color="#99A0AE" />
                  </div>
                  <span className="text-gray-600">{property.sq}</span>
                </Box>
              </td>
              <td className="py-2 px-4 text-sm font-normal border-b">
                <Box display={'flex'} gap={2} alignItems={'center'}>
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <property.calendar size={20} color="#99A0AE" />
                  </div>
                  <span className="text-gray-600">{property.lastDate}</span>
                </Box>
              </td>
              <td className="py-2 px-4 text-sm font-normal border-b">
                <Box display={'flex'} gap={2} alignItems={'center'}>
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <property.checkInCalendar size={20} color="#99A0AE" />
                  </div>
                  <span className="text-gray-600">{property.lastDate}</span>
                </Box>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
