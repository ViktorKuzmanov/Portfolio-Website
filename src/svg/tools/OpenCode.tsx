import React from "react";

export default function OpenCode({ className }: { className?: string }) {
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
                d="M22 24H2V0h20zM17 4.8H7v14.4h10z"
            />
        </svg>
    );
}
