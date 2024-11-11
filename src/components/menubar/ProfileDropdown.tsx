import React from "react";
import { Avatar, Divider, Menu, MenuItem, Typography } from "@mui/material";
import { Edit, Refresh, Logout } from "@mui/icons-material";

interface ProfileDropdownProps {
    anchorEl: HTMLElement | null;
    open: boolean;
    handleClose: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ anchorEl, open, handleClose }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <div className="p-4 text-center">
                <Avatar
                    alt="User Profile"
                    src="https://via.placeholder.com/40"
                    className="mx-auto mb-2"
                />
                <Typography variant="subtitle1">Patrick Cash</Typography>
                <Typography variant="body2" color="text.secondary">patrickcash1@me.com</Typography>
            </div>
            <Divider />
            <MenuItem onClick={handleClose}>
                <Edit fontSize="small" />
                <Typography variant="inherit" className="ml-2">Edit Account</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Refresh fontSize="small" />
                <Typography variant="inherit" className="ml-2">Reset Account</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Logout fontSize="small" />
                <Typography variant="inherit" className="ml-2">Logout</Typography>
            </MenuItem>
        </Menu>
    );
};

export default ProfileDropdown;
