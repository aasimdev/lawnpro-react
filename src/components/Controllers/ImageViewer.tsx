// ImageViewer.tsx

import React, { useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

interface ImageViewerProps {
    imageSrc: string;
    altText?: string;
    className?: string; // Allow passing custom styles from TailwindCSS
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageSrc, altText = "", className = "" }) => {
    useEffect(() => {
        // Initialize Fancybox globally to set up the effect
        NativeFancybox.bind("[data-fancybox='gallery']", {
            animated: true
        });

        // Clean up on unmount
        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    return (
        <a href={imageSrc} data-fancybox="gallery">
            <img src={imageSrc} alt={altText} className={`cursor-pointer ${className}`} />
        </a>
    );
};

export default ImageViewer;
