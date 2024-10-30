import React from "react";
import { getMonthAndDate, getTimeRange } from "../../utils/DateUtil";
import { Divider } from "@mui/material";
import { IconClock, IconLocation } from "../../utils/SvgUtil";
import { EVENT_COMPLETED, EVENT_OPEN } from "../../config/constant";

interface DashboardEvent {
    date: string;
    companyName: string;
    userName: string;
    timeStart: string;
    timeDuration: number;
    address: string;
    status: number;
    invoiced: boolean;
}

interface DashboardEventItemProps {
    item: DashboardEvent
}

const DashboardEventItem: React.FC<DashboardEventItemProps> = ({ item }) => {
    const { month, day } = getMonthAndDate(item.date);
    const { startTime, endTime, status } = getTimeRange(item.timeStart, item.timeDuration);

    const renderItemStatus = () => {
        switch (item.status) {
            case EVENT_OPEN:
                return (
                    <div className="px-2 py-0.5 rounded-full bg-[#FFC0C5] border-[1px] border-solid text-center text-[#681219] flex">
                        <span className="text-xs font-medium">Open</span>
                    </div>
                );
            case EVENT_COMPLETED:
                return (
                    <div className="px-2 py-0.5 rounded-full bg-[#D7EEA8] border-[1px] border-solid text-center text-[#1B290A] flex">
                        <span className="text-xs font-medium">Completed</span>
                    </div>
                );
            default:
                return(
                    <></>
                )
        }
    }
    return (
        <div className="flex items-center gap-4 px-4 py-[10px] w-full">
            <div className="flex flex-col text-center">
                <span className="text-sm font-medium text-[#525866]">{month}</span>
                <span className="text-2xl font-medium text-[#525866]">{day}</span>
            </div>
            <Divider orientation="vertical" />
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    <div className="flex flex-col text-left gap-1 min-w-44 lg:min-w-36">
                        <span className="text-sm font-medium text-black">{item.companyName}</span>
                        <span className="text-sm text-[#525866]">{item.userName}</span>
                    </div>
                    <div className="flex flex-col text-left gap-1">
                        <div className="flex items-center gap-[10px]">
                            <IconClock color='#525866' size={18} />
                            <span className="text-sm font-medium text-[#525866]">{`${startTime}-${endTime} ${status}`}</span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <IconLocation color='#525866' size={18} />
                            <span className="text-sm font-medium text-[#525866] ">{item.address}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    {renderItemStatus()}
                    <div className="px-2">
                        <span className="text-xs text-[#717784]">{item.invoiced ? 'Invoiced' : 'Not Invoiced'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardEventItem