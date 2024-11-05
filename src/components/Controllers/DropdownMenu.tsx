import { Menu, MenuItem } from "@mui/material";
import React from "react";
import clsx from 'clsx';
import { IconArrowDown } from "../../utils/SvgUtil";
import { generateRandomId } from "../../utils/MathUtil";

export interface DropdownMenuItemProps {
    title: string;
    icon?: React.ReactNode;
    trigger?: () => void;
}

export interface DropdownMenuProps {
    title: string;
    items: Array<DropdownMenuItemProps>;
    className?: string;
    icon?: React.ReactElement;
}

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={clsx(
            'cursor-pointer',
            props.className
        )}>
            <div
                onClick={handleClick}
                id="menu-button"
                className="p-2 flex items-center gap-2 text-sm"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                {props.icon}
                <span>{props.title}</span>
                <IconArrowDown size={14} color="currentColor" />
            </div>
            <Menu
                id="demo-positioned-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                // elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
                sx={{
                    marginTop: '4px',
                    '& .MuiMenu-paper': {
                        borderRadius: '16px',
                        boxShadow: '0px 16px 32px -12px rgba(14, 18, 27, 0.10)',
                        border: "1px solid #E1E4EA",
                    }
                }}
            >
                {
                    props.items.map((item, index) => (
                        <MenuItem onClick={() => { handleClose(); if (item.trigger) item.trigger(); }} sx={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#525866'
                        }} key={generateRandomId()}>
                            <div className="flex items-center text-gray-600 gap-2">
                                {item.icon}
                                {item.title}
                            </div>
                        </MenuItem>
                    ))
                }
            </Menu>
        </div>
    )
}

export default DropdownMenu;