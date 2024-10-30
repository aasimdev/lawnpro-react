import { Box } from "@mui/material";
import React from "react";
import { SxProps, Theme } from '@mui/system';  // Import SxProps from Material-UI (or similar library)

interface DashboardItemProps {
    children: React.ReactNode;
    sx?: SxProps<Theme>;
    className?: string;
}
const DashboardItem: React.FC<DashboardItemProps> = (props) => {
    return (
        <Box sx={{
            borderRadius: '16px',
            border: "1px solid #E1E4EA",
            background: "#FFF",
            /* regular-shadow/x-small */
            boxShadow: '0px 1px 2px 0px rgba(10, 13, 20, 0.03)',
            padding : '16px',
            ...props.sx,
        }} className={props.className}>
            {props.children}
        </Box>
    )
}

export default DashboardItem;