import { cn } from "@/lib/utils";

interface TechIllustrationProps {
    src: string;
    alt: string;
    className?: string;
    aspectRatio?: string; // e.g. "aspect-video"
    overlayGradient?: string; // custom gradient class if needed, defaults to standard
    imageClassName?: string; // override image classes (e.g. for opacity)
    config?: Record<string, unknown>;
    loading?: "lazy" | "eager";
}

export function TechIllustration({
    src,
    alt,
    className,
    aspectRatio = "aspect-video",
    overlayGradient,
    loading = "lazy"
}: TechIllustrationProps) {
    return (
        <div className={cn("relative overflow-hidden group w-full h-full", aspectRatio, className)}>
            {/* Image Layer - Scale & Brightness on Hover */}
            <img
                src={src}
                alt={alt}
                loading={loading}
                decoding="async"
                sizes="(max-width: 768px) 100vw, 550px"
                className={cn(
                    "w-full h-full object-cover transition-[transform,opacity] duration-700 ease-out",
                    "opacity-50 group-hover:opacity-70",
                    "scale-100 group-hover:scale-105"
                )}
            />

            {/* Overlay Layer - Unified Gradient */}
            <div className={cn(
                "absolute inset-0 pointer-events-none transition-opacity duration-700",
                overlayGradient || "bg-gradient-to-t from-black via-transparent to-transparent"
            )} />

            {/* Optional: Add a subtle flash or shine effect on hover if requested later */}
        </div>
    );
}
