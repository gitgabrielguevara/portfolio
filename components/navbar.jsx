// built in link fro SSR optimization
import Link from 'next/link'

export default function Navbar(){
    return (
        <nav>
            <Link href='/'>
                Home
            </Link>
            
            <Link href='/about'>
                About me
            </Link>
        </nav>
    )
}