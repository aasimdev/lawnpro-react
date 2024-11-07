import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IconArrowDown } from '../../utils/SvgUtil';
import clsx from 'clsx'

interface Option {
    label: string;
    value: string | number;
    img?: any;
}

interface Select2Props {
    accessor?: string;
    options?: Option[];
    placeholder?: string;
    multiple?: boolean;
    value?: (string | number)[];
    onChange?: (key: string, value: (string | number)[]) => void;
    clearButton?: boolean;
    className?: string;
    buttonClass?: string;
}

const Select2: React.FC<Select2Props> = ({ accessor = "", options = [], value = [], placeholder = "Select options", multiple = false, onChange, clearButton = false, className="", buttonClass="" }) => {
    // const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const [buttonWidth, setButtonWidth] = useState(0);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);

    const handleChange = (key: string, value: (string | number)[]) => {
        onChange?.(key, value)
    }

    const handleSelect = (option: Option) => {
        let updatedSelectedOptions: (string | number)[] = [];

        if (multiple) {
            // Toggle selection in multiple selection mode
            if (value.some((selected) => selected === option.value)) {
                updatedSelectedOptions = value.filter((selected) => selected !== option.value);
            } else {
                updatedSelectedOptions = [...value, option.value];
            }
        } else {
            // Toggle selection in single selection mode
            // updatedSelectedOptions = selectedOptions.some((selected) => selected.value === option.value)
            //     ? []
            //     : [option];

            updatedSelectedOptions = [option.value];
            setIsOpen(false);
        }

        // setSelectedOptions(updatedSelectedOptions);
        handleChange?.(accessor, updatedSelectedOptions.map((opt) => opt));
    };


    // Clear all selections
    const clearSelection = () => {
        // setSelectedOptions([]);
        handleChange?.(accessor, []);
        setIsOpen(false);
    };

    const isOptionSelected = (option: Option) => value.some((selected) => selected === option.value);

    // Calculate dropdown position when opening
    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
            });
            setButtonWidth(rect.width);
        }
    }, [isOpen]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOptions = value
    .map((val) => options.find((option) => option.value === val))
    .filter(Boolean) as Option[];

    const dropdown = (
        isOpen ? (
            <ul
                ref={dropdownRef}
                className="absolute mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg z-[9999]"
                style={{
                    top: dropdownPosition.top,
                    left: dropdownPosition.left,
                    position: 'absolute',
                    width: Math.max(200, buttonWidth)
                }}
                onMouseDown={(e) => e.stopPropagation()}  // Prevent outside click trigger
            >
                {clearButton &&
                    <li
                        onClick={clearSelection}
                        className="px-4 py-2 cursor-pointer hover:bg-primary-base hover:text-white text-sm font-medium text-gray-600"
                    >
                        All
                    </li>
                }
                {options.map((option) => (
                    <li
                        key={option.value}
                        onClick={() => handleSelect(option)}
                        className={`px-4 py-2 flex gap-1 items-center cursor-pointer hover:bg-primary-base hover:text-white text-sm font-medium text-gray-600 ${isOptionSelected(option) ? 'bg-primary-base text-white font-semibold' : ''
                            }`}
                    >
                        {option.img && <img src={option.img} alt="" className="w-5 h-5 mr-2" />}
                        {option.label}
                        {isOptionSelected(option) && <span className="ml-2 text-indigo-600">&#10003;</span>}
                    </li>
                ))}
            </ul>
        ) : null
    );

    return (
        <div className={clsx("relative w-full", className)} key={accessor}>
            <button
                ref={buttonRef}
                className={clsx("w-full px-4 py-2 bg-white border rounded-md shadow-sm text-left  flex items-center justify-between", buttonClass)}
                onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="flex items-center text-gray-600 text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
          {selectedOptions.length === 1 && selectedOptions[0]?.img && (
            <img src={selectedOptions[0].img} alt="" className="w-5 h-5 mr-2" />
          )}
          {selectedOptions.length > 0 ? selectedOptions.map((opt) => opt.label).join(', ') : placeholder}
        </span>
                <IconArrowDown color="#525866"/>
            </button>

            {createPortal(dropdown, document.body)}
        </div>
    );
};

export default Select2;
