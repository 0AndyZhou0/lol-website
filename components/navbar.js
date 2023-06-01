import catbot from '../assets/catbot.png';
import Image from 'next/image';
import Link from 'next/link';
import Login from './login';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Image src={catbot} alt="CatBot" width={75} height={100} />
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Login />
        </div>
        </nav>
    );
}