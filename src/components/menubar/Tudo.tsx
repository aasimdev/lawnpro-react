    import React from 'react';
    import { FaRegClock } from 'react-icons/fa';
    import ClockImg from '../../assets/images/clock.png'; 
    import crossIcon from '../../assets/images/cross.png';

    const TimerList = () => {
        const items = [
            { name: 'Break', color: 'bg-teal-400' },
            { name: 'Driving', color: 'bg-blue-400' },
            { name: 'Equipment Maintenance', color: 'bg-blue-400' },
            { name: 'General Work', color: 'bg-gray-400' },
            { name: 'Lunch', color: 'bg-teal-400' },
            { name: 'Misc Work', color: 'bg-orange-400' },
            { name: 'Visit', color: 'bg-gray-400' },
        ];

        return (
            <div className="absolute right-0 mt-2 w-[460px]   bg-white shadow-lg rounded-[10px] border border-gray-200">
                <div className="flex justify-between items-center  px-[20px] py-[16px] border-b border-gray-200">
                    <h3 className="text-base font-medium text-black-700 ">Timer</h3>
                    <button className="black focus:outline-none">
                    <img src={crossIcon} alt="Clock" className="" />
                    </button>
                </div>
                <div className="space-y-2.5">
                    {items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center px-[16px] py-[11.5px] border-b border-gray-200">
                            <span className="flex items-center">
                                <span className={`w-[12px] h-[12px] mr-2 rounded-[50%] ${item.color}`}></span>
                                <span className="text-sm font-medium text-black-800">{item.name}</span>
                            </span>
                            <button className="flex items-center w-[75px] text-white justify-evenly bg-primary-base p-[6px] rounded-[8px] text-sm">
                                <img src={ClockImg} alt="Clock" className="" />
                                Start
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default TimerList;
