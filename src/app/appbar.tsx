"use client";
import Link from "next/link";
import { House, Recycle, User } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="fixed md:relative bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4 z-10">
            <nav className="flex justify-around items-center relative gap-16">
                <Link
                    href="/"
                    className={`mx-4 ${
                        pathname === "/" ? "text-blue-500" : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                    <House size={28} />
                </Link>
                <Link
                    href="/upload"
                    className={`absolute -top-8 bg-green-500 p-4 rounded-full ${
                        pathname === "/upload" ? "text-white" : "text-white"
                    }`}
                >
                    <Recycle size={28}/>
                </Link>
                <Link
                    href="/profile"
                    className={`mx-4 ${
                        pathname === "/profile" ? "text-blue-500" : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                    <User size={28} />
                </Link>
            </nav>
        </footer>
    );
}
