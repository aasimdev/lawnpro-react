import React from "react";

const DashboardButtonGroup: React.FC = () => {
    return (
        <div className='flex items-center w-full justify-between text-center cursor-pointer text-[#525866] font-medium'>
            <div className='w-full border-[1px] border-main-gray border-solid px-3 py-1 rounded-l border-r-0 hover:text-black'><span>7 Days</span></div>
            <div className='w-full border-[1px] border-main-gray border-solid px-3 py-1 border-r-0 hover:text-black'><span>15 Days</span></div>
            <div className='w-full border-[1px] border-main-gray border-solid px-3 py-1 border-r-0 hover:text-black'><span>1 Month</span></div>
            <div className='w-full border-[1px] border-main-gray border-solid px-3 py-1 border-r-0 hover:text-black'><span>6 Months</span></div>
            <div className='w-full border-[1px] border-main-gray border-solid px-3 py-1 rounded-r hover:text-black'><span>1 Year</span></div>
        </div>
    )
}

export default DashboardButtonGroup