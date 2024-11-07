import React, { useEffect, useState } from "react";
import CustomBreadcrumbs from "../../components/controllers/CustomBreadcrumbs";
import { Avatar, Button, Link } from "@mui/material";
import { IconAdd, IconDownload, IconHome, IconLocation, IconMoreLine, IconRanking, IconSafeDelivery, IconSettings, IconUser, IconUserSearch } from "../../utils/SvgUtil";
import DropdownMenu, { DropdownMenuItemProps, DropdownMenuProps } from "../../components/controllers/DropdownMenu";
import DataTable from "../../components/datatable/DataTable";
import { Column } from "../../components/datatable/ColumnSelector";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import IconDropdown from "../../components/controllers/IconDropdown";
import { toDecimalPlaces } from "../../utils/MathUtil";
import { useNavigate } from "react-router";
import { ItemsServicesData } from "./Items_Services";

interface PackagesData {
    id: number,
    name: string,
    description: string,
    items: ItemsServicesData[],
    optionalItems?: ItemsServicesData[],
}

const Packages: React.FC = () => {
    const [packages, setPackages] = useState<PackagesData[]>([]);
    const [selectedPackages, setSelectedPackages] = useState<PackagesData[]>([]);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const navigate = useNavigate()

    const packageData = [{
        id: 100,
        name: "Basic Package with Large Clay Pot",
        description: "",
        items: [{
            id: 1000,
            name: "Mow and Trim",
            cost: 55.00,
            tax1: 0.00,
            tax2: 0.00,
            category: 1,
            customer_type: 1,
            description: ""
        }, {
            id: 1001,
            name: "Large clay pot",
            cost: 55.00,
            tax1: 0.00,
            tax2: 0.00,
            category: 1,
            customer_type: 1,
            description: ""
        }, {
            id: 1002,
            name: "Blow off driveway",
            cost: 55.00,
            tax1: 0.00,
            tax2: 0.00,
            category: 1,
            customer_type: 1,
            description: ""
        }]
    },
    {
        id: 101,
        name: "Pkg2",
        description: "",
        items: [{
            id: 1010,
            name: "Big lawn care job",
            cost: 55.00,
            tax1: 0.00,
            tax2: 0.00,
            category: 1,
            customer_type: 1,
            description: ""
        }, {
            id: 1011,
            name: "Mow, Trim and Blow Off Driveways and Walkways",
            cost: 55.00,
            tax1: 0.00,
            tax2: 0.00,
            category: 1,
            customer_type: 1,
            description: ""
        }, {
            id: 1012,
            name: "Blow off driveway",
            cost: 55.00,
            tax1: 0.00,
            tax2: 0.00,
            category: 1,
            customer_type: 1,
            description: ""
        }],
        optionalItems: [{
            id: 1013,
            name: "test",
            cost: 55.00,
            tax1: 0.00,
            tax2: 0.00,
            category: 1,
            customer_type: 1,
            description: ""
        }]
    }];

    const categoryOptions = [{
        label: "Commercial",
        value: 1,
    }, {
        label: "Supplier",
        value: 2,
    }, {
        label: "Customer",
        value: 3,
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

    const handleSelectionChange = (selectedRows: PackagesData[]) => {
        setSelectedPackages(selectedRows);
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
        setPackages(packageData)

    }, []); // Empty dependency array to run only on component mount

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            <IconHome size={20} color='black' />
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="black"
            href="/resource/items-services"
        >
            Items & Services
        </Link>,

        <Link
            underline="hover"
            key="2"
            color="black"
            href="/resource/items-services"
        >
            Packages
        </Link>
    ];

    const pageTypeItem: DropdownMenuItemProps[] = [
        {
            title: "Items & Services",
            trigger: () => navigate('/resource/items-services')
        },
        {
            title: "Inventory Items",
            trigger: () => navigate('/resource/items-services/inventory-items')
        },
        {
            title: "Packages",
            trigger: () => navigate('/resource/items-services/packages')
        },
        {
            title: "Categories",
            trigger: () => navigate('/resource/items-services/categories')
        }
    ];

    const columns: Column<PackagesData>[] = [
        { header: 'Name', accessor: 'name', sortable: false },
        { header: 'Description', accessor: 'description', sortable: false },
        {
            header: 'Items', accessor: 'items', sortable: false,
            render: (row: PackagesData) => (
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-1 text-gray-600">
                        {
                            row.items.map((item, index) => (
                                <span key={item.id}>{index + 1}. {item.name}</span>
                            ))
                        }
                    </div>
                    {/* Optional */}
                    {row.optionalItems && row.optionalItems.length > 0 &&
                        (
                            <span>Optional: </span>
                        )
                    }
                    {row.optionalItems &&
                        <div className="flex flex-col gap-1 text-gray-600">
                            {row.optionalItems.map((item, index) => (
                                <span key={item.id}>{index + 1}. {item.name}</span>
                            ))}
                        </div>
                    }
                </div >
            )
        },
    ];

    const actionDropdown: DropdownMenuItemProps[] = [{
        title: "Delete Selected",
        trigger: () => {
            setDeleteDialogOpen(true);
        }
    }]

    const renderAdditionalActions = (row: PackagesData) => {
        const additionalActions: DropdownMenuItemProps[] = [{
            title: 'Edit Items',
            trigger: () => console.log(row)
        }, {
            title: 'Delete Items',
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
                    <DropdownMenu title="Packages" icon={<IconSettings size={14} color="#525866" />} items={pageTypeItem} className="bg-white text-[#525866] rounded-lg border-solid border-[1px] border-main-gray" />
                    <Button className=""><IconDownload /> Export CSV</Button>
                    <Button className="!bg-primary-base !text-white"><IconAdd /> New Item & Service</Button>
                </div>
            </div>
            {/* Panels */}
            <div className="flex items-stretch justify-between gap-4 ">
                <div className="flex items-start rounded-2xl border-[1px] bg-white border-main-gray p-4 w-full">
                    <div className="flex flex-col w-full gap-3 h-full justify-between">
                        <span className="text-gray-600 text-mini font-medium uppercase">Total Items & Services</span>
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
                        <span className="text-gray-600 text-mini font-medium uppercase">Total Inventory Items</span>
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
                        <span className="text-gray-600 text-mini font-medium uppercase">Total Packages</span>
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
            <DataTable data={packages}
                columns={columns}
                totalPages={5}
                actionMenu={actionDropdown}
                onSelectionChange={handleSelectionChange}
                handlePageSizeChange={handlePageSize}
                isFilter={false}
                showPrinter={false}
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

export default Packages