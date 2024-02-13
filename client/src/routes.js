import React from 'react';

// Importações das ferramentas pra criar o roteador do app

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importações das "Rotas" do App

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

// Função que cria e exporta o roteador

export default function Router() {
    const router = createBrowserRouter([
    {
      path: '/',
      element: <Logon />
    },
    {
    path: '/register',
    element: <Register />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '/incidents/new',
      element: <NewIncident />
    },
  ]);
    
  return(
    <RouterProvider router={router} />
  );
}
  