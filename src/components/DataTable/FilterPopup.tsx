import { Popover } from "@mui/material";
import React from "react";
import { Column } from "./ColumnSelector";
import Select2 from "../controllers/Select2";
import { generateRandomId } from "../../utils/MathUtil";

interface FilterPopupProps<T> {
    open: boolean;
    anchorEl: HTMLButtonElement | null;
    handleClose: () => void;
    columns: Column<T>[];
    filters?: { [key: string]: (string | number)[] };
    handleFilter?: (key: string, value: (string | number)[]) => void;
}

const FilterPopup = <T,>({ open, anchorEl, handleClose, filters = {}, columns, handleFilter }: FilterPopupProps<T>) => {
    const id = open ? 'filter-popover' : undefined;

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            sx={{
                "& .MuiPopover-paper": {
                    borderRadius: '16px',
                    boxShadow: '0px 16px 32px -12px rgba(14, 18, 27, 0.10)',
                    border: '1px solid #E1E4EA'
                }
            }}
        >
            <div className="grid items-center p-5 grid-cols-2 h-max gap-5">
                {columns.map((column, index) => (
                    (column.filterType && column.filterOptions &&
                        <div className="flex flex-col col-span-1 text-sm font-medium gap-1" key={generateRandomId()}>
                            <span>{column.filterLabel ? column.filterLabel : column.header}</span>
                            <Select2 options={column.filterOptions} onChange={handleFilter} accessor={String(column.accessor)} placeholder={`All ${column.filterLabel ? column.filterLabel : column.header}`} value={filters[String(column.accessor)]} clearButton={true} />
                        </div>
                    )
                ))}
            </div>
        </Popover>
    )
}

export default FilterPopup;