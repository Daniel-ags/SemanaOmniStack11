import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Logon() {
    const [id, setId] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            navigate('/profile')
        } catch (err) {
            alert('Falha no Login. Tente novamente.')
        }
    };

    return (
        <div className="logon-container">
            <section className="form">    
                <form onSubmit={handleLogin}>
                    
                    <h1 className="logo">Be The Hero</h1>
                    
                    <h1>Faça Seu Logon</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="./register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>
        </div>
    );
}
