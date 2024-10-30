import React from 'react';
import { IconCalendar, IconCalendarCheckOut, IconCoordinate, IconHome, IconOffice } from '../../utils/SvgUtil';

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
          <tr className="bg-[#F5F7FA] text-[14px] font-normal text-[#525866]">
            <th className="py-2 px-4 text-start">Property Name</th>
            <th className="py-2 px-4 text-start">Tags</th>
            <th className="py-2 px-4 text-start">Lawn Size</th>
            <th className="py-2 px-4 text-start">Last Serviced</th>
            <th className="py-2 px-4 text-start">Next Service</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id} className="hover:bg-gray-100">
              <td className="py-2 text-[14px] font-normal px-4 border-b">
                <div className="flex gap-2 items-center">
                  <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-[#E1E4EA]">
                    <property.icon size={20} color="#525866" />
                  </div>
                  {property.name}
                </div>
              </td>
              <td className="py-2 px-4 text-[14px] font-normal border-b">
                <div className="flex gap-2">
                  {property.subItems.map((item) => (
                    <div
                      key={item.name}
                      className="py-[2px] px-[8px] rounded-full"
                      style={{ backgroundColor: item.bgColor, color: item.color }}
                    >
                      {item.name}
                    </div>
                  ))}
                  <div className="py-[2px] px-[8px] rounded-full text-[#717784] text-[12px] bg-[#F2F5F8]">+4</div>
                </div>
              </td>
              <td className="py-2 px-4 text-[14px] font-normal border-b">
                <div className="flex gap-2 items-center">
                  <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center">
                    <property.lwnIcon size={20} color="#99A0AE" />
                  </div>
                  <span className="text-[#525866]">{property.sq}</span>
                </div>
              </td>
              <td className="py-2 px-4 text-[14px] font-normal border-b">
                <div className="flex gap-2 items-center">
                  <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center">
                    <property.calendar size={20} color="#99A0AE" />
                  </div>
                  <span className="text-[#525866]">{property.lastDate}</span>
                </div>
              </td>
              <td className="py-2 px-4 text-[14px] font-normal border-b">
                <div className="flex gap-2 items-center">
                  <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center">
                    <property.checkInCalendar size={20} color="#99A0AE" />
                  </div>
                  <span className="text-[#525866]">{property.lastDate}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
