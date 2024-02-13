import { Link } from 'react-router-dom';
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">    
                <form>
                    
                    <h1 className="logo">Be The Hero</h1>
                    
                    <h1>Faça Seu Logon</h1>
                    <input placeholder="Sua ID" />
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
