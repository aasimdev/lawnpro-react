import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Dayjs } from 'dayjs';

interface DateInputProps {
    onChange?: (date: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ onChange }) => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleDateChange = (date: Dayjs | null) => {
        setSelectedDate(date);
        if (onChange && date) {
            onChange(date.toString());
        }
    };

    const handleOpenCalendar = () => {
        setIsCalendarOpen(true);
    };

    const handleCloseCalendar = () => {
        setIsCalendarOpen(false);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    label=""
                    value={selectedDate}
                    onChange={handleDateChange}
                    open={isCalendarOpen}
                    onOpen={handleOpenCalendar}
                    onClose={handleCloseCalendar}
                    slotProps={{
                        textField: {
                            onClick: handleOpenCalendar,
                        },
                    }}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default DateInput;
