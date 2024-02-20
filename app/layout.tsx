import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import slidesData from "@/data/slidesData.json";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Slideshow | Joeri",
    description: "A simple slideshow app that configurable by json",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{
            height: "100%"
        }}>
        <Head>
            <link rel="icon" href="/app/favicon.ico"/>
        </Head>
        <body className={inter.className} style={{
            height: "100%"
        }}>{children}</body>
        </html>
    );
}
