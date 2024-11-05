import React, { useState } from 'react';
import CustomBreadcrumbs from '../components/controllers/CustomBreadcrumbs';
import { Link, ButtonGroup, Button, Chip, Divider, Tabs, Tab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ButtonGroupItem from '../components/ButtonGroupItem';
import DashboardConfig from '../config/DashboardConfig';
import { CheckCircle, InfoRounded, OpenInNew } from '@mui/icons-material';
import DashboardItem from '../components/dashboard/DashboardItem';

import { IconCoinsDollar, IconRevenue, IconWisestackLogo, IconHome, IconAutomation, IconViewPropery, IconNewPropery, IconDeletePropery, IconNotes, IconEmail, IconEmailOpened, IconEmailSent, IconCalendarFavorite, IconCalendarCheckIn, IconSaveMoneyDollar, IconCreditPos, IconDollar, IconCustomers, IconContact, IconSchedule, IconTimeQuarter, IconCancelCircleHalfDot, IconCancelCircle, IconInvoice2Mail, IconCheckCircle, IconExchange, IconNavigateLeft, IconNavigateRight, IconBrochure, IconAccountDollar } from '../utils/SvgUtil';

import TodoListItem from '../components/dashboard/TodoListItem';
import { formatInteger, formatToCurrency, formatToShortCurrency, generateRandomId } from '../utils/MathUtil';
import CustomerBalanceItem from '../components/dashboard/CustomerBalanceItem';
import CustomAreaChart from '../components/chart/CustomAreaChart';
import DashboardButtonGroup from '../components/dashboard/DashboardButtonGroup';
import CustomDonutChart from '../components/chart/CustomDonutChart';
// import { ReactComponent as PlanPatternSVG } from '../assets/icons/PlansPattern.svg'
import { ReactComponent as WisestackPatternSVG } from '../assets/icons/WisestackPattern.svg'
import DashboardEventItem from '../components/dashboard/DashboardEventItem';

const Dashboard: React.FC = () => {
    const [selectedPeriod, setSelectedPeriod] = useState(0);
    const [messageTab, setMessageTab] = useState(0);

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            <IconHome size={20} color='black' />
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="black"
            href="/dashboard"
        >
            Dashboard
        </Link>
    ];

    // Set Apex Chart Options
    const revenueData = [
        {
            name: 'FEB 12',
            value: 200,
        },
        {
            name: 'MAR 12',
            value: 480,
        },
        {
            name: 'APR 12',
            value: 600,
        },
        {
            name: 'MAY 12',
            value: 450,
        },
        {
            name: 'JUN 12',
            value: 200,
        },
    ];
    // // Customer Balance Chart
    const customerBalanceChartData = [
        { name: 'Past Due', value: 29052 },
        { name: 'Credit', value: 3000 },
        { name: 'Total Balance', value: 30225 },
    ];

    // Get Upcoming todo list
    const upcomingTodoList = [
        {
            title: "Schedule Lawn Mowing Service",
            content: "Confirm and schedule mowing for the week.",
            date: "2024-10-22",
            tags: ["Todo"],
            isChecked: false,
        },
        {
            title: "Schedule Lawn Mowing Service",
            content: "Confirm and schedule mowing for the week.",
            date: "2024-10-22",
            tags: ["Meeting"],
            isChecked: true,
        },
        {
            title: "Schedule Lawn Mowing Service",
            content: "Confirm and schedule mowing for the week.",
            date: "2024-10-22",
            tags: ["Important"],
            isChecked: false,
        }
    ]

    // Get Top 3 Customers Balance
    const customerBalanceData = [{
        name: "Brent Baron",
        balance: 138471.25,
        avatar: "/images/tempAvatar.jpg"
    }, {
        name: "Sophia Williams",
        balance: 128645.40,
        avatar: "/images/tempAvatar.jpg"
    }, {
        name: "Amy Adams",
        balance: 36487.75,
        avatar: "/images/tempAvatar.jpg"
    }]

    // Get Today's Event
    const todayEventList = [
        {
            date: "2024-10-24",
            companyName: "Patrick Grass",
            userName: "Patrick Cash",
            timeStart: "09:00:00",
            timeDuration: 30,
            address: "20 Montclair Drive Gadsden AL 35901, US",
            status: 2,
            invoiced: true
        },
        {
            date: "2024-10-24",
            companyName: "Shannon Garden",
            userName: "Shannon Lee",
            timeStart: "11:00:00",
            timeDuration: 30,
            address: "20 Montclair Drive Gadsden AL 35901, US",
            status: 1,
            invoiced: false
        },
        {
            date: "2024-10-24",
            companyName: "Lake City Area",
            userName: "Martin Williams",
            timeStart: "14:00:00",
            timeDuration: 120,
            address: "20 Montclair Drive Gadsden AL 35901, US",
            status: 1,
            invoiced: false
        },
        {
            date: "2024-10-24",
            companyName: "Lake City Area",
            userName: "Martin Williams",
            timeStart: "14:00:00",
            timeDuration: 120,
            address: "20 Montclair Drive Gadsden AL 35901, US",
            status: 2,
            invoiced: true
        },
    ]

    return (
        <div className={'px-8 pb-6 pt-20 bg-[#F5F7FA]'}>
            {/* Header Section */}
            <div className='justify-between items-center hidden lg:flex'>
                {/* Breadcrumbs */}
                <CustomBreadcrumbs elements={breadcrumbs}></CustomBreadcrumbs>
                {/* Dashboard Settings */}
                <div>
                    <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{
                        borderRadius: '8px'
                    }}>
                        {DashboardConfig['periods'].map((period, index) => (
                            <ButtonGroupItem onClick={setSelectedPeriod} index={index} isSelected={selectedPeriod === index} key={generateRandomId()}>{period['text']}</ButtonGroupItem>
                        ))}
                    </ButtonGroup>
                    <Button sx={{
                        borderRadius: '8px',
                        background: '#75A428',
                        color: 'white',
                        marginLeft: '12px'
                    }}>
                        <AddIcon />
                        Add New
                    </Button>
                </div>
            </div>
            {/* Body Section */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4'>
                {/* Left Panel*/}
                <div className='col-span-1 lg:col-span-2 flex flex-col gap-6'>
                    {/* Widgets Top */}
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                        {/* Monthly Plan */}
                        <div className="rounded-xl border-[1px] border-solid border-main-gray bg-white flex flex-col px-4 py-[10px] relative" style={{
                            boxShadow: '0px 1px 2px 0px rgba(10, 13, 20, 0.03)'
                        }}>
                            <div>
                                <span className='text-xs'>Current Plan</span>
                            </div>
                            <div className='mt-1'>
                                <span className='text-3xl font-medium'>$39.00</span>
                            </div>

                            <div className='flex items-center justify-between w-full mt-[10px]'>
                                <span className='text-xs max-w-[180px]'>Manage or enable add-on features for your account:</span>
                                <Button sx={{
                                    padding: '8px'
                                }}>
                                    Add-On Features
                                </Button>
                            </div>
                            {/* <div className="absolute top-0 right-0">
                                <PlanPatternSVG></PlanPatternSVG>
                            </div> */}
                        </div>
                        {/* WiseStack */}
                        <DashboardItem sx={{
                            background: "#E7F9F9",
                            borderColor: '#07C0CA',
                            position: 'relative'
                        }} className="col-span-1">
                            <div className="flex flex-col gap-[18px]">
                                <div className="w-full py-[8px]">
                                    <IconWisestackLogo></IconWisestackLogo>
                                </div>
                                <div className='flex flex-col gap-[10px]'>
                                    <span className="text-[12px]">Application Status</span>
                                    <div className='flex items-center justify-between'>
                                        <Chip icon={<CheckCircle />} label="Approved" sx={{
                                            background: '#75A428',
                                            padding: '2px 0px',
                                            height: 'auto',
                                            "& .MuiChip-icon ": {
                                                width: '15px',
                                                height: '15px',
                                                fill: 'white',
                                            },
                                            "& .MuiChip-label ": {
                                                fontSize: '12px',
                                                lineHeight: '16px',
                                                color: 'white',
                                            }
                                        }} />
                                        <Link href="#" underline="none" sx={{
                                            fontSize: '12px'
                                        }}>
                                            Learn More
                                            <OpenInNew fontSize='inherit' />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div className="absolute top-0 right-0 h-full">
                                <WisestackPatternSVG height="100%"></WisestackPatternSVG>
                            </div>
                        </DashboardItem>
                    </div>
                    {/* Project Revenue */}
                    <DashboardItem sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {/* Header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <IconRevenue color="black" size={20}></IconRevenue>
                                <span>Project Revenue</span>
                            </div>
                            <Button variant="outlined" >
                                <span className="hidden md:inline-block">View Project Projections</span>
                                <span className="md:hidden inline-block">View</span>
                            </Button>
                        </div>
                        <Divider></Divider>
                        {/* Body */}
                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex items-center justify-start gap-[10px]'>
                                <div className="rounded-full bg-[#F6FBEA] p-[10px]">
                                    <IconCoinsDollar size={18} color="#75A428" />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[18px] font-medium'>$2,071.31</span>
                                    <span className='text-[12px] font-medium text-[#525866]'>Projected revenue in the next <b>180</b> days </span>
                                </div>
                            </div>
                            <DashboardButtonGroup />
                            <div className='w-full h-[230px]'>
                                <CustomAreaChart data={revenueData} />
                            </div>
                        </div>
                    </DashboardItem>
                    {/* Automations to review */}
                    <DashboardItem sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {/* Header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <IconAutomation color="black" size={20}></IconAutomation>
                                <span>Automations to Review</span>
                            </div>
                            <Button variant="outlined" >
                                <span className="hidden md:inline-block">Show Automations</span>
                                <span className="md:hidden inline-block">Show All</span>
                            </Button>
                        </div>
                        <Divider />
                        {/* Body */}
                        <div className='grid items-center justify-between gap-8 grid-cols-1 md:grid-cols-3'>
                            <div className='items-center gap-3 w-full border-none md:border-r-[1px] md:border-solid flex col-span-1'>
                                <div className="rounded-full border-main-gray shadow-sm border-[1px] p-[10px]">
                                    <IconViewPropery color="#FF8447" size={18}></IconViewPropery>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[12px]'>Automations To Review</span>
                                    <span className='text-[18px] font-medium'>0</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 w-full border-none md:border-r-[1px] md:border-solid col-span-1'>
                                <div className="rounded-full border-main-gray border-[1px] shadow-sm p-[10px]">
                                    <IconNewPropery color="#75A428" size={18}></IconNewPropery>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[12px]'>Completed Automations</span>
                                    <span className='text-[18px] font-medium'>1,537</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 w-full col-span-1'>
                                <div className="rounded-full border-main-gray border-[1px] shadow-sm p-[10px]">
                                    <IconDeletePropery color="#FB3748" size={18}></IconDeletePropery>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[12px]'>Automations With Errors</span>
                                    <span className='text-[18px] font-medium'>2,811</span>
                                </div>
                            </div>
                        </div>
                    </DashboardItem>
                    {/* Upcoming To-Do */}
                    <DashboardItem sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {/* Header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <IconNotes color="black" size={20}></IconNotes>
                                <span>Automations to Review</span>
                            </div>
                            <Button variant="outlined" >
                                <AddIcon></AddIcon>
                                Add Notes
                            </Button>
                        </div>
                        <Divider></Divider>
                        {/* Body */}
                        <div className='flex flex-col gap-3'>
                            {
                                upcomingTodoList.map((item, index) => (
                                    <TodoListItem item={item} key={generateRandomId()}/>
                                ))
                            }
                        </div>
                    </DashboardItem>
                    {/* Client Communications */}
                    <DashboardItem sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {/* Header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <IconContact color="black" size={20}></IconContact>
                                <span>Client Communications</span>
                            </div>
                        </div>
                        <Divider></Divider>
                        {/* Body */}
                        <div className='flex flex-col gap-3'>
                            <div className="flex flex-col gap-4">
                                <div className='flex items-center justify-between'>
                                    <Tabs value={messageTab} onChange={(event: React.SyntheticEvent, newValue: number) => setMessageTab(newValue)} aria-label="basic tabs example" sx={{
                                        background: '#F5F7FA',
                                        '& .MuiTab-root': {
                                            height: '20px',
                                            color: '#99A0AE',
                                            minWidth: '120px',
                                            minHeight: '30px',
                                            padding: '8px'
                                        },
                                        '& .Mui-selected': {
                                            background: 'white',
                                            color: "black !important",
                                            border: '0px',
                                            boxShadow: "0px 6px 10px 0px rgba(14, 18, 27, 0.06), 0px 2px 4px 0px rgba(14, 18, 27, 0.03)",
                                            borderRadius: '8px'
                                        },
                                        '& .MuiTabs-indicator': {
                                            display: "none"
                                        },
                                        padding: '4px',
                                        borderRadius: '8px',
                                        minHeight: '30px'
                                    }}>
                                        <Tab label="Email" value={0} sx={{
                                        }} />
                                        <Tab label="Text Message" value={1} />
                                    </Tabs>
                                    <Button>
                                        Show {!messageTab ? "Emails" : "Text Messages"}
                                    </Button>
                                </div>
                                <div hidden={messageTab !== 0}>
                                    <div
                                        role="tabpanel"
                                        id={`tabpanel-0`}
                                        aria-labelledby={`tab-0`}
                                        className='grid items-center justify-between h-full gap-8 grid-cols-2 md:grid-cols-4'
                                    >
                                        <div className='flex items-center gap-3 border-r-[1px] w-full col-span-1'>
                                            <div className="rounded-full border-main-gray border-[1px] shadow-sm p-[10px]">
                                                <IconEmail color="#335CFF" size={18}></IconEmail>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='text-[12px] text-[#525866]'>Emails Send</span>
                                                <span className='text-[18px] font-medium'>150</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 border-none md:border-r-[1px] w-full col-span-1 md:border-solid'>
                                            <div className="rounded-full border-main-gray border-[1px] shadow-sm p-[10px]">
                                                <IconEmailSent color="#75A428" size={18}></IconEmailSent>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='text-[12px] text-[#525866]'>Emails Delivered</span>
                                                <span className='text-[18px] font-medium'>130</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 border-r-[1px] w-full col-span-1'>
                                            <div className="rounded-full border-main-gray border-[1px] shadow-sm p-[10px]">
                                                <IconEmailOpened color="#FB3748" size={18}></IconEmailOpened>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='text-[12px] text-[#525866]'>Emails Opened</span>
                                                <span className='text-[18px] font-medium'>110</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 w-full col-span-1'>
                                            <div className="rounded-full border-main-gray border-[1px] shadow-sm p-[10px]">
                                                <IconEmailOpened color="#FB3748" size={18}></IconEmailOpened>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='text-[12px] text-[#525866]'>Emails Bounced</span>
                                                <span className='text-[18px] font-medium'>20</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DashboardItem>
                    {/* Today's Events */}
                    <DashboardItem className='!hidden lg:!flex' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {/* Header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <IconCalendarFavorite color="black" size={20}></IconCalendarFavorite>
                                <span>Today's Events</span>
                            </div>
                            <Button variant="outlined" >
                                Show All Events
                            </Button>
                        </div>
                        <Divider />
                        {/* Body */}
                        <div className='flex flex-col gap-3'>
                            <div className="flex items-center justify-between gap-4">
                                <div className='w-full px-2'>
                                    <div className="flex items-center">
                                        <span className="text-xs mr-1 uppercase">Total</span>
                                        <span className='bg-[#717784] rounded-full text-white text-xs px-1'>12</span>
                                    </div>
                                    <span className='text-base font-medium'>$5,356.00</span>
                                </div>
                                <Divider orientation='vertical'></Divider>
                                <div className='w-full px-2'>
                                    <div className="flex items-center">
                                        <span className="text-xs mr-1 text-[#335CFF] uppercase">Active</span>
                                        <span className='bg-[#335CFF] rounded-full text-white text-xs px-1'>1</span>
                                    </div>
                                    <span className='text-base font-medium'>$1,126.00</span>
                                </div>
                                <Divider orientation='vertical'></Divider>
                                <div className='w-full px-2'>
                                    <div className="flex items-center">
                                        <span className="text-xs mr-1 text-[#F6B51E] uppercase">Remaining</span>
                                        <span className='bg-[#F6B51E] rounded-full text-white text-xs px-1'>4</span>
                                    </div>
                                    <span className='text-base font-medium'>$756.00</span>
                                </div>
                                <Divider orientation='vertical'></Divider>
                                <div className='w-full px-2'>
                                    <div className="flex items-center">
                                        <span className="text-xs mr-1 text-primary-base uppercase">Completed</span>
                                        <span className='bg-primary-base rounded-full text-white text-xs px-1'>5</span>
                                    </div>
                                    <span className='text-base font-medium'>$3,120.00</span>
                                </div>
                                <Divider orientation='vertical'></Divider>
                                <div className='w-full px-2'>
                                    <div className="flex items-center">
                                        <span className="text-xs mr-1 text-[#FB3748] uppercase">Not SERVICED</span>
                                        <span className='bg-[#FB3748] rounded-full text-white text-xs px-1'>2</span>
                                    </div>
                                    <span className='text-base font-medium'>$398.00</span>
                                </div>
                            </div>
                            <Divider />
                            <div className='flex flex-col'>
                                {
                                    todayEventList.map((event, index) => (
                                        <>
                                            <DashboardEventItem item={event} key={generateRandomId()} />
                                            {index < todayEventList.length - 1 && <Divider key={generateRandomId()}/>}
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </DashboardItem>
                </div>
                {/* Right Panel*/}
                <div className='col-span-1 flex flex-col gap-6 w-full'>
                    {/* Account Standing */}
                    <DashboardItem sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {/* Header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <IconAccountDollar color="black" size={20}></IconAccountDollar>
                                <span>Account Standing</span>
                            </div>
                            <Button variant="outlined" >
                                See All
                            </Button>
                        </div>
                        <Divider></Divider>
                        {/* Body */}
                        <div className='flex flex-col gap-[20px]'>
                            <div>
                                <div className='flex items-center justify-between py-2'>
                                    <div className='flex items-center gap-4'>
                                        <div className='bg-[#FFEBEC] p-[10px] rounded-full'>
                                            <IconCalendarCheckIn size={18} color="#FB3748" />
                                        </div>
                                        <span className='text-sm font-medium text-left'>Past Due</span>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <span className='text-sm font-medium'>$232,053.30</span>
                                        <IconNavigateRight size={12} color="#525866" />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between py-2'>
                                    <div className='flex items-center gap-4'>
                                        <div className='bg-[#EBF1FF] p-[10px] rounded-full'>
                                            <IconSaveMoneyDollar size={18} color="#335CFF" />
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='text-sm font-medium text-left'>Outstanding</span>
                                            <span className='text-xs font-medium text-left'>Invoices Sent</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <span className='text-sm font-medium'>$232,228.22</span>
                                        <IconNavigateRight size={12} color="#525866" />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between py-2'>
                                    <div className='flex items-center gap-4'>
                                        <div className='bg-[#F6FBEA] p-[10px] rounded-full'>
                                            <IconCreditPos size={18} color="#75A428" />
                                        </div>
                                        <span className='text-sm font-medium text-left'>Credit</span>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <span className='text-sm font-medium'>$9920.66</span>
                                        <IconNavigateRight size={12} color="#525866" />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between py-2'>
                                    <div className='flex items-center gap-4'>
                                        <div className='bg-[#F2F5F8] p-[10px] rounded-full'>
                                            <IconDollar size={18} color="#525866" />
                                        </div>
                                        <span className='text-sm font-medium text-left'>Paid</span>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <span className='text-sm font-medium'>$150,998.32</span>
                                        <IconNavigateRight size={12} color="#525866" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DashboardItem>
                    {/* Customers Balance */}
                    <DashboardItem sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {/* Header */}
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <IconCustomers color="black" size={20}></IconCustomers>
                                    <span>Customers</span>
                                </div>
                                <Button variant="outlined" >
                                    See All
                                </Button>
                            </div>
                            <span className="text-2xl font-medium">{formatInteger(73269)}</span>
                            <span className="text-xs font-normal text-[#99A0AE]"><b>8</b> New in past <b>185</b> days</span>
                        </div>
                        <Divider></Divider>
                        {/* Body */}
                        <div className='flex flex-col gap-[12px]'>
                            {/* Customer Balance */}
                            <div>
                                <div className='flex items-center justify-between'>
                                    <span>Customer Balances</span>
                                    <div>
                                        <ButtonGroup variant="contained" aria-label="Basic button group"
                                            sx={{
                                                boxShadow: "none",
                                                '& .MuiButtonGroup-grouped': {
                                                    padding: '9px'
                                                },
                                                '& .MuiButtonGroup-firstButton': {
                                                    border: '1px solid #E1E4EA',
                                                    padding: '9px'
                                                }
                                            }}>
                                            <Button><IconNavigateLeft size={12} /></Button>
                                            <Button><IconNavigateRight size={12} /></Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                                <div className='w-full h-[200px]'>
                                    <CustomDonutChart data={customerBalanceChartData} colors={["#FF97A0", "#97BAFF", "#E1E4EA"]} />
                                </div>
                            </div>
                            <Divider />
                            <div className='flex flex-col'>
                                {
                                    customerBalanceData.map((item, index) => (
                                        <CustomerBalanceItem item={item} />
                                    ))
                                }
                            </div>
                            <div className='w-full'>
                                <Button sx={{ width: '100%' }}>View Customers with a Balance</Button>
                            </div>
                        </div>
                    </DashboardItem>
                    {/* Recent Payment */}
                    <DashboardItem sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {/* Header */}
                        <div className='flex justify-between'>
                            <span className="font-sm text-[#525866]">Recent Payments</span>
                            <Button variant="outlined" >
                                View Payments
                            </Button>
                        </div>
                        {/* Body */}
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center'>
                                <span className='text-2xl font-medium mr-2'>{formatToCurrency(34958.75)}</span>
                                <span className='bg-[#D7EEA8] text-[#1B290A] px-2 rounded-full text-sm'>+5%</span>
                            </div>
                            <div className='text-[#99A0AE]'>
                                <InfoRounded width={14} />
                                <span className='text-xs'>Your last <b>180</b> days payments</span>
                            </div>
                        </div>
                    </DashboardItem>
                    {/* Events */}
                    <DashboardItem sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {/* Header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <IconSchedule color="black" size={20}></IconSchedule>
                                <span>Events</span>
                            </div>
                            <Button variant="outlined" >
                                Show All Events
                            </Button>
                        </div>
                        <Divider />
                        {/* Body */}
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#FFEBEC] p-[10px] rounded-full'>
                                        <IconSchedule size={18} color="#FB3748" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-left text-[#525866]'>Overdue Events</span>
                                        <span className='text-lg font-medium text-left'>1029</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <IconNavigateRight size={12} color="#525866" />
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#F6FBEA] p-[10px] rounded-full'>
                                        <IconTimeQuarter size={18} color="#75A428" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-left text-[#525866]'>Recurring Visit Ending</span>
                                        <span className='text-lg font-medium text-left'>13</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <IconNavigateRight size={12} color="#525866" />
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#F2F5F8] p-[10px] rounded-full'>
                                        <IconCancelCircleHalfDot size={18} color="#141B34" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-left text-[#525866]'>Events Not Serviced</span>
                                        <span className='text-lg font-medium text-left'>25</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <IconNavigateRight size={12} color="#525866" />
                                </div>
                            </div>
                        </div>
                    </DashboardItem>
                    {/* Invoices */}
                    <DashboardItem sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {/* Header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <IconInvoice2Mail color="black" size={20} />
                                <span>Invoices</span>
                            </div>
                            <Button variant="outlined" >
                                View Invoices
                            </Button>
                        </div>
                        <Divider />
                        {/* Body */}
                        <div className='flex flex-col gap-3'>
                            <div className="flex items-center justify-between gap-2">
                                <div className='w-full text-center'>
                                    <span className='text-base font-medium px-2 rounded-full bg-[#FFEBEC] text-[#FB3748]'>92</span>
                                    <div className='flex flex-col mt-2'>
                                        <span className="text-xs">Past Due</span>
                                        <span className='text-sm font-medium'>{formatToShortCurrency(232059)}</span>
                                    </div>
                                </div>
                                <Divider orientation='vertical'></Divider>
                                <div className='w-full text-center'>
                                    <span className='text-base font-medium px-2 rounded-full bg-[#EBF1FF] text-[#335CFF]'>183</span>
                                    <div className='flex flex-col mt-2'>
                                        <span className="text-xs">Awaiting Payment</span>
                                        <span className='text-sm font-medium'>{formatToShortCurrency(266225)}</span>
                                    </div>
                                </div>
                                <Divider orientation='vertical'></Divider>
                                <div className='w-full text-center'>
                                    <span className='text-base font-medium px-2 rounded-full bg-[#F2F5F8] text-[#717784]'>2</span>
                                    <div className='flex flex-col mt-2'>
                                        <span className="text-xs">Draft Invoices</span>
                                        <span className='text-sm font-medium'>{formatToShortCurrency(102)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DashboardItem>
                    {/* Estimates */}
                    <DashboardItem sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        {/* Header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <IconBrochure color="black" size={20}></IconBrochure>
                                <span>Estimates</span>
                            </div>
                            <Button variant="outlined" >
                                See All
                            </Button>
                        </div>
                        <Divider></Divider>
                        {/* Body */}
                        <div className='flex flex-col gap-[20px]'>
                            <div>
                                <div className='flex items-center justify-between py-2'>
                                    <div className='flex items-center gap-4'>
                                        <div className='bg-[#F6FBEA] p-[10px] rounded-full'>
                                            <IconCheckCircle size={18} color="#75A428" />
                                        </div>
                                        <div>
                                            <span className='text-lg font-medium'>80 </span>
                                            <span className='text-sm font-medium text-[#525866]'>Approved</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <span className='text-sm font-medium'>{formatToCurrency(823587.50)}</span>
                                        <IconNavigateRight size={12} color="#525866"/>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between py-2'>
                                    <div className='flex items-center gap-4'>
                                        <div className='bg-[#FFEBEC] p-[10px] rounded-full'>
                                            <IconCancelCircle size={18} color="#FB3748" />
                                        </div>
                                        <div>
                                            <span className='text-lg font-medium'>10 </span>
                                            <span className='text-sm font-medium text-[#525866]'>Declined</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <span className='text-sm font-medium'>{formatToCurrency(7658.00)}</span>
                                        <IconNavigateRight size={12} color="#525866"/>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between py-2'>
                                    <div className='flex items-center gap-4'>
                                        <div className='bg-[#EBF1FF] p-[10px] rounded-full'>
                                            <IconExchange size={18} color="#335CFF" />
                                        </div>
                                        <div>
                                            <span className='text-lg font-medium'>7 </span>
                                            <span className='text-sm font-medium text-[#525866]'>Changes Request</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <span className='text-sm font-medium'>{formatToCurrency(3658.3)}</span>
                                        <IconNavigateRight size={12} color="#525866"/>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between py-2'>
                                    <div className='flex items-center gap-4'>
                                        <div className='bg-[#F2F5F8] p-[10px] rounded-full'>
                                            <IconNotes size={18} color="#525866" />
                                        </div>
                                        <div>
                                            <span className='text-lg font-medium'>3 </span>
                                            <span className='text-sm font-medium text-[#525866]'>Drafts</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <span className='text-sm font-medium'>{formatToCurrency(101161.7)}</span>
                                        <IconNavigateRight size={12} color="#525866"/>
                                    </div>
                                </div>
                            </div>
                            <div className='text-[#99A0AE] text-xs flex items-center gap-1'>
                                <InfoRounded width={14} />
                                <span>In the last <b>180</b> days you've sent <b>100</b> estimates</span>
                            </div>
                        </div>
                    </DashboardItem>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;