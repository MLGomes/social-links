import './networks.css'

import { useState, useEffect } from 'react'

import { Logout } from '../COMPONENTS/LOGOUT'

import { Input } from '../COMPONENTS/INPUT'

import { MdAddLink } from 'react-icons/md'

import { db } from '../../Services/firebaseConnection'
import { setDoc, doc, getDoc } from 'firebase/firestore'

import { toast } from 'react-toastify'

export default function Networks(){

    const [facebook, setFacebook] = useState("")
    const [youtube, setYoutube] = useState("")
    const [instagram, setInstagram] = useState("")


    useEffect(() => {

        function loadLinks(){
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
            .then( (snapshot) => {

                if(snapshot.data() !== undefined){
                    setFacebook(snapshot.data().facebook)
                    setYoutube(snapshot.data().youtube)
                    setInstagram(snapshot.data().instagram)
                }
            })
        }
        loadLinks()
    }, [])


    async function handleSave(event){
        event.preventDefault();

        setDoc(doc(db, "social", "link"), {
            facebook : facebook,
            youtube : youtube,
            instagram : instagram
        })
        .then(() => {
            toast.success("Salvo com Sucesso!")
        })
        .catch((error202056) => {
            toast.error("Erro ao Salvar! - " + error202056)
        })
    }


    return(
        <div className='admin-container'>
            <Logout/>
            <h1 className='title-social'>Suas Redes Sociais</h1>

            <form className='form' onSubmit={handleSave} >
                <label className='label'>Link Facebook</label>
                <Input placeholder = "Digite a URL do Facebook..." value = {facebook} onChange = { (event) => setFacebook(event.target.value)} />

                <label className='label'>Link Youtube</label>
                <Input placeholder = "Digite a URL do Youtube..." value = {youtube} onChange = { (event) => setYoutube(event.target.value)} />

                <label className='label'>Link Instagram</label>
                <Input placeholder = "Digite a URL do Instagram..." value = {instagram} onChange = { (event) => setInstagram(event.target.value)} />

                <button type='submit' className='btn-register'>Salvar links <MdAddLink size={27} color = "#FFF" /></button>
            </form>
        </div>
    )
}