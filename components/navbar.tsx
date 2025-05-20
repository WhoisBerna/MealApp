"use client"

import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";

export default function NavBar() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) return <p>Loading... </p>

    return (
        <nav>
            <div>
                <Link href={"/"}>
                    <Image src="/logo.png" width={80} height={80} alt="Logo" />
                </Link>
            </div>
            <div>
                <SignedIn>
                    <Link href={"/mealplan"}> MealPlan! </Link>
                    {user?.imageUrl ?
                     (<Link href="/profile"> <Image src={user.imageUrl} height={60} width={60} alt="Profile Logo" />
                    </Link>) 
                    : <div> Image Not Found </div>}
                </SignedIn>
                <SignedOut>
                    <Link href={"/sign-up"}> Sign Up! </Link>
                </SignedOut>
            </div>
        </nav>
    )
}