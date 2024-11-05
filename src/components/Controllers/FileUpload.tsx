import React, { useState } from "react";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import ReactDOMServer from "react-dom/server";
import { FilePondInitialFile } from "filepond";
import { IconUploadCloud } from "../../utils/SvgUtil";
import { Button } from "@mui/material";

// Import any additional plugins here, if needed
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// registerPlugin(FilePondPluginImagePreview);

const FileUpload: React.FC = () => {
    const [files, setFiles] = useState<FilePondInitialFile[]>([]);

    const handleUpdate = (fileItems: any) => {
        // Map the fileItems to initial file data format
        setFiles(fileItems.map((fileItem: any) => fileItem.file));
    };

    // Create a custom React element for the label
    const labelIdleContent = (
        <div className="flex flex-col items-center gap-5">
            <IconUploadCloud size={24} />
            <div className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Choose a file or drag & drop it here</span>
                <span className="text-xs text-gray-600">JPEG, PNG, PDF, and MP4 formats, up to 5 MB.</span>
            </div>
            <div className="bg-white text-sm font-medium text-gray-600 px-2 py-1 border rounded-lg">
                Browse File
            </div>
        </div>
    );

    return (
        <FilePond
            files={files}
            onupdatefiles={handleUpdate}
            allowMultiple={true}
            maxFiles={3}
            server="/api"
            name="files"
            labelIdle={ReactDOMServer.renderToStaticMarkup(labelIdleContent)} // Convert React element to string
            className="bg-white border rounded-xl border-dashed border-stroke-300 p-8 !contain-none !h-full flex flex-col"
            credits={false}
        />
    );
};

export default FileUpload;
