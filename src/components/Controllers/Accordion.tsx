import React, { useState, ReactNode } from 'react';
import { IconArrowDown, IconArrowUp } from '../../utils/SvgUtil';

interface AccordionProps {
    title: string;
    children?: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div className="">
            <button
                onClick={toggleAccordion}
                className="flex justify-between items-center w-full p-1 text-left bg-white hover:bg-gray-50  focus:outline-none border-b border-gray-300 mb-4"
            >
                <span className="text-lg font-medium">{title}</span>
                {isOpen ? <IconArrowUp /> : <IconArrowDown />}
            </button>
            {isOpen && (
                <div className="px-2.5">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
