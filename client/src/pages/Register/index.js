import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

export default function Register() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [UF, setUF] = useState('');

    function handleRegister(e) {
        e.preventDefault();

        const data ={
            name,
            email,
            whatsapp,
            city,
            UF
        };
    }
    
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1 className="logo">
                        Be The Hero
                    </h1>
                    <h1>
                        Cadastro
                    </h1>
                    <p>Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem seus casos da sua ONG.</p>

                    <Link className="back-link"to="../">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>

                    <input
                    placeholder="Nome da Ong"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />
                    
                    <div className="input-group">

                        <input placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />

                        <input placeholder="UF"
                        style={{ width: 80 }}
                        value={UF}
                        onChange={e => setUF(e.target.value)}
                        />

                    </div>
                    <button className="button" type="Submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
