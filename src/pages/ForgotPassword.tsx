import { Button, TextField } from "@mui/material";
import React from "react";

const ForgotPassword: React.FC = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className='flex flex-col rounded-3xl border-main-gray border-solid border-mini p-8 gap-4 bg-white'>
                <div className="flex gap-5 items-center justify-center">
                    <span className="text-xl font-medium">Reset your password</span>
                </div>
                <div className="max-w-md bg-information-light border-[#bee5eb] border-mini border-solid rounded-md p-4 text-[#0c5460] text-sm">
                    <span className="font-bold">Forgot Your Password?</span>
                    <br></br>
                    <br></br>
                    <span>Please enter your registered email address in the field below, then click the "Reset Password" button.</span>
                    <br></br>
                    <br></br>
                    <span>You will receive an email with detailed instructions on how to securely reset your password. Follow the link in the email to complete the process and regain access to your account.</span>
                </div>
                {/* Main Controllers */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <span className='text-sm font-medium'>Enter Your Login Email Address</span>
                        <TextField
                            id="input-with-icon-textfield"
                            placeholder="hello@lawnpro.com"
                            slotProps={{
                                htmlInput: {
                                    style: {
                                        padding: '8px'
                                    },
                                }
                            }}
                            variant="outlined"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button sx={{
                            borderRadius: "16px",
                            border: '0.821px solid rgba(255, 255, 255, 0.12)',
                            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%), #75A428",
                            color: 'white',
                            '&:hover': {
                                color: 'white'
                            },
                            padding: "8px 30px"
                        }}>Reset Password</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;