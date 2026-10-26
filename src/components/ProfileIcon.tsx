import React from "react";
import Image from "next/image";

// TODO tuka li se menja fav icon ? kaa da ne e tuka
export default function ProfileIcon({ className }: { className?: string }) {
    return (
        <Image src="android-chrome-192x192.png" width={32} height={32} alt="Profile" className={`rounded-full ${className}`} />
    );
}
