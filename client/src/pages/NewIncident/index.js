import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function NewIncident() {
    const navigate = useNavigate();
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId')

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    authorization: ongId,
                }
            })

            navigate('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.');
        };
    };


    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <h1 className="logo">
                        Be The Hero
                    </h1>
                    <h1>
                        Cadastrar novo Caso
                    </h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói.</p>

                    <Link className="back-link"to="../../profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                    placeholder="Título do Caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}                    
                    />

                    <textarea
                    placeholder="Descrição" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}                    
                    />

                    <input
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}                    
                    />

                    <button className="button" type="Submit">Cadastrar</button>
                </form>
            </div>
        </div>        
    )
}