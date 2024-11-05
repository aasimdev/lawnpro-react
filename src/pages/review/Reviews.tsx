import React, { useEffect, useState } from "react";
import CustomBreadcrumbs from "../../components/controllers/CustomBreadcrumbs";
import { Avatar, Button, Link, Rating } from "@mui/material";
import { IconAdd,IconHome, IconMoreLine } from "../../utils/SvgUtil";
import { DropdownMenuItemProps } from "../../components/controllers/DropdownMenu";
import DataTable from "../../components/datatable/DataTable";
import { Column } from "../../components/datatable/ColumnSelector";
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import IconDropdown from "../../components/controllers/IconDropdown";
import { useNavigate } from "react-router-dom";

interface ReviewData {
    id: number;
    name: string;
    date: string;
    rating: number;
    service: string;
    review: string;
    avatar: string;
}

const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState<ReviewData[]>([]);
    const [selectedReviews, setSelectedReviews] = useState<ReviewData[]>([]);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const navigate = useNavigate();

    const reviewData: ReviewData[] = [{
        id: 1053,
        name: "Patrick Cash",
        date: "2024-10-03",
        rating: 4.6,
        service: "Snow Removal",
        review: "Snow was removed really well.",
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

    const handleSelectionChange = (selectedRows: ReviewData[]) => {
        setSelectedReviews(selectedRows);
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
        setReviews(reviewData)

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

    const columns: Column<ReviewData>[] = [
        { header: 'ID', accessor: 'id', sortable: true },
        {
            header: 'Name', accessor: 'name', sortable: true,
            render: (row: ReviewData) => (
                <div className="flex items-center gap-2">
                    <Avatar src={row.avatar} alt="" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{row['name']}</span>
                    </div>
                </div>
            )
        },
        { header: 'Date', accessor: 'date', sortable: true },
        {
            header: 'Rating', accessor: 'rating', sortable: true,
            render: (row: ReviewData) => (
                <div>
                    <Rating value={row.rating} readOnly={true} precision={0.1}/>
                </div>
            )
        },
        { header: 'Service', accessor: 'service', sortable: false },
        { header: 'Review', accessor: 'review', sortable: false },
    ];

    const actionDropdown: DropdownMenuItemProps[] = [{
        title: "Delete Selected",
        trigger: () => { }
    }
    ]

    const renderAdditionalActions = (row: ReviewData) => {
        const additionalActions: DropdownMenuItemProps[] = [{
            title: 'Delete Review',
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
            <DataTable data={reviews}
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

export default Reviews