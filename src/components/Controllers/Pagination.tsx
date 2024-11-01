import React from 'react';
import { IconArrowDown, IconArrowLeftDouble, IconArrowLeftSingle, IconArrowRightDouble, IconArrowRightSingle } from '../../utils/SvgUtil';
import clsx from 'clsx'
import { Menu, MenuItem } from '@mui/material';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    siblingCount?: number;
    boundaryCount?: number;
    itemCountPerPage?: number;
    handleChangeItemCountPerPage?: (size: number) => void;
    setPage: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, siblingCount = 1, boundaryCount = 2, setPage, handleChangeItemCountPerPage, itemCountPerPage = 5 }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handlePagesClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const renderPageNumbers = () => {
        // if (totalPages < 7) {
        //     return Array.from({ length: totalPages }, (_, page) => (
        //         <div className={clsx('p-1.5 cursor-pointer text-sm text-gray-600',
        //             (page + 1 === currentPage) ? "" : "bg-white rounded-lg border-mini border-solid border-gray-200"
        //         )} key={`page-${page + 1}`} onClick={() => setPage(page + 1)}>
        //             <div className="w-5 h-5 flex items-center justify-center"><span className="">{page + 1}</span></div>
        //         </div>
        //     ))
        // }

        const elements = [];
        let pageIndex: number;

        for (pageIndex = 1; pageIndex < boundaryCount + 1; pageIndex++) {
            if (pageIndex > totalPages)
                break;
            (function (i: number) {
                elements.push(
                    <div className={clsx('p-1.5 cursor-pointer text-sm text-gray-600',
                        (i === currentPage) ? "" : "bg-white rounded-lg border-mini border-solid border-gray-200"
                    )} key={`page-${i}`} onClick={() => setPage(i)}>
                        <div className="w-5 h-5 flex items-center justify-center"><span className="">{i}</span></div>
                    </div>
                )
            })(pageIndex);
        }

        if (pageIndex > totalPages)
            return elements;

        if (pageIndex < currentPage - siblingCount) {
            elements.push(
                <div className='p-1.5 text-sm text-gray-600'
                    key={`page-left-ellipse`}>
                    <div className="w-5 h-5 flex items-center justify-center"><span className="">...</span></div>
                </div>)
        }

        for (pageIndex = Math.max(pageIndex, currentPage - siblingCount); pageIndex < currentPage + siblingCount + 1; pageIndex++) {
            if (pageIndex > totalPages)
                return elements;
            (function (i: number) {
                elements.push(
                    <div className={clsx('p-1.5 cursor-pointer text-sm text-gray-600',
                        (i === currentPage) ? "" : "bg-white rounded-lg border-mini border-solid border-gray-200"
                    )} key={`page-${i}`} onClick={() => setPage(i)}>
                        <div className="w-5 h-5 flex items-center justify-center"><span className="">{i}</span></div>
                    </div>
                )
            })(pageIndex);
        }

        if (pageIndex < totalPages - boundaryCount + 1) {
            elements.push(
                <div className='p-1.5 text-sm text-gray-600'
                    key={`page-right-ellipse`}>
                    <div className="w-5 h-5 flex items-center justify-center"><span className="">...</span></div>
                </div>)
        }

        for (pageIndex = Math.max(pageIndex, totalPages - boundaryCount + 1); pageIndex < totalPages + 1; pageIndex++) {
            (function (i: number) {
                elements.push(
                    <div className={clsx('p-1.5 cursor-pointer text-sm text-gray-600',
                        (i === currentPage) ? "" : "bg-white rounded-lg border-mini border-solid border-gray-200"
                    )} key={`page-${i}`} onClick={() => setPage(i)}>
                        <div className="w-5 h-5 flex items-center justify-center"><span className="">{i}</span></div>
                    </div>
                )
            })(pageIndex);
        }


        // let i: number = 0;
        // for (i = Math.max(1, currentPage - 3); i < Math.max(currentPage + 2, 5); i++) {
        //     if (i > totalPages - 2)
        //         break;
        //     (function (i: number) {
        //         elements.push(
        //             <div className={clsx('p-1.5 cursor-pointer text-sm text-gray-600',
        //                 (i + 1 === currentPage) ? "" : "bg-white rounded-lg border-mini border-solid border-gray-200"
        //             )} key={`page-${i + 1}`} onClick={() => setPage(i + 1)}>
        //                 <div className="w-5 h-5 flex items-center justify-center"><span className="">{i + 1}</span></div>
        //             </div>
        //         )
        //     })(i);
        // }

        // if (i < totalPages - 1) {
        //     elements.push(
        //         <div className='p-1.5 text-sm text-gray-600'
        //             key={`page-right-ellipse`}>
        //             <div className="w-5 h-5 flex items-center justify-center"><span className="">...</span></div>
        //         </div>)
        // }
        // elements.push(
        //     <div className={clsx('p-1.5 cursor-pointer text-sm text-gray-600',
        //         (totalPages === currentPage) ? "" : "bg-white rounded-lg border-mini border-solid border-gray-200"
        //     )} key={`page-${totalPages}`} onClick={() => setPage(totalPages)}>
        //         <div className="w-5 h-5 flex items-center justify-center"><span className="">{totalPages}</span></div>
        //     </div>
        // )
        return elements
    }
    return (
        <div className="flex justify-between items-center mt-4">
            {/* Page Information */}
            <div className="text-sm text-gray-600">
                <span>Page {currentPage} of {totalPages}</span>
            </div>
            {/* Page Numbers */}
            <div className="flex items-center gap-2">
                <div className='p-1.5 cursor-pointer' onClick={() => setPage(1)}>
                    <IconArrowLeftDouble color="#525866" size={20} />
                </div>
                <div className='p-1.5 cursor-pointer' onClick={() => setPage(currentPage - 1)}>
                    <IconArrowLeftSingle color="#525866" size={20} />
                </div>
                {renderPageNumbers()}
                <div className='p-1.5 cursor-pointer' onClick={() => setPage(currentPage + 1)}>
                    <IconArrowRightSingle color="#525866" size={20} />
                </div>
                <div className='p-1.5 cursor-pointer' onClick={() => setPage(totalPages)}>
                    <IconArrowRightDouble color="#525866" size={20} />
                </div>
            </div>
            {/* Page */}
            <div className={clsx(
                'cursor-pointer bg-white border-mini border-gray-200 rounded-md',
            )}>
                <div
                    onClick={handlePagesClick}
                    id="menu-button"
                    className="p-2 flex items-center gap-2 text-sm text-gray-600"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <span>{itemCountPerPage} Rows</span>
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

                    <MenuItem onClick={() => { handleClose(); handleChangeItemCountPerPage?.(5); }} sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#525866'
                    }}>5 Rows</MenuItem>

                    <MenuItem onClick={() => { handleClose(); handleChangeItemCountPerPage?.(10);}} sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#525866'
                    }}>10 Rows</MenuItem>

                    <MenuItem onClick={() => { handleClose(); handleChangeItemCountPerPage?.(20);}} sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#525866'
                    }}>20 Rows</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Pagination;