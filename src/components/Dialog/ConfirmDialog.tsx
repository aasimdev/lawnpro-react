import React from 'react';
import { Dialog, DialogContent, Divider } from '@mui/material';
import { IconSpam } from '../../utils/SvgUtil';

interface ConfirmDialogProps {
    open: boolean;
    title: string;
    content: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ open, title, content, onConfirm, onCancel }) => {
    return (
        <Dialog open={open} onClose={onCancel} sx={{
            "& .MuiDialog-paper" : {
                borderRadius: "20px",
                maxWidth: "400px",
                padding: '20px'
            }
        }}>
            <DialogContent>
                <div className='flex flex-col items-center gap-4'>
                    <div className='text-error-base p-2 bg-error-lighter rounded-full'>
                        <IconSpam size={20} />
                    </div>
                    <div className='flex flex-col items-center text-center gap-1'>
                        <span className='text-base font-medium'>{title}</span>
                        <span className='text-sm text-gray-600'>{content}</span>
                    </div>
                </div>
            </DialogContent>
            <Divider />
            <div className="pt-4 flex items-center gap-3 text-sm">
                <div onClick={onCancel} className="border w-full rounded-2xl p-2 text-center text-gray-600 cursor-pointer">
                    Cancel
                </div>
                <div onClick={onConfirm} className="border w-full rounded-2xl p-2 text-center bg-primary-base text-white cursor-pointer">
                    Confirm
                </div>
            </div>
        </Dialog>
    );
};

export default ConfirmDialog;
