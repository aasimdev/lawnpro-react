import React, { useState } from 'react';
import CustomBreadcrumbs from '../../components/controllers/CustomBreadcrumbs';
import {
  IconAlertFill,
  IconHome,
  IconInformationFill,
  IconInvoice,
  IconProperties,
  IconSingleUserUnfilled,
} from '../../utils/SvgUtil';
import { Button, Checkbox, Divider, Link, TextField } from '@mui/material';
import Select2 from '../../components/controllers/Select2';
import DateInput from '../../components/controllers/DateInput';
import Accordion from '../../components/controllers/Accordion';
import RedactorJS from '../../components/Redactor/redactor';
import { REDACTOR_NOTE } from '../../config/constant';
import HintCard from '../../components/controllers/HintCard';
import AddressAutocomplete from '../../components/google/AddressAutoComplete';
import FileUpload from '../../components/controllers/FileUpload';
import TagInput from '../../components/controllers/TagInput';
import { borderLeft } from '@mui/system';

interface CustomerEditorProps {
  isNew?: boolean;
}

interface CustomerFormProps {
  value: string | number;
  isRequired: boolean;
  validator?: (value: string | number) => boolean;
}

const createCustomerFormProps = (
  props: Partial<CustomerFormProps> & Pick<CustomerFormProps, 'value' | 'validator'>,
): CustomerFormProps => ({
  isRequired: false, // Default value
  ...props,
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
      value: '',
    }),
    customer_number: createCustomerFormProps({
      value: '',
    }),
    customer_first_name: createCustomerFormProps({
      value: '',
    }),
    customer_last_name: createCustomerFormProps({
      value: '',
    }),
    customer_company_name: createCustomerFormProps({
      value: '',
    }),
    customer_source: createCustomerFormProps({
      value: '',
    }),
    customer_invoice_delivery_preference: createCustomerFormProps({
      value: 0,
    }),
    customer_when_to_invoice: createCustomerFormProps({
      value: 0,
    }),
    customer_is_tax_exempt: createCustomerFormProps({
      value: 0,
    }),
    customer_outstanding: createCustomerFormProps({
      value: 0,
    }),
    customer_total_due: createCustomerFormProps({
      value: 0,
    }),
    customer_inv_due_date: createCustomerFormProps({
      value: 0,
    }),
    customer_stamp_pdf_view: createCustomerFormProps({
      value: 0,
    }),
    customer_credit_available_show: createCustomerFormProps({
      value: 0,
    }),
    customer_is_receive_phone: createCustomerFormProps({
      value: 0,
    }),
    customer_is_receive_email: createCustomerFormProps({
      value: 0,
    }),
    customer_is_receive_text: createCustomerFormProps({
      value: 0,
    }),
  });
  // Use a function to set the default for isRequired if undefined
  const handleFormChange = (key: string, newValue: string | number) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        value: newValue,
      },
    }));
    console.log(formState);
  };

  const predefinedTags = ['Testtag', 'CustomTag', 'CashTag'];

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      <IconHome size={20} color="black" />
    </Link>,
    <Link
      key="2"
      color="#000"
      href="/customers/"
      sx={{
        textDecoration: 'none',
      }}
    >
      Customers
    </Link>,
    <Link
      underline="none"
      key="3"
      color="#000"
      sx={{
        textDecoration: 'none',
      }}
    >
      Add Customers
    </Link>,
  ];

  const customerTypeSelect = [
    {
      label: 'Commercial',
      value: 0,
    },
    {
      label: 'Fertilization',
      value: 1,
    },
    {
      label: 'Pest Control',
      value: 2,
    },
    {
      label: 'Full Service Landscape Customer',
      value: 3,
    },
  ];

  const customerTitle = [
    {
      label: 'No Title',
      value: '',
    },
    {
      label: 'Mr.',
      value: 'Mr.',
    },
    {
      label: 'Mrs.',
      value: 'Mrs.',
    },
    {
      label: 'Mr. & Mrs.',
      value: 'Mr. & Mrs.',
    },
    {
      label: 'Mr. & Mr.',
      value: 'Mr. & Mr.',
    },
    {
      label: 'Mrs. & Mrs.',
      value: 'Mrs. & Mrs.',
    },
    {
      label: 'Ms.',
      value: 'Ms.',
    },
    {
      label: 'Dr.',
      value: 'Dr.',
    },
  ];

  const customerRefferalSource = [
    {
      label: 'Select Source',
      value: '',
    },
    {
      label: 'Referral',
      value: 'referral',
    },
    {
      label: 'Google',
      value: 'google',
    },
    {
      label: 'Facebook',
      value: 'facebook',
    },
    {
      label: 'Instagram',
      value: 'instagram',
    },
    {
      label: 'Flyer',
      value: 'flyer',
    },
    {
      label: 'Vehicle Wrap',
      value: 'vehicle_wrap',
    },
    {
      label: 'Event',
      value: 'event',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ];

  const customerInvoiceDelivery = [
    {
      label: 'No Preference',
      value: 0,
    },
    {
      label: 'Dropped Off At Property',
      value: 1,
    },
    {
      label: 'Posted Mail',
      value: 2,
    },
    {
      label: 'Emailed',
      value: 3,
    },
    {
      label: 'Text Message',
      value: 4,
    },
  ];

  const customerInvoiceSchedule = [
    {
      label: 'No Preference',
      value: 0,
    },
    {
      label: 'After Each Visit',
      value: 1,
    },
    {
      label: 'Once Per Month',
      value: 2,
    },
    {
      label: 'On the First Day of the Month',
      value: 3,
    },
    {
      label: 'On the 15th Day of the Month',
      value: 4,
    },
    {
      label: 'On the Last Day of the Month',
      value: 5,
    },
  ];

  const customerTaxExempt = [
    {
      label: 'No',
      value: 0,
    },
    {
      label: 'Yes',
      value: 1,
    },
  ];

  return (
    <div className="px-8 py-20 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <CustomBreadcrumbs elements={breadcrumbs}></CustomBreadcrumbs>
      </div>
      {/* Body */}
      <div className="flex flex-col gap-12 p-4 bg-white border-main-gray border rounded-2xl">
        {/* Main */}
        <div className="flex gap-8 w-full">
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
                    <Select2
                      placeholder="Select Customer Type"
                      buttonClass="border-gray-300"
                      accessor="customer_type"
                      options={customerTypeSelect}
                      className="w-full"
                      value={[formState.customer_type.value]}
                      onChange={(key: string, value: (string | number)[]) =>
                        handleFormChange(key, value.length ? Number(value[0]) : 0)
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-1 col-span-1">
                    <span className="text-sm font-medium">Customer Number</span>
                    <TextField
                      placeholder="Customer Number"
                      type="number"
                      variant="outlined"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleFormChange('customer_number', event.target.value)
                      }
                      value={formState.customer_number.value}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span>Customer Name</span>
                  <div className="grid grid-cols-12">
                    <div className="col-span-2 h-full">
                      <Select2
                        options={customerTitle}
                        accessor="customer_title"
                        value={[formState.customer_title.value]}
                        onChange={(key: string, value: (string | number)[]) =>
                          handleFormChange(key, value.length ? value[0] : '')
                        }
                        buttonClass="rounded-r-none !py-2 h-full border-gray-300"
                        className="h-full"
                      />
                    </div>
                    <div className="col-span-5">
                      <TextField
                        placeholder="First Name"
                        variant="outlined"
                        sx={{
                          width: '100%',
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 0, // Set the desired border radius here
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderRight: 0,
                            borderLeft: 0,
                          },
                        }}
                        value={formState.customer_first_name.value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleFormChange('customer_first_name', event.target.value)
                        }
                      />
                    </div>
                    <div className="col-span-5">
                      <TextField
                        placeholder="Last Name"
                        variant="outlined"
                        sx={{
                          width: '100%',
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '0px 10px 10px 0px', // Set the desired border radius here
                          },
                        }}
                        value={formState.customer_last_name.value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleFormChange('customer_last_name', event.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <span>
                      Business Name <span className="text-red-600">*</span>
                    </span>
                    <div className="font-normal text-sm">
                      <Checkbox />
                      <span className="text-sm">Use company name as the primary name</span>
                    </div>
                  </div>
                  <TextField
                    placeholder="LawnScape Services"
                    type="number"
                    variant="outlined"
                    value={formState.customer_company_name.value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleFormChange('customer_company_name', event.target.value)
                    }
                  />
                </div>
                <div className="grid items-center grid-cols-2 gap-2.5">
                  <div className="col-span-1 flex flex-col w-full gap-1">
                    <span>Since</span>
                    <DateInput />
                  </div>
                  <div className="col-span-1 flex flex-col gap-1">
                    <span>Tags</span>
                    <TagInput options={predefinedTags} />
                  </div>
                </div>
                <div>
                  <Accordion title="Additional Client Details">
                    <div className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1 flex flex-col text-sm font-medium gap-1">
                          <span>Customer Referral Source</span>
                          <Select2
                            accessor="customer_source"
                            options={customerRefferalSource}
                            value={[formState.customer_source.value]}
                            onChange={(key: string, value: (string | number)[]) =>
                              handleFormChange(key, value.length ? value[0] : 0)
                            }
                          />
                        </div>
                        <div className="col-span-1 flex flex-col text-sm font-medium gap-1">
                          <span>Preferred Invoice Delivery Method</span>
                          <Select2
                            accessor="customer_invoice_delivery_preference"
                            options={customerInvoiceDelivery}
                            value={[formState.customer_invoice_delivery_preference.value]}
                            onChange={(key: string, value: (string | number)[]) =>
                              handleFormChange(key, value.length ? Number(value[0]) : 0)
                            }
                          />
                        </div>
                        <div className="col-span-1 flex flex-col text-sm font-medium gap-1">
                          <span>Customer Invoicing Schedule</span>
                          <Select2
                            accessor="customer_when_to_invoice"
                            options={customerInvoiceSchedule}
                            value={[formState.customer_when_to_invoice.value]}
                            onChange={(key: string, value: (string | number)[]) =>
                              handleFormChange(key, value.length ? Number(value[0]) : 0)
                            }
                          />
                        </div>
                        <div className="col-span-1 flex flex-col text-sm font-medium gap-1">
                          <span>This Customer is Tax Exempt</span>
                          <Select2
                            accessor="customer_is_tax_exempt"
                            options={customerTaxExempt}
                            value={[formState.customer_is_tax_exempt.value]}
                            onChange={(key: string, value: (string | number)[]) =>
                              handleFormChange(key, value.length ? Number(value[0]) : 0)
                            }
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span>Preferred Communication Method</span>
                        <div className="flex flex-col font-normal gap-2.5">
                          <div
                            className="col-span-1 flex items-center cursor-pointer"
                            onClick={() =>
                              handleFormChange(
                                'customer_is_receive_phone',
                                (Number(formState.customer_is_receive_phone.value) + 1) % 2,
                              )
                            }
                          >
                            <Checkbox checked={Boolean(formState.customer_is_receive_phone.value)} />
                            <span className="text-sm">Phone Call</span>
                          </div>
                          <div
                            className="col-span-1 flex items-center cursor-pointer"
                            onClick={() =>
                              handleFormChange(
                                'customer_is_receive_email',
                                (Number(formState.customer_is_receive_email.value) + 1) % 2,
                              )
                            }
                          >
                            <Checkbox checked={Boolean(formState.customer_is_receive_email.value)} />
                            <span className="text-sm">Email</span>
                          </div>
                          <div
                            className="col-span-1 flex items-center cursor-pointer"
                            onClick={() =>
                              handleFormChange(
                                'customer_is_receive_text',
                                (Number(formState.customer_is_receive_text.value) + 1) % 2,
                              )
                            }
                          >
                            <Checkbox checked={Boolean(formState.customer_is_receive_text.value)} />
                            <span className="text-sm">Text Message</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span>Customer Notes</span>
                        <RedactorJS type={REDACTOR_NOTE} />
                      </div>
                      <div className="flex flex-col gap-1 w-1/2">
                        <span>Discount %</span>
                        <TextField placeholder="00%" type="number" variant="outlined" />
                      </div>
                      {/* Additional Client Details */}
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-md">Additional Client Details</span>
                          <span className="text-xs font-normal text-gray-600">Add Customer Fields</span>
                        </div>
                        <div>
                          <HintCard
                            description="Would you like to capture any additional client details?"
                            linkText="Add Custom Field"
                          />
                        </div>
                      </div>
                    </div>
                  </Accordion>
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
                  <IconProperties size={18} />
                </div>
                <span className="text-2xl font-medium">Property Details</span>
              </div>
              <div>
                <AddressAutocomplete />
              </div>
              <div>
                <Accordion title="Photos / Documents">
                  <div>
                    <FileUpload />
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        {/* Invoice Settings */}
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="p-2.5 bg-gray-700 rounded-full">
              <IconInvoice size={18} />
            </div>
            <span className="text-2xl font-medium">Invoice Settings</span>
          </div>
          {/* Body */}
          <div className="flex flex-col gap-4 px-2.5">
            <div className="flex p-3.5 gap-3 bg-warning-lighter rounded-xl">
              <IconAlertFill size={20} color="#FF8447" />
              <div className="flex flex-col gap-1">
                <span className="font-medium text-sm">
                  These are default late fee rules listing. You can modify this for your customer preference.
                </span>
                <span className=" text-sm">Note: All late fee rules for this customer will use this preference.</span>
              </div>
            </div>
            <div className="flex p-3.5 gap-3 bg-warning-lighter rounded-xl">
              <IconInformationFill size={30} color="#335CFF" />
              <div className="flex flex-col gap-1">
                <span className="font-medium text-sm">Set different late fees for invoices as time passes.</span>
                <span className=" text-sm text-text-dark">
                  Late fees can be set as a dollar amount or a percentage of the invoice amount.
                  <br></br>
                  <br></br>
                  *IMPORTANT - Changing late fee rules here DOES NOT change the late fee date or amount on any invoices
                  already created. It will only change the late fee terms and amounts on newly created invoices.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-md font-medium">Add Late Fee</span>
              <span className="text-xs text-gray-600">Add Custom Late Fee Rules</span>
            </div>
            <HintCard description="Would you like to set custom late fee rules?" linkText="Add Late Fee" />
            <div className="grid items-center grid-cols-2 gap-4">
              <div
                className="col-span-1 flex items-center cursor-pointer"
                onClick={() =>
                  handleFormChange('customer_outstanding', (Number(formState.customer_outstanding.value) + 1) % 2)
                }
              >
                <Checkbox checked={Boolean(formState.customer_outstanding.value)} />
                <span className="text-sm">Hide Outstanding Balance</span>
              </div>
              <div
                className="col-span-1 flex items-center cursor-pointer"
                onClick={() =>
                  handleFormChange('customer_inv_due_date', (Number(formState.customer_inv_due_date.value) + 1) % 2)
                }
              >
                <Checkbox checked={Boolean(formState.customer_inv_due_date.value)} />
                <span className="text-sm">Show Invoice Due Date</span>
              </div>
              <div
                className="col-span-1 cursor-pointer"
                onClick={() =>
                  handleFormChange('customer_total_due', (Number(formState.customer_total_due.value) + 1) % 2)
                }
              >
                <Checkbox checked={Boolean(formState.customer_total_due.value)} />
                <span className="text-sm">Hide Total Due on Account</span>
              </div>
              <div
                className="col-span-1 cursor-pointer"
                onClick={() =>
                  handleFormChange('customer_stamp_pdf_view', (Number(formState.customer_stamp_pdf_view.value) + 1) % 2)
                }
              >
                <Checkbox checked={Boolean(formState.customer_stamp_pdf_view.value)} />
                <span className="text-sm">Show Pending, Draft, Paid in Full and Past Due Stamp on Invoices</span>
              </div>
              <div
                className="col-span-1 flex items-center cursor-pointer"
                onClick={() =>
                  handleFormChange(
                    'customer_credit_available_show',
                    (Number(formState.customer_credit_available_show.value) + 1) % 2,
                  )
                }
              >
                <Checkbox checked={Boolean(formState.customer_credit_available_show.value)} />
                <span className="text-sm">Show "Credit Available"</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col w-full gap-2">
                <span className="text-sm">Standard Invoice Notes</span>
                <RedactorJS type={REDACTOR_NOTE} />
              </div>
              <div className="flex flex-col w-full gap-2">
                <span className="text-sm">Standard Invoice Terms</span>
                <RedactorJS type={REDACTOR_NOTE} />
              </div>
            </div>
            <div className="grid items-center grid-cols-3 gap-4">
              <div className="flex flex-col col-span-1 gap-1">
                <span className="text-sm font-medium">Invoice Email Template</span>
                <Select2 />
              </div>
              <div className="flex flex-col col-span-1 gap-1">
                <span className="text-sm font-medium">Invoice SMS Template</span>
                <Select2 />
              </div>
              <div className="flex flex-col col-span-1 gap-1">
                <span className="text-sm font-medium">Estimate SMS Template</span>
                <Select2 />
              </div>
            </div>
          </div>
        </div>
        {/* Controller */}
        <div className="flex items-center justify-between">
          <Button>Cancel</Button>
          <div className="flex items-center gap-3">
            <Button
              sx={{
                borderColor: '#75A428',
                color: '#75A428',
              }}
            >
              Save and Create Another
            </Button>
            <Button
              sx={{
                backgroundColor: '#75A428',
                color: 'white',
              }}
            >
              Add Customer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerEditor;
