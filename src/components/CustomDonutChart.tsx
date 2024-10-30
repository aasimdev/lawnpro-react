import React, { useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";
import { formatToCurrency } from "../utils/MathUtil";

interface CustomDonutData {
    name: string;
    value: number;
}
interface CustomDonutChartProps {
    data: Array<CustomDonutData>;
    colors: Array<string>
}
const CustomDonutChart: React.FC<CustomDonutChartProps> = ({ data, colors }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const renderActiveShape = (props: any) => {
        // const RADIAN = Math.PI / 180;
        const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;
        // const sin = Math.sin(-RADIAN * midAngle);
        // const cos = Math.cos(-RADIAN * midAngle);
        // const sx = cx + (outerRadius + 10) * cos;
        // const sy = cy + (outerRadius + 10) * sin;
        // const mx = cx + (outerRadius + 30) * cos;
        // const my = cy + (outerRadius + 30) * sin;
        // const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        // const ey = my;
        // const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy - 45} textAnchor="middle" fill="#525866" fontSize="12px" fontWeight={500}>
                    {payload.name}
                </text>
                <text x={cx} y={cy - 15} textAnchor="middle" fill='black' fontSize="24px" fontWeight={500}>
                    {formatToCurrency(value)}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius + 3}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
            </g>
        );
    };
    // Custom Legend Component
    const CustomLegend = ({ payload }: any) => {
        // Remove the last element
        return (
            <div className="flex items-center justify-between mt-4 px-6 lg:px-2 md:px-10">
                {payload.map((entry: any, index: number) => (
                    <div key={`item-${(index - 1 + payload.length) % payload.length}`} className='flex items-center m-0 justify-between' >
                        <div style={{
                            width: '14px',
                            height: '14px',
                            backgroundColor: payload[(index - 1 + payload.length) % payload.length].color, // Use the color from the entry
                            borderRadius: '50%', // Circular legend item
                            marginRight: '5px',
                        }} />
                        {/* Change the color of the text here */}
                        <span style={{ color: 'black' }}>{payload[(index - 1 + payload.length) % payload.length].value}</span> {/* Change the text color here */}
                    </div>
                ))}
            </div>
        );
    };
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    width='300px'
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    outerRadius={120}
                    innerRadius={90}
                    fill="#8884d8"
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    isAnimationActive={true}
                    cy={150}
                >

                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} style={{ outline: "none" }} />
                    ))}
                </Pie>
                <Legend
                    content={<CustomLegend />}  // Use the custom legend component
                    verticalAlign="bottom"    // Align the legend to the bottom
                    layout="horizontal"        // Layout style
                    align="center"             // Center alignment
                    wrapperStyle={{
                        fontSize: '12px',        // Font size of legend items
                        color: 'black'
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default CustomDonutChart