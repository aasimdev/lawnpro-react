import React, { useState } from "react";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
import { IconHome, IconSingleUserUnfilled } from "../../utils/SvgUtil";
import { Divider, Link, TextField } from "@mui/material";
import Select2 from "../../components/Controllers/Select2";

interface CustomerEditorProps {
    isNew?: boolean;
}

interface CustomerFormProps {
    value: string | number;
    isRequired: boolean;
    validator?: (value: string | number) => boolean;
}

const createCustomerFormProps = (props: Partial<CustomerFormProps> & Pick<CustomerFormProps, 'value' | 'validator'>): CustomerFormProps => ({
    isRequired: true, // Default value
    ...props
});

interface CustomerForm {
    [key: string]: CustomerFormProps;
}

const CustomerEditor: React.FC<CustomerEditorProps> = ({ isNew = true }) => {
    // Init Form State
    const [formState, setFormState] = useState<CustomerForm>({
        customer_type: createCustomerFormProps({
            value: 0,
        }),
        customer_title: createCustomerFormProps({
            value: "",
        })
    });
    // Use a function to set the default for isRequired if undefined
    const handleFormChange = (key: string, newValue: string | number) => {
        setFormState((prevState) => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                value: newValue,
            }
        }));
        console.log(formState)
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            <IconHome size={20} color='black' />
        </Link>,
        <Link
            key="2"
            color="#000"
            href="/customers/"
            sx={{
                textDecoration: 'none'
            }}
        >
            Customers
        </Link>,
        <Link
            underline="none"
            key="3"
            color="#000"
            sx={{
                textDecoration: 'none'
            }}
        >
            Add Customers
        </Link>
    ];

    const customerTypeSelect = [{
        label: "Commercial",
        value: 0
    }, {
        label: "Fertilization",
        value: 1
    }, {
        label: "Pest Control",
        value: 2
    }, {
        label: "Full Service Landscape Customer",
        value: 3
    }]

    const customerTitle = [{
        label: "No Title",
        value: ""
    }, {
        label: "Mr.",
        value: "Mr."
    }, {
        label: "Mrs.",
        value: "Mrs."
    }, {
        label: "Mr. & Mrs.",
        value: "Mr. & Mrs."
    }, {
        label: "Mr. & Mr.",
        value: "Mr. & Mr."
    }, {
        label: "Mrs. & Mrs.",
        value: "Mrs. & Mrs."
    }, {
        label: "Ms.",
        value: "Ms."
    }, {
        label: "Dr.",
        value: "Dr."
    }]

    return (
        <div className="px-8 pt-20 flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <CustomBreadcrumbs elements={breadcrumbs}></CustomBreadcrumbs>
            </div>
            {/* Body */}
            <div className="flex gap-8 w-full p-4 bg-white border-main-gray border rounded-2xl h-screen">
                {/* Left */}
                <div className="flex flex-col gap-6 w-full">
                    {/* Customer Details */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center w-full gap-2">
                            <div className="p-2.5 bg-gray-700 rounded-full">
                                <IconSingleUserUnfilled size={18} />
                            </div>
                            <span className="text-2xl font-medium">Customer Details</span>
                        </div>
                        <div className="text-sm font-medium flex flex-col gap-4 px-2.5">
                            <div className="grid items-center gap-2.5 grid-cols-3">
                                <div className="flex flex-col gap-1 col-span-2">
                                    <span className="">Select Type</span>
                                    <Select2 placeholder="Select Customer Type" accessor="customer_type" options={customerTypeSelect} className="w-full" value={[formState.customer_type.value]} onChange={(key: string, value: (string | number)[]) => handleFormChange(key, value.length ? Number(value[0]) : 0)} />
                                </div>
                                <div className="flex flex-col gap-1 col-span-1">
                                    <span className="text-sm font-medium">Customer Number</span>
                                    <TextField placeholder="Customer Number" type='number' variant="outlined" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span>Customer Name</span>
                                <div className="grid grid-cols-12">
                                    <div className="col-span-2 h-full">
                                        <Select2 options={customerTitle} accessor="customer_title" value={[formState.customer_title.value]} onChange={(key: string, value: (string | number)[]) => handleFormChange(key, value.length ? value[0] : "")} buttonClass="rounded-r-none !py-2 h-full" className="h-full"/>
                                    </div>
                                    <div className="col-span-5">
                                        <TextField placeholder="First Name" variant="outlined"
                                            sx={{
                                                width: '100%',
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 0, // Set the desired border radius here
                                                },
                                            }} />
                                    </div>
                                    <div className="col-span-5">
                                        <TextField placeholder="Last Name" variant="outlined" 
                                            sx={{
                                                width: '100%',
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "0px 10px 10px 0px", // Set the desired border radius here
                                                },
                                            }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider orientation="vertical" />
                {/* Right */}
                <div className="flex flex-col gap-6 w-full">
                    {/* Property Details */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center w-full gap-2">
                            <div className="p-2.5 bg-gray-700 rounded-full">
                                <IconSingleUserUnfilled size={18} />
                            </div>
                            <span className="text-2xl font-medium">Property Details</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerEditor