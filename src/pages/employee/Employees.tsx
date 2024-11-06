import { Avatar, Button, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IconAdd, IconCall, IconHome, IconLocation, IconMail, IconMoreLine } from "../../utils/SvgUtil";
import { Column } from "../../components/datatable/ColumnSelector";
import { DropdownMenuItemProps } from "../../components/controllers/DropdownMenu";
import IconDropdown from "../../components/controllers/IconDropdown";
import CustomBreadcrumbs from "../../components/controllers/CustomBreadcrumbs";
import DataTable from "../../components/datatable/DataTable";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import clsx from 'clsx'
import { formatDateTimeString } from "../../utils/DateUtil";

interface EmployeeData {
    id: number;
    type: string;
    name: string;
    title: string;
    address?: string;
    email?: string;
    phone?: string;
    isLoginAvailable: boolean;
    lastLogin?: string;
    isFixed?: boolean;
}

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<EmployeeData[]>([]);
    const [selectedEmployees, setSelectedEmployees] = useState<EmployeeData[]>([]);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const employeeData: EmployeeData[] = [{
        id: 1053,
        type: "Owner",
        name: "Patrick Cash",
        title: "Owner",
        address: "1386 Church Cir Gadsden, AL",
        isLoginAvailable: true,
        lastLogin: "2024-10-23 07:49:23",
        isFixed: true
    }, {
        id: 1054,
        type: "User",
        name: "Heather Carter",
        title: "HR",
        address: "4353 River Trace Way Gadsden, AL",
        email: "jimg@yahoo.com",
        phone: '256.343.5599',
        isLoginAvailable: false,
    }]

    const handleFilter = (filters: { [key: string]: (string | number)[] }) => {
        console.log(filters)
    }

    const handlePageSize = (pageSize: number) => {
        console.log(pageSize);
    }

    const handleConfirm = () => {
        // Confirm action logic here
        setDeleteDialogOpen(false);
    };

    const handleCancel = () => {
        setDeleteDialogOpen(false);
    };

    const handleSelectionChange = (selectedRows: EmployeeData[]) => {
        setSelectedEmployees(selectedRows);
    };

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
        setEmployees(employeeData)

    }, []); // Empty dependency array to run only on component mount

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            <IconHome size={20} color='black' />
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="black"
            href="/resource/employees"
        >
            Employees
        </Link>
    ];

    const columns: Column<EmployeeData>[] = [
        {
            header: '', accessor: 'type', sortable: false,
            render: (row: EmployeeData) => (
                <span className={clsx("text-sm", row.isLoginAvailable ? "text-text-dark" : "text-error-base")}>{row.type}</span>
            ),
            filterOptions: [{
                label: 'Owner',
                value: 'Owner'
            }, {
                label: 'User',
                value: 'User'
            }],
            filterType: 'select',
            filterLabel: 'Role'
        },
        {
            header: 'Name', accessor: 'name', sortable: false,
            render: (row: EmployeeData) => (
                <span className={clsx("text-sm", row.isLoginAvailable ? "text-text-dark" : "text-error-base")}>{row.name}</span>
            )
        },
        {
            header: 'Contacts', accessor: 'address', sortable: false,
            render: (row: EmployeeData) => (
                <div className="flex flex-col gap-1">
                    {row.address ? <div className={clsx("flex text-xs gap-1", row.isLoginAvailable ? "text-text-dark" : "text-error-base")}><IconLocation size={14} /><span>{row.address}</span></div> : <></>}
                    {row.email ? <div className="flex text-xs text-gray-600 gap-1"><IconMail size={14} /><span>{row.email}</span></div> : <></>}
                    {row.phone ? <div className={clsx("flex text-xs gap-1", row.isLoginAvailable ? "text-text-dark" : "text-error-base")}><IconCall size={14} /><span>{row.phone}</span></div> : <></>}
                </div>
            )
        },
        {
            header: "Last Login", accessor: 'lastLogin', sortable: false,
            render: (row: EmployeeData) => (
                row.isLoginAvailable ?
                    row.lastLogin ? <span className="text-sm text-text-dark">{formatDateTimeString(row.lastLogin, "MM/DD/YY hh:mm A")}</span> : <span></span>
                    :
                    (<span className="text-error-base text-sm">Login Disabled</span>)
            ),
            filterOptions: [{
                label: 'Active',
                value: 1
            }, {
                label: 'Inactive',
                value: 0
            }],
            filterType: 'select',
            filterLabel: 'Status'
        }
    ];

    const actionDropdown: DropdownMenuItemProps[] = [{
        title: "Delete Selected",
        trigger: () => { }
    }
    ]

    const renderAdditionalActions = (row: EmployeeData) => {
        const additionalActions: DropdownMenuItemProps[] = [{
            title: 'Edit Employee',
            trigger: () => console.log(row)
        }, {
            title: 'Delete Employee',
            trigger: () => console.log(row)
        }]
        return (
            <IconDropdown icon={<IconMoreLine />} items={additionalActions} />
        )
    }

    return (
        <div className="px-8 pt-20 flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <CustomBreadcrumbs elements={breadcrumbs}></CustomBreadcrumbs>
                <div className="flex items-center gap-3">
                    <Button className="!bg-primary-base !text-white"><IconAdd /> Link Google Business </Button>
                </div>
            </div>
            <DataTable data={employees}
                columns={columns}
                totalPages={5}
                actionMenu={actionDropdown}
                onSelectionChange={handleSelectionChange}
                handlePageSizeChange={handlePageSize}
                handleFilter={handleFilter}
                handleSearch={handleSearch}
                renderActions={renderAdditionalActions}
                showPrinter={false}
            />
            {/* Dialogs */}
            <ConfirmDialog
                open={isDeleteDialogOpen}
                title="Delete Customer"
                content="Are you sure you want to delete this customer? You cannot revert this action. "
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </div>
    )
}

export default Employees;