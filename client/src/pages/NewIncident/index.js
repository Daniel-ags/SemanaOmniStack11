import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

export default function NewIncident() {
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
                <form>
                    <input placeholder="Título do Caso" />
                    
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="Submit">Cadastrar</button>
                </form>
            </div>
        </div>        
    )
}