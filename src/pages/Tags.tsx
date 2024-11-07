import React, { useEffect, useState } from "react";
import CustomBreadcrumbs from "../components/controllers/CustomBreadcrumbs";
import { Button, Link } from "@mui/material";
import { IconAdd, IconHome, IconMoreLine} from "../utils/SvgUtil";
import { DropdownMenuItemProps } from "../components/controllers/DropdownMenu";
import DataTable from "../components/datatable/DataTable";
import { Column } from "../components/datatable/ColumnSelector";
import ConfirmDialog from "../components/dialog/ConfirmDialog";
import IconDropdown from "../components/controllers/IconDropdown";

interface TagsData {
    id: number;
    name: string;
    usedInAssets: number;
    usedInCrews: number;
    usedInVendors: number;
    usedInCustomers: number;
    usedInEvents: number;
    usedInForms: number;
    createdDate: string;
}

const Tags: React.FC = () => {
    const [tags, setTags] = useState<TagsData[]>([]);
    const [selectedTags, setSelectedTags] = useState<TagsData[]>([]);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const tagsData: TagsData[] = [{
        id: 1001,
        name: 'back yard',
        usedInAssets : 4,
        usedInCrews: 0,
        usedInVendors: 0,
        usedInCustomers: 0,
        usedInEvents: 0,
        usedInForms: 0,
        createdDate: "",
    },{
        id: 1002,
        name: 'test tag',
        usedInAssets : 1,
        usedInCrews: 23,
        usedInVendors: 4,
        usedInCustomers: 5,
        usedInEvents: 2,
        usedInForms: 0,
        createdDate: "",
    }];

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

    const handleSelectionChange = (selectedRows: TagsData[]) => {
        setSelectedTags(selectedRows);
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
        setTags(tagsData)

    }, []); // Empty dependency array to run only on component mount

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            <IconHome size={20} color='black' />
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="black"
            href="/resource/equipments"
        >
            Trucks & Equipment
        </Link>,
    ];

    const columns: Column<TagsData>[] = [
        {header: "Name", accessor: 'name', sortable: true},
        {header: "Assets", accessor: 'usedInAssets', sortable: false},
        {header: "Crews", accessor: 'usedInCrews', sortable: false},
        {header: "Customers", accessor: 'usedInCustomers', sortable: false},
        {header: "Vendors", accessor: 'usedInVendors', sortable: false},
        {header: "Events", accessor: 'usedInEvents', sortable: false},
        {header: "Forms", accessor: 'usedInForms', sortable: false},
    ];

    const actionDropdown: DropdownMenuItemProps[] = [{
        title: "Delete Selected",
        trigger: () => {
            setDeleteDialogOpen(true);
        }
    }]

    const renderAdditionalActions = (row: TagsData) => {
        const additionalActions: DropdownMenuItemProps[] = [{
            title: 'Edit Tag',
            trigger: () => console.log(row)
        }, {
            title: 'Delete Tag',
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
                    <Button className="!bg-primary-base !text-white"><IconAdd /> New Truck / Equipment</Button>
                </div>
            </div>
            <DataTable data={tagsData}
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
export default Tags;