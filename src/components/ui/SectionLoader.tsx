import { Loader2 } from "lucide-react";

export function SectionLoader() {
    return (
        <div className="flex items-center justify-center w-full py-24 min-h-[400px]">
            <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
        </div>
    );
}
