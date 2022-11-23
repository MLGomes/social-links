import './erro.css'
import { Link } from 'react-router-dom'
import { Logo } from '../../COMPONENTS/LOGO'

export default function Error(){
    return(
        <div className='error'>
            <Logo/>
            <h1>Página não encontrada!</h1>
            <p>Esta página que você esta procurando não existe</p>

            <Link className='link' to="/">
                Voltar para a Home
            </Link>
        </div>
    )
}