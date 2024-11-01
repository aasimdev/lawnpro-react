import React, { SVGProps } from "react";
import { useLocation } from 'react-router-dom';
import { Avatar, Badge, Divider, Link, Tooltip } from "@mui/material";
import { LuBell, LuListChecks, LuSettings } from "react-icons/lu";
import splitPath from "../utils/PathUtil";
import { IconMessenger, IconClockIn, IconMenu } from "../utils/SvgUtil";
import CustomIcon from "../components/CustomIcon";
import clsx from 'clsx';
import { UrlConfig } from "../config/UrlConfig";
interface MenuBarProps {
    open?: boolean;
    setOpen: (val: boolean) => void;
}

// Define an empty SVG component
const EmptyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return <svg {...props} style={{ display: 'none' }} />;
};

const MenuBar: React.FC<MenuBarProps> = ({ open, setOpen }) => {
    const location = useLocation();
    // const path = splitPath(location.pathname)
    let title = UrlConfig[location.pathname].title;
    let icon = UrlConfig[location.pathname].icon;
    // if (path.length > 0) {
    //     const subMenu = UrlConfig[path[0]]?.subMenu;
    //     if (subMenu) {
    //         const menuItem = subMenu.find(menu => menu.url === path[1]);
    //         title = menuItem?.title || '';  // Use optional chaining and default to an empty string
    //         icon = menuItem?.icon || EmptyIcon;  // Use optional chaining
    //     }
    //     else {
    //         title = '';
    //         icon = EmptyIcon;
    //     }
    // }
    // else {
    //     title = MenuConfig[location.pathname].title;
    //     icon = MenuConfig[location.pathname].icon;
    // }

    return (
        <div className={clsx(
            "menu-bar pl-8 py-[10px] h-[60px] border-b-2 flex items-center justify-between bg-white fixed w-screen z-[999]",
            open ? "ml-42 pr-80" : "sm:pr-24 pr-8",
        )} >
            {/* Left: Icon + Text */}
            <div className="flex items-center space-x-2 text-lg leading-[24px]">
                <div className='cursor-pointer px-[10px] block sm:hidden' onClick={() => setOpen(!open)}>
                    <IconMenu size={14} />
                </div>
                <Link href="/dashboard" ><CustomIcon iconPath={icon} color="black" size={18}></CustomIcon></Link>
                <span className=" font-medium">{title}</span>
            </div>
            {/* Right: Icons + Divider + Profile */}
            <div className="flex items-center space-x-4">
                <div className="md:flex hidden items-center space-x-4 ml-auto">
                    {/* Icon Buttons */}
                    <Tooltip title="To do" arrow>
                        <Link href="/">
                            <LuListChecks />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Schedule" arrow>
                        <Link href="/">
                            <IconClockIn size={16} />
                        </Link>
                    </Tooltip>
                    <Link href="/">
                        <IconMessenger color="blue" size={16} />
                    </Link>
                    <Link href="/">
                        <LuSettings />
                    </Link>
                    <Link href="/">
                        <Badge badgeContent={3} color="error"
                            sx={{
                                '& .MuiBadge-badge': {
                                    minWidth: '16px',
                                    height: '16px',
                                    fontSize: '10px',
                                    padding: '0',
                                },
                            }}>
                            <LuBell></LuBell>
                            {/* <Notifications /> */}
                        </Badge>
                    </Link>

                    {/* Divider */}
                    <Divider orientation="vertical" flexItem className="bg-gray-300" />
                </div>

                {/* Profile Avatar */}
                <Avatar
                    alt="User Profile"
                    src="https://via.placeholder.com/40"
                    className="w-10 h-10"
                />
            </div>
        </div >
    )
}

export default MenuBar;