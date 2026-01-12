import { cn } from "../../lib/utils";
import React from "react";
import { FxImage } from "../fx";

interface TechCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    showMarkers?: boolean;
}

// Simplified TechCard relying on global CSS (index.css)
export function TechCard({ children, className, showMarkers = true, ...props }: TechCardProps) {
    return (
        <div
            className={cn(
                "product-card", // Applies all the CSS logic (padding, outline, markers)
                className
            )}
            {...props}
        >
            {children}
            {/* Markers are now handled by CSS ::after */}
        </div>
    );
}

interface TechCardImageProps {
    src: string;
    alt: string;
    className?: string;
    useFx?: boolean; // Enable FX effects
    layout?: 'contained' | 'full';
}

import { useFxConfig } from "../fx/FxContext";
import { useState } from "react";

// Image Wrapper with optional FX effects
export const TechCardImage = ({ src, alt, className, useFx = true, layout = 'contained' }: TechCardImageProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const globalConfig = useFxConfig();

    // Determine target shape: Flip global shape on hover
    const globalShape = globalConfig.beads.shape; // 'circle' | 'square'
    const hoverShape = globalShape === 'square' ? 'circle' : 'square';
    const currentShape = isHovered ? hoverShape : globalShape;

    // Determine interaction config
    const hoverConfig = globalConfig.hover;

    // Construct config overrides
    const configOverrides: Partial<any> = {
        // Disable sphere interaction on cards
        interaction: {
            enabled: false,
            auto: {
                enabled: false,
                type: 'wave',
                speed: 0,
                strength: 0,
                scale: 0
            }
        },
        // Swap shape on hover
        beads: {
            shape: currentShape
        }
    };

    // Apply Hover Duotone Override if enabled
    if (isHovered && hoverConfig.duotoneEnabled) {
        configOverrides.duotone = {
            enabled: true,
            colorA: hoverConfig.colorA || '#ff0000',
            colorB: hoverConfig.colorB || '#ffff00',
            strength: hoverConfig.strength ?? globalConfig.duotone.strength
        };
    }

    return (
        <div
            className={cn("card-image-wrapper", layout === 'full' && "full", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {useFx ? (
                <FxImage
                    src={src}
                    alt={alt}
                    className="card-image"
                    imgStyle={layout === 'full' ? { objectFit: 'cover', width: '100%', height: '100%' } : undefined}
                    config={configOverrides}
                    alt={alt}
                    className="card-image"
                    imgStyle={layout === 'full' ? { objectFit: 'cover', width: '100%', height: '100%' } : undefined}
                    config={configOverrides}
                />
            ) : (
                <img
                    src={src}
                    alt={alt}
                    className="card-image"
                />
            )}
        </div>
    );
};

