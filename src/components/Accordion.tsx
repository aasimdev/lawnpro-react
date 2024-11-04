import React, { useState, ReactNode } from 'react';

interface AccordionProps {
    title: string;
    children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div className="border-b border-gray-300">
            <button
                onClick={toggleAccordion}
                className="flex justify-between w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
                <span className="font-semibold text-gray-700">{title}</span>
                <svg
                    className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 bg-white text-gray-700">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
