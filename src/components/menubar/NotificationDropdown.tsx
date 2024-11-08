import React from 'react';
import todoIcon from '../../assets/images/notify.png';
import todoNew from '../../assets/images/new.png';
import todoN from '../../assets/images/new1.png';
import Invoice from '../../assets/images/invoice.png';
import NotComp from '../../assets/images/Not.png';
// Example of custom icon paths
const notifications = [
    { id: 1, icon: todoIcon, title: 'New Text Received', message: 'A new text message was received from Ashlyn Carter.', time: '8 min ago' },
    { id: 2, icon: todoNew, title: 'New To-do Assigned', message: 'A new event is assigned to your crew.', time: 'Today, 8:45 am' },
    { id: 3, icon: todoN, title: 'To-do Completed', message: 'The event "Test 141024-1" was just completed.', time: 'Yesterday' },
    { id: 4, icon: Invoice, title: 'Invoice Viewed', message: 'The invoice for Patrick Cash was just viewed.', time: 'Mar 23' },
    { id: 5, icon: NotComp, title: 'To-do Not Done', message: 'The visit Round #5 (Duplicate) was just marked.', time: 'Jan 16,2022' }
];

const NotificationDropdown = () => {
    return (
        <div className="absolute right-0  w-[460px]    bg-white shadow-lg rounded-[10px]  z-50">
            <div className="flex justify-between items-center px-[20px] py-[16px] border-b border-gray-200">
                <h3 className="text-base font-medium text-black-900">Notifications</h3>
                <button className="text-primary-base text-sm font-medium ">Mark all as read</button>
            </div>
            <div className="space-y-3">
                {notifications.map(notification => (
                    <div key={notification.id} className="flex justify-between px-4 mt-0 items-start py-[17px] border-b border-gray-200">
                        <div className="flex items-start gap-[5px]">
                            <img src={notification.icon} alt="Notification Icon" className="text-xl w-10 h-10" />
                            <div className='flex flex-col gap-[4px]'>
                                <p className="text-sm font-medium text-black-800">{notification.title}</p>
                                <p className="text-xs font-normal text-black-500">{notification.message}</p>
                            </div>
                        </div>
                        <span className="text-xs font-normal text-gray-400">{notification.time}</span>
                    </div>
                ))}
            </div>
            <a href="/" className="block  text-center text-black-300 py-[14px] font-semibold text-sm hover:underline ">
                View All
            </a>
        </div>
    );
};

export default NotificationDropdown;
