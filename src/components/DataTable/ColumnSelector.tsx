// ColumnSelector.tsx
import React, { useEffect, useRef, useState } from 'react';
import { IconArrowDown, IconLayoutColumn } from '../../utils/SvgUtil';
import { Checkbox } from '@mui/material';

interface FilterOption {
    label: string;
    value: string | number;
}
export interface Column<T> {
    header: string;
    accessor: keyof T;
    sortable?: boolean;
    render?: (row: T) => React.ReactNode;
    filterOptions?: FilterOption[];
    filterType?: 'text' | 'select';
}

interface ColumnSelectorProps<T> {
    columns: Column<T>[];
    selectedColumns: string[];
    onChange: (selectedColumns: string[]) => void;
}

const ColumnSelector = <T,>({ columns, selectedColumns, onChange }: ColumnSelectorProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleCheckboxChange = (key: string) => {
        const newSelectedColumns = selectedColumns.includes(key)
            ? selectedColumns.filter(colKey => colKey !== key)
            : [...selectedColumns, key];
        onChange(newSelectedColumns);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center p-2 border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 gap-1"
            >
                <IconLayoutColumn size={20}/>
                Select Columns
                <IconArrowDown />
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 max-h-96 overflow-auto">
                    <div className="py-1">
                        {columns.map(column => (
                            <label
                                key={String(column.accessor)}
                                className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                            >
                                <Checkbox 
                                    checked={selectedColumns.includes(String(column.accessor))}
                                    onChange={() => handleCheckboxChange(String(column.accessor))}/>
                                {column.header}
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColumnSelector;
