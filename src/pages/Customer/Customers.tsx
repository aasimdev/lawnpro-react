import React, { useEffect, useState } from 'react';
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs';
import { Avatar, Link } from '@mui/material';
import {
  IconAdd,
  IconCalendar,
  IconCall,
  IconDownload,
  IconHome,
  IconLocation,
  IconRanking,
  IconSafeDelivery,
  IconUser,
  IconUserSearch,
} from '../../utils/SvgUtil';
import DropdownMenu, { DropdownMenuItemProps } from '../../components/DropdownMenu';
import DataTable from '../../components/DataTable/DataTable';
import { CustomersData } from '../../config/TableData';
import { Column } from '../../components/DataTable/ColumnSelector';
import { formatToCurrency } from '../../utils/MathUtil';
import { formatDateString } from '../../utils/DateUtil';

interface CustomerData {
  id: number;
  name: string;
  company_name: string;
  email: string;
  status: number;
  created_date: string;
  credit: number;
  balance: number;
  type: number;
  tags: string;
  address: string;
  phone: string;
  credit_ach: string;
  notes: string;
  active_contract: string;
  avatar: string;
}

const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<CustomerData[]>([]);
  const [selectedCustomers, setSelectedCustomers] = useState<CustomerData[]>([]);

  const handleSelectionChange = (selectedRows: CustomerData[]) => {
    setSelectedCustomers(selectedRows);
  };
  useEffect(() => {
    // Function to trigger on page load
    // const fetchData = async () => {
    //     // Your logic here
    //     console.log("Page loaded, function triggered");
    // };

    // fetchData(); // Call the function
    setCustomers(CustomersData);
  }, []); // Empty dependency array to run only on component mount

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      <IconHome size={20} color="black" />
    </Link>,
    <Link underline="hover" key="2" color="black" href="/customers/">
      Customers
    </Link>,
  ];
  const newCustomerItem = [
    {
      title: 'New Customer',
    },
    {
      title: 'Import Customers',
    },
  ];
  const exportCSVItem = [
    {
      title: 'All Customer Details',
    },
    {
      title: 'Selected Columns & Customers',
    },
  ];

  const columns: Column<CustomerData>[] = [
    { header: 'ID', accessor: 'id', sortable: true },
    {
      header: 'Name',
      accessor: 'name',
      sortable: true,
      render: (row: CustomerData) => (
        <div className="flex items-center gap-2">
          <Avatar src={row.avatar} alt="" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{row['name']}</span>
            <span className="text-xs">{row['email']}</span>
          </div>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      sortable: false,
      render: (row: CustomerData) =>
        row['status'] ? (
          <div className="text-success-base bg-success-light rounded-full px-2 py-0.5 text-xs">• Active</div>
        ) : (
          <div className="text-error-base bg-error-light rounded-full px-2 text-xs py-0.5">• In-Active</div>
        ),
    },
    {
      header: 'Date Added',
      accessor: 'created_date',
      sortable: false,
      render: (row: CustomerData) => (
        <div className="flex items-center gap-1 text-sm">
          <IconCalendar size={18} color="#99A0AE" />
          {formatDateString(row['created_date'], 'MMM DD, YYYY')}
        </div>
      ),
    },
    {
      header: 'Account Credit',
      accessor: 'credit',
      sortable: false,
      render: (row: CustomerData) => formatToCurrency(row['credit']),
    },
    {
      header: 'Account Balance',
      accessor: 'balance',
      sortable: false,
      render: (row: CustomerData) => formatToCurrency(row['balance']),
    },
    { header: 'Type', accessor: 'type', sortable: false },
    { header: 'Tags', accessor: 'tags', sortable: false },
    {
      header: 'Contracts/Address',
      accessor: 'address',
      sortable: false,
      render: (row: CustomerData) => (
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <IconLocation size={14} />
            <span>{row['address']}</span>
          </div>
          <div>
            <IconCall size={14} />
            <span>{row['phone']}</span>
          </div>
        </div>
      ),
    },
    { header: 'Credit Card/ACH', accessor: 'credit_ach', sortable: false },
    { header: 'Notes', accessor: 'notes', sortable: false },
    { header: 'Active Contract', accessor: 'active_contract', sortable: false },
  ];

  const actionDropdown: DropdownMenuItemProps[] = [
    {
      title: 'Active',
      trigger: () => {},
    },
    {
      title: 'Inactive',
      trigger: () => {},
    },
    {
      title: 'Edit Bulk Tags',
      trigger: () => {},
    },
    {
      title: 'Delete Selected',
      trigger: () => {},
    },
  ];

  return (
    <div className="px-8 pt-4 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <CustomBreadcrumbs elements={breadcrumbs}></CustomBreadcrumbs>
        <div className="flex items-center gap-3">
          <DropdownMenu
            title="Export CSV"
            icon={<IconDownload size={14} color="#525866" />}
            items={exportCSVItem}
            className="bg-white text-[#525866] rounded-lg border-solid border-[1px] border-main-gray"
          />
          <DropdownMenu
            title="New Customer"
            icon={<IconAdd size={14} color="white" />}
            items={newCustomerItem}
            className="bg-[#75A428] text-white rounded-lg"
          />
        </div>
      </div>
      {/* Panels */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
          <div className="flex flex-col w-full gap-3">
            <span className="text-gray-600 text-mini font-medium uppercase">Total Customers</span>
            <div className="flex gap-2 items-center">
              <span className="text-3xl-plus font-medium leading-8">166</span>
              <span className="bg-success-light text-success-dark rounded-full px-2 py-0.5 text-xs font-medium">
                +2%
              </span>
            </div>
          </div>
          <div className="border-green-200 border-mini p-mid rounded-full">
            <IconUser color="#75A428" size={18} />
          </div>
        </div>
        <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
          <div className="flex flex-col w-full gap-3">
            <span className="text-gray-600 text-mini font-medium uppercase">Prospects</span>
            <div className="flex gap-2 items-center">
              <span className="text-3xl-plus font-medium leading-8">5</span>
              <span className="bg-error-light text-error-dark rounded-full px-2 py-0.5 text-xs font-medium">-2%</span>
            </div>
          </div>
          <div className="border-orange-200 border-mini p-mid rounded-full">
            <IconUserSearch color="#E97135" size={18} />
          </div>
        </div>
        <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
          <div className="flex flex-col w-full gap-3">
            <span className="text-gray-600 text-mini font-medium uppercase">Suppliers</span>
            <div className="flex gap-2 items-center">
              <span className="text-3xl-plus font-medium leading-8">28</span>
              <span className="bg-success-light text-success-dark rounded-full px-2 py-0.5 text-xs font-medium">
                +7%
              </span>
            </div>
          </div>
          <div className="border-teal-200 border-mini p-mid rounded-full">
            <IconSafeDelivery color="#178C7D" size={18} />
          </div>
        </div>
        {/* <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
                    <div className="flex flex-col w-full gap-3">
                        <span className="text-gray-600 text-mini font-medium uppercase">Competitors</span>
                        <div className="flex gap-2 items-center leading-8">
                            <span className="text-3xl-plus font-medium">0</span>
                            <span className="bg-faded-light text-faded-dark rounded-full px-2 py-0.5 text-xs font-medium">0%</span>                        </div>
                    </div>
                    <div className="border-blue-200 border-mini p-mid rounded-full">
                        <IconRanking color="#6895FF" size={18} />
                    </div>
                </div> */}
      </div>
      <DataTable
        data={customers}
        columns={columns}
        totalPages={5}
        actionMenu={actionDropdown}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  );
};

export default Customers;
