// app/layout.tsx
'use client';

import '@/styles/globals.scss';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import {LayoutProps} from "@/types/layout";

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                <div
                    id="wrap"
                >
                     <Header />
                    <div id="container">
                        <div className="inner">{children}</div>
                    </div>
                    <Footer/>
                </div>
            </body>
        </html>
    );
}
