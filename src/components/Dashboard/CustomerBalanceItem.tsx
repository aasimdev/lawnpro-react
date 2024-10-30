import { Avatar } from "@mui/material";
import React from "react";
import { formatToCurrency } from "../../utils/MathUtil";
import { IconNavigateRight } from "../../utils/SvgUtil";

interface CustomerBalance {
    name: string;
    balance: number;
    avatar: string;
}
interface CustomerBalanceItemProps {
    item: CustomerBalance;
}
const CustomerBalanceItem: React.FC<CustomerBalanceItemProps> = ({ item }) => {
    return (
        <div className="flex items-center justify-between py-2">
            <div className="flex items-center justify-between gap-3">
                <Avatar alt="" src={item.avatar} />
                <span className="text-sm font-medium">{item.name}</span>
            </div>
            <div className="flex items-center justify-between gap-3">
                <span className="text-base font-medium">{formatToCurrency(item.balance)}</span>
                <IconNavigateRight size={12} color="#525866"/>
            </div>
        </div>
    )
}

export default CustomerBalanceItem