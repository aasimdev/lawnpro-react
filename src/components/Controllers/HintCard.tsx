import React, { useState } from "react";
import { IconClose, IconIdea } from "../../utils/SvgUtil";
import { Link } from "@mui/material";

interface HintCardProps {
    description?: string;
    linkText?: string;
    linkAction?: () => void;
}

const HintCard: React.FC<HintCardProps> = ({ description = "", linkText = "", linkAction }) => {
    const [visible, setVisible] = useState<Boolean>(true);
    return (
        <>
            {visible &&
                <div className="p-3.5 border rounded-xl flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-3">
                        <div className="bg-information-light p-1.5 rounded-full">
                            <IconIdea size={18} color="#335CFF" />
                        </div>
                        <span className="text-sm font-normal text-gray-600">{description}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-full cursor-pointer"><Link><span className="text-primary-base underline">{linkText}</span></Link></div>
                        <div className="cursor-pointer" onClick={() => setVisible(false)}>
                            <IconClose size={20} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default HintCard