import catbot from '../public/catbot.png';
import Image from 'next/image';
import Link from 'next/link';
import Login from './login';

export default function Navbar() {
    return (
        <nav className="navbar" style={{padding: "0 5px 0 0"}}>
            <Image src={catbot} alt="CatBot" width={75} height={100} style={{padding: "0 5px 0 0"}}/>
            <Link href="/" style={{padding: "0 5px 0 0"}}>Home</Link>
            <Link href="/about" style={{padding: "0 5px 0 0"}}>About</Link>
            <Login />
        </nav>
    );
}