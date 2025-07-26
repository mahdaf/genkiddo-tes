'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image'
const Navbar = () => {
    const [show, setShow] = useState(true);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Deteksi scroll ke bawah
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShow(false); // Langsung sembunyikan
            }

            // Clear timeout jika ada scroll terus-menerus
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Delay 1 detik setelah user berhenti scroll
            scrollTimeout.current = setTimeout(() => {
                setShow(true);
            }, 400);

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                'fixed top-0 w-full z-50 transition-transform duration-500 bg-white shadow',
                show ? 'translate-y-0' : '-translate-y-full'
            )}
        >
            <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                <div>
                    <Image
                        height={1000}
                        width={1000}
                        src="/navbar-genkiddo.png"
                        alt='Navbar'
                        className='w-28'
                    />
                </div>
                <div className="flex gap-8 items-center ml-auto mr-8">
                    {[
                        { label: 'Home', href: '/' },
                        { label: 'Kursus', href: '/coming-soon' },
                        { label: 'Program Sekolah', href: '/coming-soon' },
                        { label: 'Tentang', href: '/coming-soon' }
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="relative font-medium text-gray-800 hover:text-orange-600 transition"
                        >
                            <span className="group">
                                {item.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#EF7F1F] transition-all group-hover:w-full"></span>
                            </span>
                        </Link>
                    ))}
                </div>
                <div className="flex gap-4">
                    <Link
                        href="/login"
                        className="px-8 py-2 border border-[#EF7F1F] text-[#EF7F1F] rounded-full hover:bg-orange-50 transition"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/register"
                        className="px-6 py-2 bg-[#EF7F1F] text-white rounded-full hover:bg-orange-600 transition"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
