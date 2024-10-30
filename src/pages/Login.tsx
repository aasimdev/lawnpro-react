import { Button, Checkbox, Divider, InputAdornment, Link, TextField } from "@mui/material";
import React, { useState } from "react";
import { IconHidePassword, IconLockPassword, IconMail, IconShowPassword, IconSingleUser } from "../utils/SvgUtil";

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [keepLogin, setKeepLogin] = useState(false);

    return (
        <div className="h-screen items-center grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="hidden lg:flex flex-col p-14 gap-11 h-full items-center col-span-1"
                style={{
                    // background: "linear-gradient(180deg, #5F7B4E 0%, #3F5532 100%)"
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%), #75A428"
                }}>
                <div className="flex flex-col text-white font-normal gap-6">
                    <span className="text-white text-3xl-plus font-medium w-auto max-w-135">The All-in-One Platform for Streamlined Lawn Care Management</span>
                    <span className="text-sm text-3xl-plus">Your Complete Solution for Efficient, Hassle-Free Lawn Care Operations</span>
                </div>
                <div className="w-full h-full">
                    <img src="/images/dashboard_screenshot.png" alt=""></img>
                </div>
            </div>
            {/* Right */}
            <div className='h-full flex flex-col col-span-1'>
                {/* Main Controllers */}
                <div className="h-full flex items-center justify-center">
                    <div className="p-6 rounded-3xl border-main-gray border-solid flex flex-col gap-5 border-mini">
                        <div className="flex flex-col items-center justify-center">
                            <div className="p-3 rounded-full" style={{ background: "linear-gradient(180deg, rgba(113, 119, 132, 0.10) 0%, rgba(113, 119, 132, 0.00) 100%)" }}>
                                <div className="p-3 rounded-full bg-white border-mini">
                                    <IconSingleUser color="#525866" size={22} />
                                </div>
                            </div>
                            <span className="text-xl font-medium">Login to your account</span>
                            <span className="text-sm text-gray-600">Enter your details to login</span>
                        </div>
                        <Divider />
                        <div className="flex flex-col gap-1">
                            <span className='text-xs font-medium'>Email Address</span>
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="hello@lawnpro.com"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconMail />
                                            </InputAdornment>
                                        ),
                                    },
                                    htmlInput: {
                                        style: {
                                            padding: '8px',
                                            paddingLeft: 0
                                        },
                                    }
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className='text-xs font-medium'>Password</span>
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Password"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconLockPassword />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {/* <div className="cursor-pointer" onMouseDown={() => setShowPassword(true)} onMouseUp={() => setShowPassword(false)}> */}
                                                <div className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? <IconHidePassword /> : <IconShowPassword />}
                                                </div>
                                            </InputAdornment>
                                        )
                                    },
                                    htmlInput: {
                                        style: {
                                            padding: '8px',
                                            paddingLeft: 0
                                        },
                                    }
                                }}
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                            />
                        </div>
                        <div className="flex items-center text-xs gap-2">
                            <div className="flex items-center justify-between w-full">
                                <div className="w-full cursor-pointer" onClick={() => setKeepLogin(!keepLogin)}>
                                    <Checkbox defaultChecked color="success" checked={keepLogin} />
                                    <span className="w-full">Keep me Logged in</span>
                                </div>
                                <Link sx={{ width: "100%", textAlign: 'right', cursor: 'pointer' }} href="/login/forget"><span className="text-right">Forgot Password</span></Link>
                            </div>
                        </div>
                        <Button sx={{
                            borderRadius: "16px",
                            border: '0.821px solid rgba(255, 255, 255, 0.12)',
                            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%), #75A428",
                            color: 'white',
                            '&:hover': {
                                color: 'white'
                            },
                            width: "100%"
                        }}>Login</Button>
                    </div>
                </div>
                {/* Bottom Texts */}
                <div className="p-4 hidden items-center justify-between sm:flex">
                    <div></div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-600">LawnPro User License Agreement</span>
                        <span className="text-soft-400 text-xs">v8.3</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login;