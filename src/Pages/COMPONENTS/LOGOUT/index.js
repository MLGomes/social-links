import './logout.css'

import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { auth } from '../../../Services/firebaseConnection'
import { signOut } from 'firebase/auth'

export function Logout(){
    async function handleLogout(){
        await signOut(auth)
    }
    return(
        <header className='admin-header'>
            <nav className='nav-header'>
                <button onClick={handleLogout}>
                    <BiLogOut size={32} color="#DB2629"/>
                </button>
                <Link to = "/admin">
                Links
                </Link>
                <Link to = "/admin/social">
                Redes
                </Link>
            </nav>
        </header>
    )
}