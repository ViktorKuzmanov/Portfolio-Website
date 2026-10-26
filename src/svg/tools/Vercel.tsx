import React from "react";

export default function Vercel({ className }: { className?: string }) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            className={className}
        >
            <path
                fill="#FFFFFF"
                d="m12 1.608 12 20.784H0Z"
            />
        </svg>
    );
}
