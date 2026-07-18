import Link from "next/link";
import Image from "next/image";


function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 mt-0 w-full flex justify-center gap-4">
            <Image src="vercel.svg" alt="Logo" className="h-8 w-8 mr-2 fill-red-500 hover:fill-yellow-300" width={200}
                height={100} />
            <ul className="flex space-x-4 ">
                <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
                <li><Link href="/products" className="text-white hover:text-gray-300">Products</Link></li>
                <li><Link href="/categories" className="text-white hover:text-gray-300">Categories</Link></li>
                <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
                <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
            </ul>
        </nav>
    );

}

export default Navbar;