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
import { generateRandomId } from "../../utils/MathUtil";

export interface CrewData {
    id: number;
    name: string;
    members: string[];
    tags: string[];
    notes: string;
}

const Crews: React.FC = () => {
    const [employees, setEmployees] = useState<CrewData[]>([]);
    const [selectedEmployees, setSelectedEmployees] = useState<CrewData[]>([]);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const crewData: CrewData[] = [{
        id: 1053,
        name: "Backup Crew	",
        members: ["Heather Carter", "Pat Cash"],
        tags: ['crewTag'],
        notes: ""
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

    const handleSelectionChange = (selectedRows: CrewData[]) => {
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
        setEmployees(crewData)

    }, []); // Empty dependency array to run only on component mount

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            <IconHome size={20} color='black' />
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="black"
            href="/resource/crews"
        >
            Crews
        </Link>
    ];

    const columns: Column<CrewData>[] = [
        {
            header: 'Name', accessor: 'name', sortable: false,
            render: (row: CrewData) => (
                <span className="text-sm font-medium">{row.name}</span>
            )
        },
        {
            header: 'Members', accessor: 'members', sortable: false,
            render: (row: CrewData) => (
                <div className="flex flex-col gap-1">
                    {
                        row.members.map((member, index) => (
                            <span key={generateRandomId()} className="text-sm">{member}</span>
                    ))
                    }
                </div>
            )
        },
        {
            header: "Tags", accessor: 'tags', sortable: false,
            render: (row: CrewData) => (
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
    ];

    const actionDropdown: DropdownMenuItemProps[] = [{
        title: "Delete Selected",
        trigger: () => { }
    }
    ]

    const renderAdditionalActions = (row: CrewData) => {
        const additionalActions: DropdownMenuItemProps[] = [{
            title: 'Edit Crew',
            trigger: () => console.log(row)
        }, {
            title: 'Delete Crew',
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
                    <Button className="!bg-primary-base !text-white"><IconAdd /> New Crew </Button>
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

export default Crews;