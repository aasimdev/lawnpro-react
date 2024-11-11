import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Avatar, Badge, Divider, Link, Tooltip } from "@mui/material";
import { LuBell, LuListChecks, LuSettings } from "react-icons/lu";
import { IconMessenger, IconClockIn, IconMenu } from "../utils/SvgUtil";
import CustomIcon from "../components/CustomIcon";
import clsx from 'clsx';
import { UrlConfig } from "../config/UrlConfig";
import TimerDropdown from "../components/menubar/Tudo";
import NotificationDropdown from "../components/menubar/NotificationDropdown";
import ProfileDropdown from "../components/menubar/ProfileDropdown"; 

// Define the expected type of the `icon` prop in the `UrlConfig` object
interface UrlConfigItem {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;  // Type for icon as a React component
}

// Define the type for the `UrlConfig` object
interface UrlConfigType {
    [key: string]: UrlConfigItem;
}

// Assuming `UrlConfig` is an object of type `UrlConfigType` in the `UrlConfig` module
const DefaultIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="transparent" />
    </svg>
);

interface MenuBarProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuBar: React.FC<MenuBarProps> = ({ open, setOpen }) => {
    const location = useLocation();

    // Ensure icon is correctly typed as either a React component or DefaultIcon
    let title = UrlConfig[location.pathname]?.title || 'Default Title';
    let icon: React.ComponentType<React.SVGProps<SVGSVGElement>> = UrlConfig[location.pathname]?.icon || DefaultIcon;

    const [isTimerOpen, setIsTimerOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    // Profile dropdown state
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const toggleTimerDropdown = () => {
        setIsTimerOpen(!isTimerOpen);
    };

    const toggleNotificationDropdown = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={clsx(
            "menu-bar pl-8 py-[10px] h-[60px] border-b-2 flex items-center justify-between bg-white fixed w-screen z-[999]",
            open ? "ml-42 pr-80" : "sm:pr-24 pr-8",
        )}>
            <div className="flex items-center space-x-2 text-lg leading-[24px]">
                <div className='cursor-pointer px-[10px] block sm:hidden' onClick={() => setOpen(!open)}>
                    <IconMenu size={14} />
                </div>
                <Link href="/dashboard">
                    <CustomIcon iconPath={icon} color="black" size={18} />
                </Link>
                <span className="font-medium">{title}</span>
            </div>
            <div className="flex items-center space-x-4">
                <div className="md:flex hidden items-center space-x-4 ml-auto">
                    <Tooltip title="To do" arrow>
                        <div className="relative">
                            <Link onClick={toggleTimerDropdown}>
                                <LuListChecks />
                            </Link>
                            {isTimerOpen && <TimerDropdown />}
                        </div>
                    </Tooltip>

                    <Tooltip title="Schedule" arrow>
                        <Link>
                            <IconClockIn size={16} />
                        </Link>
                    </Tooltip>
                    <Link>
                        <IconMessenger color="blue" size={16} />
                    </Link>
                    <Link>
                        <LuSettings />
                    </Link>

                    <div className="relative">
                        <Link onClick={toggleNotificationDropdown}>
                            <Badge badgeContent={3} color="error"
                                sx={{
                                    '& .MuiBadge-badge': {
                                        minWidth: '16px',
                                        height: '16px',
                                        fontSize: '10px',
                                        padding: '0',
                                    },
                                }}>
                                <LuBell />
                            </Badge>
                        </Link>
                        {isNotificationOpen && <NotificationDropdown />}
                    </div>

                    <Divider orientation="vertical" flexItem className="bg-gray-300" />
                </div>

                {/* Profile Avatar with Dropdown */}
                <Avatar
                    alt="User Profile"
                    src="https://via.placeholder.com/40"
                    className="w-10 h-10 cursor-pointer"
                    onClick={handleAvatarClick}
                />
                <ProfileDropdown anchorEl={anchorEl} open={Boolean(anchorEl)} handleClose={handleProfileClose} />
            </div>
        </div>
    );
};

export default MenuBar;
