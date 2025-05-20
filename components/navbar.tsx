"use client"

import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, useUser, SignOutButton } from "@clerk/nextjs";

export default function NavBar() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) return <p>Loading... </p>

    return (
        <nav className="absolut top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href={"/"}>
                    <Image
                        className="text-xl font-bold text-emerald-700 cursor-pointer"
                        src="/logo.png"
                        width={80}
                        height={80}
                        alt="Logo" />
                </Link>
                <div className="space-x-6 flex items-center text-red-900 p-6 font-serif text-2xl font-bold mb-4">
                    <SignedIn>
                        <Link
                            className="text-black-700 hover:text-red-500 transition-colors"
                            href={"/products"}>
                            Products
                        </Link>
                        <Link
                            className="text-black-700 hover:text-red-500 transition-colors"
                            href={"/discover"}>
                            Discover
                        </Link>
                        {user?.imageUrl ? (
                            <Link href="/profile">
                                <Image
                                    className="rounded-full"
                                    src={user.imageUrl}
                                    height={60}
                                    width={60}
                                    alt="Profile Logo" />
                            </Link>)
                            : (
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                            )}
                        <SignOutButton>
                            <button className="al-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                                Sign Out
                            </button>
                        </SignOutButton>
                    </SignedIn>
                    <SignedOut>
                        <Link 
                        className="text-black-800 hover:text-red-600 transition-colors"
                        href={"/"}>
                            Home
                        </Link>
                        <Link 
                        className="text-black-800 hover:text-red-600 transition-colors"
                        href={isSignedIn ? "/subscribe" : "/sign-up"}>
                            Subscribe
                        </Link>
                        <Link 
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        href={"/sign-up"}>
                            Sign Up!
                        </Link>
                    </SignedOut>
                </div>
            </div>
        </nav>
    )
}