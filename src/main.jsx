import {} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import Inserir from './routes/Inserir.jsx';
import Editar from './routes/Editar.jsx';
import Excluir from './routes/Excluir.jsx';
import Conteudo from './routes/Conteudo.jsx';
import Login from './routes/Login.jsx';
import Pedido from './routes/Pedido.jsx';
import Pedidos from './components/Pedidos.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login/> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/conteudo', element: <Conteudo /> },
      { path: '/cadastrar/produto', element: <Inserir /> },
      { path: '/editar/produtos/:id', element: <Editar /> },
      { path: '/excluir/produtos/:id', element: <Excluir /> },
      { path: '/Pedido', element: <Pedido /> },
      { path: '/Pedidos', element: <Pedidos /> },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
