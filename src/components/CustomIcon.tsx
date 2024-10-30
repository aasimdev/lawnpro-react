import React from "react";

interface CustomIconProps {
    iconPath: React.FC<React.SVGProps<SVGSVGElement>>; // Expecting an imported SVG as a component
    color?: string;
    size?: number;
}

const CustomIcon: React.FC<CustomIconProps> = ({ iconPath: IconPath, color = 'black', size = 24 }) => {
    return (
        <IconPath
            width={size}
            height={size}
            color={color}
        />
    );
};

export default CustomIcon;
