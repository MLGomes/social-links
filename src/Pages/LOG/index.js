import { useState } from 'react'
import './login.css'
import { Logo } from '../COMPONENTS/LOGO'

import { auth } from '../../Services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

import { Input } from '../COMPONENTS/INPUT'

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin(event){
        event.preventDefault();
        
        if(email === '' || password === ''){
            alert("Preencha seu Login!")
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("Acesso Liberado!")
            navigate("/admin", ({replace : true}))
        })
        .catch(() => {
            toast.error("Erro ao fazer Login!")
        })
    };

    return(
        <div className='login-container'>

            <Logo/>

            <form className='form' onSubmit={handleLogin}>
                <Input type="email" placeholder="Digite seu Email aqui" 
                       value = {email} onChange = {(event) => setEmail(event.target.value)}
                />

                <Input type="password" placeholder="********" autoComplete="on"
                       value = {password} onChange = {(event) => setPassword(event.target.value)}
                />

                <button type="submit">Acessar!</button>

            </form>

        </div>
    )
}