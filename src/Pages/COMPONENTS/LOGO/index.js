import './logo.css'
import { Link } from 'react-router-dom'

export function Logo(){
    return(
        <Link to = "/">
            <h1 className='logo'>Tech<span className='logo-text'>Gomes</span></h1>
        </Link>
    )
}