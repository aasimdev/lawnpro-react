import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface CutomAreaData {
    name: string;
    value: number;
}
interface CustomAreaChartProps {
    data: Array<CutomAreaData>;
}
const CustomAreaChart: React.FC<CustomAreaChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#85C51F" stopOpacity={0.4} />
                        <stop offset="85%" stopColor="#85C51F" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="name"
                    tick={{ fontSize: '11px', fontWeight: 500, fill: '#99A0AE' }}
                    axisLine={{ strokeDasharray: '3 3' }}
                    tickLine={false}
                />
                <YAxis
                    domain={[200, 750]}
                    tick={{ fontSize: '11px', fontWeight: 500, fill: '#99A0AE' }} 
                    axisLine={false}
                    tickLine={false}
                />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#75A428" fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default CustomAreaChart