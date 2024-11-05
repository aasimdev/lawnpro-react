import React, { useEffect, useState } from "react";
import CustomBreadcrumbs from "../../components/controllers/CustomBreadcrumbs";
import { Avatar, Link } from "@mui/material";
import { IconCall, IconCredit, IconCreditCardValidation, IconCreditNotFound, IconHome, IconLocation, IconMail, IconMoreLine, IconPayByCheck, IconSelectBoxCircleFill } from "../../utils/SvgUtil";
import DropdownMenu, { DropdownMenuItemProps } from "../../components/controllers/DropdownMenu";
import DataTable from "../../components/datatable/DataTable";
import { Column } from "../../components/datatable/ColumnSelector";
import IconDropdown from "../../components/controllers/IconDropdown";

interface CustomerCreditData {
    id: number;
    avatar: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    hasCredit: boolean;
    bankName?: string;
    last4digits?: number;
    achStatus?: boolean;
    achVerified?: boolean;
}

const CREDIT_COLUMN = 0xffff;
const ACH_COLUMN = 0xfffe;

const ManageCredit: React.FC = () => {
    const [customerCreditCards, setCustomerCreditCards] = useState<CustomerCreditData[]>([]);
    const [selectedType, setSelectedType] = useState(0);
    const [columnType, setColumnType] = useState(CREDIT_COLUMN);

    const customerCreditData: CustomerCreditData[] = [{
        id: 1053,
        name: "Brad Blanchard",
        avatar: "/images/tempAvatar.jpg",
        email: "brad.blanch@gmail.com",
        phone: "225-354-6148",
        address: "17962 Heritage Estate Drive Gadsden AL 35901",
        hasCredit: true,
    }, {
        id: 1054,
        name: "Patrick Cash",
        avatar: "/images/tempAvatar.jpg",
        email: "cash@gmail.com",
        phone: "532-155-6148",
        address: "17962 Heritage Estate Drive Gadsden AL 35901",
        hasCredit: false,
    }, {
        id: 1054,
        name: "James Carter",
        avatar: "/images/tempAvatar.jpg",
        email: "carter_heather@gmail.com",
        phone: "532-155-6148",
        address: "17962 Heritage Estate Drive Gadsden AL 35901",
        hasCredit: true,
        achStatus: true,
        bankName: "Family Savings Credit Union",
        last4digits: 3223,
        achVerified: true,
    }]

    const handlePageSize = (pageSize: number) => {
        console.log(pageSize);
    }

    const handleSearch = (searchKeyword: string) => {
        console.log(searchKeyword)
    }

    useEffect(() => {
        // Function to trigger on page load
        // const fetchData = async () => {
        //     // Your logic here
        //     console.log("Page loaded, function triggered");
        // };

        // fetchData(); // Call the function
        console.log(customerCreditData.filter(credit => credit.hasCredit === true))
        setCustomerCreditCards(customerCreditData.filter(credit => credit.hasCredit === true))

    }, []); // Empty dependency array to run only on component mount

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            <IconHome size={20} color='black' />
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="black"
            href="/review/"
        >
            Reviews
        </Link>
    ];

    const columns: Column<CustomerCreditData>[] = [
        {
            header: 'Name', accessor: 'name', sortable: false,
            render: (row: CustomerCreditData) => (
                <div className="flex items-center gap-2">
                    <Avatar src={row.avatar} alt="" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{row['name']}</span>
                    </div>
                </div>
            )
        },
        {
            header: 'Email', accessor: 'email', sortable: false,
            render: (row: CustomerCreditData) => (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <IconMail size={18} />
                    <span className="text-text-dark">{row['email']}</span>
                </div>
            )
        },
        {
            header: 'Phone', accessor: 'phone', sortable: false,
            render: (row: CustomerCreditData) => (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <IconCall size={18} />
                    <span className="text-text-dark">{row['phone']}</span>
                </div>
            )
        },
        {
            header: 'Address', accessor: 'address', sortable: false,
            render: (row: CustomerCreditData) => (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <IconLocation size={18} />
                    <span className="text-text-dark">{row['address']}</span>
                </div>
            )
        },
    ];

    const ACHColumns: Column<CustomerCreditData>[] = [
        {
            header: 'Name', accessor: 'name', sortable: false,
            render: (row: CustomerCreditData) => (
                <div className="flex items-center gap-2">
                    <Avatar src={row.avatar} alt="" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{row['name']}</span>
                    </div>
                </div>
            )
        },
        {
            header: 'Email', accessor: 'email', sortable: false,
            render: (row: CustomerCreditData) => (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <IconMail size={18} />
                    <span className="text-text-dark">{row['email']}</span>
                </div>
            )
        },
        {
            header: 'Phone', accessor: 'phone', sortable: false,
            render: (row: CustomerCreditData) => (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <IconCall size={18} />
                    <span className="text-text-dark">{row['phone']}</span>
                </div>
            )
        },
        {
            header: 'Bank Name', accessor: 'bankName', sortable: false,
        },
        {
            header: 'Last 4 Digits', accessor: 'last4digits', sortable: false,
        },
        {
            header: 'ACH Status', accessor: 'achStatus', sortable: false,
            render: (row: CustomerCreditData) => (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    {
                        row.achVerified &&
                        (
                            <div className="flex items-center gap-2 px-2 py-1 border rounded-md">
                                <IconSelectBoxCircleFill size={16} />
                                <span>Verified</span>
                            </div>
                        )
                    }
                </div>
            )
        },
        {
            header: 'Address', accessor: 'address', sortable: false,
            render: (row: CustomerCreditData) => (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <IconLocation size={18} />
                    <span className="text-text-dark">{row['address']}</span>
                </div>
            )
        },
    ];

    const renderAdditionalActions = (row: CustomerCreditData) => {
        const additionalActions: DropdownMenuItemProps[] = [{
            title: 'Send SMS',
            trigger: () => console.log(row)
        }, {
            title: 'Send Email',
            trigger: () => console.log(row)
        }, {
            title: 'Update Credit Card',
            trigger: () => console.log(row)
        }]
        return (
            <IconDropdown icon={<IconMoreLine />} items={additionalActions} />
        )
    }

    const creditCardTypes = [
        {
            title: "Customers With Credit Card",
            icon: <IconCredit size={20} />,
            trigger: () => {
                setSelectedType(0);
                setColumnType(CREDIT_COLUMN);
                setCustomerCreditCards(customerCreditData.filter(credit => credit.hasCredit === true))
            }
        },
        {
            title: "Customers without Credit Card",
            icon: <IconCreditNotFound size={20} />,
            trigger: () => {
                setSelectedType(1);
                setColumnType(CREDIT_COLUMN);
                setCustomerCreditCards(customerCreditData.filter(credit => credit.hasCredit === false))
            }
        },
        {
            title: "Customers with ACH",
            icon: <IconCreditNotFound size={20} />,
            trigger: () => {
                setSelectedType(2);
                setColumnType(ACH_COLUMN);
                setCustomerCreditCards(customerCreditData.filter(credit => credit.achStatus))
            }
        },
        {
            title: "Customers without ACH",
            icon: <IconPayByCheck size={20} />,
            trigger: () => {
                setSelectedType(2);
                setColumnType(CREDIT_COLUMN);
                setCustomerCreditCards(customerCreditData.filter(credit => credit.achStatus !== undefined && credit.achStatus === false))
            }
        },
    ];

    return (
        <div className="px-8 pt-20 flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <CustomBreadcrumbs elements={breadcrumbs}></CustomBreadcrumbs>
                <div className="flex items-center gap-3">
                    <DropdownMenu title={creditCardTypes[selectedType].title} icon={creditCardTypes[selectedType].icon} items={creditCardTypes} className="bg-white text-gray-600 rounded-lg" />
                </div>
            </div>

            {/* Panels */}
            <div className="flex items-stretch justify-between gap-4 ">
                <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
                    <div className="flex flex-col w-full gap-3 h-full justify-between">
                        <span className="text-gray-600 text-mini font-medium uppercase">Credit Card Users</span>
                        <div className="flex gap-2 items-center">
                            <span className="text-3xl-plus font-medium leading-8">5</span>
                            <span className="bg-success-light text-success-dark rounded-full px-2 py-0.5 text-xs font-medium">+48%</span>
                        </div>
                    </div>
                    <div className="border-green-200 border-mini p-mid rounded-full">
                        <IconCredit color="#75A428" size={18} />
                    </div>
                </div>
                <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
                    <div className="flex flex-col w-full gap-3">
                        <span className="text-gray-600 text-mini font-medium uppercase">Cash Customers</span>
                        <div className="flex gap-2 items-center">
                            <span className="text-3xl-plus font-medium leading-8">225</span>
                            <span className="bg-success-light text-success-dark rounded-full px-2 py-0.5 text-xs font-medium">+43%</span>
                        </div>
                    </div>
                    <div className="border-orange-200 border-mini p-mid rounded-full">
                        <IconCreditNotFound color="#E97135" size={18} />
                    </div>
                </div>
                <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
                    <div className="flex flex-col w-full gap-3">
                        <span className="text-gray-600 text-mini font-medium uppercase">ACH Customers</span>
                        <div className="flex gap-2 items-center">
                            <span className="text-3xl-plus font-medium leading-8">6</span>
                            <span className="bg-success-light text-success-dark rounded-full px-2 py-0.5 text-xs font-medium">+7%</span>
                        </div>
                    </div>
                    <div className="border-teal-200 border-mini p-mid rounded-full">
                        <IconCreditCardValidation color="#178C7D" size={18} />
                    </div>
                </div>
                <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
                    <div className="flex flex-col w-full gap-3 h-full justify-between">
                        <span className="text-gray-600 text-mini font-medium uppercase">Non ACH Customers</span>
                        <div className="flex gap-2 items-center leading-8">
                            <span className="text-3xl-plus font-medium">123</span>
                            <span className="bg-error-light text-error-dark rounded-full px-2 py-0.5 text-xs font-medium">-24%</span>
                        </div>
                    </div>
                    <div className="border-blue-200 border-mini p-mid rounded-full">
                        <IconPayByCheck color="#6895FF" size={18} />
                    </div>
                </div>
            </div>
            <DataTable data={customerCreditCards}
                columns={columnType === ACH_COLUMN ? ACHColumns : columns}
                totalPages={5}
                // actionMenu={actionDropdown}
                handlePageSizeChange={handlePageSize}
                handleSearch={handleSearch}
                renderActions={renderAdditionalActions}
                isSelectable={false}
                isFilter={false}
            />
        </div>
    )
}

export default ManageCredit