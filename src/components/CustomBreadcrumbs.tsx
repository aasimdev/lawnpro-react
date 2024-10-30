import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';

export interface CustomBreadcrumbsType {
    elements : React.ReactNode[];
}

const CustomBreadcrumbs : React.FC<CustomBreadcrumbsType> = ({elements}) => {

    return (
        <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {elements}
            </Breadcrumbs>
        </Stack>
    );
}
export default CustomBreadcrumbs;