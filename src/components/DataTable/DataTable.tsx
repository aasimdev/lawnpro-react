import React, { ReactNode, useState } from "react";
import DropdownMenu, { DropdownMenuItemProps } from "../DropdownMenu";
import { Button, Checkbox } from "@mui/material";
import { IconFilterFill, IconPrinter, IconSortASC, IconSortDSC, IconSortable } from "../../utils/SvgUtil";
import Pagination from "../Pagination";
import ColumnSelector, { Column } from "./ColumnSelector";
import clsx from 'clsx'

interface DataTableProps<T extends { id: number }> {
    data: T[];
    columns: Column<T>[];
    totalPages: number;
    pageSize?: number;
    actionMenu?: DropdownMenuItemProps[];
    onSelectionChange?: (selectedRows: T[]) => void; // New prop to notify parent of selection changes
}

const DataTable = <T extends { id: number }>({ data, columns, pageSize, actionMenu, totalPages, onSelectionChange }: DataTableProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
    const [selectedColumns, setSelectedColumns] = useState(columns.map(col => String(col.accessor)));
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

    const handleColumnChange = (selected: string[]) => {
        setSelectedColumns(selected);
    };

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Sort handler
    const handleSort = (key: string) => {
        if (sortConfig?.key === key) {
            setSortConfig({ key, direction: sortConfig.direction === 'asc' ? 'desc' : 'asc' });
        } else {
            setSortConfig({ key, direction: 'asc' });
        }
    };

    const handleCheckboxChange = (id: number) => {
        setSelectedRows((prevSelected) => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(id)) {
                newSelected.delete(id);
            } else {
                newSelected.add(id);
            }

            // Call onSelectionChange with the updated selected rows
            const selectedRowsData = data.filter((row) => newSelected.has(row.id));
            onSelectionChange?.(selectedRowsData);  // Notify parent of the new selected rows

            return newSelected;
        });
    };

    const handleBulkCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.checked) {
            // Select all rows: create a new Set with all row IDs
            const allRowIds = new Set(data.map(row => row.id)); // Assuming `data` has an `id` for each row
            setSelectedRows(allRowIds);
            onSelectionChange?.(data); // Notify parent with all rows selected
        } else {
            // Deselect all rows: clear the Set
            setSelectedRows(new Set());
            onSelectionChange?.([]); // Notify parent with no rows selected
        }
    };


    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Table Body */}
            <div className="bg-white p-4 rounded-md border-mini border-main-gray flex flex-col gap-4">
                {/* Controllers */}
                <div className="flex items-center justify-between">
                    {/* Left */}
                    <div className="flex items-center gap-3">
                        {actionMenu &&
                            <DropdownMenu title="Actions" items={actionMenu} className="bg-white text-[#525866] rounded-lg border-solid border-[1px] border-main-gray" />
                        }
                        <Button startIcon={<IconFilterFill />}>Filter</Button>
                        <span className="text-gray-600 text-xs">Total: <span className="text-black font-medium">166</span></span>
                        <span className="text-gray-600 text-xs">Selected: <span className="text-black font-medium">{selectedRows.size}</span></span>
                    </div>
                    {/* Right */}
                    <div className="flex items-center gap-3">
                        <Button startIcon={<IconPrinter size={18} />}>Print</Button>
                        {/* <DropdownMenu icon={<IconLayoutColumn size={18} />} title="16/16 Columns" items={actionDropdown} className="bg-white text-[#525866] rounded-lg border-solid border-[1px] border-main-gray" /> */}
                        <ColumnSelector
                            columns={columns}
                            selectedColumns={selectedColumns}
                            onChange={handleColumnChange} />
                    </div>
                </div>
                {/* Table */}
                <div className="flex flex-col gap-2 overflow-x-auto">
                    <table className="w-max">
                        <thead className="bg-gray-50 ">
                            <tr>
                                <th>
                                    <Checkbox onChange={handleBulkCheck}
                                        checked={selectedRows.size === data.length}
                                        indeterminate={selectedRows.size > 0 && selectedRows.size < data.length} />
                                </th>
                                {columns
                                    .filter(col => selectedColumns.includes(String(col.accessor)))
                                    .map((column) => (
                                        <th
                                            key={column.accessor as string}
                                            className="px-4 py-2 border-b cursor-pointer"
                                            onClick={() => column.sortable && handleSort(String(column.accessor))}
                                        >
                                            <div className="flex items-center">
                                                {column.header}
                                                {column.sortable && (
                                                    <span className="ml-1">
                                                        {sortConfig?.key === column.accessor
                                                            ? sortConfig.direction === 'asc'
                                                                ? <IconSortASC size={20} />
                                                                : <IconSortDSC size={20} />
                                                            : <IconSortable size={20} />}
                                                    </span>
                                                )}
                                            </div>
                                        </th>
                                    ))}
                                <th className="px-4 py-2 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.id} className={
                                    clsx("border-b text-sm p-3.5",
                                        selectedRows.has(row.id) ? "bg-primary-alpha" : ""
                                    )
                                }>
                                    <td className="px-4 py-2">
                                        <Checkbox
                                            checked={selectedRows.has(row.id)}
                                            onChange={() => handleCheckboxChange(row.id)} />
                                    </td>
                                    {columns.map((column) => (
                                        <td key={String(column.accessor)} className="px-4 py-2">
                                            {column.render ? column.render(row) : column.accessor ? row[column.accessor] as ReactNode : null}
                                        </td>
                                    ))}
                                    <td className="px-4 py-2 space-x-2">
                                        <button
                                            // onClick={() => onEdit && onEdit(row)}
                                            className="px-2 py-1 text-white bg-blue-500 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            // onClick={() => onDelete && onDelete(row)}
                                            className="px-2 py-1 text-white bg-red-500 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Pagination Controls */}
            <Pagination totalPages={totalPages} currentPage={currentPage} setPage={handlePageChange} boundaryCount={2} />
        </div>
    )
}

export default DataTable;