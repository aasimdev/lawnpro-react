import React, { useEffect, useState } from "react";
import CustomBreadcrumbs from "../../components/controllers/CustomBreadcrumbs";
import { Avatar, Button, Link } from "@mui/material";
import { IconAdd, IconCalendar, IconCall, IconDot, IconDownload, IconHome, IconLocation, IconMoreLine, IconRanking, IconSafeDelivery, IconUser, IconUserSearch } from "../../utils/SvgUtil";
import DropdownMenu, { DropdownMenuItemProps } from "../../components/controllers/DropdownMenu";
import DataTable from "../../components/datatable/DataTable";
import { CustomersData } from "../../config/TableData";
import { Column } from "../../components/datatable/ColumnSelector";
import { formatToCurrency } from "../../utils/MathUtil";
import { formatDateString } from "../../utils/DateUtil";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import IconDropdown from "../../components/controllers/IconDropdown";
import { useNavigate } from "react-router-dom";
import ImageViewer from "../../components/controllers/ImageViewer";

interface VendorData {
    id: number;
    name: string;
    email: string;
    status: number;
    created_date: string;
    credit: number;
    type: number;
    tags: string[];
    address: string;
    credit_ach: string;
    notes: string;
    avatar: string;
}

const Vendors: React.FC = () => {
    const [vendors, setVendors] = useState<VendorData[]>([]);
    const [selectedVendors, setSelectedVendors] = useState<VendorData[]>([]);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const navigate = useNavigate();

    const vendorsData = [{
        id: 157512,
        name: "Patrick Cash",
        email: "patrickcash@gmail.com",
        status: 1,
        created_date: '2024-10-03',
        credit: 477.00,
        type: 1,
        tags: ["testtag3", "testtag2"],
        address: "Grain Valley, Mo, Usa Gadsden, AL 80123",
        credit_ach: "",
        notes: "",
        avatar: "/images/tempAvatar.jpg"
    },
    {
        id: 157513,
        name: "Darlene Robertson",
        email: "patrickcash@gmail.com",
        status: 0,
        created_date: '2024-01-24',
        credit: 943.65,
        type: 0,
        tags: ["testtag3"],
        address: "Grain Valley, Mo, Usa Gadsden, AL 80123",
        credit_ach: "",
        notes: "",
        avatar: "/images/tempAvatar.jpg"
    }, {
        id: 157514,
        name: "Patrick Cash",
        email: "patrickcash@gmail.com",
        status: 1,
        created_date: '2024-10-03',
        credit: 477.00,
        type: 0,
        tags: ["testtag3", "testtag2"],
        address: "Grain Valley, Mo, Usa Gadsden, AL 80123",
        credit_ach: "",
        notes: "",
        avatar: "/images/tempAvatar.jpg"
    },
    {
        id: 157515,
        name: "Darlene Robertson",
        email: "patrickcash@gmail.com",
        status: 0,
        created_date: '2024-01-24',
        credit: 943.65,
        type: 1,
        tags: ["testtag3"],
        address: "Grain Valley, Mo, Usa Gadsden, AL 80123",
        credit_ach: "",
        notes: "",
        avatar: "/images/tempAvatar.jpg"
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

    const handleSelectionChange = (selectedRows: VendorData[]) => {
        setSelectedVendors(selectedRows);
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
        setVendors(vendorsData)

    }, []); // Empty dependency array to run only on component mount

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            <IconHome size={20} color='black' />
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="black"
            href="/resource/vendors-suppliers"
        >
            Vendors
        </Link>
    ];

    const exportCSVItem = [
        {
            title: "All Vendors/Suppliers Details"
        },
        {
            title: "Selected Columns & Vendors/Suppliers"
        }
    ];

    const columns: Column<VendorData>[] = [
        { header: 'ID', accessor: 'id', sortable: true },
        {
            header: 'Name', accessor: 'name', sortable: true,
            render: (row: VendorData) => (
                <div className="flex items-center gap-2">
                    <Avatar src={row.avatar} alt="" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{row['name']}</span>
                        <span className="text-xs">{row['email']}</span>
                    </div>
                </div>
            )
        },
        {
            header: 'Status', accessor: 'status', sortable: false,
            render: (row: VendorData) => (
                row['status'] ? <div className="text-success-base bg-success-light rounded-full pr-2 py-0.5 text-xs flex items-center justify-center"><IconDot size={20} />Active</div> : <div className="text-error-base bg-error-light rounded-full pr-2 text-xs py-0.5 flex items-center justify-center" ><IconDot size={20} />Inactive</div >
            ),
            filterOptions: [{
                label: 'Active',
                value: 1
            }, {
                label: 'Inactive',
                value: 0
            }],
            filterType: 'select'
        },
        {
            header: 'Date Added', accessor: 'created_date', sortable: false,
            render: (row: VendorData) => (
                <div className="flex items-center gap-1 text-sm">
                    <IconCalendar size={18} color="#99A0AE" />
                    {formatDateString(row['created_date'], "MMM DD, YYYY")}
                </div>
            )
        },
        {
            header: 'Account Credit', accessor: 'credit', sortable: false,
            render: (row: VendorData) => (
                formatToCurrency(row['credit'])
            )
        },
        {
            header: 'Type', accessor: 'type', sortable: false,
            render: (row: VendorData) => (
                <span>{row.type ? 'Supplier' : 'Vendor'}</span>
            )
        },
        {
            header: "Tags", accessor: 'tags', sortable: false,
            render: (row: VendorData) => (
                <div>
                    {row['tags'].length > 0 &&
                        (
                            <div className="flex items-center justify-start gap-2">
                                <div className="px-2 py-1 border rounded-md">
                                    <span className="text-xs text-gray-600 font-medium">{row['tags'][0]}</span>
                                </div>
                                {
                                    row['tags'].length > 1 &&
                                    (
                                        <div className="px-2 border rounded-full bg-faded-lighter">
                                            <span className="text-xs text-faded-base font-medium ">+{row['tags'].length - 1}</span>
                                        </div>
                                    )
                                }
                            </div>)
                    }
                </div>
            ), filterOptions: [{
                label: 'CustomerTag1',
                value: 0
            }, {
                label: 'CustomerTag2',
                value: 1
            }],
            filterType: 'select'
        },
        {
            header: 'Contracts/Address', accessor: 'address', sortable: false,
            render: (row: VendorData) => (
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1">
                        <IconLocation size={14} />
                        <span>{row['address']}</span>
                    </div>
                </div>
            )
        },
        {
            header: 'Credit Card', accessor: 'credit_ach', sortable: false,
            filterOptions: [{
                label: 'Has Credit Card on File',
                value: 0
            }, {
                label: 'Does not have Credit Card on File',
                value: 1
            }, {
                label: 'Does not have ACH enabled',
                value: 2
            }, {
                label: 'Has Credit Card on File and ACH enabled',
                value: 3
            }, {
                label: 'Has ACH enabled',
                value: 4
            }],
            filterType: 'select'
        },
        { header: 'Notes', accessor: 'notes', sortable: false },
    ];

    const actionDropdown: DropdownMenuItemProps[] = [{
        title: "Active",
        trigger: () => { }
    }, {
        title: "Inactive",
        trigger: () => { }
    }, {
        title: "Edit Bulk Tags",
        trigger: () => { }
    }, {
        title: "Delete Selected",
        trigger: () => {
            setDeleteDialogOpen(true);
        }
    }
    ]

    const renderAdditionalActions = (row: VendorData) => {
        const additionalActions: DropdownMenuItemProps[] = [{
            title: 'Edit Vendor',
            trigger: () => console.log(row)
        }, {
            title: 'Show Expense',
            trigger: () => console.log(row)
        }, {
            title: 'Add Expense',
            trigger: () => console.log(row)
        }, {
            title: 'Delete Vendor',
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
                    <DropdownMenu title="Export CSV" icon={<IconDownload size={14} color="#525866" />} items={exportCSVItem} className="bg-white text-[#525866] rounded-lg border-solid border-[1px] border-main-gray" />
                    <Button className="!bg-primary-base !text-white"><IconAdd /> New Vendors/Suppliers</Button>
                </div>
            </div>
            {/* Panels */}
            <div className="flex items-stretch justify-between gap-4 ">
                <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
                    <div className="flex flex-col w-full gap-3 h-full justify-between">
                        <span className="text-gray-600 text-mini font-medium uppercase">Total Vendors/Suppliers</span>
                        <div className="flex gap-2 items-center">
                            <span className="text-3xl-plus font-medium leading-8">166</span>
                            <span className="bg-success-light text-success-dark rounded-full px-2 py-0.5 text-xs font-medium">+2%</span>
                        </div>
                    </div>
                    <div className="border-green-200 border-mini p-mid rounded-full">
                        <IconUser color="#75A428" size={18} />
                    </div>
                </div>
                <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
                    <div className="flex flex-col w-full gap-3">
                        <span className="text-gray-600 text-mini font-medium uppercase">Total Vendors</span>
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
                        <span className="text-gray-600 text-mini font-medium uppercase">Total Suppliers</span>
                        <div className="flex gap-2 items-center">
                            <span className="text-3xl-plus font-medium leading-8">28</span>
                            <span className="bg-success-light text-success-dark rounded-full px-2 py-0.5 text-xs font-medium">+7%</span>
                        </div>
                    </div>
                    <div className="border-teal-200 border-mini p-mid rounded-full">
                        <IconSafeDelivery color="#178C7D" size={18} />
                    </div>
                </div>
            </div>
            <DataTable data={vendors}
                columns={columns}
                totalPages={5}
                actionMenu={actionDropdown}
                onSelectionChange={handleSelectionChange}
                handlePageSizeChange={handlePageSize}
                handleFilter={handleFilter}
                handleSearch={handleSearch}
                renderActions={renderAdditionalActions}
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

export default Vendors