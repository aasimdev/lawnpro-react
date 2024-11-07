import React from "react";
import { SidebarItem } from "../config/SidebarConfig";
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import CustomIcon from "./CustomIcon";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import splitPath from "../utils/PathUtil";

export interface NestedListItemProps {
    baseUrl: string,
    menu: SidebarItem,
    hovered: boolean,
    expanded: boolean
}
const NestedListItem: React.FC<NestedListItemProps> = ({ baseUrl, menu, hovered, expanded }) => {
    const location = useLocation();

    // Helper function to check if an item is active
    const isItemActive = (item: SidebarItem): boolean => {
        if (item.url === location.pathname) {
            return true;
        }
        // Check if any children match the current URL
        if (item.subMenu) {
            return item.subMenu.some((child) => child.url &&location.pathname.startsWith(child.url ));
        }
        return false;
    };

    const [open, setOpen] = React.useState(isItemActive(menu));
    const handleClick = () => {
        setOpen(!open);
    };

    const navigate = useNavigate();
    return (
        <>
            <ListItemButton
                key={baseUrl}
                sx={{
                    display: 'flex',
                    alignItems: 'left',
                    gap: '10px', // Spacing between the icon and text,
                    padding: '10px',
                    '&:hover': {
                        backgroundColor: '#A2DC3F1A', // Background color on hover
                    },
                    background: isItemActive(menu) ? "#75A428 !important" : "",
                    borderRadius: '8px',
                    height: '40px'
                }}
                onClick={() => {
                    if (menu.subMenu !== undefined) {
                        handleClick();
                    } else {
                        // Do something else or nothing
                        if(menu.url)
                            navigate(menu.url);
                    }
                }} >
                <ListItemIcon sx={{
                    display: 'inline-block',
                    minWidth: 'auto'
                }}>
                    <CustomIcon iconPath={menu['icon']} color={"white"} size={18}></CustomIcon>
                </ListItemIcon>
                <ListItemText primary={menu["title"]}
                    sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontWeight: 500,
                        lineHeight: '20px'
                    }} />

                {menu.subMenu !== undefined ? (open ? <ExpandLess /> : <ExpandMore />) : <></>}
            </ListItemButton>
            {(menu.subMenu !== undefined) ?
                (<Collapse in={expanded ? open : (hovered && open)} timeout="auto" unmountOnExit>
                    <List component="div" sx={{
                        gap: '4px', // Spacing between ListItems
                        display: 'flex',
                        flexDirection: 'column', // To ensure vertical stacking,
                        padding: "0 0 0 8px"
                    }} key={baseUrl}>
                        {menu.subMenu.map((subMenu, subKey) => (
                            <ListItemButton
                                onClick={() => {
                                    if (subMenu.url !== undefined) {
                                        navigate(subMenu.url);
                                    } 
                                }}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'left',
                                    gap: '10px', // Spacing between the icon and text,
                                    paddingLeft: '16px',
                                    borderRadius: '8px',
                                    '&:hover': {
                                        backgroundColor: '#A2DC3F1A', // Background color on hover
                                    },
                                    background: isItemActive(subMenu) ? "#75A428 !important" : "",
                                    height: '40px'
                                }}
                                key={subMenu.url}>
                                <ListItemIcon sx={{
                                    display: 'inline-block',
                                    minWidth: 'auto'
                                }}>
                                    <CustomIcon iconPath={subMenu['icon']} color={"white"} size={18}></CustomIcon>
                                </ListItemIcon>
                                <ListItemText primary={subMenu["title"]}
                                    sx={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        fontWeight: 500,
                                        lineHeight: '20px'
                                    }} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse >) : <></>
            }
        </>
    )
}


export default NestedListItem;