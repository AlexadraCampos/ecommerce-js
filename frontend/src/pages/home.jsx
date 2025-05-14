import React, { useEffect, useState } from 'react';
import api from '../services/api';


const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('produtos/')
      .then(response => setProdutos(response.data))
      .catch(error => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <div>
      <h1>Destaques e Lançamentos</h1>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <strong>{produto.nome}</strong><br />
            {produto.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

