import { cn } from "@/lib/utils";

export const TiktokIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={cn("fill-current", className)}
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.97-6.46-2.98-1.6-1.98-2.16-4.7-1.46-7.13.43-1.42 1.25-2.64 2.3-3.66.97-.93 2.13-1.56 3.4-1.84.04 2.91-.01 5.83.01 8.75.02 1.05-.2 2.11-.69 3.07-.95 1.87-2.95 2.96-5.02 2.61-1.82-.31-3.34-1.6-4.04-3.28-.69-1.64-.73-3.48-.12-5.11.58-1.53 1.55-2.82 2.85-3.82.53-.4 1.1-.73 1.69-1.01.03-2.91.01-5.82.02-8.74.08-1.55.58-3.07 1.6-4.18 1.09-1.17 2.66-1.73 4.23-1.82z"></path>
    </svg>
);