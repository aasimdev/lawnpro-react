import React, { useEffect, useState } from "react";
import CustomBreadcrumbs from "../../components/controllers/CustomBreadcrumbs";
import { Button, Link } from "@mui/material";
import { IconAdd, IconHome, IconMoreLine} from "../../utils/SvgUtil";
import { DropdownMenuItemProps } from "../../components/controllers/DropdownMenu";
import DataTable from "../../components/datatable/DataTable";
import { Column } from "../../components/datatable/ColumnSelector";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import IconDropdown from "../../components/controllers/IconDropdown";
import { CrewData } from "../crew/Crews";
import ImageViewer from "../../components/controllers/ImageViewer";

interface EquipmentsData {
    id: number,
    name: string,
    image: string,
    type: number,
    crew?: CrewData,
    status: number,
}

const Equipments: React.FC = () => {
    const [equipments, setEquipments] = useState<EquipmentsData[]>([]);
    const [selectedEquipments, setSelectedEquipments] = useState<EquipmentsData[]>([]);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const equipmentsData: EquipmentsData[] = [{
        id: 100,
        name: "Ford Raptor F150 2015",
        image: "/images/equip1.jpeg",
        type: 1,
        status: 1,
        crew: {
            id: 210,
            name: "Main Crew",
            members: [],
            tags: [],
            notes: ''
        }
    },{
        id: 101,
        name: "Husqvarna MZ6128ZT 966 61 31-03",
        image: "/images/equip2.jpg",
        type: 2,
        status: 1,
    },{
        id: 102,
        name: "Lawn Care Trailer #1",
        image: "/images/equip3.jpg",
        type: 2,
        status: 1,
    }];

    const equipmentTypes = [{
        label: "Truck / AutoMobile",
        value: 1,
    }, {
        label: "Miscellaneous",
        value: 2,
    }]
    const equipmentStates = [{
        label: "In Service",
        value: 1,
    },]

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

    const handleSelectionChange = (selectedRows: EquipmentsData[]) => {
        setSelectedEquipments(selectedRows);
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
        setEquipments(equipmentsData)

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

    const columns: Column<EquipmentsData>[] = [
        {
            header: 'Name', accessor: 'name', sortable: false,
            render: (row: EquipmentsData) => (
                <div className="flex items-center gap-2">
                    <ImageViewer imageSrc={row.image} width={50} height={50} />
                    <span>{row.name}</span>
                </div>
            )
        },
        {
            header: 'Type', accessor: 'type', sortable: false,
            render: (row: EquipmentsData) => (
                <span>{equipmentTypes.find(type => type.value === row.type)?.label}</span>
            )
        },
        {
            header: 'Crew', accessor: 'crew', sortable: false,
            render: (row: EquipmentsData) => (
                <span>{row.crew?.name}</span>
            )
        },
        {
            header: 'Status', accessor: 'status', sortable: false,
            render: (row: EquipmentsData) => (
                <span>{equipmentStates.find(type => type.value === row.status)?.label}</span>
            )
        },
    ];

    const actionDropdown: DropdownMenuItemProps[] = [{
        title: "Delete Selected",
        trigger: () => {
            setDeleteDialogOpen(true);
        }
    }]

    const renderAdditionalActions = (row: EquipmentsData) => {
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
                    <Button className="!bg-primary-base !text-white"><IconAdd /> New Truck / Equipment</Button>
                </div>
            </div>
            <DataTable data={equipments}
                columns={columns}
                totalPages={5}
                actionMenu={actionDropdown}
                onSelectionChange={handleSelectionChange}
                handlePageSizeChange={handlePageSize}
                isFilter={false}
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

export default Equipments