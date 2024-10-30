import React, { useState } from 'react';
import clsx from 'clsx';
import { List, Link, IconButton } from '@mui/material';
import LogoImage from '../assets/images/logo.png'; // import the image
import MenuConfig from '../config/MenuConfig';
import NestedListItem from '../components/NestedListItem';
import { IconArrowLeft, IconArrowRight } from '../utils/SvgUtil';
import { generateRandomId } from '../utils/MathUtil';

interface SideBarProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({ open, setOpen }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        if (!open) {
            setHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const renderMenuList = () => {
        return Object.entries(MenuConfig).map(([key, menu]) => {
            return (
                <NestedListItem baseUrl={key} menu={menu} hovered={hovered} expanded={open} key={generateRandomId()}></NestedListItem>
            );
        });
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={clsx(
                'h-screen bg-gray-800 text-white transition-all duration-300 flex-col p-3 fixed z-[99999] min-h-full overflow-y-scroll sidebar',
                {
                    'w-full sm:w-72': open || hovered,
                    'w-0 left-[-40px] sm:w-16 sm:flex sm:left-0': !open && !hovered,
                }
            )}
        >
            <div className={(open || hovered) ? "flex items-center justify-between" : "flex items-center self-center"}>
                {open || hovered ? (
                    <div className="text-lg font-bold">
                        <Link href="/">
                            <img src={LogoImage} alt="" style={{ width: '100%', height: 'auto' }} />
                        </Link>
                    </div>
                ) : (
                    <></>
                )}
                <IconButton onClick={() => setOpen(!open)} sx={{
                    background: 'black',
                    padding: '4px',
                    borderRadius: '8px',
                    "&:hover": {
                        background: 'black',
                    }

                }}>
                    {open ? <IconArrowLeft  color="white" size={20}/> : <IconArrowRight  color="white" size={20}/>}
                </IconButton>
            </div>
            <div className="py-1">

                <List sx={{
                    gap: '4px', // Spacing between ListItems
                    display: 'flex',
                    flexDirection: 'column', // To ensure vertical stacking
                    component: 'nav'
                }}>
                    {renderMenuList()}
                </List>
            </div>
            {/* <div className="flex flex-col items-start mt-4 space-y-2">
                    <div className="p-2 w-full">
                        <Button variant="outlined" className='text-left'
                            startIcon={<RocketLaunch />}
                            sx={{
                                justifyContent: "flex-start", // Align text and icon to the left
                                textAlign: "left", // Ensure text stays left-aligned
                            }}>
                            {(open || hovered) && "Get Started"}
                        </Button>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer w-full">
                        <Home />
                        {(open || hovered) && <span className="ml-4">Home</span>}
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer w-full">
                        <Info />
                        {(open || hovered) && <span className="ml-4">About</span>}
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer w-full">
                        <Settings />
                        {(open || hovered) && <span className="ml-4">Settings</span>}
                    </div>
                </div> */}
        </div >
    );
}
export default SideBar;