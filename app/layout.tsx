import type { Metadata } from 'next';
import { profile } from '@/data/portfolio';
import Portfolio from '@/components/portfolio';
import './globals.css';
export const metadata: Metadata = { title: `${profile.name} — Selected Works`, description: 'A portfolio of visual design, space and creative communication.', icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><Portfolio/>{children}</body></html>; }
