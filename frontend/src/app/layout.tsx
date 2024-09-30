// app/layout.tsx
import '@/styles/globals.scss';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import {LayoutProps} from "@/types/layout";

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
        <body>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
