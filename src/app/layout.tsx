import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import * as Config from "@/Config";
 
import "./styles/main.css";

const font = Montserrat({ subsets: [ "latin" ] });
// TODO tuka smeni fav icon da e okrugla?
export const metadata: Metadata = {
    title: Config.userInfo.shortName + "'s Portfolio",
    description: "Built by " + Config.userInfo.nickName,
    robots: "index, follow",
    icons: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "64x64",
            url: "/favicon.ico",
        },
    ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${font.className} overflow-hidden`}>
                <div id="main-content" className="block max-h-screen overflow-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}
