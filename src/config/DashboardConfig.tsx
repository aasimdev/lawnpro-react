// DashboardConfig.ts

export interface PeriodItem {
    interval: string;
    text: string;
}

export interface DashboardConfigProps {
    periods: Array<PeriodItem>;
}
const DashboardConfig: DashboardConfigProps = {
    periods : [
        {
            interval: '7D',
            text : '7 Days'
        },
        {
            interval: '15D',
            text : '15 Days'
        },
        {
            interval: '1M',
            text : '1 Month'
        },
        {
            interval: '6M',
            text : '6 Months'
        },
        {
            interval: '1Y',
            text : '1 Year'
        },
    ]
};

export default DashboardConfig;
