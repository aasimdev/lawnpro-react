import styled from "@emotion/styled";
import { Tab, Theme } from "@mui/material";

interface CustomTabProps {
    selected?: boolean;
}

const CustomTab = styled(Tab)<CustomTabProps>(({ selected }) => ({
    borderRadius: 'var(--radius-6, 6px)',
    backgroundColor: selected ? 'var(--bg-white-0, #FFF)' : 'transparent',
    boxShadow: selected
        ? '0px 6px 10px 0px rgba(14, 18, 27, 0.06), 0px 2px 4px 0px rgba(14, 18, 27, 0.03)'
        : 'none',
    '& .Mui-Selected' : {
        color: 'black'
    },
    '&:hover': {
        backgroundColor: selected ? 'var(--bg-white-0, #FFF)' : 'rgba(255, 255, 255, 0.08)', // Optional hover effect
    },
}));

export default CustomTab;