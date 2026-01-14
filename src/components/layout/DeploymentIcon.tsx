import { FxImage } from "@/components/fx";
import { cn } from "@/lib/utils";
import { useFxConfig } from "@/components/fx/FxContext";
import { useTechCardContext } from "@/components/ui/TechCard";
// import styles from "@/components/ui/TechCard.module.css";

interface DeploymentIconProps {
    src: string;
    alt: string;
    className?: string;
}

export function DeploymentIcon({ src, alt, className }: DeploymentIconProps) {
    // Use shared context from parent TechCard
    const { isHovered } = useTechCardContext();
    const globalConfig = useFxConfig();

    // Replicate TechCardImage logic exactly
    // Determine target shape: Flip global shape on hover
    const globalShape = globalConfig.beads.shape; // 'circle' | 'square'
    const hoverShape = globalShape === 'square' ? 'circle' : 'square';
    const currentShape = isHovered ? hoverShape : globalShape;

    // Determine interaction config
    const hoverConfig = globalConfig.hover;

    // Construct config overrides
    const configOverrides: Record<string, unknown> = {
        // Disable sphere interaction on cards (as requested)
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
        },
        // Explicitly disable other effects
        glitch: { enabled: false },
        fluid: { enabled: false },
    };

    // Apply Hover Duotone Override if enabled (using global config)
    if (isHovered && hoverConfig.duotoneEnabled) {
        configOverrides.duotone = {
            enabled: true,
            colorA: hoverConfig.colorA || '#3B82F6', // Fallback to blue if not set
            colorB: hoverConfig.colorB || '#000000',
            strength: hoverConfig.strength ?? globalConfig.duotone.strength
        };
    }

    return (
        <div
            className={cn(
                // Use the exact wrapper class for the "stripes" if desired, 
                // but user asked for "square full height". 
                // TechCard.module.css imageWrapper has stripes and padding.
                // User said "un carré et dedans on met une image".
                // And "pas de padding".
                // But "récupérer l'effet au survol des images qui sont dans les cartes".
                // The effect is the FxImage config. 
                // The CONTAINER style might be separate. 
                // I'll keep the container clean as requested ("full height, no padding") 
                // but apply the image wrapper class logic if it adds the stripes.
                // Wait, the stripes are in .imageWrapper background-image.
                // If I use styles.imageWrapper, I get stripes.
                // User: "au survol ça doit se transformer en carré... on doit pas avoir l'effet de souris...".
                // The "carré" reference might be the beads toggling from circle to square.
                // I will stick to the FxImage config replication above.
                "relative overflow-hidden bg-black h-full w-full",
                className
            )}
        >
            <FxImage
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                config={configOverrides}
                style={{ display: 'block', verticalAlign: 'bottom' }} // Fix bottom gap from line-height
                imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure inner image fills container
            />
        </div>
    );
}
