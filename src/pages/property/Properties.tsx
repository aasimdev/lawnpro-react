import React, { useEffect, useState } from "react";
import CustomBreadcrumbs from "../../components/controllers/CustomBreadcrumbs";
import { Avatar, Button, Link } from "@mui/material";
import { IconAdd, IconDownload, IconHome, IconLocation, IconMoreLine, IconRanking, IconSafeDelivery, IconUser, IconUserSearch } from "../../utils/SvgUtil";
import DropdownMenu, { DropdownMenuItemProps } from "../../components/controllers/DropdownMenu";
import DataTable from "../../components/datatable/DataTable";
import { Column } from "../../components/datatable/ColumnSelector";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import IconDropdown from "../../components/controllers/IconDropdown";
import { useNavigate } from "react-router-dom";

interface PropertyData {
    id: number;
    name: string;
    customer_name: string;
    address: string;
    zip: string;
    tags: Array<string>;
    notes: string;
    img: string;
    last_srv_completed: string;
    next_srv_date: string;
}

const Properties: React.FC = () => {
    const [properties, setProperties] = useState<PropertyData[]>([]);
    const [selectedProperties, setSelectedProperties] = useState<PropertyData[]>([]);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const navigate = useNavigate();

    const PropertyData = [{
        id: 100,
        name: "Patrick's Home",
        customer_name: "Patrick Cash",
        address: "106 Gaither Drive, Gadsden NJ 08054, US",
        zip: "08054",
        tags: ["Gold Customer", "Frequent"],
        notes: "",
        img: '/images/property_temp.png',
        last_srv_completed: "2024-10-03",
        next_srv_date: "2024-10-03"
    },{
        id: 100,
        name: "Patrick's Home",
        customer_name: "Patrick Cash",
        address: "106 Gaither Drive, Gadsden NJ 08054, US",
        zip: "08054",
        tags: ["Gold Customer", "Frequent"],
        notes: "",
        img: '/images/property_temp.png',
        last_srv_completed: "2024-10-03",
        next_srv_date: "2024-10-03"
    },{
        id: 100,
        name: "Patrick's Home",
        customer_name: "Patrick Cash",
        address: "106 Gaither Drive, Gadsden NJ 08054, US",
        zip: "08054",
        tags: ["Gold Customer", "Frequent"],
        notes: "",
        img: '/images/property_temp.png',
        last_srv_completed: "2024-10-03",
        next_srv_date: "2024-10-03"
    },{
        id: 100,
        name: "Patrick's Home",
        customer_name: "Patrick Cash",
        address: "106 Gaither Drive, Gadsden NJ 08054, US",
        zip: "08054",
        tags: ["Gold Customer", "Frequent"],
        notes: "",
        img: '/images/property_temp.png',
        last_srv_completed: "2024-10-03",
        next_srv_date: "2024-10-03"
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

    const handleSelectionChange = (selectedRows: PropertyData[]) => {
        setSelectedProperties(selectedRows);
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
        setProperties(PropertyData)

    }, []); // Empty dependency array to run only on component mount

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            <IconHome size={20} color='black' />
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="black"
            href="/properties/"
        >
            Properties
        </Link>
    ];

    const exportCSVItem = [
        {
            title: "All Properties"
        },
        {
            title: "Selected Columns & Customers"
        }
    ];

    const columns: Column<PropertyData>[] = [
        {
            header: 'Property Name', accessor: 'name', sortable: true,
            render: (row: PropertyData) => (
                <div className="flex items-center gap-2">
                    <Avatar src={row.img} alt="" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{row['name']}</span>
                        <span className="text-xs flex items-center gap-1 text-gray-600"><IconLocation /> {row['address']}</span>
                    </div>
                </div>
            )
        },
        {
            header: "Customer Name", accessor: 'customer_name', sortable: true,
        },
        {
            header: "Zip", accessor: 'zip', sortable: true
        },
        {
            header: "Tags", accessor: 'tags', sortable: false,
            render: (row: PropertyData) => (
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
            )
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

    const renderAdditionalActions = (row: PropertyData) => {
        const additionalActions: DropdownMenuItemProps[] = [{
            title: 'Edit',
            trigger: () => console.log(row)
        }, {
            title: 'Delete Property',
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
                    <Button className="!bg-primary-base !text-white"><IconAdd /> New Property</Button>
                </div>
            </div>
            {/* Panels */}
            <div className="flex items-stretch justify-between gap-4 ">
                <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
                    <div className="flex flex-col w-full gap-3 h-full justify-between">
                        <span className="text-gray-600 text-mini font-medium uppercase">Total Customers</span>
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
                        <span className="text-gray-600 text-mini font-medium uppercase">Total New Customers<br></br><small>(Year To Date)</small></span>
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
                        <span className="text-gray-600 text-mini font-medium uppercase">New Customers<br></br><small>(Past 30 Days)</small></span>
                        <div className="flex gap-2 items-center">
                            <span className="text-3xl-plus font-medium leading-8">28</span>
                            <span className="bg-success-light text-success-dark rounded-full px-2 py-0.5 text-xs font-medium">+7%</span>
                        </div>
                    </div>
                    <div className="border-teal-200 border-mini p-mid rounded-full">
                        <IconSafeDelivery color="#178C7D" size={18} />
                    </div>
                </div>
                <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
                    <div className="flex flex-col w-full gap-3 h-full justify-between">
                        <span className="text-gray-600 text-mini font-medium uppercase">New Leads</span>
                        <div className="flex gap-2 items-center leading-8">
                            <span className="text-3xl-plus font-medium">0</span>
                            <span className="bg-faded-light text-faded-dark rounded-full px-2 py-0.5 text-xs font-medium">0%</span>                        </div>
                    </div>
                    <div className="border-blue-200 border-mini p-mid rounded-full">
                        <IconRanking color="#6895FF" size={18} />
                    </div>
                </div>
            </div>
            <DataTable data={properties}
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

export default Properties