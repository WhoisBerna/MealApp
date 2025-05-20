import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <div>
                <Link href={"/"}>
                    <Image src="/logo.png" width={80} height={80} alt="Logo"/> 
                </Link>
            </div>
        </nav>
    )
}