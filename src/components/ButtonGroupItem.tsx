import { Button } from "@mui/material";
import React from "react";

interface ButtonGroupItemProps {
    children: React.ReactNode;
    index: number;
    isSelected: boolean;
    onClick: (idx: number) => void;
}

const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({ children, index, isSelected, onClick }) => {
    return (
        <Button sx={{
            color: isSelected? '#0E121B' : '#525866',
            padding: "8px 16px",
            background: isSelected? '#F5F7FA' : 'white',
        }} onClick={() => onClick(index)}>
            {children}
        </Button>
    )
}

export default ButtonGroupItem